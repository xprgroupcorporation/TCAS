<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/d6e774f9-bce5-4f37-8ab2-a40bc2055d3a

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Data accuracy workflow

Program data lives in two layers: `scripts/buildTCASData.js` (raw source of
truth) generates `src/data/tcasDatabase.ts`. When correcting an entry, edit
**both** so the next regen stays correct. Raw projects support `tcasCode`,
`appUrl`, `sourceName`, `sourceUrl`, `checked`, and `subs` (sub-projects with
per-project seats) for officially verified entries.

- `npm run data:validate` audits **all** 122 projects: reference integrity,
  seat math (`quotaSeats` must equal the sub-project sum), code format, date
  order, stale stamps. Fix every ERROR before shipping.
- `npm run data:check` re-fetches server-rendered official pages (CMU
  admission reg) and compares seats / GPAX / fee / formula against
  `src/data/officialSnapshots.json`. Exit 2 means the university changed
  something: correct the DB + raw entry, extend the snapshot, re-run.
  (`course.mytcas.com` program pages are JS-rendered, so myTCAS cross-checks
  stay manual for now.)
- `npm run data:match` downloads the full official course index
  (4150 programs) and Ctrl+F-matches EVERY db program by real myTCAS code,
  then diffs faculty/branch names and seat sanity. Unmatched mock codes get
  top-3 official candidates with real codes in `official-match-report.json`
  for human review before swapping.
