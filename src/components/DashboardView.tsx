import React from 'react';
import {
  Calendar,
  Clock,
  CheckSquare,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  Plus,
  Compass,
  BookmarkCheck,
  CheckCircle2,
  Sparkles,
  Database,
  Building2,
  GraduationCap,
  ShieldCheck,
  Layers,
  FileText,
  Trash2,
} from 'lucide-react';
import {
  EnrichedAdmissionProject,
  formatDateThai,
  formatDateThaiFull,
  formatDateRangeThai,
  getDaysCountdownThai,
  getDaysLeftThai,
  getUniversityThaiAbbr,
  getRoundLabel,
  getUniversityTheme,
} from '../utils/tcasHelpers';
import { UserTask, ChangeAlert } from '../types/tcas';
import { ActiveTab } from './Header';

interface DashboardViewProps {
  trackedProjects: EnrichedAdmissionProject[];
  allProjects: EnrichedAdmissionProject[];
  tasks: UserTask[];
  changeAlerts: ChangeAlert[];
  onToggleTask: (taskId: string) => void;
  onOpenDetail: (project: EnrichedAdmissionProject) => void;
  onNavigateTab: (tab: ActiveTab) => void;
  onUntrack: (projectId: string) => void;
  onOpenSourceModal?: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  trackedProjects,
  allProjects,
  tasks,
  changeAlerts,
  onToggleTask,
  onOpenDetail,
  onNavigateTab,
  onUntrack,
  onOpenSourceModal,
}) => {
  // Compute key stats
  const activeTasks = tasks.filter((t) => !t.isCompleted);
  const completedTasks = tasks.filter((t) => t.isCompleted);

  // Filter deadlines within next 35 days
  const upcomingDeadlines = trackedProjects
    .filter((p) => p.daysUntilClose !== null && p.daysUntilClose >= 0)
    .sort((a, b) => (a.daysUntilClose ?? 999) - (b.daysUntilClose ?? 999));

  const hasTracked = trackedProjects.length > 0;

  return (
    <div className="space-y-6">
      {/* 1. HERO BANNER: Admission command center in Thai */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-800 text-white p-6 sm:p-7 shadow-lg border border-blue-600/30">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-blue-100 text-xs font-semibold">
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
              <span>ศูนย์รวมข้อมูลรับสมัคร TCAS 69 / 70 ส่วนตัว</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              ระบบวางแผนการสมัครมหาวิทยาลัยของฉัน
            </h1>
            <p className="text-sm text-blue-100 leading-relaxed">
              รวบรวมระเบียบการที่กระจัดกระจาย แปลงเป็นไทม์ไลน์ปฏิทินส่วนตัว เกณฑ์คะแนนที่ตรวจสอบแล้ว และเช็กลิสต์เตรียมเอกสารที่ลงมือทำได้ทันที
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            {onOpenSourceModal && (
              <button
                onClick={onOpenSourceModal}
                className="px-4 py-2 bg-white/15 hover:bg-white/25 border border-white/25 rounded-xl text-xs font-bold text-white transition-all shadow-sm flex items-center gap-1.5 cursor-pointer backdrop-blur-xs"
              >
                <Database className="h-3.5 w-3.5 text-blue-200" />
                <span>ที่มาข้อมูล & ระบบดึงอัตโนมัติ</span>
              </button>
            )}

            <button
              onClick={() => onNavigateTab('explore')}
              className="px-4 py-2 bg-white hover:bg-blue-50 text-blue-900 rounded-xl text-xs font-extrabold transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="h-4 w-4 text-blue-700" />
              <span>ค้นหาและเพิ่มสาขา</span>
            </button>
          </div>
        </div>
      </div>

      {/* ONBOARDING BANNER: Welcome! (Disappears after user chooses 3: 0/3, 1/3, 2/3) */}
      {trackedProjects.length < 3 && (
        <div
          onClick={() => onNavigateTab('explore')}
          className="relative overflow-hidden bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white rounded-2xl p-5 sm:p-6 shadow-md border border-amber-400/40 cursor-pointer hover:shadow-lg transition-all group"
        >
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-44 h-44 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[11px] font-black uppercase tracking-wider backdrop-blur-xs">
                <Sparkles className="h-3.5 w-3.5 text-amber-200" />
                <span>ขั้นตอนเริ่มต้น (Getting Started)</span>
                <span className="font-mono bg-white text-orange-600 px-2 py-0.2 rounded-full font-extrabold ml-1 shadow-2xs">
                  {trackedProjects.length}/3
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold text-white flex items-center gap-2 group-hover:translate-x-0.5 transition-transform">
                <span>Welcome!</span>
                <span className="font-mono text-amber-200">({trackedProjects.length}/3)</span>
                <ArrowRight className="h-5 w-5 text-white/80 group-hover:translate-x-1 transition-transform" />
              </h2>
              <p className="text-xs sm:text-sm text-white/95 leading-relaxed max-w-2xl">
                ยินดีต้อนรับ! กรุณาเลือกสาขาและโครงการที่คุณต้องการสมัครให้ครบอย่างน้อย 3 สาขา เพื่อให้ระบบสร้างปฏิทินและแผนการเตรียมตัวอัตโนมัติ (กล่องนี้จะหายไปอัตโนมัติเมื่อเลือกครบ 3 สาขา)
              </p>

              {/* Visual Progress Bar (0/3, 1/3, 2/3) */}
              <div className="pt-2 max-w-sm space-y-1">
                <div className="flex items-center justify-between text-[11px] font-semibold text-white/90">
                  <span>ความคืบหน้าการจัดลิสต์</span>
                  <span className="font-mono font-bold">
                    {trackedProjects.length === 0
                      ? 'ยังไม่ได้เลือก (0/3)'
                      : `เลือกแล้ว ${trackedProjects.length} จาก 3 สาขา (${Math.round((trackedProjects.length / 3) * 100)}%)`}
                  </span>
                </div>
                <div className="w-full bg-black/25 rounded-full h-2.5 overflow-hidden p-0.5 border border-white/20">
                  <div
                    className="bg-white h-full rounded-full transition-all duration-500 shadow-xs"
                    style={{ width: `${Math.min(100, (trackedProjects.length / 3) * 100)}%` }}
                  />
                </div>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onNavigateTab('explore');
              }}
              className="px-5 py-3 bg-white text-orange-700 hover:bg-orange-50 rounded-xl text-xs font-black transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer shrink-0 self-start sm:self-auto group-hover:scale-105"
            >
              <Compass className="h-4 w-4 text-orange-600" />
              <span>ค้นหาหลักสูตร (Discover)</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* 2. STATS CARDS: Vibrant Thai Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Stat 1: Applications */}
        <div
          onClick={() => {
            const el = document.getElementById('tracked-programs-section');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              el.classList.add('ring-2', 'ring-blue-500', 'ring-offset-4');
              setTimeout(() => {
                el.classList.remove('ring-2', 'ring-blue-500', 'ring-offset-4');
              }, 2000);
            }
          }}
          className="p-4 sm:p-5 bg-white border border-slate-200/90 rounded-2xl shadow-xs hover:shadow-md hover:border-blue-300 transition-all space-y-3 cursor-pointer group"
          title="คลิกเพื่อเลื่อนไปยังสาขาและโครงการที่ฉันบันทึกไว้"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 group-hover:text-blue-700 uppercase tracking-wider transition-colors">
              สาขาที่ฉันบันทึกไว้
            </span>
            <div className="p-2 rounded-xl bg-blue-100 group-hover:bg-blue-600 text-blue-700 group-hover:text-white transition-all">
              <BookmarkCheck className="h-5 w-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black font-mono text-slate-900 group-hover:text-blue-700 transition-colors tabular-nums">
              {trackedProjects.length}
            </span>
            <span className="text-xs text-slate-500 font-medium">สาขาในเป้าหมาย</span>
          </div>
          <div className="text-[11px] text-blue-600 font-semibold flex items-center justify-between">
            <span>รอบ 1 Portfolio & รอบ 2 โควตา</span>
            <span className="text-xs text-blue-600 group-hover:translate-x-0.5 transition-transform">↓</span>
          </div>
        </div>

        {/* Stat 2: Imminent Deadlines */}
        <div className="p-4 sm:p-5 bg-white border border-slate-200/90 rounded-2xl shadow-xs hover:shadow-md transition-all space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              เดดไลน์ใกล้ถึง
            </span>
            <div className="p-2 rounded-xl bg-amber-100 text-amber-700">
              <Clock className="h-5 w-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black font-mono text-amber-700 tabular-nums">
              {upcomingDeadlines.length}
            </span>
            <span className="text-xs text-slate-500 font-medium">กำลังจะปิดรับสมัคร</span>
          </div>
          <div className="text-[11px] text-amber-700 font-semibold flex items-center gap-1">
            <span>เร็วสุด: 13 พ.ย. 69 (มจธ. DSI)</span>
          </div>
        </div>

        {/* Stat 3: Tasks Remaining */}
        <div className="p-4 sm:p-5 bg-white border border-slate-200/90 rounded-2xl shadow-xs hover:shadow-md transition-all space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              สิ่งที่ต้องทำคงเหลือ
            </span>
            <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700">
              <CheckSquare className="h-5 w-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black font-mono text-emerald-800 tabular-nums">
              {activeTasks.length}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              จาก {tasks.length} รายการ (ทำแล้ว {completedTasks.length})
            </span>
          </div>
          {/* Progress bar */}
          <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-emerald-500 h-1.5 rounded-full transition-all duration-300"
              style={{
                width: `${tasks.length > 0 ? (completedTasks.length / tasks.length) * 100 : 0}%`,
              }}
            />
          </div>
        </div>

        {/* Stat 4: Change Detection Alerts */}
        <div className="p-4 sm:p-5 bg-white border border-slate-200/90 rounded-2xl shadow-xs hover:shadow-md transition-all space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              แจ้งเตือนวันเปลี่ยน
            </span>
            <div className="p-2 rounded-xl bg-rose-100 text-rose-700">
              <AlertTriangle className="h-5 w-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black font-mono text-rose-700 tabular-nums">
              {changeAlerts.length}
            </span>
            <span className="text-xs text-slate-500 font-medium">ประกาศเลื่อนวัน</span>
          </div>
          <button
            onClick={() => onNavigateTab('alerts')}
            className="text-[11px] text-rose-600 hover:text-rose-800 font-bold underline cursor-pointer"
          >
            ดูรายละเอียดประกาศเลื่อนวันรับสมัคร
          </button>
        </div>
      </div>

      {/* 3. CHANGE ALERT CALLOUT IN THAI */}
      {changeAlerts.length > 0 && (
        <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/90 rounded-2xl shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-amber-500 text-white rounded-xl shadow-xs shrink-0 mt-0.5">
              <AlertTriangle className="h-4 w-4" />
            </div>
            <div className="space-y-0.5">
              <div className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
                <span>ตรวจพบประกาศขยายเวลารับสมัครอย่างเป็นทางการ</span>
                <span className="px-2 py-0.2 bg-amber-200 text-amber-900 rounded-md font-mono text-[10px]">
                  อัปเดตใหม่
                </span>
              </div>
              <p className="text-xs text-amber-900/90">
                <strong className="text-amber-950">
                  {changeAlerts[0].universityAbbr} — {changeAlerts[0].programName}:
                </strong>{' '}
                {changeAlerts[0].title}. กำหนดการเดิม{' '}
                <span className="line-through font-mono text-slate-500">
                  {changeAlerts[0].previousValue}
                </span>{' '}
                → ขยายเป็น{' '}
                <strong className="text-emerald-800 font-mono">
                  {changeAlerts[0].newValue}
                </strong>
                .
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigateTab('alerts')}
            className="px-3.5 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs shrink-0 cursor-pointer"
          >
            ดูประกาศทางการฉบับแก้ไข
          </button>
        </div>
      )}

      {/* 4. MAIN WORKSPACE GRID: Tracked Programs & Action Checklist */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: My Admission Cards */}
        <div className="lg:col-span-2 space-y-6">
          {/* Section 1: Imminent Deadlines Timeline Card in Thai */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-indigo-50 text-indigo-700 rounded-xl">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900">
                    กำหนดการปิดรับสมัครที่ใกล้ถึงที่สุด
                  </h2>
                  <p className="text-xs text-slate-500">
                    เรียงตามลำดับวันปิดรับสมัครของสาขาที่คุณบันทึกไว้
                  </p>
                </div>
              </div>

              <button
                onClick={() => onNavigateTab('calendar')}
                className="text-xs font-bold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 cursor-pointer"
              >
                <span>ดูปฏิทิน & ไทม์ไลน์</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>

            {upcomingDeadlines.length === 0 ? (
              <div className="p-6 bg-slate-50 rounded-xl text-center text-xs text-slate-500">
                ยังไม่มีกำหนดการที่กำลังจะปิดรับสมัครในเร็วๆ นี้ สามารถค้นหาและเพิ่มสาขาได้ที่แท็บค้นหา
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {upcomingDeadlines.slice(0, 4).map((p) => {
                  const round = getRoundLabel(p.project.round);
                  const uniTheme = getUniversityTheme(p.university.id);
                  const uniThai = getUniversityThaiAbbr(p.university.id);

                  return (
                    <div
                      key={p.project.id}
                      onClick={() => onOpenDetail(p)}
                      className="py-3.5 flex items-center justify-between gap-3 hover:bg-slate-50/80 rounded-xl px-2 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span
                          className={`px-2.5 py-1 rounded-lg text-xs font-black uppercase shrink-0 ${uniTheme.pill}`}
                        >
                          {uniThai}
                        </span>
                        <div className="min-w-0 truncate space-y-0.5">
                          <div className="text-sm font-bold text-slate-900 truncate">
                            {p.program.nameTh}
                          </div>
                          <div className="text-xs text-slate-500 flex items-center gap-2">
                            <span>{p.faculty.nameTh}</span>
                            <span>·</span>
                            <span className="font-semibold text-slate-700">{round.short}</span>
                            <span>·</span>
                            <span>ปิดรับสมัคร {formatDateThai(p.applicationCloseDate)}</span>
                          </div>
                        </div>
                      </div>

                      <div className="shrink-0 text-right">
                        <span
                          className={`inline-block font-mono text-xs font-bold px-3 py-1 rounded-lg tabular-nums ${
                            p.daysUntilClose !== null && p.daysUntilClose <= 7
                              ? 'bg-amber-100 text-amber-900 border border-amber-300'
                              : 'bg-slate-100 text-slate-800'
                          }`}
                        >
                          {getDaysCountdownThai(p.daysUntilClose)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Section 2: Detailed Tracked Programs Cards in Thai */}
          <div
            id="tracked-programs-section"
            className="space-y-4 scroll-mt-24 p-2 -m-2 rounded-2xl transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-blue-100 text-blue-700 rounded-lg">
                    <BookmarkCheck className="h-4 w-4" />
                  </div>
                  <h2 className="text-base font-bold text-slate-900">
                    สาขาและโครงการที่ฉันบันทึกไว้ ({trackedProjects.length})
                  </h2>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  พอร์ตโฟลิโอการสมัครของคุณ คลิกที่สาขาเพื่อดูเกณฑ์คะแนนและเช็กลิสต์เอกสาร
                </p>
              </div>

              <button
                onClick={() => onNavigateTab('explore')}
                className="text-xs font-bold text-slate-700 hover:text-slate-900 underline cursor-pointer"
              >
                + ค้นหาหลักสูตรและสาขาเพิ่มเติม (myTCAS)
              </button>
            </div>

            {!hasTracked ? (
              <div className="p-8 border-2 border-dashed border-slate-300 rounded-2xl text-center space-y-4 bg-white">
                <Compass className="h-10 w-10 text-slate-400 mx-auto" />
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-800">
                    ยังไม่มีสาขาที่บันทึกไว้ในระบบ
                  </h3>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    ค้นหาและเลือกสาขาที่คุณต้องการสมัครจาก มช., จุฬาฯ, ม.มหิดล, มธ., มจธ., สจล., มก. ฯลฯ เพื่อสร้างปฏิทินและเช็กลิสต์ส่วนตัวอัตโนมัติ
                  </p>
                </div>
                <button
                  onClick={() => onNavigateTab('explore')}
                  className="px-5 py-2.5 text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl cursor-pointer shadow-md"
                >
                  ค้นหาสาขาที่เปิดรับสมัคร
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {trackedProjects.map((p) => {
                  const round = getRoundLabel(p.project.round);
                  const uniTheme = getUniversityTheme(p.university.id);
                  const uniThai = getUniversityThaiAbbr(p.university.id);
                  const nextTask = tasks.find(
                    (t) => t.projectId === p.project.id && !t.isCompleted
                  );

                  return (
                    <div
                      key={p.project.id}
                      className="p-5 bg-white border border-slate-200/90 rounded-2xl shadow-xs hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-start justify-between gap-2">
                          <span
                            className={`px-2.5 py-0.5 rounded-lg text-xs font-black uppercase ${uniTheme.pill}`}
                          >
                            {uniThai}
                          </span>
                          {p.project.source.verificationStatus === 'verified' && (
                            <span className="text-emerald-700 inline-flex items-center gap-1 text-xs font-semibold">
                              <CheckCircle2 className="h-3.5 w-3.5" />
                              <span>ตรวจแล้ว</span>
                            </span>
                          )}
                        </div>

                        <div className="space-y-0.5">
                          <div className="text-xs font-semibold text-slate-500 flex items-center gap-1.5 flex-wrap">
                            <span>{p.faculty.nameTh} · {round.short}</span>
                            {p.project.tcasProgramCode && (
                              <span className="text-[10px] text-slate-400 font-mono bg-slate-100 px-1 rounded">
                                รหัส {p.project.tcasProgramCode}
                              </span>
                            )}
                          </div>
                          <h3 className="font-bold text-base text-slate-900 leading-snug">
                            {p.program.nameTh}
                          </h3>
                          {p.project.studyTrack && (
                            <p className="text-[11px] text-blue-700 font-medium">
                              แผนการเรียน: {p.project.studyTrack}
                            </p>
                          )}
                        </div>

                        {/* Dates chip */}
                        <div className="p-2.5 bg-slate-50 rounded-xl text-xs space-y-1 font-mono text-slate-700">
                          <div className="flex items-center justify-between">
                            <span className="text-slate-500 font-sans">รับสมัคร:</span>
                            <span className="font-bold">
                              {formatDateThai(p.applicationOpenDate)} → {formatDateThai(p.applicationCloseDate)}
                            </span>
                          </div>
                          {(() => {
                            const gpaxReq = p.project.requirements.find((r) => r.type === 'GPAX');
                            return gpaxReq && gpaxReq.minScore ? (
                              <div className="flex items-center justify-between">
                                <span className="text-slate-500 font-sans">เกรดขั้นต่ำ:</span>
                                <span className="font-bold text-blue-700">
                                  GPAX ≥ {gpaxReq.minScore}
                                </span>
                              </div>
                            ) : null;
                          })()}
                        </div>

                        {/* Next Action in Thai */}
                        {nextTask && (
                          <div className="p-2.5 bg-amber-50/70 border border-amber-200/80 rounded-xl text-xs">
                            <span className="text-amber-800 text-[10px] font-bold block uppercase tracking-wider">
                              สิ่งที่ต้องทำถัดไป:
                            </span>
                            <span className="font-semibold text-slate-900 line-clamp-1 mt-0.5">
                              {nextTask.titleTh}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Card Footer Actions */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
                        <button
                          onClick={() => onOpenDetail(p)}
                          className="font-bold text-blue-600 hover:text-blue-800 cursor-pointer"
                        >
                          ดูเกณฑ์ & เอกสารที่ต้องใช้ →
                        </button>

                        <button
                          onClick={() => onUntrack(p.project.id)}
                          className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                          title="นำสาขานี้ออกจากลิสต์ของฉัน"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Right 1 Col: Actionable Tasks Checklist in Thai */}
        <div className="space-y-4">
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-emerald-50 text-emerald-700 rounded-xl">
                  <CheckSquare className="h-4 w-4" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900">
                    เช็กลิสต์สิ่งที่ต้องทำ
                  </h2>
                  <p className="text-xs text-slate-500">
                    เตรียมเอกสารและยื่นสมัครตามกำหนดการ
                  </p>
                </div>
              </div>

              <button
                onClick={() => onNavigateTab('checklist')}
                className="text-xs font-bold text-emerald-700 hover:text-emerald-900 underline cursor-pointer"
              >
                ดูทั้งหมด
              </button>
            </div>

            {/* Task list in Thai */}
            {tasks.length === 0 ? (
              <div className="p-4 bg-slate-50 rounded-xl text-center text-xs text-slate-500">
                บันทึกสาขาเพื่อสร้างเช็กลิสต์อัตโนมัติ
              </div>
            ) : (
              <div className="space-y-2.5">
                {tasks.slice(0, 6).map((task) => (
                  <div
                    key={task.id}
                    onClick={() => onToggleTask(task.id)}
                    className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                      task.isCompleted
                        ? 'bg-slate-50 border-slate-200 text-slate-400 line-through'
                        : 'bg-white border-slate-200 hover:border-emerald-300 hover:shadow-xs text-slate-800'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={task.isCompleted}
                      onChange={() => {}}
                      className="h-4 w-4 rounded-md text-emerald-600 focus:ring-emerald-500 cursor-pointer mt-0.5 shrink-0"
                    />
                    <div className="min-w-0 text-xs">
                      <div className="font-bold">{task.titleTh}</div>
                      {task.dueDate && (
                        <div className="text-[11px] text-slate-500 mt-0.5">
                          กำหนดส่ง: {formatDateThai(task.dueDate)}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick shortcuts widget */}
          <div className="p-5 bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200/80 rounded-2xl space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-900 flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-indigo-600" />
              <span>การตรวจสอบจากประกาศทางการ</span>
            </h3>
            <p className="text-xs text-indigo-900/80 leading-relaxed">
              ข้อมูลทุกรายการตรวจสอบกับประกาศรับสมัครทางการของมหาวิทยาลัย หากมีการขยายเวลารับสมัคร ระบบจะแจ้งเตือนให้คุณทราบทันที
            </p>
            {onOpenSourceModal && (
              <button
                onClick={onOpenSourceModal}
                className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
              >
                ตรวจสอบแหล่งข้อมูลทางการ & เว็บไซต์สมัคร
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
