import React, { useState, useMemo } from 'react';
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Filter,
  CheckCircle2,
  Clock,
  ExternalLink,
  Layers,
  ArrowUpDown,
  MoveUp,
  MoveDown,
  Star,
  Check,
  Plus,
  Eye,
  SlidersHorizontal,
  X,
  Building2,
  FileText,
  GraduationCap,
  Sparkles,
  HelpCircle,
  AlertTriangle,
  BookmarkCheck,
  Bookmark,
  Share2,
  Info,
  RefreshCw,
  Award,
  Users,
  ShieldCheck,
  Database,
  Globe,
  CheckSquare,
  Trash2,
  ListChecks,
} from 'lucide-react';
import {
  EnrichedAdmissionProject,
  formatDateThai,
  formatDateThaiFull,
  formatDateRangeThai,
  getDaysCountdownThai,
  getDaysLeftThai,
  getTodayStr,
  getUniversityThaiAbbr,
  getRoundLabel,
  getUniversityTheme,
  getFieldCategoryLabel,
  THAI_MONTHS_FULL,
} from '../utils/tcasHelpers';
import { UserTask, AdmissionEvent } from '../types/tcas';
import { TimelineView } from './TimelineView';

export type CalendarSubView = 'all' | 'grid' | 'timeline' | 'checklist';

interface CalendarViewProps {
  allProjects: EnrichedAdmissionProject[];
  trackedIds: Set<string>;
  tasks: UserTask[];
  onOpenDetail: (project: EnrichedAdmissionProject) => void;
  onToggleTrack?: (projectId: string) => void;
  onOpenSourceModal?: () => void;
  onToggleTask?: (taskId: string) => void;
  onAddTask?: (newTask: Omit<UserTask, 'id' | 'isCompleted'>) => void;
  onDeleteTask?: (taskId: string) => void;
  initialSubView?: CalendarSubView;
}

interface CalendarDay {
  date: Date;
  dateStr: string; // 'YYYY-MM-DD'
  dayNum: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isPast: boolean;
  isFuture: boolean;
  isWeekend: boolean;
}

interface SpanningBar {
  id: string;
  projectId: string;
  project: EnrichedAdmissionProject;
  labelTh: string;
  labelEn: string;
  uniAbbrTh: string;
  startCol: number; // 0 to 6
  endCol: number;   // 0 to 6
  span: number;     // 1 to 7
  isStart: boolean; // begins in this week
  isEnd: boolean;   // ends in this week
  isFirstAppearanceInView: boolean; // earliest visible week in this calendar view
  openDateStr: string;
  closeDateStr: string;
  slotRow: number;
  isVerified: boolean;
}

// Reference date: real today (device date, Asia/Bangkok) — same clock as tcasHelpers
const TODAY_DATE_STR = getTodayStr();

