import React, { useState } from 'react';
import {
  X,
  ExternalLink,
  Bookmark,
  BookmarkCheck,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Clock,
  Calendar,
  FileText,
  Building2,
  MapPin,
  GraduationCap,
  Sparkles,
  Layers,
  ChevronDown,
  ChevronRight,
  Award,
  Users,
  Target,
  FileQuestion,
  ShieldAlert,
} from 'lucide-react';
import {
  EnrichedAdmissionProject,
  formatDateThai,
  formatDateRangeThai,
  getDaysCountdownThai,
  getUniversityThaiAbbr,
  getRoundLabel,
  getFieldCategoryLabel,
  getUniversityTheme,
} from '../utils/tcasHelpers';

interface ProgramDetailModalProps {
  enrichedProject: EnrichedAdmissionProject | null;
  onClose: () => void;
  isTracked: boolean;
  onToggleTrack: (projectId: string) => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  enrichedProject,
  onClose,
  isTracked,
  onToggleTrack,
}) => {
  if (!enrichedProject) return null;

  const { project, university, faculty, program, branch, status, daysUntilClose } = enrichedProject;
  const roundInfo = getRoundLabel(project.round);
  const fieldInfo = getFieldCategoryLabel(faculty.fieldCategory);
  const uniTheme = getUniversityTheme(university.id);
  const uniThai = getUniversityThaiAbbr(university.id);

  // Selected sub-project tab if available
  const [activeSubProjId, setActiveSubProjId] = useState<string>(
    project.subProjects && project.subProjects.length > 0 ? project.subProjects[0].id : ''
  );

  const activeSubProject = project.subProjects?.find((sp) => sp.id === activeSubProjId) || project.subProjects?.[0];

  const verificationBadge = (
    <div className="flex items-center gap-1.5 text-xs">
      {project.source.verificationStatus === 'verified' && (
        <span className="flex items-center gap-1 text-emerald-700 font-medium">
          <CheckCircle2 className="h-4 w-4" />
          <span>ตรวจสอบจากประกาศทางการแล้ว</span>
        </span>
      )}
      {project.source.verificationStatus === 'changed' && (
        <span className="flex items-center gap-1 text-amber-700 font-medium">
          <AlertTriangle className="h-4 w-4" />
          <span>ตรวจพบการแก้ไข/ขยายเวลารับสมัครอย่างเป็นทางการ</span>
        </span>
      )}
      <span className="text-slate-300">·</span>
      <span className="text-slate-500">ตรวจสอบล่าสุดเมื่อ {formatDateThai(project.source.lastChecked)}</span>
    </div>
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-150"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Header Bar in Thai */}
        <div className="flex items-start justify-between gap-3 border-b border-slate-100 dark:border-slate-800 p-5 bg-slate-50/80 dark:bg-slate-800/60">
          <div className="space-y-1.5 pr-6">
            <div className="flex items-center gap-2 text-xs">
              <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase ${uniTheme.pill}`}>
                {uniThai}
              </span>
              <span className="text-slate-600 font-semibold">{faculty.nameTh}</span>
              <span className="text-slate-300">·</span>
              <span className="font-bold text-slate-800">{roundInfo.th}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
              {program.nameTh}
            </h2>
            <p className="text-xs text-slate-500">
              {program.nameEn} ({branch.nameTh}) · โครงการ: {project.projectNameTh}
            </p>
          </div>

          <button
            onClick={onClose}
            className="flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-bold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 transition-colors cursor-pointer shrink-0 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-600"
            aria-label="ปิดหน้าต่างนี้ กลับไปหน้าที่แล้ว"
            title="ปิดหน้าต่างนี้ กลับไปหน้าที่แล้ว (Esc)"
          >
            <X className="h-5 w-5" />
            <span>ปิด</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6 text-sm">
          {/* Quick Metrics Bar in Thai */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200/90 text-xs">
            <div>
              <span className="text-slate-500 block">รอบการรับสมัคร</span>
              <span className="font-bold text-slate-900">{roundInfo.short}</span>
              {project.tcasProgramCode && (
                <span className="text-[10px] text-slate-400 font-mono block">
                  รหัส {project.tcasProgramCode}
                </span>
              )}
            </div>
            <div>
              <span className="text-slate-500 block">จำนวนรับทั้งหมด</span>
              <span className="font-bold text-slate-900 font-mono tabular-nums">
                {project.quotaSeats} ที่นั่ง
              </span>
              {project.studyTrack && (
                <span className="text-[10px] text-blue-700 dark:text-blue-300 font-medium block truncate">
                  {project.studyTrack}
                </span>
              )}
            </div>
            <div>
              <span className="text-slate-500 block">เกรดเฉลี่ย (GPAX)</span>
              <span className="font-bold text-slate-900">
                {project.gpaxMin ? `GPAX ≥ ${project.gpaxMin}` : 'ไม่กำหนดขั้นต่ำ'}
              </span>
              {project.tuitionFee && (
                <span className="text-[10px] text-emerald-700 font-medium block truncate">
                  {project.tuitionFee}
                </span>
              )}
            </div>
            <div>
              <span className="text-slate-500 block">สถานะเวลารับสมัคร</span>
              <span className="font-bold text-amber-700">
                {getDaysCountdownThai(daysUntilClose)}
              </span>
              {project.applicationFee && (
                <span className="text-[10px] text-slate-500 block">
                  ค่าสมัคร: {project.applicationFee}
                </span>
              )}
            </div>
          </div>

          {/* Dedicated Sub-Projects Section (โครงการย่อยในรอบนี้ เช่น โอลิมปิกวิชาการ, วิทย์-คณิต, กีฬา) */}
          {project.subProjects && project.subProjects.length > 0 && (
            <div className="border border-purple-200 bg-purple-50/40 rounded-2xl p-4 sm:p-5 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-200/60 pb-3">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5 font-bold text-sm text-purple-950">
                    <Layers className="h-4 w-4 text-purple-700" />
                    <span>โครงการย่อยที่เปิดรับสมัครในรอบนี้ ({project.subProjects.length} โครงการ)</span>
                  </div>
                  <p className="text-xs text-purple-800">
                    แต่ละโครงการมีเกณฑ์คัดเลือก คุณสมบัติ และจำนวนรับแยกกันอย่างชัดเจนตามประกาศ myTCAS
                  </p>
                </div>
                <span className="text-xs font-mono font-bold px-2.5 py-1 bg-purple-200/70 text-purple-950 rounded-lg shrink-0">
                  รับรวม {project.quotaSeats} คน
                </span>
              </div>

              {/* Sub-Project Selector Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
                {project.subProjects.map((sp, idx) => {
                  const isActive = sp.id === (activeSubProject?.id || project.subProjects![0].id);
                  return (
                    <button
                      key={sp.id}
                      onClick={() => setActiveSubProjId(sp.id)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer flex items-center gap-1.5 border text-left ${
                        isActive
                          ? 'bg-purple-700 text-white border-purple-700 shadow-sm ring-2 ring-purple-300'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-purple-50 hover:border-purple-200'
                      }`}
                    >
                      <span className="font-mono text-[11px] opacity-80">#{idx + 1}</span>
                      <span className="max-w-[200px] sm:max-w-xs truncate">{sp.nameTh}</span>
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${
                          isActive
                            ? 'bg-purple-900/60 text-white'
                            : 'bg-purple-100 text-purple-800'
                        }`}
                      >
                        รับ {sp.quotaSeats} คน
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Sub-Project Content Box */}
              {activeSubProject && (
                <div className="bg-white border border-purple-200/90 rounded-xl p-4 sm:p-5 space-y-4 shadow-2xs">
                  {/* Sub-Project Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-slate-100 pb-3">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-purple-700 uppercase tracking-wider bg-purple-100 px-2 py-0.5 rounded-md">
                        โครงการย่อย
                      </span>
                      <h4 className="font-bold text-base text-slate-900 leading-snug">
                        {activeSubProject.nameTh}
                      </h4>
                      {activeSubProject.nameEn && (
                        <p className="text-xs text-slate-500">{activeSubProject.nameEn}</p>
                      )}
                    </div>
                    <div className="shrink-0 flex items-center gap-2">
                      <span className="text-xs font-bold px-3 py-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl">
                        รับ {activeSubProject.quotaSeats} คน
                      </span>
                      {activeSubProject.gpaxMin && (
                        <span className="text-xs font-bold px-3 py-1.5 bg-blue-50 text-blue-800 border border-blue-200 rounded-xl">
                          GPAX ≥ {activeSubProject.gpaxMin}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* คุณสมบัติพื้นฐาน (General Eligibility) */}
                  {activeSubProject.generalEligibilityTh && activeSubProject.generalEligibilityTh.length > 0 && (
                    <div className="space-y-2">
                      <div className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                        <ShieldAlert className="h-4 w-4 text-slate-600" />
                        <span>ข้อมูลพื้นฐานและคุณสมบัติผู้สมัคร</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {activeSubProject.generalEligibilityTh.map((elig, idx) => {
                          const isAccept = elig.startsWith('รับผู้สมัคร');
                          return (
                            <div
                              key={idx}
                              className={`p-2.5 rounded-lg border flex items-center gap-2 ${
                                isAccept
                                  ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900 font-medium'
                                  : 'bg-rose-50/60 border-rose-200 text-rose-900'
                              }`}
                            >
                              <span className="font-bold text-xs shrink-0">
                                {isAccept ? '✓' : '✕'}
                              </span>
                              <span>{elig}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* สัดส่วนการคำนวณคะแนน (Selection Formula) */}
                  {activeSubProject.selectionFormulaTh && (
                    <div className="p-3 bg-purple-50/70 border border-purple-200/80 rounded-xl text-xs space-y-1">
                      <span className="font-bold text-purple-950 block">การคำนวณคะแนน / สัดส่วนคะแนน:</span>
                      <p className="text-purple-900 font-semibold">{activeSubProject.selectionFormulaTh}</p>
                    </div>
                  )}

                  {/* เกณฑ์การคัดเลือก (Selection Steps: 1. พิจารณารายชื่อผู้มีสิทธิ์สอบสัมภาษณ์, 2. ผ่านสัมภาษณ์) */}
                  {activeSubProject.selectionStepsTh && activeSubProject.selectionStepsTh.length > 0 && (
                    <div className="space-y-3 pt-1">
                      <div className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                        <Target className="h-4 w-4 text-purple-700" />
                        <span>เกณฑ์การคัดเลือก (Selection Criteria)</span>
                      </div>

                      <div className="space-y-3">
                        {activeSubProject.selectionStepsTh.map((step, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs"
                          >
                            <div className="font-bold text-slate-900 text-xs border-b border-slate-200/60 pb-1.5 flex items-center justify-between">
                              <span>{step.stepName}</span>
                            </div>
                            <div className="space-y-1.5 text-slate-700 leading-relaxed">
                              {step.detailsTh.map((detail, dIdx) => (
                                <p key={dIdx}>{detail}</p>
                              ))}
                            </div>
                            {step.minPassScoreTh && (
                              <div className="pt-2 border-t border-slate-200/60 font-semibold text-purple-900 bg-purple-100/50 p-2 rounded-lg">
                                เกณฑ์คะแนนขั้นต่ำ: {step.minPassScoreTh}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* คำถามเพิ่มเติมสำหรับแฟ้มสะสมผลงาน (Portfolio Questions) */}
                  {activeSubProject.portfolioQuestionsTh && activeSubProject.portfolioQuestionsTh.length > 0 && (
                    <div className="p-3.5 bg-amber-50/70 border border-amber-200/80 rounded-xl text-xs space-y-2">
                      <div className="font-bold text-amber-950 flex items-center gap-1.5">
                        <FileQuestion className="h-4 w-4 text-amber-700" />
                        <span>คำถามเพิ่มเติมสำหรับแฟ้มสะสมผลงาน (Portfolio Requirements)</span>
                      </div>
                      <ul className="space-y-1.5 text-slate-800">
                        {activeSubProject.portfolioQuestionsTh.map((q, qIdx) => (
                          <li key={qIdx} className="flex items-start gap-2">
                            <span className="font-bold text-amber-700 shrink-0 mt-0.5">•</span>
                            <span className="leading-relaxed">{q}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* ลิงก์รายละเอียดเพิ่มเติม */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs text-slate-500">
                    <span>รายละเอียดเพิ่มเติมตามประกาศทางการ</span>
                    <a
                      href={activeSubProject.officialAnnouncementUrl || project.applicationUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-blue-600 hover:text-blue-800 font-bold inline-flex items-center gap-1 underline"
                    >
                      <span>เปิดลิงก์ประกาศโครงการ</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Additional Conditions Box (เงื่อนไขและคุณสมบัติเพิ่มเติมตามประกาศ myTCAS / มหาวิทยาลัย) */}
          {(!project.subProjects || project.subProjects.length === 0) &&
            project.additionalConditionsTh &&
            project.additionalConditionsTh.length > 0 && (
            <div className="p-4 bg-amber-50/60 border border-amber-200/80 rounded-xl text-xs space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-amber-900">
                <Sparkles className="h-4 w-4 text-amber-600" />
                <span>เงื่อนไขและคุณสมบัติเพิ่มเติม (Additional Conditions)</span>
              </div>
              {project.selectionFormulaTh && (
                <div className="text-[11px] font-semibold text-amber-950 bg-amber-100/70 px-2.5 py-1 rounded-lg">
                  เกณฑ์คะแนนคัดเลือก: {project.selectionFormulaTh}
                </div>
              )}
              <ul className="space-y-1.5 pt-1 text-slate-700">
                {project.additionalConditionsTh.map((cond, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-0.5">•</span>
                    <span className="leading-relaxed">{cond}</span>
                  </li>
                ))}
              </ul>
              {project.portfolioPagesLimit && (
                <div className="text-[11px] text-slate-600 pt-1 border-t border-amber-200/60 font-medium">
                  ข้อกำหนดพอร์ตโฟลิโอ: {project.portfolioPagesLimit}
                </div>
              )}
            </div>
          )}

          {/* Change Alert Notice if changed */}
          {project.source.verificationStatus === 'changed' && (
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-amber-900">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                <span>การแจ้งเตือน: ตรวจพบประกาศขยายเวลาอย่างเป็นทางการ</span>
              </div>
              <p className="text-amber-800 leading-relaxed">
                {project.source.notes || 'กำหนดการรับสมัครหรือเกณฑ์ได้รับการปรับปรุงโดยมหาวิทยาลัย'}
              </p>
              {project.source.previousValue && (
                <div className="font-mono text-[11px] text-amber-950 pt-1">
                  กำหนดการเดิม: {project.source.previousValue}
                </div>
              )}
            </div>
          )}

          {/* 1. Admission Events Timeline */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                <Calendar className="h-4 w-4 text-blue-600" />
                <span>กำหนดการรับสมัครและเหตุการณ์สำคัญ</span>
              </h3>
              <span className="text-xs text-slate-500">ปีการศึกษา 2570 (TCAS)</span>
            </div>

            <div className="border border-slate-200 rounded-xl divide-y divide-slate-100 overflow-hidden">
              {project.events.map((event) => (
                <div
                  key={event.id}
                  className="p-3 hover:bg-slate-50/70 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div className="space-y-0.5">
                    <div className="font-bold text-slate-900 text-xs sm:text-sm">
                      {event.titleTh}
                    </div>
                    <div className="text-xs text-slate-500">
                      {event.titleEn}
                      {event.descriptionTh && ` · ${event.descriptionTh}`}
                    </div>
                  </div>
                  <div className="text-right sm:shrink-0">
                    <div className="font-mono text-xs font-bold text-slate-900 tabular-nums">
                      {formatDateRangeThai(event.startDate, event.endDate)}
                    </div>
                    {event.status === 'changed' && (
                      <span className="text-[10px] text-amber-700 font-bold block">
                        (ขยายเวลาตามประกาศล่าสุด)
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Admission Requirements */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 flex items-center gap-1.5 text-xs uppercase tracking-wider">
              <GraduationCap className="h-4 w-4 text-blue-600" />
              <span>เกณฑ์คะแนนและคุณสมบัติผู้สมัคร</span>
            </h3>

            <div className="border border-slate-200 rounded-xl divide-y divide-slate-100">
              {project.requirements.map((req) => (
                <div key={req.id} className="p-3.5 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-900">{req.nameTh}</span>
                    {req.minScore && (
                      <span className="font-mono font-bold text-blue-800 bg-blue-50 px-2 py-0.5 rounded text-[11px] tabular-nums border border-blue-200">
                        เกณฑ์ขั้นต่ำ: {req.minScore}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {req.detailsTh}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    {req.detailsEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Document Requirements */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 flex items-center gap-1.5 text-xs uppercase tracking-wider">
              <FileText className="h-4 w-4 text-amber-600" />
              <span>รายการเอกสารที่ต้องใช้ในการสมัคร</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.documents.map((doc) => (
                <div
                  key={doc.id}
                  className="p-3.5 border border-slate-200 rounded-xl space-y-1 bg-white"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-900">{doc.nameTh}</span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      {doc.submissionFormat || 'PDF'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">
                    {doc.detailsTh}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Official Source Citation Box */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/80 space-y-2 text-xs">
            <div className="font-bold text-slate-900">
              แหล่งอ้างอิงข้อมูลทางการ (Data Provenance)
            </div>
            {verificationBadge}
            <div className="text-slate-600 leading-relaxed">
              ที่มา: <span className="font-semibold text-slate-800">{project.source.name}</span>
            </div>
            <div className="pt-1">
              <a
                href={project.source.url}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 underline font-bold"
              >
                <span>เปิดดูประกาศ PDF หรือหน้าเว็บทางการของมหาวิทยาลัย</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="border-t border-slate-200 p-4 bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => onToggleTrack(project.id)}
            className={`w-full sm:w-auto px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              isTracked
                ? 'bg-slate-100 text-slate-800 border border-slate-300 hover:bg-slate-200'
                : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-xs'
            }`}
          >
            {isTracked ? (
              <>
                <BookmarkCheck className="h-4 w-4 text-emerald-600" />
                <span>✓ บันทึกเข้าลิสต์ของฉันแล้ว</span>
              </>
            ) : (
              <>
                <Bookmark className="h-4 w-4" />
                <span>+ บันทึกสาขานี้เข้าลิสต์</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={project.applicationUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="flex-1 sm:flex-none px-4 py-2 text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5"
            >
              <span>ไปที่ระบบรับสมัครของมหาวิทยาลัย</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-50 cursor-pointer dark:border-slate-600 dark:text-slate-200"
              title="ปิดหน้าต่างนี้ กลับไปหน้าที่แล้ว"
            >
              ← กลับหน้าที่แล้ว
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
