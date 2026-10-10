// scripts/validate-data.ts
// Audits EVERY entry in src/data/tcasDatabase.ts: reference integrity,
// seat math (quota == sum of sub-projects), required fields, date order,
// code format. Run: npx tsx scripts/validate-data.ts
import {
  UNIVERSITIES,
  FACULTIES,
  PROGRAMS,
  BRANCHES,
  ADMISSION_PROJECTS,
} from '../src/data/tcasDatabase.ts';

type Level = 'ERROR' | 'WARN';
interface Issue {
  level: Level;
  where: string;
  message: string;
}
const issues: Issue[] = [];
const err = (where: string, message: string) => issues.push({ level: 'ERROR', where, message });
const warn = (where: string, message: string) => issues.push({ level: 'WARN', where, message });

const ROUNDS = new Set(['TCAS1_PORTFOLIO', 'TCAS2_QUOTA', 'TCAS3_ADMISSION', 'TCAS4_DIRECT']);
const isIsoDate = (s: unknown) =>
  typeof s === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(Date.parse(s));

// ---- 1. duplicate ids ----
const seenProj = new Set<string>();
for (const p of ADMISSION_PROJECTS) {
  if (seenProj.has(p.id)) err(p.id, `duplicate project id`);
  seenProj.add(p.id);
}
const seenBranch = new Set<string>();
for (const b of BRANCHES) {
  if (seenBranch.has(b.id)) err(b.id, `duplicate branch id`);
  seenBranch.add(b.id);
}

// ---- 2. per-project checks ----
const uniIds = new Set(UNIVERSITIES.map((u) => u.id));
const facById = new Map(FACULTIES.map((f) => [f.id, f]));
const progById = new Map(PROGRAMS.map((p) => [p.id, p]));
const branchById = new Map(BRANCHES.map((b) => [b.id, b]));