export const CalendarView: React.FC<CalendarViewProps> = ({
  allProjects,
  trackedIds,
  tasks,
  onOpenDetail,
  onToggleTrack,
  onOpenSourceModal,
  onToggleTask,
  onAddTask,
  onDeleteTask,
  initialSubView = 'all',
}) => {
  // Main feature All-in-One view mode
  const [subView, setSubView] = useState<CalendarSubView>(initialSubView);

  // What to show: saved universities, tasks, or both
  const [displayMode, setDisplayMode] = useState<'both' | 'uni' | 'tasks'>('both');

  // Active calendar month: default to November 2026 (พฤศจิกายน 2569 - ช่วงพีค TCAS 1 Portfolio)
  const [currentYear, setCurrentYear] = useState<number>(2026);
  const [currentMonth, setCurrentMonth] = useState<number>(10); // 10 = November (0-indexed)

  const [selectedRound, setSelectedRound] = useState<string>('All');
  const [onlyTracked, setOnlyTracked] = useState<boolean>(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string>('');

  // Inspector Drawer for clicked line
  const [inspectedProject, setInspectedProject] = useState<EnrichedAdmissionProject | null>(null);

  // Day Inspector Modal state (when user clicks any day or checklist badge)
  const [dayInspectorDate, setDayInspectorDate] = useState<string | null>(null);
  const [dayInlineTaskTitle, setDayInlineTaskTitle] = useState('');

  // Add Task Modal state for calendar checklist
  const [showAddTaskModal, setShowAddTaskModal] = useState<boolean>(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDueDate, setNewTaskDueDate] = useState('2026-11-13');
  const [newTaskProjectId, setNewTaskProjectId] = useState('');
  const [newTaskCategory, setNewTaskCategory] = useState<UserTask['category']>('document');

  // Checklist filter by project inside Calendar
  const [checklistFilterProject, setChecklistFilterProject] = useState<string>('all');

  // Overlap and Prioritization controls
  const [maxSlotsPerWeek, setMaxSlotsPerWeek] = useState<number>(4); // Max visible bars: default 4 lines
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null); // Hover to isolate/highlight
  const [showReorderModal, setShowReorderModal] = useState<boolean>(false);

  // Drag and Drop reordering state (only '=' handle activates drag)
  const [draggableProjectId, setDraggableProjectId] = useState<string | null>(null);
  const [draggedProjectIndex, setDraggedProjectIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  // Quick Thai month switcher shortcuts
  const MONTH_SHORTCUTS = [
    { year: 2026, month: 9, label: 'ต.ค. 69' },
    { year: 2026, month: 10, label: 'พ.ย. 69 (ช่วงพีค)' },
    { year: 2026, month: 11, label: 'ธ.ค. 69' },
    { year: 2027, month: 0, label: 'ม.ค. 70' },
    { year: 2027, month: 1, label: 'ก.พ. 70' },
    { year: 2027, month: 2, label: 'มี.ค. 70' },
  ];

  // Custom ordering priority array
  const [customOrder, setCustomOrder] = useState<string[]>(() =>
    allProjects.map((p) => p.project.id)
  );

  // Sync customOrder with projects
  const orderedProjects = useMemo(() => {
    const projectMap = new Map(allProjects.map((p) => [p.project.id, p]));
    const result: EnrichedAdmissionProject[] = [];

    customOrder.forEach((id) => {
      const p = projectMap.get(id);
      if (p) {
        result.push(p);
      }
    });

    allProjects.forEach((p) => {
      if (!result.some((item) => item.project.id === p.project.id)) {
        result.push(p);
      }
    });

    return result;
  }, [allProjects, customOrder]);

  // Filter projects by tracked toggle and round
  const filteredProjects = useMemo(() => {
    return orderedProjects.filter((p) => {
      if (onlyTracked && !trackedIds.has(p.project.id)) return false;
      if (selectedRound === 'Portfolio' && p.project.round !== 'TCAS1_PORTFOLIO')
        return false;
      if (selectedRound === 'Round 2' && p.project.round !== 'TCAS2_QUOTA')
        return false;
      if (selectedRound === 'Round 3' && p.project.round !== 'TCAS3_ADMISSION')
        return false;
      return true;
    });
  }, [orderedProjects, onlyTracked, trackedIds, selectedRound]);

  // Selected project resolution (only when chosen by user click)
  const selectedProject = useMemo(() => {
    if (!selectedProjectId) return null;
    return allProjects.find((p) => p.project.id === selectedProjectId) || null;
  }, [allProjects, selectedProjectId]);

  // Month navigation helpers
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(11);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const thaiMonthName = `${THAI_MONTHS_FULL[currentMonth]} ${currentYear + 543}`;

  // Build the complete 7-column monthly calendar matrix
  const weeksMatrix = useMemo(() => {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

    const startDayOfWeek = firstDayOfMonth.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const totalDaysInMonth = lastDayOfMonth.getDate();

    const days: CalendarDay[] = [];

    // 1. Previous month leading days
    const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();
    for (let i = startDayOfWeek - 1; i >= 0; i--) {
      const d = prevMonthLastDay - i;
      const prevDate = new Date(currentYear, currentMonth - 1, d);
      const mStr = String(prevDate.getMonth() + 1).padStart(2, '0');
      const dStr = String(d).padStart(2, '0');
      const dateStr = `${prevDate.getFullYear()}-${mStr}-${dStr}`;
      days.push({
        date: prevDate,
        dateStr,
        dayNum: d,
        isCurrentMonth: false,
        isToday: dateStr === TODAY_DATE_STR,
        isPast: dateStr < TODAY_DATE_STR,
        isFuture: dateStr > TODAY_DATE_STR,
        isWeekend: prevDate.getDay() === 0 || prevDate.getDay() === 6,
      });
    }

    // 2. Current month days
    for (let d = 1; d <= totalDaysInMonth; d++) {
      const curDate = new Date(currentYear, currentMonth, d);
      const mStr = String(currentMonth + 1).padStart(2, '0');
      const dStr = String(d).padStart(2, '0');
      const dateStr = `${currentYear}-${mStr}-${dStr}`;
      const isToday = dateStr === TODAY_DATE_STR;
      days.push({
        date: curDate,
        dateStr,
        dayNum: d,
        isCurrentMonth: true,
        isToday,
        isPast: dateStr < TODAY_DATE_STR,
        isFuture: dateStr > TODAY_DATE_STR,
        isWeekend: curDate.getDay() === 0 || curDate.getDay() === 6,
      });
    }

    // 3. Next month trailing days to complete full 7-day grid
    const remainingSlots = (7 - (days.length % 7)) % 7;
    for (let d = 1; d <= remainingSlots; d++) {
      const nextDate = new Date(currentYear, currentMonth + 1, d);
      const mStr = String(nextDate.getMonth() + 1).padStart(2, '0');
      const dStr = String(d).padStart(2, '0');
      const dateStr = `${nextDate.getFullYear()}-${mStr}-${dStr}`;
      days.push({
        date: nextDate,
        dateStr,
        dayNum: d,
        isCurrentMonth: false,
        isToday: dateStr === TODAY_DATE_STR,
        isPast: dateStr < TODAY_DATE_STR,
        isFuture: dateStr > TODAY_DATE_STR,
        isWeekend: nextDate.getDay() === 0 || nextDate.getDay() === 6,
      });
    }

    // Group into 7-day weeks
    const weeks: CalendarDay[][] = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }
    return weeks;
  }, [currentYear, currentMonth]);

  // Compute multi-day spanning lines for each week row
  const weekSpanningBars = useMemo(() => {
    // 1. Determine earliest week in current matrix where each project first appears
    const projectFirstWeekMap = new Map<string, number>();
    weeksMatrix.forEach((week, weekIdx) => {
      const weekStartStr = week[0].dateStr;
      const weekEndStr = week[6].dateStr;

      filteredProjects.forEach((p) => {
        const openStr = p.applicationOpenDate;
        const closeStr = p.applicationCloseDate;
        if (openStr && closeStr && openStr <= weekEndStr && closeStr >= weekStartStr) {
          if (!projectFirstWeekMap.has(p.project.id)) {
            projectFirstWeekMap.set(p.project.id, weekIdx);
          }
        }
      });
    });

    return weeksMatrix.map((week, weekIdx) => {
      const weekStartStr = week[0].dateStr;
      const weekEndStr = week[6].dateStr;

      const rawBars: Omit<SpanningBar, 'slotRow'>[] = [];

      filteredProjects.forEach((p) => {
        const openStr = p.applicationOpenDate;
        const closeStr = p.applicationCloseDate;

        if (openStr && closeStr) {
          if (openStr <= weekEndStr && closeStr >= weekStartStr) {
            let startCol = 0;
            let isStart = false;
            if (openStr >= weekStartStr) {
              const dayIdx = week.findIndex((d) => d.dateStr === openStr);
              if (dayIdx !== -1) {
                startCol = dayIdx;
                isStart = true;
              }
            }

            let endCol = 6;
            let isEnd = false;
            if (closeStr <= weekEndStr) {
              const dayIdx = week.findIndex((d) => d.dateStr === closeStr);
              if (dayIdx !== -1) {
                endCol = dayIdx;
                isEnd = true;
              }
            }

            const span = Math.max(1, endCol - startCol + 1);
            const isVerified = p.project.source.verificationStatus === 'verified';
            const uniTh = getUniversityThaiAbbr(p.university.id);
            const isFirstAppearanceInView = projectFirstWeekMap.get(p.project.id) === weekIdx;

            rawBars.push({
              id: `${p.project.id}-app-${weekStartStr}`,
              projectId: p.project.id,
              project: p,
              labelTh: `${uniTh} · ${p.program.nameTh}`,
              labelEn: `${p.university.abbr} · ${p.program.nameEn}`,
              uniAbbrTh: uniTh,
              startCol,
              endCol,
              span,
              isStart,
              isEnd,
              isFirstAppearanceInView,
              openDateStr: openStr,
              closeDateStr: closeStr,
              isVerified,
            });
          }
        }
      });

      // Pack bars into vertical slot rows without overlapping
      const slotGrid: (string | null)[][] = [];
      const packedBars: SpanningBar[] = [];

      rawBars.forEach((bar) => {
        let assignedSlot = 0;

        while (true) {
          if (!slotGrid[assignedSlot]) {
            slotGrid[assignedSlot] = [null, null, null, null, null, null, null];
          }

          let hasCollision = false;
          for (let c = bar.startCol; c <= bar.endCol; c++) {
            if (slotGrid[assignedSlot][c] !== null) {
              hasCollision = true;
              break;
            }
          }

          if (!hasCollision) {
            for (let c = bar.startCol; c <= bar.endCol; c++) {
              slotGrid[assignedSlot][c] = bar.projectId;
            }
            packedBars.push({ ...bar, slotRow: assignedSlot });
            break;
          }

          assignedSlot++;
        }
      });

      // Calculate overflow per column
      const overflowCountByCol = [0, 0, 0, 0, 0, 0, 0];
      packedBars.forEach((b) => {
        if (b.slotRow >= maxSlotsPerWeek) {
          for (let c = b.startCol; c <= b.endCol; c++) {
            overflowCountByCol[c]++;
          }
        }
      });

      return {
        week,
        packedBars,
        overflowCountByCol,
        maxSlotsUsed: slotGrid.length,
      };
    });
  }, [weeksMatrix, filteredProjects, maxSlotsPerWeek]);

  // Check if any days in the current month have overflow
  const hasMonthOverflow = useMemo(() => {
    return weekSpanningBars.some((w) =>
      w.overflowCountByCol.some((count) => count > 0)
    );
  }, [weekSpanningBars]);

  // Reordering handlers
  const movePriority = (projectId: string, direction: 'up' | 'down') => {
    setCustomOrder((prev) => {
      const idx = prev.indexOf(projectId);
      if (idx === -1) return prev;
      const targetIdx = direction === 'up' ? idx - 1 : idx + 1;
      if (targetIdx < 0 || targetIdx >= prev.length) return prev;

      const next = [...prev];
      const temp = next[idx];
      next[idx] = next[targetIdx];
      next[targetIdx] = temp;
      return next;
    });
  };

  const pinToTopPriority = (projectId: string) => {
    setCustomOrder((prev) => {
      const remaining = prev.filter((id) => id !== projectId);
      return [projectId, ...remaining];
    });
  };

  const reorderPriority = (sourceIdx: number, targetIdx: number) => {
    if (sourceIdx === targetIdx) return;
    setCustomOrder(() => {
      const currentList = orderedProjects.map((p) => p.project.id);
      const itemToMove = currentList[sourceIdx];
      if (!itemToMove) return currentList;
      const nextList = [...currentList];
      nextList.splice(sourceIdx, 1);
      nextList.splice(targetIdx, 0, itemToMove);
      return nextList;
    });
  };

  // Filtered tasks for checklist view in Calendar
  const calendarFilteredTasks = useMemo(() => {
    return tasks.filter((t) => {
      if (checklistFilterProject !== 'all' && t.projectId !== checklistFilterProject) {
        return false;
      }
      return true;
    });
  }, [tasks, checklistFilterProject]);

  const totalCalendarTasks = tasks.length;
  const completedCalendarTasks = tasks.filter((t) => t.isCompleted).length;
  const calendarProgressPercent =
    totalCalendarTasks > 0
      ? Math.round((completedCalendarTasks / totalCalendarTasks) * 100)
      : 0;

  const handleCreateGeneralTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim() || !onAddTask) return;

    onAddTask({
      titleEn: newTaskTitle.trim(),
      titleTh: newTaskTitle.trim(),
      dueDate: newTaskDueDate || undefined,
      projectId: newTaskProjectId || undefined,
      category: newTaskCategory,
      isAutoGenerated: false,
    });

    setNewTaskTitle('');
    setShowAddTaskModal(false);
  };

  const handleAddDayInlineTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dayInlineTaskTitle.trim() || !dayInspectorDate || !onAddTask) return;

    onAddTask({
      titleEn: dayInlineTaskTitle.trim(),
      titleTh: dayInlineTaskTitle.trim(),
      dueDate: dayInspectorDate,
      projectId: Array.from(trackedIds)[0] || allProjects[0]?.project.id,
      category: 'document',
      isAutoGenerated: false,
    });

    setDayInlineTaskTitle('');
  };

  const getTaskCategoryBadge = (cat: string) => {
    switch (cat) {
      case 'document':
        return <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-blue-100 text-blue-800">เตรียมเอกสาร</span>;
      case 'submission':
        return <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-100 text-emerald-800">ยื่นใบสมัคร</span>;
      case 'payment':
        return <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-100 text-amber-800">ชำระค่าสมัคร</span>;
      case 'interview':
        return <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-purple-100 text-purple-800">สอบสัมภาษณ์</span>;
      default:
        return <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-slate-800">ทั่วไป</span>;
    }
  };

  // Computed data for currently inspected day in Day Inspector modal
  const dayInspectorData = useMemo(() => {
    if (!dayInspectorDate) return null;

    const dayTasks = tasks.filter((t) => t.dueDate === dayInspectorDate);

    const events: {
      id: string;
      type: string;
      category: 'open' | 'close' | 'interview' | 'result' | 'other';
      title: string;
      subtitle: string;
      project: EnrichedAdmissionProject;
      badgeColor: string;
    }[] = [];

    allProjects.forEach((p) => {
      if (onlyTracked && !trackedIds.has(p.project.id)) return;
      const uniTh = getUniversityThaiAbbr(p.university.id);

      if (p.applicationOpenDate === dayInspectorDate) {
        events.push({
          id: `${p.project.id}-open`,
          type: 'เปิดรับสมัคร',
          category: 'open',
          title: `${uniTh} · ${p.program.nameTh}`,
          subtitle: `${p.faculty.nameTh} (${getRoundLabel(p.project.round).short})`,
          project: p,
          badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
        });
      }

      if (p.applicationCloseDate === dayInspectorDate) {
        events.push({
          id: `${p.project.id}-close`,
          type: 'ปิดรับสมัคร',
          category: 'close',
          title: `${uniTh} · ${p.program.nameTh}`,
          subtitle: `${p.faculty.nameTh} (${getRoundLabel(p.project.round).short})`,
          project: p,
          badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
        });
      }

      p.project.events.forEach((ev) => {
        if (ev.startDate === dayInspectorDate && ev.type !== 'APPLICATION_OPENS' && ev.type !== 'APPLICATION_CLOSES') {
          let typeLabel = 'กำหนดการ';
          let cat: 'interview' | 'result' | 'other' = 'other';
          let badgeCol = 'bg-blue-100 text-blue-800 border-blue-300';
          if (ev.type === 'INTERVIEW') {
            typeLabel = 'สอบสัมภาษณ์';
            cat = 'interview';
            badgeCol = 'bg-purple-100 text-purple-800 border-purple-300';
          } else if (ev.type === 'RESULT_ANNOUNCEMENT') {
            typeLabel = 'ประกาศผล';
            cat = 'result';
            badgeCol = 'bg-blue-100 text-blue-800 border-blue-300';
          }
          events.push({
            id: `${p.project.id}-${ev.id}`,
            type: typeLabel,
            category: cat,
            title: `${uniTh} · ${ev.titleTh || ev.titleEn}`,
            subtitle: `${p.program.nameTh} (${p.faculty.nameTh})`,
            project: p,
            badgeColor: badgeCol,
          });
        }
      });
    });

    return {
      dateStr: dayInspectorDate,
      dateThai: formatDateThai(dayInspectorDate, true),
      tasks: dayTasks,
      events,
    };
  }, [dayInspectorDate, tasks, allProjects, onlyTracked, trackedIds]);

  const renderChecklistSection = () => {
    return (
      <div className="space-y-4">
        {/* Checklist Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div>
            <h2 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 flex items-center gap-2">
              <CheckSquare className="h-4 w-4 text-emerald-600" />
              <span>เช็กลิสต์สิ่งที่ต้องทำในปฏิทิน</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              ติดตามความคืบหน้าการเตรียมเอกสาร การยื่นสมัคร และงานที่ต้องทำตามกำหนดส่ง
            </p>
          </div>

          {onAddTask && (
            <button
              onClick={() => {
                setNewTaskDueDate(`${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-15`);
                setShowAddTaskModal(true);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-2xs cursor-pointer shrink-0"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>+ เพิ่มสิ่งที่ต้องทำ</span>
            </button>
          )}
        </div>

        {/* Overall Progress Bar */}
        <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-3.5 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-700">
              ความคืบหน้าเช็กลิสต์ทั้งหมด
            </span>
            <span className="font-mono font-bold text-blue-700 tabular-nums">
              เสร็จสิ้น {completedCalendarTasks} / {totalCalendarTasks} รายการ ({calendarProgressPercent}%)
            </span>
          </div>
          <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-300"
              style={{ width: `${calendarProgressPercent}%` }}
            />
          </div>
        </div>

        {/* Program Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs scrollbar-none">
          <button
            onClick={() => setChecklistFilterProject('all')}
            className={`px-3 py-1 rounded-lg font-bold whitespace-nowrap transition-all cursor-pointer ${
              checklistFilterProject === 'all'
                ? 'bg-slate-900 text-white shadow-2xs dark:bg-white dark:text-slate-900'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            งานทั้งหมด ({tasks.length})
          </button>

          {orderedProjects
            .filter((p) => trackedIds.has(p.project.id))
            .map((p) => {
              const pTasks = tasks.filter((t) => t.projectId === p.project.id);
              const pDone = pTasks.filter((t) => t.isCompleted).length;
              const uniTh = getUniversityThaiAbbr(p.university.id);

              return (
                <button
                  key={p.project.id}
                  onClick={() => setChecklistFilterProject(p.project.id)}
                  className={`px-3 py-1 rounded-lg font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                    checklistFilterProject === p.project.id
                      ? 'bg-blue-600 text-white shadow-2xs'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{uniTh} — {p.program.nameTh}</span>
                  <span className="font-mono text-[10px] opacity-80 tabular-nums">
                    ({pDone}/{pTasks.length})
                  </span>
                </button>
              );
            })}
        </div>

        {/* Tasks List */}
        {calendarFilteredTasks.length === 0 ? (
          <div className="p-8 text-center bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <CheckCircle2 className="h-7 w-7 text-slate-400 mx-auto" />
            <p className="text-xs font-semibold text-slate-700">ไม่มีรายการเช็กลิสต์ในตัวกรองนี้</p>
            {onAddTask && (
              <button
                onClick={() => setShowAddTaskModal(true)}
                className="text-xs text-blue-600 hover:underline font-bold cursor-pointer"
              >
                + เพิ่มสิ่งที่ต้องทำใหม่
              </button>
            )}
          </div>
        ) : (
          <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden bg-white max-h-[480px] overflow-y-auto">
            {calendarFilteredTasks.map((t) => {
              const associatedProject = allProjects.find((p) => p.project.id === t.projectId);
              const uniTh = associatedProject ? getUniversityThaiAbbr(associatedProject.university.id) : '';

              return (
                <div
                  key={t.id}
                  className={`p-3 flex items-start justify-between gap-3 transition-colors ${
                    t.isCompleted ? 'bg-slate-50/60' : 'hover:bg-slate-50/80'
                  }`}
                >
                  <div className="flex items-start gap-2.5 min-w-0 flex-1">
                    {/* Checkbox */}
                    <button
                      type="button"
                      onClick={() => onToggleTask && onToggleTask(t.id)}
                      className={`h-4.5 w-4.5 mt-0.5 rounded-md border flex items-center justify-center shrink-0 transition-colors cursor-pointer ${
                        t.isCompleted
                          ? 'bg-emerald-600 border-emerald-600 text-white'
                          : 'border-slate-300 hover:border-blue-500 bg-white'
                      }`}
                      title={t.isCompleted ? 'ทำเครื่องหมายว่ายังไม่เสร็จ' : 'ทำเครื่องหมายว่าเสร็จแล้ว'}
                    >
                      {t.isCompleted && <Check className="h-3 w-3 stroke-[3]" />}
                    </button>

                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {getTaskCategoryBadge(t.category)}
                        {t.dueDate && (
                          <span className="font-mono text-[10px] font-bold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">
                            📅 {formatDateThai(t.dueDate)}
                          </span>
                        )}
                        {associatedProject && (
                          <span className="text-[10px] text-blue-700 font-semibold truncate">
                            {uniTh} · {associatedProject.program.nameTh}
                          </span>
                        )}
                      </div>

                      <div
                        className={`text-xs font-bold leading-tight ${
                          t.isCompleted ? 'line-through text-slate-400' : 'text-slate-900'
                        }`}
                      >
                        {t.titleTh || t.titleEn}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1 shrink-0">
                    {associatedProject && (
                      <button
                        type="button"
                        onClick={() => onOpenDetail(associatedProject)}
                        className="p-1 text-slate-400 hover:text-blue-600 text-[11px] font-bold transition-colors cursor-pointer"
                        title="ดูรายละเอียดสาขานี้"
                      >
                        เกณฑ์ →
                      </button>
                    )}
                    {onDeleteTask && !t.isAutoGenerated && (
                      <button
                        type="button"
                        onClick={() => onDeleteTask(t.id)}
                        className="p-1 text-slate-400 hover:text-rose-600 transition-colors cursor-pointer"
                        title="ลบงานนี้"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-3">
      {/* 1. TOP ALL-IN-ONE COMMAND STRIP & MODE SWITCHER */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-2 sm:p-2.5 shadow-xs space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          {/* Brand & SubView Segmented Switcher */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1.5 px-2 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-2xs font-extrabold text-xs">
              <CalendarIcon className="h-4 w-4 text-white" />
              <span>#ปฏิทิน All-in-One</span>
            </div>

            {/* Mode Pills */}
            <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-xl border border-slate-200/80">
              <button
                onClick={() => setSubView('all')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  subView === 'all'
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                }`}
                title="แสดงปฏิทินรายเดือน ไทม์ไลน์ และเช็กลิสต์พร้อมกันในหน้าเดียว"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>รวมทั้งหมด (All-in-One)</span>
              </button>

              <button
                onClick={() => setSubView('grid')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  subView === 'grid'
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                }`}
                title="แสดงเฉพาะตารางปฏิทินรายเดือน"
              >
                <CalendarIcon className="h-3.5 w-3.5" />
                <span>ตารางปฏิทิน</span>
              </button>

              <button
                onClick={() => setSubView('timeline')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  subView === 'timeline'
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                }`}
                title="แสดงเฉพาะไทม์ไลน์กำหนดการตามลำดับเวลา"
              >
                <Clock className="h-3.5 w-3.5" />
                <span>ไทม์ไลน์กำหนดการ</span>
              </button>

              <button
                onClick={() => setSubView('checklist')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  subView === 'checklist'
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                }`}
                title="แสดงเช็กลิสต์สิ่งที่ต้องทำและกำหนดส่ง"
              >
                <CheckSquare className="h-3.5 w-3.5" />
                <span>เช็กลิสต์ในปฏิทิน</span>
                {tasks.filter((t) => !t.isCompleted).length > 0 && (
                  <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold font-mono bg-amber-400 text-slate-900 leading-none">
                    {tasks.filter((t) => !t.isCompleted).length}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Quick Actions & Official Source */}
          <div className="flex items-center gap-2">
            {onAddTask && (
              <button
                onClick={() => {
                  setNewTaskDueDate(`${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-15`);
                  setShowAddTaskModal(true);
                }}
                className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer shadow-2xs"
                title="เพิ่มสิ่งที่ต้องทำใหม่ลงในปฏิทิน"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>+ เพิ่มสิ่งที่ต้องทำ</span>
              </button>
            )}

            {onOpenSourceModal && (
              <button
                onClick={onOpenSourceModal}
                className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 transition-all flex items-center gap-1 cursor-pointer shrink-0"
              >
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                <span className="hidden sm:inline">ที่มาข้อมูลทางการ</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 1b. DISPLAY FILTER: universities / tasks / both */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-700 px-3 py-2 shadow-xs flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs font-bold text-slate-500 dark:text-slate-400">แสดง:</span>
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-0.5 rounded-xl border border-slate-200/80 dark:border-slate-700">
          {([
            { id: 'both', label: 'ทั้งมหาลัย + งาน' },
            { id: 'uni', label: 'เฉพาะมหาลัยที่บันทึก' },
            { id: 'tasks', label: 'เฉพาะงานที่ต้องทำ' },
          ] as const).map((m) => (
            <button
              key={m.id}
              onClick={() => setDisplayMode(m.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                displayMode === m.id
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-300'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
        <span className="text-[11px] text-slate-400 dark:text-slate-500">
          {displayMode === 'both' ? 'เห็นภาพรวมทั้งหมด' : displayMode === 'uni' ? 'โฟกัสเดดไลน์มหาลัย' : 'โฟกัสงานที่ต้องทำ'}
        </span>
      </div>

      {/* 2. CALENDAR CONTROLS & MONTH SELECTOR BAR (SHOWN IN ALL OR GRID MODE) */}
      {(subView === 'all' || subView === 'grid') && displayMode !== 'tasks' && (
        <>
          <div className="bg-white rounded-xl border border-slate-200/90 p-2 sm:p-2.5 shadow-2xs space-y-1.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          {/* Month Selector & Quick month tabs */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200/70">
              <button
                onClick={prevMonth}
                className="p-1 hover:bg-white rounded-md text-slate-700 transition-colors cursor-pointer"
                title="เดือนก่อนหน้า"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
              </button>
              <h2 className="text-xs sm:text-sm font-extrabold text-slate-900 px-2 min-w-[110px] text-center font-sans">
                {thaiMonthName}
              </h2>
              <button
                onClick={nextMonth}
                className="p-1 hover:bg-white rounded-md text-slate-700 transition-colors cursor-pointer"
                title="เดือนถัดไป"
              >
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Quick Thai Month switcher pills */}
            <div className="hidden md:flex items-center gap-1">
              {MONTH_SHORTCUTS.map((m) => {
                const isSelected = currentYear === m.year && currentMonth === m.month;
                return (
                  <button
                    key={`${m.year}-${m.month}`}
                    onClick={() => {
                      setCurrentYear(m.year);
                      setCurrentMonth(m.month);
                    }}
                    className={`px-2 py-0.5 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-2xs'
                        : 'bg-slate-100/80 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                    }`}
                  >
                    {m.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Toolbar: Round Filter, Tracked Toggle, Reorder Button */}
          <div className="flex items-center gap-2 text-xs flex-wrap">
            {/* Round Filter */}
            <div className="flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded-lg border border-slate-200">
              <span className="text-[10px] font-semibold text-slate-500">รอบ:</span>
              <select
                value={selectedRound}
                onChange={(e) => setSelectedRound(e.target.value)}
                className="text-[11px] font-bold bg-transparent text-slate-700 cursor-pointer focus:outline-none"
              >
                <option value="All">ทุกรอบ TCAS</option>
                <option value="Portfolio">รอบ 1 Portfolio</option>
                <option value="Round 2">รอบ 2 โควตา</option>
                <option value="Round 3">รอบ 3 Admission</option>
              </select>
            </div>

            {/* Tracked Toggle with clear explanatory copy so user knows it's clickable */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setOnlyTracked(!onlyTracked)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer border flex items-center gap-1.5 shadow-2xs ${
                  onlyTracked
                    ? 'bg-blue-600 text-white border-blue-600 shadow-blue-500/20'
                    : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-100 hover:border-slate-400'
                }`}
                title="กดปุ่มนี้เพื่อสลับระหว่าง: แสดงเฉพาะสาขาที่บันทึกไว้ กับแสดงทุกมหาวิทยาลัย"
              >
                {onlyTracked ? (
                  <>
                    <BookmarkCheck className="h-3.5 w-3.5 text-white shrink-0" />
                    <span>✓ กำลังแสดง: เฉพาะที่บันทึก</span>
                    <span className="text-[9px] bg-white/20 px-1 py-0.5 rounded font-normal hidden sm:inline ml-0.5">
                      (กดเพื่อดูทุกมหาลัย)
                    </span>
                  </>
                ) : (
                  <>
                    <Globe className="h-3.5 w-3.5 text-slate-500 shrink-0" />
                    <span>กำลังแสดง: ทุกมหาวิทยาลัย</span>
                    <span className="text-[9px] bg-blue-50 text-blue-700 border border-blue-200 px-1.5 py-0.5 rounded font-bold hidden sm:inline ml-0.5">
                      กดปุ่มนี้เพื่อกรองเฉพาะที่บันทึก
                    </span>
                  </>
                )}
              </button>
            </div>

            {/* Reorder Button with drag handle preview */}
            <button
              onClick={() => setShowReorderModal(true)}
              className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 inline-flex items-center gap-1.5 cursor-pointer shadow-2xs transition-all"
              title="กดเพื่อเปิดหน้าต่างจัดลำดับความสำคัญของเส้นกำหนดการในปฏิทิน (ลากสลับแถว =)"
            >
              <span className="font-mono font-black text-indigo-700 bg-indigo-200/80 px-1 rounded text-[10px] leading-none">=</span>
              <span>จัดลำดับเส้นปฏิทิน</span>
              <span className="text-[9px] text-indigo-500 font-normal hidden lg:inline">(กดเพื่อลากสลับ)</span>
            </button>
          </div>
        </div>

        {/* Compact Micro Legend & Guidance */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-2 py-0.5 bg-slate-50 rounded-md text-[10px] text-slate-500 border border-slate-200/60">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-slate-200 border border-slate-300 rounded-2xs" />
              <span>เมื่อวาน/อดีต</span>
            </span>
            <span className="flex items-center gap-1 font-bold text-emerald-800">
              <span className="w-2 h-2 bg-emerald-200 border border-emerald-500 rounded-2xs ring-1 ring-emerald-400" />
              <span>วันนี้ ({formatDateThai(TODAY_DATE_STR)})</span>
            </span>
            <span className="flex items-center gap-1 font-semibold text-slate-800">
              <span className="text-[10px] text-amber-500 font-black">★</span>
              <span>เส้นสีสดเข้ม = สาขาที่คุณบันทึกไว้</span>
            </span>
            <span className="flex items-center gap-1 text-slate-500">
              <span className="w-2 h-2 bg-slate-100 border border-slate-300 rounded-2xs" />
              <span>เส้นสีอ่อน = สาขาทั่วไปที่ยังไม่ได้บันทึก (สบายตา)</span>
            </span>
          </div>
          <span className="hidden sm:inline text-slate-400 text-[10px]">
            ชี้เมาส์ที่เส้นเพื่อไฮไลต์ · คลิกเส้นเพื่อดูเกณฑ์ · กดปุ่มจัดลำดับเส้นเพื่อลากย้าย (=)
          </span>
        </div>
      </div>

      {/* 3. THE TRUE MONTHLY CALENDAR GRID IN THAI */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
        {/* 7 Weekday Headers in Thai */}
        <div className="grid grid-cols-7 border-b border-slate-200 bg-slate-100/90 text-[11px] font-bold text-center">
          {['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสฯ', 'ศุกร์', 'เสาร์'].map((d, i) => (
            <div
              key={d}
              className={`py-1 border-r last:border-r-0 border-slate-200 tracking-wide ${
                i === 0 || i === 6 ? 'text-slate-400 bg-slate-50/70' : 'text-slate-700'
              }`}
            >
              {d}
            </div>
          ))}
        </div>

        {/* Week Rows */}
        <div className="divide-y divide-slate-200">
          {weeksMatrix.map((week, weekIdx) => {
            const { packedBars } = weekSpanningBars[weekIdx];

            return (
              <div
                key={`week-row-${weekIdx}`}
                className="relative min-h-[66px] sm:min-h-[72px] max-h-[78px] flex flex-col bg-white overflow-hidden"
              >
                {/* 1. Underlying 7 Day Grid Cells */}
                <div className="absolute inset-0 grid grid-cols-7 divide-x divide-slate-200 pointer-events-none">
                  {week.map((day) => {
                    return (
                      <div
                        key={day.dateStr}
                        className={`h-full flex flex-col justify-start p-1 transition-colors ${
                          day.isToday
                            ? 'bg-emerald-100/90 text-emerald-950 ring-1 ring-emerald-500 ring-inset font-bold z-10'
                            : day.isPast
                            ? day.isCurrentMonth
                              ? 'bg-slate-100/90 text-slate-500'
                              : 'bg-slate-100/60 text-slate-400'
                            : day.isCurrentMonth
                            ? 'bg-white text-slate-800'
                            : 'bg-slate-50/70 text-slate-400'
                        }`}
                      >
                        {/* Day Number Header */}
                        <div className="flex items-center justify-between h-3.5">
                          <div className="flex items-center gap-1">
                            {day.isToday && (
                              <span className="text-[8px] font-mono uppercase bg-emerald-600 text-white px-1 rounded font-bold shadow-2xs leading-none">
                                วันนี้
                              </span>
                            )}
                            {/* Checklist Task Badge for Day */}
                            {(() => {
                              const dayTasks = tasks.filter((t) => t.dueDate === day.dateStr);
                              if (dayTasks.length === 0) return null;
                              const doneCount = dayTasks.filter((t) => t.isCompleted).length;
                              const allDone = doneCount === dayTasks.length;
                              return (
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setDayInspectorDate(day.dateStr);
                                  }}
                                  className={`inline-flex items-center gap-0.5 px-1 py-0.2 rounded text-[8px] font-bold font-mono transition-transform hover:scale-105 cursor-pointer pointer-events-auto leading-none ${
                                    allDone
                                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                                      : 'bg-amber-100 text-amber-950 border border-amber-300 shadow-2xs'
                                  }`}
                                  title={`เช็กลิสต์ในวันนี้: ${doneCount}/${dayTasks.length} รายการ (คลิกเพื่อดูและติ๊กถูก)`}
                                >
                                  <CheckSquare className="h-2 w-2 shrink-0" />
                                  <span>{doneCount}/{dayTasks.length}</span>
                                </button>
                              );
                            })()}
                          </div>

                          <span
                            className={`font-mono text-[11px] font-bold tabular-nums pr-0.5 leading-none ${
                              day.isToday
                                ? 'text-emerald-950 font-black'
                                : day.isPast
                                ? 'text-slate-400'
                                : day.isCurrentMonth
                                ? 'text-slate-900'
                                : 'text-slate-300'
                            }`}
                          >
                            {day.dayNum}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* 2. Interactive day click overlay */}
                <div className="relative z-10 grid grid-cols-7 h-3.5">
                  {week.map((day) => (
                    <div
                      key={`header-click-${day.dateStr}`}
                      onClick={() => setDayInspectorDate(day.dateStr)}
                      className="cursor-pointer hover:bg-blue-500/10 transition-colors"
                      title={`คลิกเพื่อดูรายละเอียดและเช็กลิสต์ในวันที่ ${formatDateThai(day.dateStr)}`}
                    />
                  ))}
                </div>

                {/* 3. Multi-Day Spanning Event Lines */}
                <div className="relative z-20 flex-1 px-1 pb-1 space-y-0.5">
                  {Array.from({ length: maxSlotsPerWeek }).map((_, slotIdx) => {
                    const barsInThisSlot = packedBars.filter(
                      (b) => b.slotRow === slotIdx
                    );

                    if (barsInThisSlot.length === 0) {
                      return (
                        <div
                          key={`empty-slot-${weekIdx}-${slotIdx}`}
                          className="h-[14px]"
                        />
                      );
                    }

                    return (
                      <div
                        key={`slot-row-${weekIdx}-${slotIdx}`}
                        className="grid grid-cols-7 gap-1 h-[14px] items-center"
                      >
                        {barsInThisSlot.map((bar) => {
                          const isSelected = bar.projectId === selectedProjectId;
                          const isHovered = bar.projectId === hoveredProjectId;
                          const isOtherHovered =
                            hoveredProjectId !== null && hoveredProjectId !== bar.projectId;
                          const daysLeft = getDaysLeftThai(bar.closeDateStr);
                          const uniTheme = getUniversityTheme(bar.project.university.id);
                          const isBookmarked = trackedIds.has(bar.projectId);
                          // Display text if this is actual start OR if line entered/cut midway at start of current view
                          const shouldDisplayText = bar.isStart || bar.isFirstAppearanceInView;

                          return (
                            <div
                              key={bar.id}
                              onMouseEnter={() => setHoveredProjectId(bar.projectId)}
                              onMouseLeave={() => setHoveredProjectId(null)}
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedProjectId(bar.projectId);
                                setInspectedProject(bar.project);
                              }}
                              style={{
                                gridColumn: `${bar.startCol + 1} / span ${
                                  bar.span
                                }`,
                              }}
                              className={`h-[15px] px-1.5 flex items-center justify-between text-[10px] whitespace-nowrap overflow-hidden text-ellipsis transition-all duration-150 cursor-pointer shadow-2xs select-none ${
                                bar.isStart ? 'rounded-l-sm' : 'rounded-l-none'
                              } ${
                                bar.isEnd ? 'rounded-r-sm' : 'rounded-r-none'
                              } ${
                                isOtherHovered
                                  ? 'bg-slate-100 text-slate-400 border border-slate-200 opacity-25 grayscale filter saturate-0 shadow-none'
                                  : isBookmarked
                                  ? isHovered
                                    ? `${uniTheme.gradientBar} ring-2 ring-blue-500 shadow-md brightness-110 scale-[1.01] z-30 font-bold text-white`
                                    : isSelected
                                    ? `${uniTheme.gradientBar} ring-2 ring-slate-900 font-bold z-20 shadow-xs text-white`
                                    : `${uniTheme.gradientBar} ring-1 ring-black/15 font-bold text-white shadow-xs z-10`
                                  : isHovered
                                  ? `${uniTheme.bgLight} ring-2 ring-blue-500 border border-blue-400 ${uniTheme.textDark} shadow-md scale-[1.01] z-30 font-bold`
                                  : isSelected
                                  ? `${uniTheme.bgLight} ring-2 ring-slate-800 border-2 border-slate-600 ${uniTheme.textDark} font-bold z-20 shadow-xs`
                                  : `${uniTheme.bgLight} border ${uniTheme.borderLight} ${uniTheme.textDark} font-medium hover:border-slate-400 opacity-90`
                              }`}
                              title={`${bar.labelTh}: ปิดรับสมัคร ${formatDateThai(bar.closeDateStr)} (${daysLeft}) ${isBookmarked ? '★ บันทึกไว้แล้ว' : ''}`}
                            >
                              {/* Left Info: display text at start OR at first appearance of the month */}
                              {shouldDisplayText ? (
                                <div className="flex items-center gap-1 min-w-0 truncate">
                                  {isBookmarked ? (
                                    <span className="text-[9px] text-amber-300 font-black shrink-0 leading-none" title="สาขาที่บันทึกไว้">
                                      ★
                                    </span>
                                  ) : (
                                    <span
                                      className={`h-1.5 w-1.5 rounded-full shrink-0 ${
                                        isOtherHovered
                                          ? 'bg-slate-400'
                                          : isBookmarked
                                          ? 'bg-white shadow-xs'
                                          : uniTheme.pill
                                      }`}
                                    />
                                  )}
                                  <span
                                    className={`truncate text-[10px] leading-none ${
                                      isOtherHovered
                                        ? 'text-slate-500'
                                        : isBookmarked
                                        ? 'font-bold text-white drop-shadow-xs'
                                        : `${uniTheme.textDark} font-bold`
                                    }`}
                                  >
                                    {bar.uniAbbrTh} · {bar.project.program.nameTh}
                                  </span>
                                </div>
                              ) : (
                                <div
                                  className={`flex items-center gap-1 min-w-0 text-[9px] font-bold ${
                                    isOtherHovered
                                      ? 'text-slate-400'
                                      : isBookmarked || isHovered || isSelected
                                      ? 'text-white/70'
                                      : `${uniTheme.textDark} opacity-60`
                                  }`}
                                >
                                  <span>→</span>
                                </div>
                              )}

                              {/* Right Info: Countdown only at the end */}
                              {bar.isEnd ? (
                                <div className="shrink-0 text-[9px] font-mono pl-1 flex items-center leading-none">
                                  <span
                                    className={`px-1 py-0.5 rounded font-bold flex items-center gap-0.5 ${
                                      isOtherHovered
                                        ? 'bg-slate-200 text-slate-500'
                                        : isBookmarked
                                        ? 'bg-black/35 backdrop-blur-xs text-white'
                                        : 'bg-white/90 text-slate-800 border border-slate-300/80 shadow-2xs'
                                    }`}
                                  >
                                    <span>ปิด {formatDateThai(bar.closeDateStr, false)}</span>
                                    <span
                                      className={
                                        isOtherHovered
                                          ? 'text-slate-600'
                                          : isBookmarked
                                          ? 'text-amber-300 font-extrabold'
                                          : 'text-amber-700 font-bold'
                                      }
                                    >
                                      · {daysLeft}
                                    </span>
                                  </span>
                                </div>
                              ) : null}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. COMPACT SELECTED PROGRAM QUICK ACTION BAR (ประหยัดพื้นที่หน้าจอ) */}
      {selectedProject ? (() => {
        const selTheme = getUniversityTheme(selectedProject.university.id);
        const roundInfo = getRoundLabel(selectedProject.project.round);
        const daysLeft = getDaysLeftThai(selectedProject.applicationCloseDate || '');
        const isTracked = trackedIds.has(selectedProject.project.id);
        const uniThai = getUniversityThaiAbbr(selectedProject.university.id);
        const gpaxReq = selectedProject.project.requirements.find((r) => r.type === 'GPAX');

        return (
          <div className="rounded-xl border border-slate-200/90 bg-white px-3 py-2 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs animate-in fade-in duration-150">
            {/* Left: Program Quick Info */}
            <div className="flex items-center gap-2 min-w-0">
              <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase shrink-0 ${selTheme.pill}`}>
                {uniThai}
              </span>
              <div className="min-w-0 truncate">
                <div className="flex items-center gap-2 truncate">
                  <span className="font-extrabold text-slate-900 truncate text-xs">
                    {selectedProject.branch.nameTh}
                  </span>
                  <span className="text-slate-400 text-xs hidden md:inline">· {selectedProject.faculty.nameTh}</span>
                  <span className="px-1.5 py-0.2 bg-slate-100 rounded text-[10px] font-bold text-slate-700 shrink-0">
                    {roundInfo.short}
                  </span>
                </div>
                <div className="text-[10px] text-slate-500 flex items-center gap-2 font-mono">
                  <span>รับ {selectedProject.project.quotaSeats} ที่นั่ง</span>
                  <span>·</span>
                  <span className="text-blue-700 font-bold">
                    {gpaxReq && gpaxReq.minScore ? `GPAX ≥ ${gpaxReq.minScore}` : 'ไม่กำหนด GPAX'}
                  </span>
                  <span>·</span>
                  <span className="text-amber-700 font-bold">ปิด {formatDateThai(selectedProject.applicationCloseDate)} ({daysLeft})</span>
                </div>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setInspectedProject(selectedProject)}
                className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-xs transition-all shadow-2xs cursor-pointer flex items-center gap-1"
              >
                <span>ดูเกณฑ์ & เอกสารฉบับเต็ม</span>
                <span>→</span>
              </button>

              {onToggleTrack && (
                <button
                  onClick={() => onToggleTrack(selectedProject.project.id)}
                  className={`px-2 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer border ${
                    isTracked
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                  title={isTracked ? 'บันทึกแล้ว' : 'บันทึกเข้าลิสต์'}
                >
                  {isTracked ? '✓ บันทึกแล้ว' : '+ บันทึก'}
                </button>
              )}
            </div>
          </div>
        );
      })() : (
        <div className="rounded-xl border border-slate-200/60 bg-slate-50/70 px-3 py-2 shadow-2xs flex items-center justify-between gap-2 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="text-blue-600 font-bold">💡 คำแนะนำ:</span>
            <span>คลิกที่เส้นกำหนดการบนปฏิทินเพื่อดูสรุปวันรับสมัคร เกณฑ์ GPAX และกดบันทึกสาขา</span>
          </div>
          <span className="text-[10px] text-slate-400 hidden sm:inline">
            ★ เส้นสีสดเข้ม = บันทึกแล้ว · เส้นสีอ่อน = ทั่วไป
          </span>
        </div>
      )}
        </>
      )}

      {/* ALL-IN-ONE EXTENDED SECTIONS: TIMELINE ROADMAP & CHECKLIST (SIDE-BY-SIDE / STACKED) */}
      {subView === 'all' && displayMode !== 'tasks' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-1">
          {/* Section 1: Timeline Roadmap */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-2xs">
            <TimelineView
              allProjects={allProjects}
              trackedIds={trackedIds}
              tasks={tasks}
              onOpenDetail={onOpenDetail}
              onToggleTask={onToggleTask || (() => {})}
              embedded={true}
            />
          </div>

          {/* Section 2: Calendar Checklist */}
          {displayMode === 'both' && (
            <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-2xs">
              {renderChecklistSection()}
            </div>
          )}
        </div>
      )}

      {/* CHECKLIST STANDALONE (all mode + tasks focus, or checklist subview) */}
      {((subView === 'all' && displayMode === 'tasks') || subView === 'checklist') && displayMode !== 'uni' && (
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs">
          {renderChecklistSection()}
        </div>
      )}

      {/* BOTTOM: plain-text tracking list (easy to scan everything at once) */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-700 p-4 sm:p-5 shadow-2xs space-y-4">
        <div>
          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            สรุปทั้งหมดแบบข้อความ (เช็กง่ายในที่เดียว)
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            ลิสต์สาขาที่บันทึกไว้กับงานที่ต้องทำทั้งหมด เรียงตามตัวอักษร ไม่ต้องเลื่อนหาจากการ์ด
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-700 dark:text-slate-200">
              มหาลัยที่บันทึก ({allProjects.filter((p) => trackedIds.has(p.project.id)).length})
            </h3>
            {allProjects.filter((p) => trackedIds.has(p.project.id)).length === 0 ? (
              <p className="text-sm text-slate-500">ยังไม่มีสาขาที่บันทึกไว้</p>
            ) : (
              <ol className="list-decimal ml-5 space-y-1 text-slate-800 dark:text-slate-200">
                {allProjects
                  .filter((p) => trackedIds.has(p.project.id))
                  .map((p) => (
                    <li key={p.project.id}>
                      <button
                        onClick={() => onOpenDetail(p)}
                        className="hover:underline cursor-pointer text-left"
                      >
                        <span className="font-bold">{p.branch.nameTh}</span>
                        {' · '}
                        {p.program.nameTh} · {getUniversityThaiAbbr(p.university.id)}
                        {' · ปิดรับ '}
                        {formatDateThai(p.applicationCloseDate)}
                        {' ('}
                        {getDaysCountdownThai(p.daysUntilClose)}
                        {')'}
                      </button>
                    </li>
                  ))}
              </ol>
            )}
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-700 dark:text-slate-200">
              งานที่ต้องทำ ({tasks.filter((t) => !t.isCompleted).length} ค้าง / {tasks.length} ทั้งหมด)
            </h3>
            {tasks.length === 0 ? (
              <p className="text-sm text-slate-500">ยังไม่มีงาน บันทึกสาขาเพื่อสร้างเช็กลิสต์อัตโนมัติ</p>
            ) : (
              <ol className="list-decimal ml-5 space-y-1 text-slate-800 dark:text-slate-200">
                {tasks.map((t) => (
                  <li key={t.id} className={t.isCompleted ? 'line-through text-slate-400' : ''}>
                    <button
                      onClick={() => onToggleTask && onToggleTask(t.id)}
                      className="hover:underline cursor-pointer text-left"
                      title="แตะเพื่อติ๊กเสร็จ / เอาเครื่องหมายออก"
                    >
                      {t.isCompleted ? '✓ ' : '○ '}
                      {t.titleTh || t.titleEn}
                      {t.dueDate ? ` · ส่ง ${formatDateThai(t.dueDate)}` : ''}
                    </button>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </div>
      </div>

      {/* TIMELINE FULL VIEW */}
      {subView === 'timeline' && (
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs">
          <TimelineView
            allProjects={allProjects}
            trackedIds={trackedIds}
            tasks={tasks}
            onOpenDetail={onOpenDetail}
            onToggleTask={onToggleTask || (() => {})}
            embedded={false}
          />
        </div>
      )}

      {/* DAY INSPECTOR MODAL (POPUP WHEN ANY DAY OR CHECKLIST BADGE IS CLICKED) */}
      {dayInspectorData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
          <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150 space-y-0">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-slate-200 p-4 bg-slate-50">
              <div>
                <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-md uppercase font-mono">
                  กำหนดการ & เช็กลิสต์ประจำวัน
                </span>
                <h3 className="text-base sm:text-lg font-black text-slate-900 mt-1 flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-blue-600" />
                  <span>{dayInspectorData.dateThai}</span>
                </h3>
              </div>
              <button
                onClick={() => {
                  setDayInspectorDate(null);
                  setDayInlineTaskTitle('');
                }}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-5 space-y-5 max-h-[70vh] overflow-y-auto">
              {/* Section 1: Checklist Tasks on this Day */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <CheckSquare className="h-4 w-4 text-emerald-600" />
                    <span>เช็กลิสต์สิ่งที่ต้องทำในวันนี้ ({dayInspectorData.tasks.length})</span>
                  </h4>
                  <span className="text-[10px] text-slate-400">
                    คลิกช่องเพื่อติ๊กถูก
                  </span>
                </div>

                {dayInspectorData.tasks.length === 0 ? (
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-center text-xs text-slate-500">
                    ไม่มีเช็กลิสต์ที่ครบกำหนดในวันนี้
                  </div>
                ) : (
                  <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden bg-white">
                    {dayInspectorData.tasks.map((task) => (
                      <div
                        key={task.id}
                        className={`p-3 flex items-start justify-between gap-3 transition-colors ${
                          task.isCompleted ? 'bg-slate-50/70' : 'hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-start gap-2.5 min-w-0 flex-1">
                          <button
                            type="button"
                            onClick={() => onToggleTask && onToggleTask(task.id)}
                            className={`h-4.5 w-4.5 mt-0.5 rounded-md border flex items-center justify-center shrink-0 transition-colors cursor-pointer ${
                              task.isCompleted
                                ? 'bg-emerald-600 border-emerald-600 text-white'
                                : 'border-slate-300 hover:border-blue-500 bg-white'
                            }`}
                          >
                            {task.isCompleted && <Check className="h-3 w-3 stroke-[3]" />}
                          </button>

                          <div className="space-y-1 min-w-0">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              {getTaskCategoryBadge(task.category)}
                              {task.isAutoGenerated && (
                                <span className="text-[9px] text-slate-400 font-mono">
                                  (ระบบสร้างอัตโนมัติ)
                                </span>
                              )}
                            </div>
                            <div
                              className={`text-xs font-bold leading-tight ${
                                task.isCompleted ? 'line-through text-slate-400' : 'text-slate-900'
                              }`}
                            >
                              {task.titleTh || task.titleEn}
                            </div>
                          </div>
                        </div>

                        {onDeleteTask && !task.isAutoGenerated && (
                          <button
                            type="button"
                            onClick={() => onDeleteTask(task.id)}
                            className="p-1 text-slate-400 hover:text-rose-600 transition-colors cursor-pointer shrink-0"
                            title="ลบงานนี้"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Inline Quick Add Task for this day */}
                {onAddTask && (
                  <form onSubmit={handleAddDayInlineTask} className="flex items-center gap-1.5 mt-2">
                    <input
                      type="text"
                      placeholder="เพิ่มสิ่งที่ต้องทำสำหรับวันนี้..."
                      value={dayInlineTaskTitle}
                      onChange={(e) => setDayInlineTaskTitle(e.target.value)}
                      className="flex-1 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="submit"
                      disabled={!dayInlineTaskTitle.trim()}
                      className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-2xs shrink-0 flex items-center gap-1"
                    >
                      <Plus className="h-3 w-3" />
                      <span>เพิ่มงาน</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Section 2: TCAS Events on this Day */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span>กำหนดการ TCAS ประจำวันนี้ ({dayInspectorData.events.length})</span>
                </h4>

                {dayInspectorData.events.length === 0 ? (
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-center text-xs text-slate-500">
                    ไม่มีกำหนดการเปิด-ปิดรับสมัครหรือสัมภาษณ์ในวันนี้
                  </div>
                ) : (
                  <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden bg-white">
                    {dayInspectorData.events.map((ev) => (
                      <div
                        key={ev.id}
                        className="p-3 flex items-center justify-between gap-3 hover:bg-slate-50/70 transition-colors"
                      >
                        <div className="space-y-1 min-w-0 flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${ev.badgeColor}`}>
                              {ev.type}
                            </span>
                            <span className="font-bold text-xs text-slate-900 truncate">
                              {ev.title}
                            </span>
                          </div>
                          <div className="text-[11px] text-slate-500 truncate">
                            {ev.subtitle}
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            setDayInspectorDate(null);
                            onOpenDetail(ev.project);
                          }}
                          className="px-2.5 py-1 text-xs font-bold text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer shrink-0"
                        >
                          ดูเกณฑ์ →
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="p-3.5 border-t border-slate-100 bg-slate-50 flex items-center justify-end">
              <button
                type="button"
                onClick={() => {
                  setDayInspectorDate(null);
                  setDayInlineTaskTitle('');
                }}
                className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold cursor-pointer transition-colors dark:bg-white dark:hover:bg-slate-200 dark:text-slate-900"
              >
                ปิดหน้านี้
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ADD GENERAL TASK MODAL */}
      {showAddTaskModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 p-5 space-y-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                  <Plus className="h-4 w-4 text-emerald-600" />
                  <span>เพิ่มสิ่งที่ต้องทำใหม่ลงในปฏิทิน</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  กำหนดงาน วันครบกำหนดส่ง และสาขาที่เกี่ยวข้อง
                </p>
              </div>
              <button
                onClick={() => setShowAddTaskModal(false)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded-lg cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleCreateGeneralTask} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  ชื่องาน / สิ่งที่ต้องทำ <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="เช่น ส่งเอกสาร ปพ.1, เตรียมแฟ้มสะสมผลงาน Portfolio"
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  กำหนดส่ง / วันที่ในปฏิทิน <span className="text-rose-500">*</span>
                </label>
                <input
                  type="date"
                  required
                  value={newTaskDueDate}
                  onChange={(e) => setNewTaskDueDate(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 font-mono"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  หมวดหมู่งาน
                </label>
                <select
                  value={newTaskCategory}
                  onChange={(e) => setNewTaskCategory(e.target.value as UserTask['category'])}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 bg-white"
                >
                  <option value="document">เตรียมเอกสาร (Portfolio, Transcript)</option>
                  <option value="submission">ยื่นใบสมัครออนไลน์</option>
                  <option value="payment">ชำระค่าธรรมเนียมการสมัคร</option>
                  <option value="interview">เตรียมตัวสอบสัมภาษณ์</option>
                  <option value="general">ทั่วไป / อื่นๆ</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  เกี่ยวข้องกับสาขา (ไม่บังคับ)
                </label>
                <select
                  value={newTaskProjectId}
                  onChange={(e) => setNewTaskProjectId(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 bg-white"
                >
                  <option value="">ทั่วไป / เช็กลิสต์ส่วนตัว</option>
                  {allProjects.map((p) => {
                    const uniTh = getUniversityThaiAbbr(p.university.id);
                    return (
                      <option key={p.project.id} value={p.project.id}>
                        {uniTh} — {p.branch.nameTh} ({p.program.nameTh})
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowAddTaskModal(false)}
                  className="px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-bold cursor-pointer"
                >
                  ยกเลิก
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold cursor-pointer shadow-sm"
                >
                  บันทึกสิ่งที่ต้องทำ
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 5. POPUP MODAL: CLICKED LINE REQUIREMENT & DOCUMENT INSPECTOR */}
      {inspectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-slate-200 p-5 bg-slate-50">
              <div className="space-y-1 pr-6">
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2.5 py-0.5 rounded-md text-xs font-black ${
                      getUniversityTheme(inspectedProject.university.id).pill
                    }`}
                  >
                    {getUniversityThaiAbbr(inspectedProject.university.id)}
                  </span>
                  <span className="text-xs font-semibold text-slate-600">
                    {inspectedProject.faculty.nameTh}
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md">
                    {getDaysLeftThai(inspectedProject.applicationCloseDate || '')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {inspectedProject.branch.nameTh}
                </h3>
                <p className="text-xs text-slate-500">
                  {inspectedProject.program.nameTh} ({inspectedProject.program.degreeName})
                </p>
              </div>

              <button
                onClick={() => setInspectedProject(null)}
                className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 rounded-xl transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body in Thai */}
            <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto text-sm">
              {/* Application Timeline Box */}
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="text-xs font-bold uppercase text-blue-900">
                    กำหนดการรับสมัคร
                  </div>
                  <div className="font-bold text-slate-900 text-sm">
                    {formatDateRangeThai(inspectedProject.applicationOpenDate, inspectedProject.applicationCloseDate)}
                  </div>
                </div>
                <div className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-bold text-center">
                  ⏳ {getDaysLeftThai(inspectedProject.applicationCloseDate || '')}
                </div>
              </div>

              {/* Requirements & Criteria */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <GraduationCap className="h-4 w-4 text-blue-600" />
                  <span>เกณฑ์คะแนน & คุณสมบัติผู้สมัคร</span>
                </h4>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  {(() => {
                    const gpaxReq = inspectedProject.project.requirements.find((r) => r.type === 'GPAX');
                    return (
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                        <span className="text-slate-500 block">เกรดเฉลี่ยสะสม (GPAX):</span>
                        <span className="font-bold text-slate-900 text-sm font-mono">
                          {gpaxReq && gpaxReq.minScore ? `≥ ${gpaxReq.minScore}` : 'ไม่กำหนดเกรดขั้นต่ำ'}
                        </span>
                      </div>
                    );
                  })()}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block">จำนวนรับทั้งหมด:</span>
                    <span className="font-bold text-slate-900 text-sm font-mono">
                      {inspectedProject.project.quotaSeats} ที่นั่ง
                    </span>
                  </div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                  <span className="font-bold block text-slate-900 mb-1">แผนการเรียนที่เปิดรับ:</span>
                  {(() => {
                    const trackReq = inspectedProject.project.requirements.find(
                      (r) => r.type === 'MIN_SUBJECT_CREDIT' || r.type === 'SPECIAL_QUALIFICATION'
                    );
                    return trackReq ? trackReq.detailsTh : 'รับทุกแผนการเรียน (วิทย์-คณิต, ศิลป์-คำนวณ, ศิลป์-ภาษา, ปวช.)';
                  })()}
                </div>
              </div>

              {/* Required Documents */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <FileText className="h-4 w-4 text-amber-600" />
                  <span>รายการเอกสารที่ต้องใช้ในการสมัคร</span>
                </h4>
                <div className="space-y-2 text-xs">
                  {inspectedProject.project.documents.map((doc, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                      <div>
                        <div className="font-bold text-slate-900">{doc.nameTh}</div>
                        <div className="text-slate-600 text-[11px] mt-0.5">{doc.detailsTh}</div>
                        <div className="text-slate-400 text-[10px] mt-0.5">{doc.nameEn}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Official Source Link */}
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0" />
                  <div>
                    <div className="font-bold text-emerald-950">
                      ตรวจสอบจากประกาศทางการแล้ว
                    </div>
                    <div className="text-emerald-700 text-[11px]">
                      ตรวจสอบล่าสุดเมื่อ {formatDateThai(inspectedProject.project.source.lastChecked)}
                    </div>
                  </div>
                </div>
                <a
                  href={inspectedProject.project.applicationUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-bold inline-flex items-center gap-1"
                >
                  <span>สมัครบนเว็บมหาวิทยาลัย</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
              {onToggleTrack && (
                <button
                  onClick={() => onToggleTrack(inspectedProject.project.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    trackedIds.has(inspectedProject.project.id)
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white border border-slate-300 text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  {trackedIds.has(inspectedProject.project.id)
                    ? '✓ บันทึกเข้าลิสต์ของฉันแล้ว'
                    : '+ บันทึกสาขานี้เข้าลิสต์'}
                </button>
              )}

              <button
                onClick={() => setInspectedProject(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 cursor-pointer dark:bg-white dark:hover:bg-slate-200 dark:text-slate-900"
              >
                ปิดหน้านี้
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. MODAL: PRIORITIZE & REORDER OVERLAPPING LINES IN THAI */}
      {showReorderModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
          <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 space-y-5 animate-in fade-in zoom-in-95 duration-150">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="font-mono font-black text-blue-600 bg-blue-100 px-2 py-0.5 rounded-lg text-base leading-none">=</span>
                  <span>จัดลำดับความสำคัญของเส้นกำหนดการ</span>
                </h3>
                <p className="text-xs text-slate-600 mt-1 flex items-center gap-1.5 flex-wrap">
                  <span className="font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    💡 วิธีใช้:
                  </span>
                  <span>คลิกค้างที่เครื่องหมาย <b>"="</b> แล้วลากขึ้น-ลง (Drag & Drop) หรือกดลูกศร เพื่อจัดอันดับเส้นปฏิทิน</span>
                </p>
              </div>
              <button
                onClick={() => setShowReorderModal(false)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded-lg cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* List of programs to reorder */}
            <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-1">
              {orderedProjects.map((p, idx) => {
                const uniTheme = getUniversityTheme(p.university.id);
                const uniThai = getUniversityThaiAbbr(p.university.id);
                const roundInfo = getRoundLabel(p.project.round);
                const isBookmarked = trackedIds.has(p.project.id);
                const isCurrentlyDraggable = draggableProjectId === p.project.id;
                const isBeingDragged = draggedProjectIndex === idx;
                const isDropTarget = dragOverIndex === idx && draggedProjectIndex !== idx;

                return (
                  <div
                    key={p.project.id}
                    draggable={isCurrentlyDraggable}
                    onDragStart={(e) => {
                      setDraggedProjectIndex(idx);
                      e.dataTransfer.effectAllowed = 'move';
                      e.dataTransfer.setData('text/plain', `${idx}`);
                    }}
                    onDragOver={(e) => {
                      e.preventDefault();
                      e.dataTransfer.dropEffect = 'move';
                      if (draggedProjectIndex !== null && dragOverIndex !== idx) {
                        setDragOverIndex(idx);
                      }
                    }}
                    onDragLeave={() => {
                      if (dragOverIndex === idx) setDragOverIndex(null);
                    }}
                    onDrop={(e) => {
                      e.preventDefault();
                      if (draggedProjectIndex !== null && draggedProjectIndex !== idx) {
                        reorderPriority(draggedProjectIndex, idx);
                      }
                      setDraggedProjectIndex(null);
                      setDragOverIndex(null);
                      setDraggableProjectId(null);
                    }}
                    onDragEnd={() => {
                      setDraggedProjectIndex(null);
                      setDragOverIndex(null);
                      setDraggableProjectId(null);
                    }}
                    className={`p-3 rounded-xl border flex items-center justify-between gap-3 transition-all ${
                      isBeingDragged
                        ? 'opacity-40 border-dashed border-blue-500 bg-blue-50/60 scale-[0.98]'
                        : isDropTarget
                        ? 'border-blue-600 bg-blue-50/80 shadow-md ring-2 ring-blue-400'
                        : 'bg-slate-50 hover:bg-slate-100/80 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0 flex-1">
                      {/* DRAG HANDLE ONLY (=): only holding on this symbol enables drag */}
                      <div
                        onMouseDown={() => setDraggableProjectId(p.project.id)}
                        onMouseUp={() => setDraggableProjectId(null)}
                        onTouchStart={() => setDraggableProjectId(p.project.id)}
                        onTouchEnd={() => setDraggableProjectId(null)}
                        className="p-1 px-2 cursor-grab active:cursor-grabbing hover:bg-slate-200 text-slate-500 hover:text-slate-900 rounded-lg flex items-center justify-center font-mono font-black text-lg select-none border border-slate-300/80 bg-white shadow-2xs hover:border-slate-400 transition-colors shrink-0"
                        title="คลิกค้างที่เครื่องหมาย = เพื่อลากย้ายตำแหน่ง"
                      >
                        <span className="font-mono font-black leading-none pointer-events-none select-none">=</span>
                      </div>

                      <span className="font-mono text-xs font-bold text-slate-400 w-5 shrink-0">
                        #{idx + 1}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase shrink-0 ${uniTheme.pill}`}
                      >
                        {uniThai}
                      </span>
                      <div className="min-w-0 truncate flex-1">
                        <div className="font-bold text-xs text-slate-900 truncate flex items-center gap-1.5">
                          <span>{p.program.nameTh}</span>
                          {isBookmarked && (
                            <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200 shrink-0">
                              ★ บันทึกแล้ว
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-slate-500 truncate">
                          {p.faculty.nameTh} · {roundInfo.short}
                        </div>
                      </div>
                    </div>

                    {/* Up, Down, Pin to Top buttons */}
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={() => pinToTopPriority(p.project.id)}
                        disabled={idx === 0}
                        className="p-1.5 text-amber-600 hover:bg-amber-100 rounded-lg transition-colors disabled:opacity-30 cursor-pointer"
                        title="ปักหมุดให้อยู่อันดับแรกสุด"
                      >
                        <Star className="h-4 w-4" />
                      </button>

                      <button
                        onClick={() => movePriority(p.project.id, 'up')}
                        disabled={idx === 0}
                        className="p-1.5 text-slate-600 hover:bg-slate-200 rounded-lg transition-colors disabled:opacity-30 cursor-pointer"
                        title="เลื่อนขึ้น"
                      >
                        <MoveUp className="h-4 w-4" />
                      </button>

                      <button
                        onClick={() => movePriority(p.project.id, 'down')}
                        disabled={idx === orderedProjects.length - 1}
                        className="p-1.5 text-slate-600 hover:bg-slate-200 rounded-lg transition-colors disabled:opacity-30 cursor-pointer"
                        title="เลื่อนลง"
                      >
                        <MoveDown className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">
                สาขาด้านบนจะได้รับสิทธิ์แสดงผลในเส้นปฏิทินก่อน
              </span>
              <button
                onClick={() => setShowReorderModal(false)}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold cursor-pointer transition-colors dark:bg-white dark:hover:bg-slate-200 dark:text-slate-900"
              >
                เสร็จสิ้น
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
