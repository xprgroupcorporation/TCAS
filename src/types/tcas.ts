export type FieldCategory =
  | 'engineering'
  | 'health_medicine'
  | 'business_econ'
  | 'science_computing'
  | 'architecture_design'
  | 'humanities_social'
  | 'communication_arts'
  | 'law_politics'
  | 'agriculture_environment';

export type AdmissionRoundType =
  | 'TCAS1_PORTFOLIO'
  | 'TCAS2_QUOTA'
  | 'TCAS3_ADMISSION'
  | 'TCAS4_DIRECT';

export type VerificationStatus =
  | 'verified'
  | 'unverified'
  | 'changed'
  | 'outdated';

export type AdmissionEventType =
  | 'APPLICATION_OPENS'
  | 'APPLICATION_CLOSES'
  | 'DOCUMENT_SUBMISSION'
  | 'PAYMENT_DEADLINE'
  | 'INTERVIEW_LIST'
  | 'INTERVIEW'
  | 'EXAM'
  | 'RESULT_ANNOUNCEMENT'
  | 'TCAS_CONFIRMATION'
  | 'ENROLLMENT';

export interface SourceInfo {
  name: string;
  url: string;
  type:
    | 'Official University Admission Website'
    | 'Official Faculty Announcement PDF'
    | 'Official myTCAS Portal'
    | 'University Senate Notification';
  lastChecked: string;
  verificationStatus: VerificationStatus;
  notes?: string;
  previousValue?: string;
  changeDetectedAt?: string;
}

export interface University {
  id: string;
  code: string;
  nameTh: string;
  nameEn: string;
  abbr: string;
  province: string;
  officialAdmissionUrl: string;
  brandColor: string;
  accentBg: string;
}

export interface Campus {
  id: string;
  universityId: string;
  nameTh: string;
  nameEn: string;
}

export interface Faculty {
  id: string;
  campusId: string;
  universityId: string;
  nameTh: string;
  nameEn: string;
  fieldCategory: FieldCategory;
}

export interface Program {
  id: string;
  facultyId: string;
  universityId: string;
  nameTh: string;
  nameEn: string;
  degreeName: string;
  isInternational: boolean;
  language: 'Thai' | 'English' | 'Bilingual';
}

export interface Branch {
  id: string;
  programId: string;
  nameTh: string;
  nameEn: string;
  code?: string;
}

export interface Requirement {
  id: string;
  type:
    | 'GPAX'
    | 'TGAT'
    | 'TPAT'
    | 'A_LEVEL'
    | 'PORTFOLIO'
    | 'INTERVIEW'
    | 'MIN_SUBJECT_CREDIT'
    | 'ENGLISH_TEST'
    | 'SPECIAL_QUALIFICATION';
  nameTh: string;
  nameEn: string;
  minScore?: number | string;
  weightPercent?: number;
  detailsTh: string;
  detailsEn: string;
  isMandatory: boolean;
}

export interface DocumentRequirement {
  id: string;
  nameTh: string;
  nameEn: string;
  detailsTh: string;
  detailsEn: string;
  isMandatory: boolean;
  submissionFormat?: string;
}

export interface AdmissionEvent {
  id: string;
  type: AdmissionEventType;
  titleTh: string;
  titleEn: string;
  startDate: string; // ISO date 'YYYY-MM-DD'
  endDate?: string;   // ISO date 'YYYY-MM-DD'
  descriptionTh?: string;
  descriptionEn?: string;
  source: SourceInfo;
  status: VerificationStatus;
  changeLog?: {
    previousDate: string;
    newDate: string;
    reason: string;
  };
}

export interface SubAdmissionProject {
  id: string;
  nameTh: string;
  nameEn?: string;
  quotaSeats: number;
  studyTrack?: string;
  gpaxMin?: number | string;
  generalEligibilityTh?: string[]; // คุณสมบัติพื้นฐาน (เช่น รับ ม.6 แกนกลาง, ไม่รับ นานาชาติ/อาชีวะ/กศน./GED)
  additionalConditionsTh?: string[]; // เงื่อนไขและคุณสมบัติเฉพาะโครงการ
  selectionFormulaTh?: string; // สัดส่วนคะแนนคัดเลือก
  selectionStepsTh?: {
    stepName: string;
    detailsTh: string[];
    minPassScoreTh?: string;
  }[]; // เกณฑ์การคัดเลือก (1. พิจารณาผู้มีสิทธิ์สัมภาษณ์, 2. ผ่านสัมภาษณ์)
  portfolioQuestionsTh?: string[]; // คำถามเพิ่มเติมสำหรับแฟ้มสะสมผลงาน (Portfolio)
  portfolioPagesLimit?: string;
  officialAnnouncementUrl?: string;
}

export interface AdmissionProject {
  id: string;
  branchId: string;
  programId: string;
  facultyId: string;
  universityId: string;
  round: AdmissionRoundType;
  projectNameTh: string;
  projectNameEn: string;
  quotaSeats: number;
  applicationUrl: string;
  source: SourceInfo;
  requirements: Requirement[];
  documents: DocumentRequirement[];
  events: AdmissionEvent[];
  // Rich myTCAS / University Admission specific fields
  tcasProgramCode?: string; // รหัสหลักสูตร myTCAS (เช่น 10010111101801A)
  studyTrack?: string; // แผนการเรียนที่รับสมัคร (เช่น วิทย์-คณิต, ศิลป์-คำนวณ, ทุกแผนการเรียน)
  gpaxMin?: number | string; // GPAX ขั้นต่ำ (เช่น 3.00, 3.25)
  tuitionFee?: string; // ค่าธรรมเนียมการศึกษา (เช่น 18,000 บาท/ภาคการศึกษา)
  applicationFee?: string; // ค่าธรรมเนียมการสมัคร (เช่น 300 บาท)
  portfolioPagesLimit?: string; // ข้อกำหนดพอร์ตโฟลิโอ (เช่น ไม่เกิน 10 หน้า A4 ไม่รวมหน้าปก)
  additionalConditionsTh?: string[]; // เงื่อนไขและคุณสมบัติเพิ่มเติมเฉพาะโครงการ
  selectionFormulaTh?: string; // สัดส่วนเกณฑ์คะแนนคัดเลือก
  curriculumType?: string; // เช่น หลักสูตรปกติ, นานาชาติ, พิเศษ
  subProjects?: SubAdmissionProject[]; // โครงการย่อยในรอบนั้นๆ พร้อมเกณฑ์คัดเลือกและคุณสมบัติเฉพาะโครงการ
}

export interface UserTrackedProgram {
  projectId: string;
  addedAt: string;
  notes?: string;
  priority: 'high' | 'medium' | 'low';
}

export interface UserTask {
  id: string;
  projectId?: string;
  titleTh: string;
  titleEn: string;
  dueDate?: string;
  isCompleted: boolean;
  isAutoGenerated: boolean;
  category: 'document' | 'exam' | 'submission' | 'payment' | 'interview' | 'personal';
}

export interface ChangeAlert {
  id: string;
  projectId: string;
  universityAbbr: string;
  programName: string;
  roundName: string;
  changeType: 'deadline_extended' | 'requirement_updated' | 'interview_date_shifted' | 'source_reverified';
  title: string;
  previousValue: string;
  newValue: string;
  sourceName: string;
  sourceUrl: string;
  detectedAt: string;
}