for (const p of ADMISSION_PROJECTS) {
  const tag = `project ${p.id}`;

  // reference integrity
  if (!branchById.has(p.branchId)) err(tag, `branchId '${p.branchId}' does not exist`);
  if (!progById.has(p.programId)) err(tag, `programId '${p.programId}' does not exist`);
  if (!facById.has(p.facultyId)) err(tag, `facultyId '${p.facultyId}' does not exist`);
  if (!uniIds.has(p.universityId)) err(tag, `universityId '${p.universityId}' does not exist`);

  // cross-table consistency (warn: data entry drift)
  const br = branchById.get(p.branchId);
  if (br && br.programId !== p.programId)
    warn(tag, `branch '${br.id}' belongs to program '${br.programId}' but project points to '${p.programId}'`);
  const pr = progById.get(p.programId);
  if (pr && pr.facultyId !== p.facultyId)
    warn(tag, `program '${pr.id}' belongs to faculty '${pr.facultyId}' but project points to '${p.facultyId}'`);
  const fc = facById.get(p.facultyId);
  if (fc && fc.universityId !== p.universityId)
    warn(tag, `faculty '${fc.id}' belongs to university '${fc.universityId}' but project points to '${p.universityId}'`);

  // required fields
  if (!p.projectNameTh?.trim()) err(tag, 'missing projectNameTh');
  if (!ROUNDS.has(p.round)) err(tag, `invalid round '${p.round}'`);
  if (!Number.isInteger(p.quotaSeats) || p.quotaSeats <= 0)
    err(tag, `quotaSeats must be a positive integer (got ${p.quotaSeats})`);
  if (!p.tcasProgramCode) warn(tag, 'missing tcasProgramCode');
  else if (!/^\d{14}[A-Z]$/.test(p.tcasProgramCode))
    warn(tag, `tcasProgramCode '${p.tcasProgramCode}' does not look like a real myTCAS code (14 digits + letter)`);
  if (!p.applicationUrl?.startsWith('http')) warn(tag, 'applicationUrl is not an http(s) link');
  if (p.gpaxMin !== undefined) {
    const g = Number(p.gpaxMin);
    if (Number.isNaN(g) || g < 0 || g > 4) warn(tag, `gpaxMin '${p.gpaxMin}' is not a 0-4 number`);
  }
  if (p.requirements.length === 0) warn(tag, 'no requirements');
  if (p.documents.length === 0) warn(tag, 'no documents');
  if (p.events.length === 0) warn(tag, 'no events');

  // seat math: quota must equal sum of sub-projects when they exist
  if (p.subProjects?.length) {
    const seenSub = new Set<string>();
    let sum = 0;
    for (const s of p.subProjects) {
      if (!s.id?.trim()) err(tag, 'sub-project with empty id');
      if (seenSub.has(s.id)) err(tag, `duplicate sub-project id '${s.id}'`);
      seenSub.add(s.id);
      if (!s.nameTh?.trim()) err(tag, `sub-project '${s.id}' missing nameTh`);
      if (!Number.isInteger(s.quotaSeats) || s.quotaSeats <= 0)
        err(tag, `sub-project '${s.id}' has bad quotaSeats (${s.quotaSeats})`);
      else sum += s.quotaSeats;
    }
    if (sum !== p.quotaSeats)
      err(tag, `seat math: quotaSeats=${p.quotaSeats} but sub-projects sum to ${sum}`);
  }

  // date order: opens <= closes
  const opens = p.events.find((e) => e.type === 'APPLICATION_OPENS')?.startDate;
  const closes = p.events.find((e) => e.type === 'APPLICATION_CLOSES')?.startDate;
  if (opens && !isIsoDate(opens)) err(tag, `bad open date '${opens}'`);
  if (closes && !isIsoDate(closes)) err(tag, `bad close date '${closes}'`);
  if (opens && closes && isIsoDate(opens) && isIsoDate(closes) && opens > closes)
    err(tag, `opens (${opens}) is after closes (${closes})`);
  for (const e of p.events) {
    if (!isIsoDate(e.startDate)) err(tag, `event '${e.id}' has bad startDate '${e.startDate}'`);
    if (e.endDate && !isIsoDate(e.endDate)) err(tag, `event '${e.id}' has bad endDate '${e.endDate}'`);
  }

  // stale verification stamp (warn: anything not checked in 2026)
  const checked = p.source?.lastChecked ?? '';
  if (!/^\d{4}-\d{2}-\d{2}$/.test(checked) || checked < '2026-01-01')
    warn(tag, `source.lastChecked '${checked}' looks stale`);
}

// ---- 3. branches must resolve to a program ----
for (const b of BRANCHES) {
  if (!b.nameTh?.trim()) err(`branch ${b.id}`, 'missing nameTh');
  if (!progById.has(b.programId)) err(`branch ${b.id}`, `programId '${b.programId}' does not exist`);
}

// ---- report ----
const errors = issues.filter((i) => i.level === 'ERROR');
const warns = issues.filter((i) => i.level === 'WARN');
for (const i of issues) console.log(`[${i.level}] ${i.where}: ${i.message}`);
console.log(
  `\nchecked ${ADMISSION_PROJECTS.length} projects, ${BRANCHES.length} branches, ${PROGRAMS.length} programs, ${FACULTIES.length} faculties`
);
console.log(`${errors.length} error(s), ${warns.length} warning(s)`);

// ---- 4. official-watch coverage: how many projects have a live official source? ----
try {
  const { readFileSync } = await import('node:fs');
  const { join } = await import('node:path');
  const snaps = JSON.parse(readFileSync(join(process.cwd(), 'src', 'data', 'officialSnapshots.json'), 'utf8'));
  const watched = new Set((snaps as { projectId: string }[]).map((s) => s.projectId));
  const watchedKnown = [...watched].filter((id) => seenProj.has(id));
  console.log(
    `official watch coverage: ${watchedKnown.length}/${ADMISSION_PROJECTS.length} projects (${(snaps as unknown[]).length} watched sources)`
  );
} catch {
  console.log('official watch coverage: snapshots file unreadable, skipped');
}

process.exit(errors.length > 0 ? 1 : 0);
