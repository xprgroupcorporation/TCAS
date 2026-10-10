#!/usr/bin/env python3
"""Match every DB program against the official myTCAS course index.

Usage:
  1. curl.exe -sL --compressed "https://my-tcas.s3.ap-southeast-1.amazonaws.com/mytcas/courses.json" -o data/mytcas-courses.json.gz
  2. python3 scripts/match-official.py [path-to-gz]   (default: data/mytcas-courses.json.gz)

Reads src/data/tcasDatabase.ts (JSON-compatible sections) and reports, for
EVERY project with a tcasProgramCode, whether the code exists officially and
whether faculty/branch names still match. Report-only: exit 0, writes
official-match-report.json (git-ignored).
"""
import gzip
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DB = ROOT / "src" / "data" / "tcasDatabase.ts"
REPORT = ROOT / "official-match-report.json"


def load_section(text: str, name: str):
    m = re.search(r"export const " + name + r"[^=]*=\s*(\[.*?\n\]);", text, re.S)
    if not m:
        raise SystemExit(f"section {name} not found in tcasDatabase.ts")
    return json.loads(m.group(1))


def norm(s: str) -> str:
    return re.sub(r"\s+", " ", (s or "")).strip()


def canon(s: str) -> str:
    """Canonical form for Thai name compare: no spaces, no parentheticals."""
    s = norm(s)
    s = re.sub(r"\(.*?\)", "", s)
    return s.replace(" ", "")


def strip_branch_prefix(s: str) -> str:
    s = norm(s)
    return re.sub(r"^สาขาวิชา", "", s)


def suggest_codes(project, branches, programs, pool, top=3):
    """Ctrl+F the official index: rank same-university rows by name overlap."""
    import difflib

    br = branches.get(project.get("branchId", ""), {})
    pr = programs.get(project.get("programId", ""), {})
    needle = canon(strip_branch_prefix(br.get("nameTh", "")) + " " + pr.get("nameTh", ""))
    if not needle or not pool:
        return []
    scored = []
    for o in pool:
        hay = canon(
            (o.get("program_name_th", "") or "")
            + " " + (o.get("field_name_th", "") or "")
            + " " + (o.get("faculty_name_th", "") or "")
        )
        ratio = difflib.SequenceMatcher(None, needle, hay).ratio()
        scored.append((ratio, o))
    scored.sort(key=lambda x: -x[0])
    out = []
    for ratio, o in scored[:top]:
        out.append(
            {
                "score": round(ratio, 2),
                "code": o.get("program_id"),
                "faculty": o.get("faculty_name_th"),
                "field": o.get("field_name_th"),
                "program": o.get("program_name_th"),
                "seats": o.get("number_acceptance_mko2"),
            }
        )
    return out


def main() -> None:
    gz_path = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "data" / "mytcas-courses.json.gz"
    with gzip.open(gz_path, "rt", encoding="utf-8") as f:
        official = json.load(f)
    by_code = {}
    for p in official:
        by_code.setdefault(p.get("program_id"), []).append(p)

    src = DB.read_text(encoding="utf-8")
    universities = {u["id"]: u for u in load_section(src, "UNIVERSITIES")}
    faculties = {f["id"]: f for f in load_section(src, "FACULTIES")}
    programs = {p["id"]: p for p in load_section(src, "PROGRAMS")}
    branches = {b["id"]: b for b in load_section(src, "BRANCHES")}
    projects = load_section(src, "ADMISSION_PROJECTS")

    # map our university ids -> official university_ids via English names
    official_uni_ids = {}
    for o in official:
        official_uni_ids.setdefault(norm(o.get("university_name_en", "")).lower(), o.get("university_id"))
    our_uni_to_official = {}
    for uid, u in universities.items():
        name = norm(u.get("nameEn", "")).lower()
        if name in official_uni_ids:
            our_uni_to_official[uid] = official_uni_ids[name]
            continue
        # fallback: best token overlap on English names
        needles = set(re.findall(r"[a-z]+", name))
        best, best_n = None, 0
        for oname, oid in official_uni_ids.items():
            n = len(needles & set(re.findall(r"[a-z]+", oname)))
            if n > best_n:
                best, best_n = oid, n
        if best and best_n >= 2:
            our_uni_to_official[uid] = best
    by_uni = {}
    for o in official:
        by_uni.setdefault(o.get("university_id"), []).append(o)

    rows = []
    for p in projects:
        code = p.get("tcasProgramCode") or ""
        row = {"project": p["id"], "code": code, "status": "no-code", "notes": []}
        if not code:
            rows.append(row)
            continue
        matches = by_code.get(code, [])
        if not matches:
            row["status"] = "code-not-found"
            row["notes"].append("code missing from official index (mock or removed program?)")
            row["candidates"] = suggest_codes(p, branches, programs, by_uni.get(our_uni_to_official.get(p.get("universityId", "")), []))
            rows.append(row)
            continue
        o = matches[0]
        if len(matches) > 1:
            row["notes"].append(f"{len(matches)} official rows share this code (multi-round listing)")
        row["status"] = "match"
        row["official"] = {
            "university": o.get("university_name_en"),
            "faculty_th": o.get("faculty_name_th"),
            "field_th": o.get("field_name_th"),
            "program_th": o.get("program_name_th"),
            "total_seats_mko2": o.get("number_acceptance_mko2"),
            "updated_at": o.get("updated_at"),
        }
        fac = faculties.get(p["facultyId"], {})
        br = branches.get(p["branchId"], {})
        if canon(fac.get("nameTh", "")) != canon(o.get("faculty_name_th", "")):
            row["status"] = "name-drift"
            row["notes"].append(
                f"faculty drift: db '{fac.get('nameTh')}' vs official '{o.get('faculty_name_th')}'"
            )
        # branch-level compare: our branch core should appear in the official
        # program name (major) or field name
        core = canon(strip_branch_prefix(br.get("nameTh", "")))
        hay = canon(o.get("program_name_th", "")) + "|" + canon(o.get("field_name_th", ""))
        if core and core not in hay:
            if row["status"] == "match":
                row["status"] = "name-drift"
            row["notes"].append(
                f"branch drift: db '{br.get('nameTh')}' not found in official '{o.get('program_name_th')}' / '{o.get('field_name_th')}'"
            )
        # seat sanity: our single-round quota should not exceed official all-round total
        total = o.get("number_acceptance_mko2") or 0
        if total and p.get("quotaSeats", 0) > total:
            if row["status"] == "match":
                row["status"] = "seat-mismatch"
            row["notes"].append(
                f"seat mismatch: our round quota {p.get('quotaSeats')} > official total {total}"
            )
        rows.append(row)

    summary = {}
    for r in rows:
        summary[r["status"]] = summary.get(r["status"], 0) + 1
    print(f"official index: {len(official)} programs, {len(by_code)} unique codes")
    print(f"db projects: {len(projects)} -> {summary}")
    bad = [r for r in rows if r["status"] in ("code-not-found", "name-drift", "seat-mismatch")]
    for r in bad[:30]:
        print(f"[{r['status']}] {r['project']} ({r['code']}): {'; '.join(r['notes'])}")
        for c in (r.get("candidates") or [])[:2]:
            print(f"      -> {c['score']} {c['code']} | {c['faculty']} / {c['field']} / {(c['program'] or '')[:60]} (seats {c['seats']})")
    if len(bad) > 30:
        print(f"... and {len(bad) - 30} more (see official-match-report.json)")
    REPORT.write_text(json.dumps({"summary": summary, "rows": rows}, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"report: {REPORT.name}")


if __name__ == "__main__":
    main()
