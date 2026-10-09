import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  Filter,
} from 'lucide-react';
import {
  EnrichedAdmissionProject,
  formatDateThai,
  getUniversityThaiAbbr,
  THAI_MONTHS_FULL,
} from '../utils/tcasHelpers';
import { UserTask } from '../types/tcas';

interface TimelineViewProps {
  allProjects: EnrichedAdmissionProject[];
  trackedIds: Set<string>;
  tasks: UserTask[];
  onOpenDetail: (project: EnrichedAdmissionProject) => void;
  onToggleTask: (taskId: string) => void;
  embedded?: boolean;
}

interface TimelineItem {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  category: 'open' | 'close' | 'interview' | 'result' | 'task' | 'other';
  status?: string;
  project?: EnrichedAdmissionProject;
  taskId?: string;
  isCompleted?: boolean;
}

export const TimelineView: React.FC<TimelineViewProps> = ({
  allProjects,
  trackedIds,
  tasks,
  onOpenDetail,
  onToggleTask,
  embedded = false,
}) => {
  const [filterTrackedOnly, setFilterTrackedOnly] = useState(true);

  // Build sorted timeline items
  const timelineItems: TimelineItem[] = [];

  allProjects.forEach((p) => {
    const isTracked = trackedIds.has(p.project.id);
    if (filterTrackedOnly && !isTracked) return;

    p.project.events.forEach((ev) => {
      let category: TimelineItem['category'] = 'other';
      if (ev.type === 'APPLICATION_OPENS') category = 'open';
      else if (ev.type === 'APPLICATION_CLOSES') category = 'close';
      else if (ev.type === 'INTERVIEW') category = 'interview';
      else if (ev.type === 'RESULT_ANNOUNCEMENT') category = 'result';

      const uniTh = getUniversityThaiAbbr(p.university.id);

      timelineItems.push({
        id: `${p.project.id}-${ev.id}`,
        date: ev.startDate,
        title: `${uniTh} — ${ev.titleTh || ev.titleEn}`,
        subtitle: `${p.program.nameTh} (${p.faculty.nameTh})`,
        category,
        status: ev.status,
        project: p,
      });
    });
  });

  // Include user tasks in timeline if they have a due date
  tasks.forEach((t) => {
    if (t.dueDate) {
      const associatedProject = allProjects.find((p) => p.project.id === t.projectId);
      const uniTh = associatedProject ? getUniversityThaiAbbr(associatedProject.university.id) : '';

      timelineItems.push({
        id: t.id,
        date: t.dueDate,
        title: t.titleTh || t.titleEn,
        subtitle: associatedProject ? `${uniTh} · ${associatedProject.program.nameTh}` : 'เช็กลิสต์ส่วนตัว',
        category: 'task',
        taskId: t.id,
        isCompleted: t.isCompleted,
        project: associatedProject,
      });
    }
  });

  // Sort ascending by date
  timelineItems.sort((a, b) => a.date.localeCompare(b.date));

  // Group by month
  const groupedByMonth = timelineItems.reduce((acc, item) => {
    const parts = item.date.split('-');
    if (parts.length < 2) return acc;
    const yearMonth = `${parts[0]}-${parts[1]}`;
    if (!acc[yearMonth]) acc[yearMonth] = [];
    acc[yearMonth].push(item);
    return acc;
  }, {} as Record<string, TimelineItem[]>);

  const getCategoryBadge = (cat: TimelineItem['category']) => {
    switch (cat) {
      case 'open':
        return <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-100 text-emerald-800">เปิดรับสมัคร</span>;
      case 'close':
        return <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-rose-100 text-rose-800">ปิดรับสมัคร</span>;
      case 'interview':
        return <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-purple-100 text-purple-800">สอบสัมภาษณ์</span>;
      case 'result':
        return <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-blue-100 text-blue-800">ประกาศผล</span>;
      case 'task':
        return <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-100 text-amber-800">งานที่ต้องทำ</span>;
      default:
        return <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-slate-800">กำหนดการ</span>;
    }
  };

  return (
    <div className={embedded ? 'space-y-4' : 'space-y-6'}>
      {/* Header Bar */}
      <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${embedded ? 'pb-3 border-b border-slate-100' : 'border-b border-slate-200 pb-5'}`}>
        <div>
          <h2 className={`font-bold tracking-tight text-slate-900 ${embedded ? 'text-base sm:text-lg flex items-center gap-2' : 'text-xl sm:text-2xl'}`}>
            {embedded && <Clock className="h-4 w-4 text-blue-600" />}
            <span>ไทม์ไลน์กำหนดการรับสมัครตามลำดับเวลา</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            รวบรวมวันเปิด-ปิดรับสมัคร วันสัมภาษณ์ วันประกาศผล และเช็กลิสต์ของคุณตามลำดับปฏิทิน
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilterTrackedOnly(!filterTrackedOnly)}
            className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer border flex items-center gap-1.5 shadow-2xs ${
              filterTrackedOnly
                ? 'bg-blue-600 border-blue-600 text-white shadow-blue-500/20'
                : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50'
            }`}
            title="กดปุ่มนี้เพื่อสลับระหว่าง: แสดงเฉพาะสาขาที่บันทึกไว้ กับแสดงทุกมหาวิทยาลัย"
          >
            {filterTrackedOnly ? (
              <>
                <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                <span>แสดง: เฉพาะที่บันทึกไว้</span>
                <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded font-normal hidden sm:inline ml-0.5">
                  (กดเพื่อดูทุกมหาลัย)
                </span>
              </>
            ) : (
              <>
                <span>🌐 แสดง: ทุกมหาวิทยาลัย</span>
                <span className="text-[10px] bg-blue-50 text-blue-700 border border-blue-200 px-1.5 py-0.5 rounded font-bold hidden sm:inline ml-0.5">
                  กดปุ่มเพื่อกรองเฉพาะที่บันทึก
                </span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Timeline items grouped by month */}
      {Object.keys(groupedByMonth).length === 0 ? (
        <div className="p-12 text-center bg-white border border-slate-200 rounded-2xl space-y-3">
          <Clock className="h-8 w-8 text-slate-400 mx-auto" />
          <h3 className="text-sm font-semibold text-slate-800">ไม่มีกำหนดการในตัวกรองนี้</h3>
          <p className="text-xs text-slate-500">
            ลองกดปุ่มด้านบนเพื่อสลับเป็น "กำลังแสดง: ทุกมหาวิทยาลัย" เพื่อดูกำหนดการทั้งหมด
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {Object.entries(groupedByMonth).map(([yearMonth, items]) => {
            const [yStr, mStr] = yearMonth.split('-');
            const yearCE = parseInt(yStr, 10);
            const monthIdx = parseInt(mStr, 10) - 1;
            const monthThai = `${THAI_MONTHS_FULL[monthIdx]} ${yearCE + 543}`;

            return (
              <div key={yearMonth} className="space-y-3">
                <div className="sticky top-16 z-20 bg-slate-50/95 backdrop-blur-md py-1.5 px-3 rounded-xl border border-slate-200 inline-block font-bold text-xs text-slate-800 shadow-2xs">
                  📅 {monthThai}
                </div>

                <div className="bg-white border border-slate-200/90 rounded-2xl divide-y divide-slate-100 overflow-hidden shadow-xs">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 flex items-start justify-between gap-4 hover:bg-slate-50/70 transition-colors"
                    >
                      <div className="flex items-start gap-3 min-w-0">
                        {item.category === 'task' ? (
                          <button
                            onClick={() => item.taskId && onToggleTask(item.taskId)}
                            className={`h-5 w-5 mt-0.5 rounded-md border flex items-center justify-center shrink-0 transition-colors cursor-pointer ${
                              item.isCompleted
                                ? 'bg-emerald-600 border-emerald-600 text-white'
                                : 'border-slate-300 hover:border-slate-500 bg-white'
                            }`}
                          >
                            {item.isCompleted && <span className="text-xs font-bold">✓</span>}
                          </button>
                        ) : (
                          <div className="p-1.5 rounded-lg bg-slate-100 text-slate-600 shrink-0 mt-0.5">
                            <Clock className="h-4 w-4" />
                          </div>
                        )}

                        <div className="space-y-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            {getCategoryBadge(item.category)}
                            <span className="font-mono text-xs font-bold text-slate-700">
                              {formatDateThai(item.date)}
                            </span>
                          </div>

                          <div
                            onClick={() => item.project && onOpenDetail(item.project)}
                            className={`text-sm font-bold leading-snug cursor-pointer hover:text-blue-600 transition-colors ${
                              item.isCompleted ? 'line-through text-slate-400' : 'text-slate-900'
                            }`}
                          >
                            {item.title}
                          </div>

                          <div className="text-xs text-slate-500">
                            {item.subtitle}
                          </div>
                        </div>
                      </div>

                      {item.project && (
                        <button
                          onClick={() => onOpenDetail(item.project!)}
                          className="text-xs font-bold text-blue-600 hover:text-blue-800 shrink-0 p-1 cursor-pointer"
                        >
                          รายละเอียด →
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
