import React from 'react';
import {
  Plus,
  Compass,
  BookmarkCheck,
  CheckCircle2,
  ArrowRight,
  Trash2,
  AlertTriangle,
} from 'lucide-react';
import {
  EnrichedAdmissionProject,
  formatDateThai,
  getDaysCountdownThai,
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
  tasks,
  changeAlerts,
  onToggleTask,
  onOpenDetail,
  onNavigateTab,
  onUntrack,
}) => {
  const activeTasks = tasks.filter((t) => !t.isCompleted);
  const hasTracked = trackedProjects.length > 0;

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* 1. Title card */}
      <div className="rounded-2xl bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-800 text-white p-6 sm:p-7 shadow-lg">
        <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight">
          ระบบวางแผนการสมัครมหาวิทยาลัยของฉัน
        </h1>
        <p className="text-sm sm:text-base text-blue-100 leading-relaxed mt-1.5">
          บันทึกสาขาที่สนใจ ดูเดดไลน์ในปฏิทิน แล้วทำเช็กลิสต์ทีละข้อ
        </p>
        <div className="flex flex-wrap items-center gap-2.5 mt-4">
          <button
            onClick={() => onNavigateTab('explore')}
            className="px-4 py-2.5 bg-white hover:bg-blue-50 text-blue-900 rounded-xl text-sm font-extrabold transition-all shadow-md flex items-center gap-1.5 cursor-pointer dark:bg-white dark:hover:bg-blue-50 dark:text-blue-900"
          >
            <Plus className="h-4 w-4 text-blue-700" />
            <span>ค้นหาและเพิ่มสาขา</span>
          </button>
          <button
            onClick={() => onNavigateTab('calendar')}
            className="px-4 py-2.5 bg-white/15 hover:bg-white/25 border border-white/25 rounded-xl text-sm font-bold text-white transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>ดูปฏิทินของฉัน{activeTasks.length > 0 ? ` (${activeTasks.length} งานค้าง)` : ''}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* 2. Welcome section (only until 3 saved) */}
      {trackedProjects.length < 3 && (
        <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-2xl p-5 sm:p-6 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-extrabold text-amber-900 dark:text-amber-200">
              ยินดีต้อนรับ! เลือกสาขาให้ครบ 3 สาขา
            </span>
            <span className="font-mono bg-amber-500 text-white px-2 py-0.5 rounded-full font-extrabold text-xs">
              {trackedProjects.length}/3
            </span>
          </div>
          <div className="w-full bg-amber-200/60 dark:bg-amber-900 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-amber-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${Math.min(100, (trackedProjects.length / 3) * 100)}%` }}
            />
          </div>
          <p className="text-sm text-amber-900/90 dark:text-amber-100/90 leading-relaxed">
            ระบบจะสร้างปฏิทินและเช็กลิสต์ให้อัตโนมัติเมื่อคุณบันทึกสาขาครบ
          </p>
          <button
            onClick={() => onNavigateTab('explore')}
            className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-sm font-bold transition-all shadow flex items-center gap-2 cursor-pointer"
          >
            <Compass className="h-4 w-4" />
            <span>ค้นหาหลักสูตรเลย</span>
          </button>
        </div>
      )}

      {/* Compact alert strip (links to notification tab) */}
      {changeAlerts.length > 0 && (
        <button
          onClick={() => onNavigateTab('alerts')}
          className="w-full p-4 bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800 rounded-2xl shadow-xs flex items-center gap-3 text-left hover:shadow-md transition-all cursor-pointer"
        >
          <div className="p-2 bg-amber-500 text-white rounded-xl shrink-0">
            <AlertTriangle className="h-4 w-4" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-sm font-bold text-slate-900 dark:text-white truncate">
              {changeAlerts[0].title}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {changeAlerts[0].universityAbbr} · แตะเพื่อดูประกาศทั้งหมด ({changeAlerts.length})
            </div>
          </div>
          <ArrowRight className="h-4 w-4 text-slate-400 shrink-0" />
        </button>
      )}

      {/* 3. Saved */}
      <div id="tracked-programs-section" className="space-y-4 scroll-mt-24">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <BookmarkCheck className="h-5 w-5 text-blue-600" />
            <span>สาขาที่บันทึกไว้ ({trackedProjects.length})</span>
          </h2>
          {hasTracked && (
            <button
              onClick={() => onNavigateTab('explore')}
              className="text-sm font-bold text-blue-600 hover:text-blue-800 dark:text-blue-300 underline cursor-pointer shrink-0"
            >
              + เพิ่มสาขา
            </button>
          )}
        </div>

        {!hasTracked ? (
          <div className="p-8 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-2xl text-center space-y-3 bg-white dark:bg-slate-900">
            <Compass className="h-10 w-10 text-slate-400 mx-auto" />
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
              ยังไม่มีสาขาที่บันทึกไว้ ค้นหาสาขาที่สนใจแล้วกดบันทึก ระบบจะสร้างปฏิทินกับเช็กลิสต์ให้เอง
            </p>
            <button
              onClick={() => onNavigateTab('explore')}
              className="px-5 py-2.5 text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl cursor-pointer shadow-md"
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
                  className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xs hover:shadow-md transition-all space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className={`px-2.5 py-0.5 rounded-lg text-xs font-black uppercase ${uniTheme.pill}`}>
                      {uniThai}
                    </span>
                    {p.project.source.verificationStatus === 'verified' && (
                      <span className="text-emerald-700 dark:text-emerald-300 inline-flex items-center gap-1 text-xs font-semibold">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        <span>ตรวจแล้ว</span>
                      </span>
                    )}
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {p.faculty.nameTh} · {round.short}
                    </div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white leading-snug mt-0.5">
                      {p.program.nameTh}
                    </h3>
                  </div>

                  <div className="text-sm text-slate-700 dark:text-slate-300 flex items-center justify-between gap-2">
                    <span>ปิดรับ {formatDateThai(p.applicationCloseDate)}</span>
                    <span className="font-mono font-bold text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 tabular-nums">
                      {getDaysCountdownThai(p.daysUntilClose)}
                    </span>
                  </div>

                  {nextTask && (
                    <button
                      onClick={() => onToggleTask(nextTask.id)}
                      className="w-full p-2.5 bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800 rounded-xl text-left hover:shadow-xs transition-all cursor-pointer"
                      title="แตะเพื่อติ๊กว่าเสร็จ"
                    >
                      <span className="text-[11px] text-amber-800 dark:text-amber-300 font-bold block uppercase tracking-wider">
                        สิ่งที่ต้องทำถัดไป (แตะเพื่อติ๊กเสร็จ)
                      </span>
                      <span className="font-semibold text-sm text-slate-900 dark:text-white line-clamp-1 mt-0.5">
                        {nextTask.titleTh}
                      </span>
                    </button>
                  )}

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onOpenDetail(p)}
                      className="font-bold text-sm text-blue-600 hover:text-blue-800 dark:text-blue-300 cursor-pointer"
                    >
                      ดูเกณฑ์และเอกสาร →
                    </button>
                    <button
                      onClick={() => onUntrack(p.project.id)}
                      className="p-2 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950 transition-colors cursor-pointer"
                      title="นำออกจากลิสต์"
                      aria-label="นำสาขานี้ออกจากลิสต์"
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
  );
};
