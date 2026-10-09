import React, { useState } from 'react';
import {
  Database,
  Cpu,
  FileCode,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ExternalLink,
  Code,
  Copy,
  Sparkles,
} from 'lucide-react';

export const IngestSchemaView: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'pipeline' | 'schema' | 'extractor'>('pipeline');
  const [sampleAnnouncement, setSampleAnnouncement] = useState(
    `ประกาศมหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (มจธ.)
เรื่อง: การรับสมัครคัดเลือกนักเรียนเข้าศึกษาต่อระดับปริญญาตรี ประจำปีการศึกษา 2570
โครงการ: Active Recruitment รอบที่ 1 Portfolio
คณะ: เทคโนโลยีสารสนเทศ (SIT)
หลักสูตร: วิทยาศาสตรบัณฑิต สาขานวัตกรรมบริการดิจิทัล (DSI)
จำนวนรับ: 35 คน
กำหนดการ:
- เปิดรับสมัครออนไลน์: 15 ตุลาคม 2569
- สิ้นสุดการรับสมัคร: 17 พฤศจิกายน 2569 (ขยายเวลาจากเดิม 13 พ.ย.)
- สอบสัมภาษณ์: 27-28 พฤศจิกายน 2569
- ประกาศผลผู้ผ่านคัดเลือก: 5 ธันวาคม 2569
คุณสมบัติผู้สมัคร:
- กำลังศึกษา ม.6 หรือเทียบเท่า
- GPAX 5 ภาคเรียน ไม่ต่ำกว่า 2.75
- แฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้า A4 ด้านดิจิทัลและนวัตกรรม
ลิงก์รับสมัคร: https://admission.kmutt.ac.th/apply/active-recruitment`
  );

  const [extractedResult, setExtractedResult] = useState<any>(null);
  const [isExtracting, setIsExtracting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSimulateExtraction = () => {
    setIsExtracting(true);
    setTimeout(() => {
      setExtractedResult({
        university: {
          code: 'KMUTT',
          nameEn: "King Mongkut's University of Technology Thonburi",
          nameTh: 'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี',
        },
        faculty: {
          nameEn: 'School of Information Technology (SIT)',
          nameTh: 'คณะเทคโนโลยีสารสนเทศ',
        },
        program: {
          nameEn: 'B.Sc. in Digital Service Innovation (DSI)',
          nameTh: 'สาขานวัตกรรมบริการดิจิทัล',
          degree: 'วิทยาศาสตรบัณฑิต (วท.บ.)',
        },
        round: 'TCAS1_PORTFOLIO',
        quotaSeats: 35,
        timeline: [
          { event: 'APPLICATION_OPENS', date: '2026-10-15', confidence: 0.99 },
          { event: 'APPLICATION_CLOSES', date: '2026-11-17', previousDate: '2026-11-13', confidence: 0.99, isChanged: true },
          { event: 'INTERVIEW', date: '2026-11-27', confidence: 0.98 },
          { event: 'RESULT_ANNOUNCEMENT', date: '2026-12-05', confidence: 0.99 },
        ],
        requirements: [
          { type: 'GPAX', minScore: 2.75, mandatory: true },
          { type: 'PORTFOLIO', maxPages: 10, topic: 'Digital & Service Innovation', mandatory: true },
          { type: 'INTERVIEW', format: 'Competency Assessment', mandatory: true },
        ],
        provenance: {
          verificationStatus: 'verified',
          lastChecked: '2026-10-07',
          sourceUrl: 'https://admission.kmutt.ac.th/apply/active-recruitment',
          documentType: 'Official University Admission Website',
        },
      });
      setIsExtracting(false);
    }, 600);
  };

  const handleCopySchema = () => {
    navigator.clipboard.writeText(
      JSON.stringify(
        {
          $schema: 'https://json-schema.org/draft/2020-12/schema',
          title: 'TCASAdmissionProgram',
          type: 'object',
          properties: {
            universityId: { type: 'string' },
            campusId: { type: 'string' },
            facultyId: { type: 'string' },
            programId: { type: 'string' },
            branchId: { type: 'string' },
            round: {
              type: 'string',
              enum: ['TCAS1_PORTFOLIO', 'TCAS2_QUOTA', 'TCAS3_ADMISSION', 'TCAS4_DIRECT'],
            },
            quotaSeats: { type: 'integer' },
            applicationUrl: { type: 'string', format: 'uri' },
            source: {
              type: 'object',
              properties: {
                name: { type: 'string' },
                url: { type: 'string', format: 'uri' },
                type: { type: 'string' },
                lastChecked: { type: 'string', format: 'date' },
                verificationStatus: {
                  type: 'string',
                  enum: ['verified', 'unverified', 'changed', 'outdated'],
                },
              },
              required: ['name', 'url', 'lastChecked', 'verificationStatus'],
            },
            events: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  type: { type: 'string' },
                  startDate: { type: 'string', format: 'date' },
                  endDate: { type: 'string', format: 'date' },
                  status: { type: 'string' },
                },
                required: ['type', 'startDate'],
              },
            },
            requirements: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  type: { type: 'string' },
                  minScore: { type: ['number', 'string'] },
                  isMandatory: { type: 'boolean' },
                },
                required: ['type', 'isMandatory'],
              },
            },
          },
        },
        null,
        2
      )
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Title Bar */}
      <div className="border-b border-neutral-200 pb-5">
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
          Data Ingestion & AI Extractor Pipeline
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
          Architecture specification for automated crawling, PDF parsing, structured schema validation, and change detection.
        </p>
      </div>

      {/* Sub Tabs */}
      <div className="flex items-center gap-1 p-1 bg-neutral-100 rounded-lg text-xs w-fit">
        <button
          onClick={() => setActiveSubTab('pipeline')}
          className={`px-3 py-1.5 font-medium rounded-md transition-colors cursor-pointer ${
            activeSubTab === 'pipeline' ? 'bg-white text-neutral-900 shadow-xs' : 'text-neutral-600'
          }`}
        >
          Ingestion Architecture
        </button>
        <button
          onClick={() => setActiveSubTab('extractor')}
          className={`px-3 py-1.5 font-medium rounded-md transition-colors cursor-pointer ${
            activeSubTab === 'extractor' ? 'bg-white text-neutral-900 shadow-xs' : 'text-neutral-600'
          }`}
        >
          AI Extractor Sandbox
        </button>
        <button
          onClick={() => setActiveSubTab('schema')}
          className={`px-3 py-1.5 font-medium rounded-md transition-colors cursor-pointer ${
            activeSubTab === 'schema' ? 'bg-white text-neutral-900 shadow-xs' : 'text-neutral-600'
          }`}
        >
          JSON Schema Contract
        </button>
      </div>

      {/* 1. Architecture Pipeline Overview */}
      {activeSubTab === 'pipeline' && (
        <div className="space-y-6">
          <div className="bg-white border border-neutral-200 rounded-xl p-6 space-y-6">
            <h2 className="text-base font-bold text-neutral-900">
              End-to-End Admission Data Flow
            </h2>

            {/* 6-Stage Diagram */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-3 text-xs">
              <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-lg space-y-1">
                <div className="font-bold text-neutral-900">1. Official Sources</div>
                <div className="text-neutral-500 text-[11px]">
                  University portals, PDF announcements, myTCAS APIs, and faculty web pages.
                </div>
              </div>

              <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-lg space-y-1">
                <div className="font-bold text-neutral-900">2. Source Collector</div>
                <div className="text-neutral-500 text-[11px]">
                  Crawl scheduler checking for newly published PDFs and bulletin changes.
                </div>
              </div>

              <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-lg space-y-1">
                <div className="font-bold text-neutral-900">3. Parser / Extractor</div>
                <div className="text-neutral-500 text-[11px]">
                  AI extraction model normalizing Thai admission dates, GPAX, and quotas.
                </div>
              </div>

              <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-lg space-y-1">
                <div className="font-bold text-neutral-900">4. Change Detection</div>
                <div className="text-neutral-500 text-[11px]">
                  Diff engine comparing existing records against new announcements.
                </div>
              </div>

              <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-lg space-y-1">
                <div className="font-bold text-neutral-900">5. Verification Gate</div>
                <div className="text-neutral-500 text-[11px]">
                  Attaches verified provenance citation and timestamp to every admission entity.
                </div>
              </div>

              <div className="p-3 bg-neutral-900 text-white rounded-lg space-y-1">
                <div className="font-bold">6. Student Console</div>
                <div className="text-neutral-300 text-[11px]">
                  Real-time timeline, countdown alerts, and actionable personalized checklist.
                </div>
              </div>
            </div>

            {/* Principles Breakdown */}
            <div className="space-y-3 pt-4 border-t border-neutral-100 text-xs text-neutral-700 leading-relaxed">
              <h3 className="font-bold text-neutral-900 text-sm">Key Architectural Guarantees</h3>
              <ul className="list-disc pl-5 space-y-1 text-neutral-600">
                <li>
                  <strong className="text-neutral-900">Hierarchical Resolution:</strong> Strict separation of University → Campus → Faculty → Program → Branch → Round → Project. Different branches in the same faculty hold unique requirements and dates.
                </li>
                <li>
                  <strong className="text-neutral-900">Immutable Provenance:</strong> Every single admission fact (e.g., application close date) must carry a source URL, source name, last-checked timestamp, and verification badge.
                </li>
                <li>
                  <strong className="text-neutral-900">Extensible to All Thai Universities:</strong> The schema allows adding University #6, #7, #50, or #100 without altering database relations or UI code.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* 2. Extractor Sandbox */}
      {activeSubTab === 'extractor' && (
        <div className="space-y-4">
          <div className="bg-white border border-neutral-200 rounded-xl p-5 space-y-4">
            <div>
              <h2 className="text-sm font-bold text-neutral-900">
                Simulated AI Extraction Sandbox
              </h2>
              <p className="text-xs text-neutral-500 mt-0.5">
                Paste official admission bulletin text (Thai or English) to extract structured fields and detect schedule changes.
              </p>
            </div>

            <div className="space-y-2">
              <textarea
                value={sampleAnnouncement}
                onChange={(e) => setSampleAnnouncement(e.target.value)}
                rows={8}
                className="w-full p-3 font-mono text-xs border border-neutral-300 rounded-lg text-neutral-800 bg-neutral-50 focus:outline-hidden focus:border-neutral-900"
              />

              <div className="flex items-center justify-between">
                <span className="text-[11px] text-neutral-400">
                  Input: Official Thai university admission text
                </span>

                <button
                  onClick={handleSimulateExtraction}
                  disabled={isExtracting}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white transition-colors cursor-pointer disabled:opacity-50"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>{isExtracting ? 'Extracting Data...' : 'Run Extraction Model'}</span>
                </button>
              </div>
            </div>

            {/* Output preview */}
            {extractedResult && (
              <div className="mt-4 p-4 bg-neutral-900 text-emerald-400 rounded-lg font-mono text-xs overflow-x-auto space-y-2">
                <div className="text-neutral-400 text-[11px] pb-1 border-b border-neutral-800 flex items-center justify-between">
                  <span>Structured Extraction Output (Validated JSON)</span>
                  <span className="text-emerald-400">Status: Complete ✓</span>
                </div>
                <pre>{JSON.stringify(extractedResult, null, 2)}</pre>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 3. JSON Schema Contract */}
      {activeSubTab === 'schema' && (
        <div className="bg-white border border-neutral-200 rounded-xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-bold text-neutral-900">
                Target Database JSON Schema Definition
              </h2>
              <p className="text-xs text-neutral-500 mt-0.5">
                Strict typing validating programs, projects, requirements, events, and citations.
              </p>
            </div>

            <button
              onClick={handleCopySchema}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-neutral-200 hover:bg-neutral-50 text-neutral-800 transition-colors cursor-pointer"
            >
              <Copy className="h-3.5 w-3.5" />
              <span>{copied ? 'Copied!' : 'Copy Schema'}</span>
            </button>
          </div>

          <pre className="p-4 bg-neutral-950 text-neutral-300 font-mono text-xs rounded-lg overflow-x-auto max-h-[500px]">
{`{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TCASAdmissionProgram",
  "type": "object",
  "properties": {
    "universityId": { "type": "string" },
    "campusId": { "type": "string" },
    "facultyId": { "type": "string" },
    "programId": { "type": "string" },
    "branchId": { "type": "string" },
    "round": {
      "type": "string",
      "enum": ["TCAS1_PORTFOLIO", "TCAS2_QUOTA", "TCAS3_ADMISSION", "TCAS4_DIRECT"]
    },
    "quotaSeats": { "type": "integer" },
    "applicationUrl": { "type": "string", "format": "uri" },
    "source": {
      "type": "object",
      "properties": {
        "name": { "type": "string" },
        "url": { "type": "string", "format": "uri" },
        "type": { "type": "string" },
        "lastChecked": { "type": "string", "format": "date" },
        "verificationStatus": {
          "type": "string",
          "enum": ["verified", "unverified", "changed", "outdated"]
        }
      },
      "required": ["name", "url", "lastChecked", "verificationStatus"]
    },
    "events": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": { "type": "string" },
          "startDate": { "type": "string", "format": "date" },
          "endDate": { "type": "string", "format": "date" },
          "status": { "type": "string" }
        },
        "required": ["type", "startDate"]
      }
    },
    "requirements": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": { "type": "string" },
          "minScore": { "type": ["number", "string"] },
          "isMandatory": { "type": "boolean" }
        },
        "required": ["type", "isMandatory"]
      }
    }
  }
}`}
          </pre>
        </div>
      )}
    </div>
  );
};
