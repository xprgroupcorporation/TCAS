// scripts/check-official.mjs
// Change DETECTION (not silent auto-edit): fetches server-rendered official
// pages (CMU admission reg PHP pages are plain HTML and fetchable; the
// course.mytcas.com SPA needs a browser, so myTCAS cross-checks stay manual)
// and compares quota / GPAX / fee against src/data/officialSnapshots.json.
// Exit 0 = all match, 2 = change detected, 1 = fetch/parse failure.
// Run: npm run data:check
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const SNAP = path.join(root, 'src', 'data', 'officialSnapshots.json');
const REPORT = path.join(root, 'data-check-report.json');

const snapshots = JSON.parse(fs.readFileSync(SNAP, 'utf8'));

async function fetchText(url) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 25000);
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      headers: { 'User-Agent': 'TCAS-Command-Center data-check (contact: repo owner)' },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.text();
  } finally {
    clearTimeout(timer);
  }
}

// Extractors per site. Return { seats, gpax, fee } with nulls for unknowns.
const extractors = {
  'cmu-reg'(html) {
    const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
    const seats = text.match(/แบบ 1\.1:\s*(\d+)/)?.[1] ?? null;
    const gpax = text.match(/ไม่น้อยกว่า\s*([\d.]+)/)?.[1] ?? null;
    const fee = text.match(/([\d,]+)\s*บาท/)?.[1] ?? null;
    return { seats: seats !== null ? Number(seats) : null, gpax, fee };
  },
};

const results = [];
for (const s of snapshots) {
  const row = { id: s.id, source: s.source, status: 'ok', diffs: [] };
  try {
    const html = await fetchText(s.source);
    const found = (extractors[s.site] ?? (() => ({})))(html);
    for (const key of ['seats', 'gpax', 'fee', 'formula']) {
      if (s[key] === undefined || s[key] === null) continue;
      if (found[key] === undefined || found[key] === null) {
        row.diffs.push(`${key}: could not parse from page (kept snapshot '${s[key]}')`);
        continue;
      }
      if (String(found[key]) !== String(s[key])) {
        row.diffs.push(`${key}: snapshot '${s[key]}' vs official '${found[key]}'`);
      }
    }
    if (row.diffs.length > 0) row.status = 'changed';
  } catch (e) {
    row.status = 'fetch-failed';
    row.diffs.push(String(e.message ?? e).slice(0, 200));
  }
  results.push(row);
  const icon = row.status === 'ok' ? 'OK ' : row.status === 'changed' ? 'CHANGED' : 'FETCH-FAIL';
  console.log(`${icon} ${s.id}`);
  for (const d of row.diffs) console.log(`      - ${d}`);
}

fs.writeFileSync(REPORT, JSON.stringify({ checkedAt: new Date().toISOString(), results }, null, 2));
const changed = results.filter((r) => r.status === 'changed').length;
const failed = results.filter((r) => r.status === 'fetch-failed').length;
console.log(`\n${results.length} source(s): ${changed} changed, ${failed} fetch-failed. Report: data-check-report.json`);
if (changed > 0) {
  console.log('Change detected: update src/data/tcasDatabase.ts (and scripts/buildTCASData.js raw entry), then re-run.');
  process.exit(2);
}
if (failed > 0) process.exit(1);
