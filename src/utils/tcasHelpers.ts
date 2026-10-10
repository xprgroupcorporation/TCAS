import {
  AdmissionProject,
  University,
  Faculty,
  Program,
  Branch,
  AdmissionEvent,
  UserTask,
} from '../types/tcas';
import {
  UNIVERSITIES,
  FACULTIES,
  PROGRAMS,
  BRANCHES,
  ADMISSION_PROJECTS,
} from '../data/tcasDatabase';

/**
 * Real device date as 'YYYY-MM-DD' in Asia/Bangkok (testers are in Thailand).
 * This replaced the frozen 2026-10-07 simulation clock so every countdown,
 * status, and calendar highlight follows the actual day.
 */
export function getTodayStr(timeZone = 'Asia/Bangkok'): string {
  try {
    return new Date().toLocaleDateString('en-CA', { timeZone });
  } catch {
    const d = new Date();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${d.getFullYear()}-${m}-${day}`;
  }
}

export interface EnrichedAdmissionProject {
  project: AdmissionProject;
  university: University;
  faculty: Faculty;
  program: Program;
  branch: Branch;
  primaryApplicationEvent?: AdmissionEvent;
  applicationOpenDate?: string;
  applicationCloseDate?: string;
  interviewDate?: string;
  resultDate?: string;
  status: 'open' | 'closing_soon' | 'upcoming' | 'closed';
  daysUntilClose: number | null;
  daysUntilOpen: number | null;
}

export function enrichProject(project: AdmissionProject): EnrichedAdmissionProject {
  const university =
    UNIVERSITIES.find((u) => u.id === project.universityId) || UNIVERSITIES[0];
  const faculty =
    FACULTIES.find((f) => f.id === project.facultyId) || FACULTIES[0];
  const program =
    PROGRAMS.find((p) => p.id === project.programId) || PROGRAMS[0];
  const branch =
    BRANCHES.find((b) => b.id === project.branchId) || BRANCHES[0];

  const openEvent = project.events.find((e) => e.type === 'APPLICATION_OPENS');
  const closeEvent = project.events.find((e) => e.type === 'APPLICATION_CLOSES');
  const interviewEvent = project.events.find((e) => e.type === 'INTERVIEW');
  const resultEvent = project.events.find(
    (e) => e.type === 'RESULT_ANNOUNCEMENT'
  );

  const openDate = openEvent?.startDate;
  const closeDate = closeEvent?.startDate;
  const interviewDate = interviewEvent?.startDate;
  const resultDate = resultEvent?.startDate;

  // Reference date: real today (device date, Asia/Bangkok)
  const today = new Date(`${getTodayStr()}T00:00:00`);

  let daysUntilClose: number | null = null;
  let daysUntilOpen: number | null = null;

  if (closeDate) {
    const cDate = new Date(`${closeDate}T23:59:59`);
    daysUntilClose = Math.ceil((cDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  }

  if (openDate) {
    const oDate = new Date(`${openDate}T00:00:00`);
    daysUntilOpen = Math.ceil((oDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  }

  let status: 'open' | 'closing_soon' | 'upcoming' | 'closed' = 'upcoming';

  if (openDate && closeDate) {
    const oDate = new Date(`${openDate}T00:00:00`);
    const cDate = new Date(`${closeDate}T23:59:59`);

    if (today < oDate) {
      status = 'upcoming';
    } else if (today >= oDate && today <= cDate) {
      if (daysUntilClose !== null && daysUntilClose <= 7) {
        status = 'closing_soon';
      } else {
        status = 'open';
      }
    } else {
      status = 'closed';
    }
  }

  return {
    project,
    university,
    faculty,
    program,
    branch,
    primaryApplicationEvent: closeEvent,
    applicationOpenDate: openDate,
    applicationCloseDate: closeDate,
    interviewDate,
    resultDate,
    status,
    daysUntilClose,
    daysUntilOpen,
  };
}

export function getAllEnrichedProjects(): EnrichedAdmissionProject[] {
  return ADMISSION_PROJECTS.map(enrichProject);
}

export function formatDateShort(dateStr?: string): string {
  if (!dateStr) return '—';
  const parts = dateStr.split('-');
  if (parts.length < 3) return dateStr;
  const date = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

export const THAI_MONTHS_SHORT = [
  'ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.',
  'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'
];

export const THAI_MONTHS_FULL = [
  'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
  'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
];

export function formatDateThai(dateStr?: string, withYear = true): string {
  if (!dateStr) return '—';
  const parts = dateStr.split('-');
  if (parts.length < 3) return dateStr;
  const day = parseInt(parts[2], 10);
  const monthIdx = parseInt(parts[1], 10) - 1;
  const yearCE = parseInt(parts[0], 10);
  const yearBE = yearCE + 543;
  const yearShort = String(yearBE).slice(-2);
  const mName = THAI_MONTHS_SHORT[monthIdx] || '';
  if (!withYear) return `${day} ${mName}`;
  return `${day} ${mName} ${yearShort}`;
}

export function formatDateThaiFull(dateStr?: string): string {
  if (!dateStr) return '—';
  const parts = dateStr.split('-');
  if (parts.length < 3) return dateStr;
  const day = parseInt(parts[2], 10);
  const monthIdx = parseInt(parts[1], 10) - 1;
  const yearCE = parseInt(parts[0], 10);
  const yearBE = yearCE + 543;
  const mName = THAI_MONTHS_FULL[monthIdx] || '';
  return `${day} ${mName} ${yearBE}`;
}

export function formatDateRange(start?: string, end?: string): string {
  if (!start) return 'TBA';
  if (!end || start === end) return formatDateShort(start);
  return `${formatDateShort(start)} – ${formatDateShort(end)}`;
}

export function formatDateRangeThai(start?: string, end?: string): string {
  if (!start) return 'รอประกาศ';
  if (!end || start === end) return formatDateThai(start);
  return `${formatDateThai(start, false)} – ${formatDateThai(end)}`;
}

export function getDaysCountdownText(days: number | null): string {
  if (days === null) return 'Dates pending';
  if (days < 0) return `Closed ${Math.abs(days)}d ago`;
  if (days === 0) return 'Closes today!';
  if (days === 1) return 'Closes tomorrow';
  return `In ${days} days`;
}

export function getDaysCountdownThai(days: number | null): string {
  if (days === null) return 'รอประกาศวัน';
  if (days < 0) return `ปิดแล้ว (${Math.abs(days)} วันที่แล้ว)`;
  if (days === 0) return 'ปิดรับสมัครวันนี้!';
  if (days === 1) return 'ปิดรับสมัครพรุ่งนี้!';
  return `เหลืออีก ${days} วัน`;
}

export function getDaysLeftThai(closeDateStr: string, todayDateStr = getTodayStr()): string {
  const today = new Date(`${todayDateStr}T00:00:00`);
  const close = new Date(`${closeDateStr}T23:59:59`);
  const diffDays = Math.ceil((close.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  if (diffDays < 0) return 'ปิดรับสมัครแล้ว';
  if (diffDays === 0) return 'ปิดวันนี้!';
  if (diffDays === 1) return 'เหลือ 1 วัน';
  return `เหลืออีก ${diffDays} วัน`;
}

export function getUniversityThaiAbbr(uniId?: string): string {
  switch (uniId?.toLowerCase()) {
    case 'kmutt': return 'มจธ. (บางมด)';
    case 'cu': return 'จุฬาฯ';
    case 'cmu': return 'มช. (เชียงใหม่)';
    case 'tu': return 'มธ. (ธรรมศาสตร์)';
    case 'mu': return 'ม.มหิดล';
    case 'ku': return 'มก. (เกษตรศาสตร์)';
    case 'kmitl': return 'สจล. (ลาดกระบัง)';
    case 'kmutnb': return 'มจพ. (พระนครเหนือ)';
    case 'kku': return 'มข. (ขอนแก่น)';
    case 'psu': return 'ม.อ. (สงขลานครินทร์)';
    case 'swu': return 'มศว (ประสานมิตร)';
    case 'nu': return 'มน. (นเรศวร)';
    case 'mfu': return 'มฟล. (แม่ฟ้าหลวง)';
    case 'buu': return 'มบ. (บูรพา)';
    case 'su': return 'มศก. (ศิลปากร)';
    case 'sut': return 'มทส. (สุรนารี)';
    case 'up': return 'มพ. (พะเยา)';
    default: return 'มหาวิทยาลัย';
  }
}

export function generateTasksForProject(project: AdmissionProject): UserTask[] {
  const university = UNIVERSITIES.find((u) => u.id === project.universityId);
  const uAbbr = university?.abbr || 'Uni';
  const closeEvent = project.events.find((e) => e.type === 'APPLICATION_CLOSES');
  const interviewEvent = project.events.find((e) => e.type === 'INTERVIEW');

  const tasks: UserTask[] = [];

  // Generate Document tasks
  project.documents.forEach((doc, idx) => {
    tasks.push({
      id: `task-${project.id}-doc-${idx}`,
      projectId: project.id,
      titleTh: `เตรียมเอกสาร: ${doc.nameTh}`,
      titleEn: `Prepare Document: ${doc.nameEn}`,
      dueDate: closeEvent?.startDate,
      isCompleted: false,
      isAutoGenerated: true,
      category: 'document',
    });
  });

  // Generate Application submission task
  tasks.push({
    id: `task-${project.id}-apply`,
    projectId: project.id,
    titleTh: `ยื่นใบสมัครออนไลน์ผ่านระบบ ${uAbbr}`,
    titleEn: `Submit online application on ${uAbbr} Portal`,
    dueDate: closeEvent?.startDate,
    isCompleted: false,
    isAutoGenerated: true,
    category: 'submission',
  });

  // Generate Payment task
  tasks.push({
    id: `task-${project.id}-pay`,
    projectId: project.id,
    titleTh: `ชำระค่าธรรมเนียมการสมัคร ${uAbbr}`,
    titleEn: `Pay application fee for ${uAbbr}`,
    dueDate: closeEvent?.startDate,
    isCompleted: false,
    isAutoGenerated: true,
    category: 'payment',
  });

  // Generate Interview task if applicable
  if (interviewEvent) {
    tasks.push({
      id: `task-${project.id}-interview`,
      projectId: project.id,
      titleTh: `เตรียมตัวสอบสัมภาษณ์ ${project.projectNameTh}`,
      titleEn: `Prepare for interview session (${project.projectNameEn})`,
      dueDate: interviewEvent.startDate,
      isCompleted: false,
      isAutoGenerated: true,
      category: 'interview',
    });
  }

  return tasks;
}

export function getFieldCategoryLabel(cat: string): { th: string; en: string } {
  switch (cat) {
    case 'engineering':
      return { th: 'วิศวกรรมศาสตร์', en: 'Engineering' };
    case 'health_medicine':
      return { th: 'แพทยศาสตร์และสุขภาพ', en: 'Medicine & Health' };
    case 'business_econ':
      return { th: 'บริหารธุรกิจและเศรษฐศาสตร์', en: 'Business & Economics' };
    case 'science_computing':
      return { th: 'วิทยาศาสตร์และคอมพิวเตอร์', en: 'Science & Computing' };
    case 'architecture_design':
      return { th: 'สถาปัตยกรรมและการออกแบบ', en: 'Architecture & Design' };
    case 'humanities_social':
      return { th: 'มนุษยศาสตร์และสังคมศาสตร์', en: 'Humanities & Social' };
    case 'communication_arts':
      return { th: 'นิเทศศาสตร์และศิลปกรรม', en: 'Media & Arts' };
    case 'law_politics':
      return { th: 'นิติศาสตร์และรัฐศาสตร์', en: 'Law & Politics' };
    case 'agriculture_environment':
      return { th: 'เกษตรศาสตร์และสิ่งแวดล้อม', en: 'Agriculture & Food' };
    default:
      return { th: 'ทั่วไป', en: 'General' };
  }
}

export function getRoundLabel(round: string): { th: string; en: string; short: string } {
  switch (round) {
    case 'TCAS1_PORTFOLIO':
      return { th: 'รอบ 1 Portfolio (แฟ้มสะสมผลงาน)', en: 'Round 1 Portfolio', short: 'TCAS 1' };
    case 'TCAS2_QUOTA':
      return { th: 'รอบ 2 โควตา (Quota)', en: 'Round 2 Quota', short: 'TCAS 2' };
    case 'TCAS3_ADMISSION':
      return { th: 'รอบ 3 Admission (รับรวม)', en: 'Round 3 Admission', short: 'TCAS 3' };
    case 'TCAS4_DIRECT':
      return { th: 'รอบ 4 รับตรงอิสระ (Direct)', en: 'Round 4 Direct', short: 'TCAS 4' };
    default:
      return { th: round, en: round, short: round };
  }
}

export interface UniversityTheme {
  primary: string;
  bgLight: string;
  borderLight: string;
  textDark: string;
  badge: string;
  pill: string;
  gradientBar: string;
  hoverBar: string;
}

export function getUniversityTheme(uniId: string): UniversityTheme {
  switch (uniId?.toLowerCase()) {
    case 'kmutt':
      return {
        primary: '#F05A22',
        bgLight: 'bg-orange-50/70',
        borderLight: 'border-orange-200',
        textDark: 'text-orange-950',
        badge: 'bg-orange-100 text-orange-800 border-orange-200',
        pill: 'bg-orange-500 text-white',
        gradientBar: 'bg-gradient-to-r from-orange-500 to-amber-500 text-white',
        hoverBar: 'hover:from-orange-600 hover:to-amber-600',
      };
    case 'cu':
      return {
        primary: '#DE3163',
        bgLight: 'bg-rose-50/70',
        borderLight: 'border-rose-200',
        textDark: 'text-rose-950',
        badge: 'bg-rose-100 text-rose-800 border-rose-200',
        pill: 'bg-rose-600 text-white',
        gradientBar: 'bg-gradient-to-r from-rose-500 to-pink-500 text-white',
        hoverBar: 'hover:from-rose-600 hover:to-pink-600',
      };
    case 'mu':
      return {
        primary: '#004B87',
        bgLight: 'bg-blue-50/70',
        borderLight: 'border-blue-200',
        textDark: 'text-blue-950',
        badge: 'bg-blue-100 text-blue-800 border-blue-200',
        pill: 'bg-blue-600 text-white',
        gradientBar: 'bg-gradient-to-r from-blue-600 to-sky-600 text-white',
        hoverBar: 'hover:from-blue-700 hover:to-sky-700',
      };
    case 'cmu':
      return {
        primary: '#582C83',
        bgLight: 'bg-purple-50/70',
        borderLight: 'border-purple-200',
        textDark: 'text-purple-950',
        badge: 'bg-purple-100 text-purple-800 border-purple-200',
        pill: 'bg-purple-600 text-white',
        gradientBar: 'bg-gradient-to-r from-purple-600 to-violet-600 text-white',
        hoverBar: 'hover:from-purple-700 hover:to-violet-700',
      };
    case 'tu':
      return {
        primary: '#C41230',
        bgLight: 'bg-red-50/70',
        borderLight: 'border-red-200',
        textDark: 'text-red-950',
        badge: 'bg-red-100 text-red-800 border-red-200',
        pill: 'bg-red-600 text-white',
        gradientBar: 'bg-gradient-to-r from-red-600 to-rose-600 text-white',
        hoverBar: 'hover:from-red-700 hover:to-rose-700',
      };
    case 'ku':
      return {
        primary: '#006A4E',
        bgLight: 'bg-emerald-50/70',
        borderLight: 'border-emerald-200',
        textDark: 'text-emerald-950',
        badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        pill: 'bg-emerald-700 text-white',
        gradientBar: 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white',
        hoverBar: 'hover:from-emerald-700 hover:to-teal-700',
      };
    case 'kmitl':
      return {
        primary: '#E35205',
        bgLight: 'bg-amber-50/70',
        borderLight: 'border-amber-200',
        textDark: 'text-amber-950',
        badge: 'bg-amber-100 text-amber-800 border-amber-200',
        pill: 'bg-amber-600 text-white',
        gradientBar: 'bg-gradient-to-r from-amber-600 to-orange-600 text-white',
        hoverBar: 'hover:from-amber-700 hover:to-orange-700',
      };
    case 'kku':
      return {
        primary: '#A73A27',
        bgLight: 'bg-rose-50/70',
        borderLight: 'border-rose-200',
        textDark: 'text-rose-950',
        badge: 'bg-rose-100 text-rose-800 border-rose-200',
        pill: 'bg-rose-700 text-white',
        gradientBar: 'bg-gradient-to-r from-rose-700 to-amber-700 text-white',
        hoverBar: 'hover:from-rose-800 hover:to-amber-800',
      };
    case 'psu':
      return {
        primary: '#003366',
        bgLight: 'bg-sky-50/70',
        borderLight: 'border-sky-200',
        textDark: 'text-sky-950',
        badge: 'bg-sky-100 text-sky-800 border-sky-200',
        pill: 'bg-sky-700 text-white',
        gradientBar: 'bg-gradient-to-r from-sky-700 to-blue-700 text-white',
        hoverBar: 'hover:from-sky-800 hover:to-blue-800',
      };
    case 'kmutnb':
      return {
        primary: '#D64000',
        bgLight: 'bg-orange-50/70',
        borderLight: 'border-orange-200',
        textDark: 'text-orange-950',
        badge: 'bg-orange-100 text-orange-800 border-orange-200',
        pill: 'bg-orange-600 text-white',
        gradientBar: 'bg-gradient-to-r from-orange-600 to-red-600 text-white',
        hoverBar: 'hover:from-orange-700 hover:to-red-700',
      };
    case 'swu':
      return {
        primary: '#C8102E',
        bgLight: 'bg-red-50/70',
        borderLight: 'border-red-200',
        textDark: 'text-red-950',
        badge: 'bg-red-100 text-red-800 border-red-200',
        pill: 'bg-red-700 text-white',
        gradientBar: 'bg-gradient-to-r from-red-700 to-pink-700 text-white',
        hoverBar: 'hover:from-red-800 hover:to-pink-800',
      };
    case 'nu':
      return {
        primary: '#702082',
        bgLight: 'bg-purple-50/70',
        borderLight: 'border-purple-200',
        textDark: 'text-purple-950',
        badge: 'bg-purple-100 text-purple-800 border-purple-200',
        pill: 'bg-purple-700 text-white',
        gradientBar: 'bg-gradient-to-r from-purple-700 to-indigo-700 text-white',
        hoverBar: 'hover:from-purple-800 hover:to-indigo-800',
      };
    case 'mfu':
      return {
        primary: '#A6192E',
        bgLight: 'bg-rose-50/70',
        borderLight: 'border-rose-200',
        textDark: 'text-rose-950',
        badge: 'bg-rose-100 text-rose-800 border-rose-200',
        pill: 'bg-rose-700 text-white',
        gradientBar: 'bg-gradient-to-r from-rose-700 to-amber-700 text-white',
        hoverBar: 'hover:from-rose-800 hover:to-amber-800',
      };
    case 'buu':
      return {
        primary: '#FAB914',
        bgLight: 'bg-amber-50/70',
        borderLight: 'border-amber-200',
        textDark: 'text-amber-950',
        badge: 'bg-amber-100 text-amber-800 border-amber-200',
        pill: 'bg-amber-600 text-white',
        gradientBar: 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white',
        hoverBar: 'hover:from-amber-700 hover:to-yellow-700',
      };
    case 'su':
      return {
        primary: '#008080',
        bgLight: 'bg-teal-50/70',
        borderLight: 'border-teal-200',
        textDark: 'text-teal-950',
        badge: 'bg-teal-100 text-teal-800 border-teal-200',
        pill: 'bg-teal-700 text-white',
        gradientBar: 'bg-gradient-to-r from-teal-700 to-emerald-700 text-white',
        hoverBar: 'hover:from-teal-800 hover:to-emerald-800',
      };
    case 'sut':
      return {
        primary: '#E05A10',
        bgLight: 'bg-orange-50/70',
        borderLight: 'border-orange-200',
        textDark: 'text-orange-950',
        badge: 'bg-orange-100 text-orange-800 border-orange-200',
        pill: 'bg-orange-600 text-white',
        gradientBar: 'bg-gradient-to-r from-orange-600 to-amber-600 text-white',
        hoverBar: 'hover:from-orange-700 hover:to-amber-700',
      };
    case 'up':
      return {
        primary: '#5E2750',
        bgLight: 'bg-purple-50/70',
        borderLight: 'border-purple-200',
        textDark: 'text-purple-950',
        badge: 'bg-purple-100 text-purple-800 border-purple-200',
        pill: 'bg-purple-800 text-white',
        gradientBar: 'bg-gradient-to-r from-purple-800 to-fuchsia-800 text-white',
        hoverBar: 'hover:from-purple-900 hover:to-fuchsia-900',
      };
    default:
      return {
        primary: '#4F46E5',
        bgLight: 'bg-indigo-50/70',
        borderLight: 'border-indigo-200',
        textDark: 'text-indigo-950',
        badge: 'bg-indigo-100 text-indigo-800 border-indigo-200',
        pill: 'bg-indigo-600 text-white',
        gradientBar: 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white',
        hoverBar: 'hover:from-indigo-700 hover:to-blue-700',
      };
  }
}
