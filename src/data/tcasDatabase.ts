import {
  University,
  Campus,
  Faculty,
  Program,
  Branch,
  AdmissionProject,
  ChangeAlert,
} from '../types/tcas';

export const UNIVERSITIES: University[] = [
  {
    "id": "cmu",
    "code": "CMU",
    "abbr": "CMU",
    "nameTh": "มหาวิทยาลัยเชียงใหม่ (มช.)",
    "nameEn": "Chiang Mai University",
    "province": "เชียงใหม่",
    "officialAdmissionUrl": "https://admission.reg.cmu.ac.th",
    "brandColor": "#582C83",
    "accentBg": "#F6F2FA"
  },
  {
    "id": "cu",
    "code": "CU",
    "abbr": "CU",
    "nameTh": "จุฬาลงกรณ์มหาวิทยาลัย",
    "nameEn": "Chulalongkorn University",
    "province": "กรุงเทพมหานคร",
    "officialAdmissionUrl": "https://admission.chula.ac.th",
    "brandColor": "#DE3163",
    "accentBg": "#FDF2F4"
  },
  {
    "id": "mu",
    "code": "MU",
    "abbr": "MU",
    "nameTh": "มหาวิทยาลัยมหิดล",
    "nameEn": "Mahidol University",
    "province": "นครปฐม / กรุงเทพฯ",
    "officialAdmissionUrl": "https://tcas.mahidol.ac.th",
    "brandColor": "#004B87",
    "accentBg": "#F0F7FF"
  },
  {
    "id": "tu",
    "code": "TU",
    "abbr": "TU",
    "nameTh": "มหาวิทยาลัยธรรมศาสตร์ (มธ.)",
    "nameEn": "Thammasat University",
    "province": "ปทุมธานี / กรุงเทพฯ",
    "officialAdmissionUrl": "https://tcas.tuadmissions.in.th",
    "brandColor": "#C41230",
    "accentBg": "#FEF2F2"
  },
  {
    "id": "ku",
    "code": "KU",
    "abbr": "KU",
    "nameTh": "มหาวิทยาลัยเกษตรศาสตร์ (มก.)",
    "nameEn": "Kasetsart University",
    "province": "กรุงเทพมหานคร",
    "officialAdmissionUrl": "https://admission.ku.ac.th",
    "brandColor": "#006A4E",
    "accentBg": "#ECFDF5"
  },
  {
    "id": "kmutt",
    "code": "KMUTT",
    "abbr": "KMUTT",
    "nameTh": "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (มจธ.)",
    "nameEn": "King Mongkut's University of Technology Thonburi",
    "province": "กรุงเทพมหานคร",
    "officialAdmissionUrl": "https://admission.kmutt.ac.th",
    "brandColor": "#F05A22",
    "accentBg": "#FFF3ED"
  },
  {
    "id": "kmitl",
    "code": "KMITL",
    "abbr": "KMITL",
    "nameTh": "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง (สจล.)",
    "nameEn": "King Mongkut's Institute of Technology Ladkrabang",
    "province": "กรุงเทพมหานคร",
    "officialAdmissionUrl": "https://curreg.kmitl.ac.th",
    "brandColor": "#E35205",
    "accentBg": "#FFF7ED"
  },
  {
    "id": "kmutnb",
    "code": "KMUTNB",
    "abbr": "KMUTNB",
    "nameTh": "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ (มจพ.)",
    "nameEn": "King Mongkut's University of Technology North Bangkok",
    "province": "กรุงเทพมหานคร",
    "officialAdmissionUrl": "https://admission.kmutnb.ac.th",
    "brandColor": "#D64000",
    "accentBg": "#FFF5F0"
  },
  {
    "id": "kku",
    "code": "KKU",
    "abbr": "KKU",
    "nameTh": "มหาวิทยาลัยขอนแก่น (มข.)",
    "nameEn": "Khon Kaen University",
    "province": "ขอนแก่น",
    "officialAdmissionUrl": "https://admissions.kku.ac.th",
    "brandColor": "#A73A27",
    "accentBg": "#FFF1F2"
  },
  {
    "id": "psu",
    "code": "PSU",
    "abbr": "PSU",
    "nameTh": "มหาวิทยาลัยสงขลานครินทร์ (ม.อ.)",
    "nameEn": "Prince of Songkla University",
    "province": "สงขลา",
    "officialAdmissionUrl": "https://admission.psu.ac.th",
    "brandColor": "#003366",
    "accentBg": "#F0F9FF"
  },
  {
    "id": "swu",
    "code": "SWU",
    "abbr": "SWU",
    "nameTh": "มหาวิทยาลัยศรีนครินทรวิโรฒ (มศว)",
    "nameEn": "Srinakharinwirot University",
    "province": "กรุงเทพมหานคร / นครนายก",
    "officialAdmissionUrl": "https://admission.swu.ac.th",
    "brandColor": "#C8102E",
    "accentBg": "#FEF2F4"
  },
  {
    "id": "nu",
    "code": "NU",
    "abbr": "NU",
    "nameTh": "มหาวิทยาลัยนเรศวร (มน.)",
    "nameEn": "Naresuan University",
    "province": "พิษณุโลก",
    "officialAdmissionUrl": "https://admission.nu.ac.th",
    "brandColor": "#702082",
    "accentBg": "#FBF5FC"
  },
  {
    "id": "mfu",
    "code": "MFU",
    "abbr": "MFU",
    "nameTh": "มหาวิทยาลัยแม่ฟ้าหลวง (มฟล.)",
    "nameEn": "Mae Fah Luang University",
    "province": "เชียงราย",
    "officialAdmissionUrl": "https://admission.mfu.ac.th",
    "brandColor": "#A6192E",
    "accentBg": "#FDF2F4"
  },
  {
    "id": "buu",
    "code": "BUU",
    "abbr": "BUU",
    "nameTh": "มหาวิทยาลัยบูรพา (มบ.)",
    "nameEn": "Burapha University",
    "province": "ชลบุรี",
    "officialAdmissionUrl": "https://regservice.buu.ac.th",
    "brandColor": "#FAB914",
    "accentBg": "#FEFCE8"
  },
  {
    "id": "su",
    "code": "SU",
    "abbr": "SU",
    "nameTh": "มหาวิทยาลัยศิลปากร (มศก.)",
    "nameEn": "Silpakorn University",
    "province": "นครปฐม / กรุงเทพฯ",
    "officialAdmissionUrl": "https://admission.su.ac.th",
    "brandColor": "#008080",
    "accentBg": "#F0FDFA"
  },
  {
    "id": "sut",
    "code": "SUT",
    "abbr": "SUT",
    "nameTh": "มหาวิทยาลัยเทคโนโลยีสุรนารี (มทส.)",
    "nameEn": "Suranaree University of Technology",
    "province": "นครราชสีมา",
    "officialAdmissionUrl": "https://sutgateway.sut.ac.th",
    "brandColor": "#E05A10",
    "accentBg": "#FFF7ED"
  },
  {
    "id": "up",
    "code": "UP",
    "abbr": "UP",
    "nameTh": "มหาวิทยาลัยพะเยา (มพ.)",
    "nameEn": "University of Phayao",
    "province": "พะเยา",
    "officialAdmissionUrl": "https://admission.up.ac.th",
    "brandColor": "#5E2750",
    "accentBg": "#FAF5F9"
  }
];

export const CAMPUSES: Campus[] = [
  {
    "id": "cmu-main",
    "universityId": "cmu",
    "nameTh": "วิทยาเขตหลัก (มหาวิทยาลัยเชียงใหม่)",
    "nameEn": "CMU Main Campus"
  },
  {
    "id": "cu-main",
    "universityId": "cu",
    "nameTh": "วิทยาเขตหลัก (จุฬาลงกรณ์มหาวิทยาลัย)",
    "nameEn": "CU Main Campus"
  },
  {
    "id": "mu-main",
    "universityId": "mu",
    "nameTh": "วิทยาเขตหลัก (มหาวิทยาลัยมหิดล)",
    "nameEn": "MU Main Campus"
  },
  {
    "id": "tu-main",
    "universityId": "tu",
    "nameTh": "วิทยาเขตหลัก (มหาวิทยาลัยธรรมศาสตร์)",
    "nameEn": "TU Main Campus"
  },
  {
    "id": "ku-main",
    "universityId": "ku",
    "nameTh": "วิทยาเขตหลัก (มหาวิทยาลัยเกษตรศาสตร์)",
    "nameEn": "KU Main Campus"
  },
  {
    "id": "kmutt-main",
    "universityId": "kmutt",
    "nameTh": "วิทยาเขตหลัก (มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี)",
    "nameEn": "KMUTT Main Campus"
  },
  {
    "id": "kmitl-main",
    "universityId": "kmitl",
    "nameTh": "วิทยาเขตหลัก (สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง)",
    "nameEn": "KMITL Main Campus"
  },
  {
    "id": "kmutnb-main",
    "universityId": "kmutnb",
    "nameTh": "วิทยาเขตหลัก (มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ)",
    "nameEn": "KMUTNB Main Campus"
  },
  {
    "id": "kku-main",
    "universityId": "kku",
    "nameTh": "วิทยาเขตหลัก (มหาวิทยาลัยขอนแก่น)",
    "nameEn": "KKU Main Campus"
  },
  {
    "id": "psu-main",
    "universityId": "psu",
    "nameTh": "วิทยาเขตหลัก (มหาวิทยาลัยสงขลานครินทร์)",
    "nameEn": "PSU Main Campus"
  },
  {
    "id": "swu-main",
    "universityId": "swu",
    "nameTh": "วิทยาเขตหลัก (มหาวิทยาลัยศรีนครินทรวิโรฒ)",
    "nameEn": "SWU Main Campus"
  },
  {
    "id": "nu-main",
    "universityId": "nu",
    "nameTh": "วิทยาเขตหลัก (มหาวิทยาลัยนเรศวร)",
    "nameEn": "NU Main Campus"
  },
  {
    "id": "mfu-main",
    "universityId": "mfu",
    "nameTh": "วิทยาเขตหลัก (มหาวิทยาลัยแม่ฟ้าหลวง)",
    "nameEn": "MFU Main Campus"
  },
  {
    "id": "buu-main",
    "universityId": "buu",
    "nameTh": "วิทยาเขตหลัก (มหาวิทยาลัยบูรพา)",
    "nameEn": "BUU Main Campus"
  },
  {
    "id": "su-main",
    "universityId": "su",
    "nameTh": "วิทยาเขตหลัก (มหาวิทยาลัยศิลปากร)",
    "nameEn": "SU Main Campus"
  },
  {
    "id": "sut-main",
    "universityId": "sut",
    "nameTh": "วิทยาเขตหลัก (มหาวิทยาลัยเทคโนโลยีสุรนารี)",
    "nameEn": "SUT Main Campus"
  },
  {
    "id": "up-main",
    "universityId": "up",
    "nameTh": "วิทยาเขตหลัก (มหาวิทยาลัยพะเยา)",
    "nameEn": "UP Main Campus"
  }
];

export const FACULTIES: Faculty[] = [
  {
    "id": "cmu-health_medicine-1",
    "campusId": "cmu-main",
    "universityId": "cmu",
    "nameTh": "คณะแพทยศาสตร์",
    "nameEn": "Faculty of Medicine",
    "fieldCategory": "health_medicine"
  },
  {
    "id": "cmu-health_medicine-2",
    "campusId": "cmu-main",
    "universityId": "cmu",
    "nameTh": "คณะทันตแพทยศาสตร์",
    "nameEn": "Faculty of Dentistry",
    "fieldCategory": "health_medicine"
  },
  {
    "id": "cmu-health_medicine-3",
    "campusId": "cmu-main",
    "universityId": "cmu",
    "nameTh": "คณะเภสัชศาสตร์",
    "nameEn": "Faculty of Pharmacy",
    "fieldCategory": "health_medicine"
  },
  {
    "id": "cmu-health_medicine-4",
    "campusId": "cmu-main",
    "universityId": "cmu",
    "nameTh": "คณะพยาบาลศาสตร์",
    "nameEn": "Faculty of Nursing",
    "fieldCategory": "health_medicine"
  },
  {
    "id": "cmu-health_medicine-5",
    "campusId": "cmu-main",
    "universityId": "cmu",
    "nameTh": "คณะเทคนิคการแพทย์",
    "nameEn": "Faculty of Associated Medical Sciences",
    "fieldCategory": "health_medicine"
  },
  {
    "id": "cmu-health_medicine-6",
    "campusId": "cmu-main",
    "universityId": "cmu",
    "nameTh": "คณะสัตวแพทยศาสตร์",
    "nameEn": "Faculty of Veterinary Medicine",
    "fieldCategory": "health_medicine"
  },
  {
    "id": "cmu-engineering-7",
    "campusId": "cmu-main",
    "universityId": "cmu",
    "nameTh": "คณะวิศวกรรมศาสตร์",
    "nameEn": "Faculty of Engineering",
    "fieldCategory": "engineering"
  },
  {
    "id": "cmu-science_computing-8",
    "campusId": "cmu-main",
    "universityId": "cmu",
    "nameTh": "คณะวิทยาศาสตร์",
    "nameEn": "Faculty of Science",
    "fieldCategory": "science_computing"
  },
  {
    "id": "cmu-science_computing-9",
    "campusId": "cmu-main",
    "universityId": "cmu",
    "nameTh": "วิทยาลัยศิลปะ สื่อ และเทคโนโลยี (CAMT)",
    "nameEn": "College of Arts, Media and Technology",
    "fieldCategory": "science_computing"
  },
  {
    "id": "cmu-business_econ-10",
    "campusId": "cmu-main",
    "universityId": "cmu",
    "nameTh": "คณะบริหารธุรกิจ",
    "nameEn": "Faculty of Business Administration",
    "fieldCategory": "business_econ"
  },
  {
    "id": "cmu-business_econ-11",
    "campusId": "cmu-main",
    "universityId": "cmu",
    "nameTh": "คณะเศรษฐศาสตร์",
    "nameEn": "Faculty of Economics",
    "fieldCategory": "business_econ"
  },
  {
    "id": "cmu-humanities_social-12",
    "campusId": "cmu-main",
    "universityId": "cmu",
    "nameTh": "คณะมนุษยศาสตร์",
    "nameEn": "Faculty of Humanities",
    "fieldCategory": "humanities_social"
  },
  {
    "id": "cmu-communication_arts-13",
    "campusId": "cmu-main",
    "universityId": "cmu",
    "nameTh": "คณะการสื่อสารมวลชน",
    "nameEn": "Faculty of Mass Communication",
    "fieldCategory": "communication_arts"
  },
  {
    "id": "cmu-law_politics-14",
    "campusId": "cmu-main",
    "universityId": "cmu",
    "nameTh": "คณะนิติศาสตร์",
    "nameEn": "Faculty of Law",
    "fieldCategory": "law_politics"
  },
  {
    "id": "cmu-architecture_design-15",
    "campusId": "cmu-main",
    "universityId": "cmu",
    "nameTh": "คณะสถาปัตยกรรมศาสตร์",
    "nameEn": "Faculty of Architecture",
    "fieldCategory": "architecture_design"
  },
  {
    "id": "cu-engineering-16",
    "campusId": "cu-main",
    "universityId": "cu",
    "nameTh": "คณะวิศวกรรมศาสตร์",
    "nameEn": "Faculty of Engineering",
    "fieldCategory": "engineering"
  },
  {
    "id": "cu-business_econ-17",
    "campusId": "cu-main",
    "universityId": "cu",
    "nameTh": "คณะพาณิชยศาสตร์และการบัญชี",
    "nameEn": "Chulalongkorn Business School",
    "fieldCategory": "business_econ"
  },
  {
    "id": "cu-humanities_social-18",
    "campusId": "cu-main",
    "universityId": "cu",
    "nameTh": "คณะอักษรศาสตร์",
    "nameEn": "Faculty of Arts",
    "fieldCategory": "humanities_social"
  },
  {
    "id": "cu-communication_arts-19",
    "campusId": "cu-main",
    "universityId": "cu",
    "nameTh": "คณะนิเทศศาสตร์",
    "nameEn": "Faculty of Communication Arts",
    "fieldCategory": "communication_arts"
  },
  {
    "id": "cu-architecture_design-20",
    "campusId": "cu-main",
    "universityId": "cu",
    "nameTh": "คณะสถาปัตยกรรมศาสตร์",
    "nameEn": "Faculty of Architecture",
    "fieldCategory": "architecture_design"
  },
  {
    "id": "mu-health_medicine-21",
    "campusId": "mu-main",
    "universityId": "mu",
    "nameTh": "คณะแพทยศาสตร์ศิริราชพยาบาล",
    "nameEn": "Faculty of Medicine Siriraj Hospital",
    "fieldCategory": "health_medicine"
  },
  {
    "id": "mu-science_computing-22",
    "campusId": "mu-main",
    "universityId": "mu",
    "nameTh": "คณะเทคโนโลยีสารสนเทศและการสื่อสาร (MUICT)",
    "nameEn": "Faculty of ICT",
    "fieldCategory": "science_computing"
  },
  {
    "id": "mu-science_computing-23",
    "campusId": "mu-main",
    "universityId": "mu",
    "nameTh": "คณะวิทยาศาสตร์",
    "nameEn": "Faculty of Science",
    "fieldCategory": "science_computing"
  },
  {
    "id": "mu-communication_arts-24",
    "campusId": "mu-main",
    "universityId": "mu",
    "nameTh": "วิทยาลัยดุริยางคศิลป์",
    "nameEn": "College of Music",
    "fieldCategory": "communication_arts"
  },
  {
    "id": "tu-law_politics-25",
    "campusId": "tu-main",
    "universityId": "tu",
    "nameTh": "คณะนิติศาสตร์",
    "nameEn": "Faculty of Law",
    "fieldCategory": "law_politics"
  },
  {
    "id": "tu-business_econ-26",
    "campusId": "tu-main",
    "universityId": "tu",
    "nameTh": "คณะพาณิชยศาสตร์และการบัญชี (TBS)",
    "nameEn": "Thammasat Business School",
    "fieldCategory": "business_econ"
  },
  {
    "id": "tu-law_politics-27",
    "campusId": "tu-main",
    "universityId": "tu",
    "nameTh": "คณะรัฐศาสตร์",
    "nameEn": "Faculty of Political Science",
    "fieldCategory": "law_politics"
  },
  {
    "id": "tu-engineering-28",
    "campusId": "tu-main",
    "universityId": "tu",
    "nameTh": "สถาบันเทคโนโลยีนานาชาติสิรินธร (SIIT)",
    "nameEn": "Sirindhorn International Institute of Technology",
    "fieldCategory": "engineering"
  },
  {
    "id": "kmutt-science_computing-29",
    "campusId": "kmutt-main",
    "universityId": "kmutt",
    "nameTh": "คณะเทคโนโลยีสารสนเทศ (SIT)",
    "nameEn": "School of Information Technology",
    "fieldCategory": "science_computing"
  },
  {
    "id": "kmutt-engineering-30",
    "campusId": "kmutt-main",
    "universityId": "kmutt",
    "nameTh": "คณะวิศวกรรมศาสตร์",
    "nameEn": "Faculty of Engineering",
    "fieldCategory": "engineering"
  },
  {
    "id": "kmutt-architecture_design-31",
    "campusId": "kmutt-main",
    "universityId": "kmutt",
    "nameTh": "คณะสถาปัตยกรรมศาสตร์และการออกแบบ (SoA+D)",
    "nameEn": "School of Architecture and Design",
    "fieldCategory": "architecture_design"
  },
  {
    "id": "kmitl-engineering-32",
    "campusId": "kmitl-main",
    "universityId": "kmitl",
    "nameTh": "คณะวิศวกรรมศาสตร์",
    "nameEn": "Faculty of Engineering",
    "fieldCategory": "engineering"
  },
  {
    "id": "kmitl-science_computing-33",
    "campusId": "kmitl-main",
    "universityId": "kmitl",
    "nameTh": "คณะเทคโนโลยีสารสนเทศ",
    "nameEn": "Faculty of Information Technology",
    "fieldCategory": "science_computing"
  },
  {
    "id": "ku-engineering-34",
    "campusId": "ku-main",
    "universityId": "ku",
    "nameTh": "คณะวิศวกรรมศาสตร์",
    "nameEn": "Faculty of Engineering",
    "fieldCategory": "engineering"
  },
  {
    "id": "ku-agriculture_environment-35",
    "campusId": "ku-main",
    "universityId": "ku",
    "nameTh": "คณะเกษตร",
    "nameEn": "Faculty of Agriculture",
    "fieldCategory": "agriculture_environment"
  },
  {
    "id": "kku-health_medicine-36",
    "campusId": "kku-main",
    "universityId": "kku",
    "nameTh": "คณะแพทยศาสตร์",
    "nameEn": "Faculty of Medicine",
    "fieldCategory": "health_medicine"
  },
  {
    "id": "kku-engineering-37",
    "campusId": "kku-main",
    "universityId": "kku",
    "nameTh": "คณะวิศวกรรมศาสตร์",
    "nameEn": "Faculty of Engineering",
    "fieldCategory": "engineering"
  },
  {
    "id": "psu-health_medicine-38",
    "campusId": "psu-main",
    "universityId": "psu",
    "nameTh": "คณะแพทยศาสตร์",
    "nameEn": "Faculty of Medicine",
    "fieldCategory": "health_medicine"
  },
  {
    "id": "psu-engineering-39",
    "campusId": "psu-main",
    "universityId": "psu",
    "nameTh": "คณะวิศวกรรมศาสตร์",
    "nameEn": "Faculty of Engineering",
    "fieldCategory": "engineering"
  },
  {
    "id": "swu-health_medicine-40",
    "campusId": "swu-main",
    "universityId": "swu",
    "nameTh": "คณะแพทยศาสตร์",
    "nameEn": "Faculty of Medicine",
    "fieldCategory": "health_medicine"
  },
  {
    "id": "swu-engineering-41",
    "campusId": "swu-main",
    "universityId": "swu",
    "nameTh": "คณะวิศวกรรมศาสตร์",
    "nameEn": "Faculty of Engineering",
    "fieldCategory": "engineering"
  },
  {
    "id": "kmutnb-engineering-42",
    "campusId": "kmutnb-main",
    "universityId": "kmutnb",
    "nameTh": "คณะวิศวกรรมศาสตร์",
    "nameEn": "Faculty of Engineering",
    "fieldCategory": "engineering"
  },
  {
    "id": "nu-health_medicine-43",
    "campusId": "nu-main",
    "universityId": "nu",
    "nameTh": "คณะแพทยศาสตร์",
    "nameEn": "Faculty of Medicine",
    "fieldCategory": "health_medicine"
  },
  {
    "id": "mfu-science_computing-44",
    "campusId": "mfu-main",
    "universityId": "mfu",
    "nameTh": "สำนักวิชาเทคโนโลยีสารสนเทศ",
    "nameEn": "School of Information Technology",
    "fieldCategory": "science_computing"
  },
  {
    "id": "buu-science_computing-45",
    "campusId": "buu-main",
    "universityId": "buu",
    "nameTh": "คณะวิทยาการสารสนเทศ",
    "nameEn": "Faculty of Informatics",
    "fieldCategory": "science_computing"
  },
  {
    "id": "su-communication_arts-46",
    "campusId": "su-main",
    "universityId": "su",
    "nameTh": "คณะเทคโนโลยีสารสนเทศและการสื่อสาร (ICT ศิลปากร)",
    "nameEn": "Faculty of ICT Silpakorn",
    "fieldCategory": "communication_arts"
  },
  {
    "id": "sut-engineering-47",
    "campusId": "sut-main",
    "universityId": "sut",
    "nameTh": "สำนักวิชาวิศวกรรมศาสตร์",
    "nameEn": "Institute of Engineering",
    "fieldCategory": "engineering"
  },
  {
    "id": "up-health_medicine-48",
    "campusId": "up-main",
    "universityId": "up",
    "nameTh": "คณะแพทยศาสตร์",
    "nameEn": "School of Medicine",
    "fieldCategory": "health_medicine"
  },
  {
    "id": "cmu-fac-architecture_design-0",
    "campusId": "cmu-main",
    "universityId": "cmu",
    "nameTh": "สำนักวิชา/คณะสถาปัตยกรรมภายในและการออกแบบพื้นที่ (CMU)",
    "nameEn": "Faculty of architecture_design (CMU)",
    "fieldCategory": "architecture_design"
  },
  {
    "id": "cmu-fac-law_politics-3",
    "campusId": "cmu-main",
    "universityId": "cmu",
    "nameTh": "สำนักวิชา/คณะรัฐประศาสนศาสตร์และการบริหารเมือง (CMU)",
    "nameEn": "Faculty of law_politics (CMU)",
    "fieldCategory": "law_politics"
  },
  {
    "id": "cmu-fac-engineering-6",
    "campusId": "cmu-main",
    "universityId": "cmu",
    "nameTh": "สำนักวิชา/คณะวิศวกรรมชีวการแพทย์ (Biomedical Eng) (CMU)",
    "nameEn": "Faculty of engineering (CMU)",
    "fieldCategory": "engineering"
  },
  {
    "id": "cmu-fac-science_computing-9",
    "campusId": "cmu-main",
    "universityId": "cmu",
    "nameTh": "สำนักวิชา/คณะชีวสารสนเทศศาสตร์และจีโนมิกส์ (Bioinformatics) (CMU)",
    "nameEn": "Faculty of science_computing (CMU)",
    "fieldCategory": "science_computing"
  },
  {
    "id": "cu-fac-architecture_design-0",
    "campusId": "cu-main",
    "universityId": "cu",
    "nameTh": "สำนักวิชา/คณะสถาปัตยกรรมภายในและการออกแบบพื้นที่ (CU)",
    "nameEn": "Faculty of architecture_design (CU)",
    "fieldCategory": "architecture_design"
  },
  {
    "id": "cu-fac-law_politics-3",
    "campusId": "cu-main",
    "universityId": "cu",
    "nameTh": "สำนักวิชา/คณะรัฐประศาสนศาสตร์และการบริหารเมือง (CU)",
    "nameEn": "Faculty of law_politics (CU)",
    "fieldCategory": "law_politics"
  },
  {
    "id": "cu-fac-engineering-6",
    "campusId": "cu-main",
    "universityId": "cu",
    "nameTh": "สำนักวิชา/คณะวิศวกรรมชีวการแพทย์ (Biomedical Eng) (CU)",
    "nameEn": "Faculty of engineering (CU)",
    "fieldCategory": "engineering"
  },
  {
    "id": "cu-fac-science_computing-9",
    "campusId": "cu-main",
    "universityId": "cu",
    "nameTh": "สำนักวิชา/คณะชีวสารสนเทศศาสตร์และจีโนมิกส์ (Bioinformatics) (CU)",
    "nameEn": "Faculty of science_computing (CU)",
    "fieldCategory": "science_computing"
  },
  {
    "id": "mu-fac-humanities_social-2",
    "campusId": "mu-main",
    "universityId": "mu",
    "nameTh": "สำนักวิชา/คณะการท่องเที่ยวและการบริการดิจิทัล (MU)",
    "nameEn": "Faculty of humanities_social (MU)",
    "fieldCategory": "humanities_social"
  },
  {
    "id": "mu-fac-agriculture_environment-5",
    "campusId": "mu-main",
    "universityId": "mu",
    "nameTh": "สำนักวิชา/คณะการจัดการเทคโนโลยีและนวัตกรรมอาหาร (MU)",
    "nameEn": "Faculty of agriculture_environment (MU)",
    "fieldCategory": "agriculture_environment"
  },
  {
    "id": "mu-fac-communication_arts-8",
    "campusId": "mu-main",
    "universityId": "mu",
    "nameTh": "สำนักวิชา/คณะนิเทศศาสตร์ดิจิทัลและคอนเทนต์ครีเอเตอร์ (MU)",
    "nameEn": "Faculty of communication_arts (MU)",
    "fieldCategory": "communication_arts"
  },
  {
    "id": "tu-fac-health_medicine-1",
    "campusId": "tu-main",
    "universityId": "tu",
    "nameTh": "สำนักวิชา/คณะวิทยาศาสตร์การกีฬาและการออกกำลังกาย (TU)",
    "nameEn": "Faculty of health_medicine (TU)",
    "fieldCategory": "health_medicine"
  },
  {
    "id": "tu-fac-science_computing-4",
    "campusId": "tu-main",
    "universityId": "tu",
    "nameTh": "สำนักวิชา/คณะฟิสิกส์วัสดุและพลังงานสะอาด (TU)",
    "nameEn": "Faculty of science_computing (TU)",
    "fieldCategory": "science_computing"
  },
  {
    "id": "tu-fac-business_econ-7",
    "campusId": "tu-main",
    "universityId": "tu",
    "nameTh": "สำนักวิชา/คณะการจัดการการขนส่งและโลจิสติกส์การค้า (TU)",
    "nameEn": "Faculty of business_econ (TU)",
    "fieldCategory": "business_econ"
  },
  {
    "id": "ku-fac-health_medicine-1",
    "campusId": "ku-main",
    "universityId": "ku",
    "nameTh": "สำนักวิชา/คณะวิทยาศาสตร์การกีฬาและการออกกำลังกาย (KU)",
    "nameEn": "Faculty of health_medicine (KU)",
    "fieldCategory": "health_medicine"
  },
  {
    "id": "ku-fac-science_computing-4",
    "campusId": "ku-main",
    "universityId": "ku",
    "nameTh": "สำนักวิชา/คณะฟิสิกส์วัสดุและพลังงานสะอาด (KU)",
    "nameEn": "Faculty of science_computing (KU)",
    "fieldCategory": "science_computing"
  },
  {
    "id": "ku-fac-business_econ-7",
    "campusId": "ku-main",
    "universityId": "ku",
    "nameTh": "สำนักวิชา/คณะการจัดการการขนส่งและโลจิสติกส์การค้า (KU)",
    "nameEn": "Faculty of business_econ (KU)",
    "fieldCategory": "business_econ"
  },
  {
    "id": "kmutt-fac-health_medicine-1",
    "campusId": "kmutt-main",
    "universityId": "kmutt",
    "nameTh": "สำนักวิชา/คณะวิทยาศาสตร์การกีฬาและการออกกำลังกาย (KMUTT)",
    "nameEn": "Faculty of health_medicine (KMUTT)",
    "fieldCategory": "health_medicine"
  },
  {
    "id": "kmutt-fac-science_computing-4",
    "campusId": "kmutt-main",
    "universityId": "kmutt",
    "nameTh": "สำนักวิชา/คณะฟิสิกส์วัสดุและพลังงานสะอาด (KMUTT)",
    "nameEn": "Faculty of science_computing (KMUTT)",
    "fieldCategory": "science_computing"
  },
  {
    "id": "kmutt-fac-business_econ-7",
    "campusId": "kmutt-main",
    "universityId": "kmutt",
    "nameTh": "สำนักวิชา/คณะการจัดการการขนส่งและโลจิสติกส์การค้า (KMUTT)",
    "nameEn": "Faculty of business_econ (KMUTT)",
    "fieldCategory": "business_econ"
  },
  {
    "id": "kmitl-fac-health_medicine-1",
    "campusId": "kmitl-main",
    "universityId": "kmitl",
    "nameTh": "สำนักวิชา/คณะวิทยาศาสตร์การกีฬาและการออกกำลังกาย (KMITL)",
    "nameEn": "Faculty of health_medicine (KMITL)",
    "fieldCategory": "health_medicine"
  },
  {
    "id": "kmitl-fac-science_computing-4",
    "campusId": "kmitl-main",
    "universityId": "kmitl",
    "nameTh": "สำนักวิชา/คณะฟิสิกส์วัสดุและพลังงานสะอาด (KMITL)",
    "nameEn": "Faculty of science_computing (KMITL)",
    "fieldCategory": "science_computing"
  },
  {
    "id": "kmitl-fac-business_econ-7",
    "campusId": "kmitl-main",
    "universityId": "kmitl",
    "nameTh": "สำนักวิชา/คณะการจัดการการขนส่งและโลจิสติกส์การค้า (KMITL)",
    "nameEn": "Faculty of business_econ (KMITL)",
    "fieldCategory": "business_econ"
  },
  {
    "id": "kmutnb-fac-health_medicine-1",
    "campusId": "kmutnb-main",
    "universityId": "kmutnb",
    "nameTh": "สำนักวิชา/คณะวิทยาศาสตร์การกีฬาและการออกกำลังกาย (KMUTNB)",
    "nameEn": "Faculty of health_medicine (KMUTNB)",
    "fieldCategory": "health_medicine"
  },
  {
    "id": "kmutnb-fac-science_computing-4",
    "campusId": "kmutnb-main",
    "universityId": "kmutnb",
    "nameTh": "สำนักวิชา/คณะฟิสิกส์วัสดุและพลังงานสะอาด (KMUTNB)",
    "nameEn": "Faculty of science_computing (KMUTNB)",
    "fieldCategory": "science_computing"
  },
  {
    "id": "kmutnb-fac-business_econ-7",
    "campusId": "kmutnb-main",
    "universityId": "kmutnb",
    "nameTh": "สำนักวิชา/คณะการจัดการการขนส่งและโลจิสติกส์การค้า (KMUTNB)",
    "nameEn": "Faculty of business_econ (KMUTNB)",
    "fieldCategory": "business_econ"
  },
  {
    "id": "kku-fac-health_medicine-1",
    "campusId": "kku-main",
    "universityId": "kku",
    "nameTh": "สำนักวิชา/คณะวิทยาศาสตร์การกีฬาและการออกกำลังกาย (KKU)",
    "nameEn": "Faculty of health_medicine (KKU)",
    "fieldCategory": "health_medicine"
  },
  {
    "id": "kku-fac-science_computing-4",
    "campusId": "kku-main",
    "universityId": "kku",
    "nameTh": "สำนักวิชา/คณะฟิสิกส์วัสดุและพลังงานสะอาด (KKU)",
    "nameEn": "Faculty of science_computing (KKU)",
    "fieldCategory": "science_computing"
  },
  {
    "id": "kku-fac-business_econ-7",
    "campusId": "kku-main",
    "universityId": "kku",
    "nameTh": "สำนักวิชา/คณะการจัดการการขนส่งและโลจิสติกส์การค้า (KKU)",
    "nameEn": "Faculty of business_econ (KKU)",
    "fieldCategory": "business_econ"
  },
  {
    "id": "psu-fac-humanities_social-2",
    "campusId": "psu-main",
    "universityId": "psu",
    "nameTh": "สำนักวิชา/คณะการท่องเที่ยวและการบริการดิจิทัล (PSU)",
    "nameEn": "Faculty of humanities_social (PSU)",
    "fieldCategory": "humanities_social"
  },
  {
    "id": "psu-fac-agriculture_environment-5",
    "campusId": "psu-main",
    "universityId": "psu",
    "nameTh": "สำนักวิชา/คณะการจัดการเทคโนโลยีและนวัตกรรมอาหาร (PSU)",
    "nameEn": "Faculty of agriculture_environment (PSU)",
    "fieldCategory": "agriculture_environment"
  },
  {
    "id": "psu-fac-communication_arts-8",
    "campusId": "psu-main",
    "universityId": "psu",
    "nameTh": "สำนักวิชา/คณะนิเทศศาสตร์ดิจิทัลและคอนเทนต์ครีเอเตอร์ (PSU)",
    "nameEn": "Faculty of communication_arts (PSU)",
    "fieldCategory": "communication_arts"
  },
  {
    "id": "swu-fac-humanities_social-2",
    "campusId": "swu-main",
    "universityId": "swu",
    "nameTh": "สำนักวิชา/คณะการท่องเที่ยวและการบริการดิจิทัล (SWU)",
    "nameEn": "Faculty of humanities_social (SWU)",
    "fieldCategory": "humanities_social"
  },
  {
    "id": "swu-fac-agriculture_environment-5",
    "campusId": "swu-main",
    "universityId": "swu",
    "nameTh": "สำนักวิชา/คณะการจัดการเทคโนโลยีและนวัตกรรมอาหาร (SWU)",
    "nameEn": "Faculty of agriculture_environment (SWU)",
    "fieldCategory": "agriculture_environment"
  },
  {
    "id": "swu-fac-communication_arts-8",
    "campusId": "swu-main",
    "universityId": "swu",
    "nameTh": "สำนักวิชา/คณะนิเทศศาสตร์ดิจิทัลและคอนเทนต์ครีเอเตอร์ (SWU)",
    "nameEn": "Faculty of communication_arts (SWU)",
    "fieldCategory": "communication_arts"
  },
  {
    "id": "nu-fac-health_medicine-1",
    "campusId": "nu-main",
    "universityId": "nu",
    "nameTh": "สำนักวิชา/คณะวิทยาศาสตร์การกีฬาและการออกกำลังกาย (NU)",
    "nameEn": "Faculty of health_medicine (NU)",
    "fieldCategory": "health_medicine"
  },
  {
    "id": "nu-fac-science_computing-4",
    "campusId": "nu-main",
    "universityId": "nu",
    "nameTh": "สำนักวิชา/คณะฟิสิกส์วัสดุและพลังงานสะอาด (NU)",
    "nameEn": "Faculty of science_computing (NU)",
    "fieldCategory": "science_computing"
  },
  {
    "id": "nu-fac-business_econ-7",
    "campusId": "nu-main",
    "universityId": "nu",
    "nameTh": "สำนักวิชา/คณะการจัดการการขนส่งและโลจิสติกส์การค้า (NU)",
    "nameEn": "Faculty of business_econ (NU)",
    "fieldCategory": "business_econ"
  },
  {
    "id": "mfu-fac-humanities_social-2",
    "campusId": "mfu-main",
    "universityId": "mfu",
    "nameTh": "สำนักวิชา/คณะการท่องเที่ยวและการบริการดิจิทัล (MFU)",
    "nameEn": "Faculty of humanities_social (MFU)",
    "fieldCategory": "humanities_social"
  },
  {
    "id": "mfu-fac-agriculture_environment-5",
    "campusId": "mfu-main",
    "universityId": "mfu",
    "nameTh": "สำนักวิชา/คณะการจัดการเทคโนโลยีและนวัตกรรมอาหาร (MFU)",
    "nameEn": "Faculty of agriculture_environment (MFU)",
    "fieldCategory": "agriculture_environment"
  },
  {
    "id": "mfu-fac-communication_arts-8",
    "campusId": "mfu-main",
    "universityId": "mfu",
    "nameTh": "สำนักวิชา/คณะนิเทศศาสตร์ดิจิทัลและคอนเทนต์ครีเอเตอร์ (MFU)",
    "nameEn": "Faculty of communication_arts (MFU)",
    "fieldCategory": "communication_arts"
  },
  {
    "id": "buu-fac-health_medicine-1",
    "campusId": "buu-main",
    "universityId": "buu",
    "nameTh": "สำนักวิชา/คณะวิทยาศาสตร์การกีฬาและการออกกำลังกาย (BUU)",
    "nameEn": "Faculty of health_medicine (BUU)",
    "fieldCategory": "health_medicine"
  },
  {
    "id": "buu-fac-science_computing-4",
    "campusId": "buu-main",
    "universityId": "buu",
    "nameTh": "สำนักวิชา/คณะฟิสิกส์วัสดุและพลังงานสะอาด (BUU)",
    "nameEn": "Faculty of science_computing (BUU)",
    "fieldCategory": "science_computing"
  },
  {
    "id": "buu-fac-business_econ-7",
    "campusId": "buu-main",
    "universityId": "buu",
    "nameTh": "สำนักวิชา/คณะการจัดการการขนส่งและโลจิสติกส์การค้า (BUU)",
    "nameEn": "Faculty of business_econ (BUU)",
    "fieldCategory": "business_econ"
  },
  {
    "id": "su-fac-humanities_social-2",
    "campusId": "su-main",
    "universityId": "su",
    "nameTh": "สำนักวิชา/คณะการท่องเที่ยวและการบริการดิจิทัล (SU)",
    "nameEn": "Faculty of humanities_social (SU)",
    "fieldCategory": "humanities_social"
  },
  {
    "id": "su-fac-agriculture_environment-5",
    "campusId": "su-main",
    "universityId": "su",
    "nameTh": "สำนักวิชา/คณะการจัดการเทคโนโลยีและนวัตกรรมอาหาร (SU)",
    "nameEn": "Faculty of agriculture_environment (SU)",
    "fieldCategory": "agriculture_environment"
  },
  {
    "id": "su-fac-communication_arts-8",
    "campusId": "su-main",
    "universityId": "su",
    "nameTh": "สำนักวิชา/คณะนิเทศศาสตร์ดิจิทัลและคอนเทนต์ครีเอเตอร์ (SU)",
    "nameEn": "Faculty of communication_arts (SU)",
    "fieldCategory": "communication_arts"
  },
  {
    "id": "sut-fac-humanities_social-2",
    "campusId": "sut-main",
    "universityId": "sut",
    "nameTh": "สำนักวิชา/คณะการท่องเที่ยวและการบริการดิจิทัล (SUT)",
    "nameEn": "Faculty of humanities_social (SUT)",
    "fieldCategory": "humanities_social"
  },
  {
    "id": "sut-fac-agriculture_environment-5",
    "campusId": "sut-main",
    "universityId": "sut",
    "nameTh": "สำนักวิชา/คณะการจัดการเทคโนโลยีและนวัตกรรมอาหาร (SUT)",
    "nameEn": "Faculty of agriculture_environment (SUT)",
    "fieldCategory": "agriculture_environment"
  },
  {
    "id": "sut-fac-communication_arts-8",
    "campusId": "sut-main",
    "universityId": "sut",
    "nameTh": "สำนักวิชา/คณะนิเทศศาสตร์ดิจิทัลและคอนเทนต์ครีเอเตอร์ (SUT)",
    "nameEn": "Faculty of communication_arts (SUT)",
    "fieldCategory": "communication_arts"
  },
  {
    "id": "up-fac-architecture_design-0",
    "campusId": "up-main",
    "universityId": "up",
    "nameTh": "สำนักวิชา/คณะสถาปัตยกรรมภายในและการออกแบบพื้นที่ (UP)",
    "nameEn": "Faculty of architecture_design (UP)",
    "fieldCategory": "architecture_design"
  },
  {
    "id": "up-fac-law_politics-3",
    "campusId": "up-main",
    "universityId": "up",
    "nameTh": "สำนักวิชา/คณะรัฐประศาสนศาสตร์และการบริหารเมือง (UP)",
    "nameEn": "Faculty of law_politics (UP)",
    "fieldCategory": "law_politics"
  },
  {
    "id": "up-fac-engineering-6",
    "campusId": "up-main",
    "universityId": "up",
    "nameTh": "สำนักวิชา/คณะวิศวกรรมชีวการแพทย์ (Biomedical Eng) (UP)",
    "nameEn": "Faculty of engineering (UP)",
    "fieldCategory": "engineering"
  },
  {
    "id": "up-fac-science_computing-9",
    "campusId": "up-main",
    "universityId": "up",
    "nameTh": "สำนักวิชา/คณะชีวสารสนเทศศาสตร์และจีโนมิกส์ (Bioinformatics) (UP)",
    "nameEn": "Faculty of science_computing (UP)",
    "fieldCategory": "science_computing"
  }
];

export const PROGRAMS: Program[] = [
  {
    "id": "prog-cmu-1",
    "facultyId": "cmu-health_medicine-1",
    "universityId": "cmu",
    "nameTh": "หลักสูตรแพทยศาสตรบัณฑิต",
    "nameEn": "Doctor of Medicine",
    "degreeName": "แพทยศาสตรบัณฑิต (พ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-cmu-2",
    "facultyId": "cmu-health_medicine-2",
    "universityId": "cmu",
    "nameTh": "หลักสูตรทันตแพทยศาสตรบัณฑิต",
    "nameEn": "Doctor of Dental Surgery",
    "degreeName": "ทันตแพทยศาสตรบัณฑิต (ท.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-cmu-3",
    "facultyId": "cmu-health_medicine-3",
    "universityId": "cmu",
    "nameTh": "หลักสูตรเภสัชศาสตรบัณฑิต",
    "nameEn": "Doctor of Pharmacy",
    "degreeName": "เภสัชศาสตรบัณฑิต (ภ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-cmu-4",
    "facultyId": "cmu-health_medicine-4",
    "universityId": "cmu",
    "nameTh": "หลักสูตรพยาบาลศาสตรบัณฑิต",
    "nameEn": "Bachelor of Nursing Science",
    "degreeName": "พยาบาลศาสตรบัณฑิต (พย.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-cmu-5",
    "facultyId": "cmu-health_medicine-5",
    "universityId": "cmu",
    "nameTh": "หลักสูตรวิทยาศาสตรบัณฑิต",
    "nameEn": "Bachelor of Science",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-cmu-6",
    "facultyId": "cmu-health_medicine-6",
    "universityId": "cmu",
    "nameTh": "หลักสูตรสัตวแพทยศาสตรบัณฑิต",
    "nameEn": "Doctor of Veterinary Medicine",
    "degreeName": "สัตวแพทยศาสตรบัณฑิต (สพ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-cmu-7",
    "facultyId": "cmu-engineering-7",
    "universityId": "cmu",
    "nameTh": "หลักสูตรวิศวกรรมศาสตรบัณฑิต",
    "nameEn": "Bachelor of Engineering",
    "degreeName": "วิศวกรรมศาสตรบัณฑิต (วศ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-cmu-8",
    "facultyId": "cmu-science_computing-8",
    "universityId": "cmu",
    "nameTh": "หลักสูตรวิทยาศาสตรบัณฑิต",
    "nameEn": "Bachelor of Science",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-cmu-9",
    "facultyId": "cmu-science_computing-9",
    "universityId": "cmu",
    "nameTh": "หลักสูตรวิทยาศาสตรบัณฑิต (CAMT)",
    "nameEn": "Bachelor of Science in Digital Media",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-cmu-10",
    "facultyId": "cmu-business_econ-10",
    "universityId": "cmu",
    "nameTh": "หลักสูตรการบัญชีและบริหารธุรกิจ",
    "nameEn": "Bachelor of Accountancy and BBA",
    "degreeName": "บัญชีบัณฑิต (บช.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-cmu-11",
    "facultyId": "cmu-business_econ-11",
    "universityId": "cmu",
    "nameTh": "หลักสูตรเศรษฐศาสตรบัณฑิต",
    "nameEn": "Bachelor of Economics",
    "degreeName": "เศรษฐศาสตรบัณฑิต (ศ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-cmu-12",
    "facultyId": "cmu-humanities_social-12",
    "universityId": "cmu",
    "nameTh": "หลักสูตรศิลปศาสตรบัณฑิต",
    "nameEn": "Bachelor of Arts",
    "degreeName": "ศิลปศาสตรบัณฑิต (ศศ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-cmu-13",
    "facultyId": "cmu-communication_arts-13",
    "universityId": "cmu",
    "nameTh": "หลักสูตรการสื่อสารมวลชนบัณฑิต",
    "nameEn": "Bachelor of Communication Arts",
    "degreeName": "การสื่อสารมวลชนบัณฑิต (สศ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-cmu-14",
    "facultyId": "cmu-law_politics-14",
    "universityId": "cmu",
    "nameTh": "หลักสูตรนิติศาสตรบัณฑิต",
    "nameEn": "Bachelor of Laws",
    "degreeName": "นิติศาสตรบัณฑิต (น.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-cmu-15",
    "facultyId": "cmu-architecture_design-15",
    "universityId": "cmu",
    "nameTh": "หลักสูตรสถาปัตยกรรมศาสตรบัณฑิต",
    "nameEn": "Bachelor of Architecture",
    "degreeName": "สถาปัตยกรรมศาสตรบัณฑิต (สถ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-cu-16",
    "facultyId": "cu-engineering-16",
    "universityId": "cu",
    "nameTh": "หลักสูตรวิศวกรรมศาสตรบัณฑิต",
    "nameEn": "Bachelor of Engineering",
    "degreeName": "วิศวกรรมศาสตรบัณฑิต (วศ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-cu-17",
    "facultyId": "cu-business_econ-17",
    "universityId": "cu",
    "nameTh": "หลักสูตรบริหารธุรกิจบัณฑิต",
    "nameEn": "Bachelor of Business Administration",
    "degreeName": "บริหารธุรกิจบัณฑิต (บธ.บ.)",
    "isInternational": true,
    "language": "English"
  },
  {
    "id": "prog-cu-18",
    "facultyId": "cu-humanities_social-18",
    "universityId": "cu",
    "nameTh": "หลักสูตรอักษรศาสตรบัณฑิต",
    "nameEn": "Bachelor of Arts",
    "degreeName": "อักษรศาสตรบัณฑิต (อ.บ.)",
    "isInternational": true,
    "language": "English"
  },
  {
    "id": "prog-cu-19",
    "facultyId": "cu-communication_arts-19",
    "universityId": "cu",
    "nameTh": "หลักสูตรนิเทศศาสตรบัณฑิต",
    "nameEn": "Bachelor of Communication Arts",
    "degreeName": "นิเทศศาสตรบัณฑิต (นศ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-cu-20",
    "facultyId": "cu-architecture_design-20",
    "universityId": "cu",
    "nameTh": "หลักสูตรสถาปัตยกรรมศาสตรบัณฑิต",
    "nameEn": "Bachelor of Architecture",
    "degreeName": "สถาปัตยกรรมศาสตรบัณฑิต (สถ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-mu-21",
    "facultyId": "mu-health_medicine-21",
    "universityId": "mu",
    "nameTh": "หลักสูตรแพทยศาสตรบัณฑิต (ศิริราช)",
    "nameEn": "Doctor of Medicine",
    "degreeName": "แพทยศาสตรบัณฑิต (พ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-mu-22",
    "facultyId": "mu-science_computing-22",
    "universityId": "mu",
    "nameTh": "หลักสูตรวิทยาศาสตรบัณฑิต สาขา ICT (นานาชาติ)",
    "nameEn": "B.Sc. in ICT (International)",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": true,
    "language": "English"
  },
  {
    "id": "prog-mu-23",
    "facultyId": "mu-science_computing-23",
    "universityId": "mu",
    "nameTh": "หลักสูตรชีวการแพทย์ (นานาชาติ)",
    "nameEn": "B.Sc. in Biomedical Science",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": true,
    "language": "English"
  },
  {
    "id": "prog-mu-24",
    "facultyId": "mu-communication_arts-24",
    "universityId": "mu",
    "nameTh": "หลักสูตรดุริยางคศาสตรบัณฑิต",
    "nameEn": "Bachelor of Music",
    "degreeName": "ดุริยางคศาสตรบัณฑิต (ดย.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-tu-25",
    "facultyId": "tu-law_politics-25",
    "universityId": "tu",
    "nameTh": "หลักสูตรนิติศาสตรบัณฑิต",
    "nameEn": "Bachelor of Laws",
    "degreeName": "นิติศาสตรบัณฑิต (น.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-tu-26",
    "facultyId": "tu-business_econ-26",
    "universityId": "tu",
    "nameTh": "หลักสูตรบริหารธุรกิจบัณฑิต",
    "nameEn": "B.B.A. Program",
    "degreeName": "บริหารธุรกิจบัณฑิต (บธ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-tu-27",
    "facultyId": "tu-law_politics-27",
    "universityId": "tu",
    "nameTh": "หลักสูตรการเมืองและการระหว่างประเทศ (BIR นานาชาติ)",
    "nameEn": "Bachelor of Arts in Politics and IR",
    "degreeName": "ศิลปศาสตรบัณฑิต (ศศ.บ.)",
    "isInternational": true,
    "language": "English"
  },
  {
    "id": "prog-tu-28",
    "facultyId": "tu-engineering-28",
    "universityId": "tu",
    "nameTh": "หลักสูตรวิศวกรรมศาสตรบัณฑิต (SIIT นานาชาติ)",
    "nameEn": "B.Eng. (SIIT International)",
    "degreeName": "วิศวกรรมศาสตรบัณฑิต (วศ.บ.)",
    "isInternational": true,
    "language": "English"
  },
  {
    "id": "prog-kmutt-29",
    "facultyId": "kmutt-science_computing-29",
    "universityId": "kmutt",
    "nameTh": "หลักสูตรนวัตกรรมบริการดิจิทัล (DSI)",
    "nameEn": "B.Sc. in Digital Service Innovation",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-kmutt-30",
    "facultyId": "kmutt-engineering-30",
    "universityId": "kmutt",
    "nameTh": "หลักสูตรวิศวกรรมหุ่นยนต์และระบบอัตโนมัติ (FIBO)",
    "nameEn": "B.Eng. in Robotics and Automation",
    "degreeName": "วิศวกรรมศาสตรบัณฑิต (วศ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-kmutt-31",
    "facultyId": "kmutt-architecture_design-31",
    "universityId": "kmutt",
    "nameTh": "หลักสูตรการออกแบบอุตสาหกรรม (นานาชาติ)",
    "nameEn": "Bachelor of Design (SoA+D)",
    "degreeName": "การออกแบบบัณฑิต (อบ.บ.)",
    "isInternational": true,
    "language": "English"
  },
  {
    "id": "prog-kmitl-32",
    "facultyId": "kmitl-engineering-32",
    "universityId": "kmitl",
    "nameTh": "หลักสูตรวิศวกรรมหุ่นยนต์และปัญญาประดิษฐ์ (RAI)",
    "nameEn": "B.Eng. in Robotics & AI",
    "degreeName": "วิศวกรรมศาสตรบัณฑิต (วศ.บ.)",
    "isInternational": true,
    "language": "English"
  },
  {
    "id": "prog-kmitl-33",
    "facultyId": "kmitl-science_computing-33",
    "universityId": "kmitl",
    "nameTh": "หลักสูตรเทคโนโลยีสารสนเทศ",
    "nameEn": "B.Sc. in Information Technology",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-ku-34",
    "facultyId": "ku-engineering-34",
    "universityId": "ku",
    "nameTh": "หลักสูตรวิศวกรรมศาสตรบัณฑิต",
    "nameEn": "Bachelor of Engineering",
    "degreeName": "วิศวกรรมศาสตรบัณฑิต (วศ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-ku-35",
    "facultyId": "ku-agriculture_environment-35",
    "universityId": "ku",
    "nameTh": "หลักสูตรวิทยาศาสตรบัณฑิต สาขาเกษตรศาสตร์",
    "nameEn": "B.Sc. in Agriculture",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-kku-36",
    "facultyId": "kku-health_medicine-36",
    "universityId": "kku",
    "nameTh": "หลักสูตรแพทยศาสตรบัณฑิต",
    "nameEn": "Doctor of Medicine",
    "degreeName": "แพทยศาสตรบัณฑิต (พ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-kku-37",
    "facultyId": "kku-engineering-37",
    "universityId": "kku",
    "nameTh": "หลักสูตรวิศวกรรมศาสตรบัณฑิต",
    "nameEn": "B.Eng. Program",
    "degreeName": "วิศวกรรมศาสตรบัณฑิต (วศ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-psu-38",
    "facultyId": "psu-health_medicine-38",
    "universityId": "psu",
    "nameTh": "หลักสูตรแพทยศาสตรบัณฑิต",
    "nameEn": "Doctor of Medicine",
    "degreeName": "แพทยศาสตรบัณฑิต (พ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-psu-39",
    "facultyId": "psu-engineering-39",
    "universityId": "psu",
    "nameTh": "หลักสูตรวิศวกรรมศาสตรบัณฑิต",
    "nameEn": "Bachelor of Engineering",
    "degreeName": "วิศวกรรมศาสตรบัณฑิต (วศ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-swu-40",
    "facultyId": "swu-health_medicine-40",
    "universityId": "swu",
    "nameTh": "หลักสูตรแพทยศาสตรบัณฑิต",
    "nameEn": "Doctor of Medicine",
    "degreeName": "แพทยศาสตรบัณฑิต (พ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-swu-41",
    "facultyId": "swu-engineering-41",
    "universityId": "swu",
    "nameTh": "หลักสูตรวิศวกรรมคอมพิวเตอร์",
    "nameEn": "B.Eng. in Computer Engineering",
    "degreeName": "วิศวกรรมศาสตรบัณฑิต (วศ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-kmutnb-42",
    "facultyId": "kmutnb-engineering-42",
    "universityId": "kmutnb",
    "nameTh": "หลักสูตรวิศวกรรมศาสตรบัณฑิต",
    "nameEn": "Bachelor of Engineering",
    "degreeName": "วิศวกรรมศาสตรบัณฑิต (วศ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-nu-43",
    "facultyId": "nu-health_medicine-43",
    "universityId": "nu",
    "nameTh": "หลักสูตรแพทยศาสตรบัณฑิต",
    "nameEn": "Doctor of Medicine",
    "degreeName": "แพทยศาสตรบัณฑิต (พ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-mfu-44",
    "facultyId": "mfu-science_computing-44",
    "universityId": "mfu",
    "nameTh": "หลักสูตรวิศวกรรมซอฟต์แวร์ (สอนเป็นภาษาอังกฤษ)",
    "nameEn": "Software Engineering (English)",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": true,
    "language": "English"
  },
  {
    "id": "prog-buu-45",
    "facultyId": "buu-science_computing-45",
    "universityId": "buu",
    "nameTh": "หลักสูตรปัญญาประดิษฐ์ประยุกต์และวิทยาการข้อมูล",
    "nameEn": "Applied AI & Data Science",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-su-46",
    "facultyId": "su-communication_arts-46",
    "universityId": "su",
    "nameTh": "หลักสูตรการออกแบบดิจิทัลและเกม",
    "nameEn": "Digital Design & Game",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-sut-47",
    "facultyId": "sut-engineering-47",
    "universityId": "sut",
    "nameTh": "หลักสูตรวิศวกรรมศาสตรบัณฑิต",
    "nameEn": "B.Eng. Program",
    "degreeName": "วิศวกรรมศาสตรบัณฑิต (วศ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-up-48",
    "facultyId": "up-health_medicine-48",
    "universityId": "up",
    "nameTh": "หลักสูตรแพทยศาสตรบัณฑิต",
    "nameEn": "Doctor of Medicine",
    "degreeName": "แพทยศาสตรบัณฑิต (พ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-cmu-exp-0",
    "facultyId": "cmu-fac-architecture_design-0",
    "universityId": "cmu",
    "nameTh": "หลักสูตรสถาปัตยกรรมศาสตรบัณฑิต (สถ.บ.) สาขาวิชาสถาปัตยกรรมภายในและการออกแบบพื้นที่",
    "nameEn": "สาขาวิชาสถาปัตยกรรมภายในและการออกแบบพื้นที่ Program",
    "degreeName": "สถาปัตยกรรมศาสตรบัณฑิต (สถ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-cmu-exp-3",
    "facultyId": "cmu-fac-law_politics-3",
    "universityId": "cmu",
    "nameTh": "หลักสูตรรัฐประศาสนศาสตรบัณฑิต (รป.บ.) สาขาวิชารัฐประศาสนศาสตร์และการบริหารเมือง",
    "nameEn": "สาขาวิชารัฐประศาสนศาสตร์และการบริหารเมือง Program",
    "degreeName": "รัฐประศาสนศาสตรบัณฑิต (รป.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-cmu-exp-6",
    "facultyId": "cmu-fac-engineering-6",
    "universityId": "cmu",
    "nameTh": "หลักสูตรวิศวกรรมศาสตรบัณฑิต (วศ.บ.) สาขาวิชาวิศวกรรมชีวการแพทย์ (Biomedical Eng)",
    "nameEn": "สาขาวิชาวิศวกรรมชีวการแพทย์ (Biomedical Eng) Program",
    "degreeName": "วิศวกรรมศาสตรบัณฑิต (วศ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-cmu-exp-9",
    "facultyId": "cmu-fac-science_computing-9",
    "universityId": "cmu",
    "nameTh": "หลักสูตรวิทยาศาสตรบัณฑิต (วท.บ.) สาขาวิชาชีวสารสนเทศศาสตร์และจีโนมิกส์ (Bioinformatics)",
    "nameEn": "สาขาวิชาชีวสารสนเทศศาสตร์และจีโนมิกส์ (Bioinformatics) Program",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-cu-exp-0",
    "facultyId": "cu-fac-architecture_design-0",
    "universityId": "cu",
    "nameTh": "หลักสูตรสถาปัตยกรรมศาสตรบัณฑิต (สถ.บ.) สาขาวิชาสถาปัตยกรรมภายในและการออกแบบพื้นที่",
    "nameEn": "สาขาวิชาสถาปัตยกรรมภายในและการออกแบบพื้นที่ Program",
    "degreeName": "สถาปัตยกรรมศาสตรบัณฑิต (สถ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-cu-exp-3",
    "facultyId": "cu-fac-law_politics-3",
    "universityId": "cu",
    "nameTh": "หลักสูตรรัฐประศาสนศาสตรบัณฑิต (รป.บ.) สาขาวิชารัฐประศาสนศาสตร์และการบริหารเมือง",
    "nameEn": "สาขาวิชารัฐประศาสนศาสตร์และการบริหารเมือง Program",
    "degreeName": "รัฐประศาสนศาสตรบัณฑิต (รป.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-cu-exp-6",
    "facultyId": "cu-fac-engineering-6",
    "universityId": "cu",
    "nameTh": "หลักสูตรวิศวกรรมศาสตรบัณฑิต (วศ.บ.) สาขาวิชาวิศวกรรมชีวการแพทย์ (Biomedical Eng)",
    "nameEn": "สาขาวิชาวิศวกรรมชีวการแพทย์ (Biomedical Eng) Program",
    "degreeName": "วิศวกรรมศาสตรบัณฑิต (วศ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-cu-exp-9",
    "facultyId": "cu-fac-science_computing-9",
    "universityId": "cu",
    "nameTh": "หลักสูตรวิทยาศาสตรบัณฑิต (วท.บ.) สาขาวิชาชีวสารสนเทศศาสตร์และจีโนมิกส์ (Bioinformatics)",
    "nameEn": "สาขาวิชาชีวสารสนเทศศาสตร์และจีโนมิกส์ (Bioinformatics) Program",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-mu-exp-2",
    "facultyId": "mu-fac-humanities_social-2",
    "universityId": "mu",
    "nameTh": "หลักสูตรศิลปศาสตรบัณฑิต (ศศ.บ.) สาขาวิชาการท่องเที่ยวและการบริการดิจิทัล",
    "nameEn": "สาขาวิชาการท่องเที่ยวและการบริการดิจิทัล Program",
    "degreeName": "ศิลปศาสตรบัณฑิต (ศศ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-mu-exp-5",
    "facultyId": "mu-fac-agriculture_environment-5",
    "universityId": "mu",
    "nameTh": "หลักสูตรวิทยาศาสตรบัณฑิต (วท.บ.) สาขาวิชาการจัดการเทคโนโลยีและนวัตกรรมอาหาร",
    "nameEn": "สาขาวิชาการจัดการเทคโนโลยีและนวัตกรรมอาหาร Program",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-mu-exp-8",
    "facultyId": "mu-fac-communication_arts-8",
    "universityId": "mu",
    "nameTh": "หลักสูตรนิเทศศาสตรบัณฑิต (นศ.บ.) สาขาวิชานิเทศศาสตร์ดิจิทัลและคอนเทนต์ครีเอเตอร์",
    "nameEn": "สาขาวิชานิเทศศาสตร์ดิจิทัลและคอนเทนต์ครีเอเตอร์ Program",
    "degreeName": "นิเทศศาสตรบัณฑิต (นศ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-tu-exp-1",
    "facultyId": "tu-fac-health_medicine-1",
    "universityId": "tu",
    "nameTh": "หลักสูตรวิทยาศาสตรบัณฑิต (วท.บ.) สาขาวิชาวิทยาศาสตร์การกีฬาและการออกกำลังกาย",
    "nameEn": "สาขาวิชาวิทยาศาสตร์การกีฬาและการออกกำลังกาย Program",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-tu-exp-4",
    "facultyId": "tu-fac-science_computing-4",
    "universityId": "tu",
    "nameTh": "หลักสูตรวิทยาศาสตรบัณฑิต (วท.บ.) สาขาวิชาฟิสิกส์วัสดุและพลังงานสะอาด",
    "nameEn": "สาขาวิชาฟิสิกส์วัสดุและพลังงานสะอาด Program",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-tu-exp-7",
    "facultyId": "tu-fac-business_econ-7",
    "universityId": "tu",
    "nameTh": "หลักสูตรบริหารธุรกิจบัณฑิต (บธ.บ.) สาขาวิชาการจัดการการขนส่งและโลจิสติกส์การค้า",
    "nameEn": "สาขาวิชาการจัดการการขนส่งและโลจิสติกส์การค้า Program",
    "degreeName": "บริหารธุรกิจบัณฑิต (บธ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-ku-exp-1",
    "facultyId": "ku-fac-health_medicine-1",
    "universityId": "ku",
    "nameTh": "หลักสูตรวิทยาศาสตรบัณฑิต (วท.บ.) สาขาวิชาวิทยาศาสตร์การกีฬาและการออกกำลังกาย",
    "nameEn": "สาขาวิชาวิทยาศาสตร์การกีฬาและการออกกำลังกาย Program",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-ku-exp-4",
    "facultyId": "ku-fac-science_computing-4",
    "universityId": "ku",
    "nameTh": "หลักสูตรวิทยาศาสตรบัณฑิต (วท.บ.) สาขาวิชาฟิสิกส์วัสดุและพลังงานสะอาด",
    "nameEn": "สาขาวิชาฟิสิกส์วัสดุและพลังงานสะอาด Program",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-ku-exp-7",
    "facultyId": "ku-fac-business_econ-7",
    "universityId": "ku",
    "nameTh": "หลักสูตรบริหารธุรกิจบัณฑิต (บธ.บ.) สาขาวิชาการจัดการการขนส่งและโลจิสติกส์การค้า",
    "nameEn": "สาขาวิชาการจัดการการขนส่งและโลจิสติกส์การค้า Program",
    "degreeName": "บริหารธุรกิจบัณฑิต (บธ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-kmutt-exp-1",
    "facultyId": "kmutt-fac-health_medicine-1",
    "universityId": "kmutt",
    "nameTh": "หลักสูตรวิทยาศาสตรบัณฑิต (วท.บ.) สาขาวิชาวิทยาศาสตร์การกีฬาและการออกกำลังกาย",
    "nameEn": "สาขาวิชาวิทยาศาสตร์การกีฬาและการออกกำลังกาย Program",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-kmutt-exp-4",
    "facultyId": "kmutt-fac-science_computing-4",
    "universityId": "kmutt",
    "nameTh": "หลักสูตรวิทยาศาสตรบัณฑิต (วท.บ.) สาขาวิชาฟิสิกส์วัสดุและพลังงานสะอาด",
    "nameEn": "สาขาวิชาฟิสิกส์วัสดุและพลังงานสะอาด Program",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-kmutt-exp-7",
    "facultyId": "kmutt-fac-business_econ-7",
    "universityId": "kmutt",
    "nameTh": "หลักสูตรบริหารธุรกิจบัณฑิต (บธ.บ.) สาขาวิชาการจัดการการขนส่งและโลจิสติกส์การค้า",
    "nameEn": "สาขาวิชาการจัดการการขนส่งและโลจิสติกส์การค้า Program",
    "degreeName": "บริหารธุรกิจบัณฑิต (บธ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-kmitl-exp-1",
    "facultyId": "kmitl-fac-health_medicine-1",
    "universityId": "kmitl",
    "nameTh": "หลักสูตรวิทยาศาสตรบัณฑิต (วท.บ.) สาขาวิชาวิทยาศาสตร์การกีฬาและการออกกำลังกาย",
    "nameEn": "สาขาวิชาวิทยาศาสตร์การกีฬาและการออกกำลังกาย Program",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-kmitl-exp-4",
    "facultyId": "kmitl-fac-science_computing-4",
    "universityId": "kmitl",
    "nameTh": "หลักสูตรวิทยาศาสตรบัณฑิต (วท.บ.) สาขาวิชาฟิสิกส์วัสดุและพลังงานสะอาด",
    "nameEn": "สาขาวิชาฟิสิกส์วัสดุและพลังงานสะอาด Program",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-kmitl-exp-7",
    "facultyId": "kmitl-fac-business_econ-7",
    "universityId": "kmitl",
    "nameTh": "หลักสูตรบริหารธุรกิจบัณฑิต (บธ.บ.) สาขาวิชาการจัดการการขนส่งและโลจิสติกส์การค้า",
    "nameEn": "สาขาวิชาการจัดการการขนส่งและโลจิสติกส์การค้า Program",
    "degreeName": "บริหารธุรกิจบัณฑิต (บธ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-kmutnb-exp-1",
    "facultyId": "kmutnb-fac-health_medicine-1",
    "universityId": "kmutnb",
    "nameTh": "หลักสูตรวิทยาศาสตรบัณฑิต (วท.บ.) สาขาวิชาวิทยาศาสตร์การกีฬาและการออกกำลังกาย",
    "nameEn": "สาขาวิชาวิทยาศาสตร์การกีฬาและการออกกำลังกาย Program",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-kmutnb-exp-4",
    "facultyId": "kmutnb-fac-science_computing-4",
    "universityId": "kmutnb",
    "nameTh": "หลักสูตรวิทยาศาสตรบัณฑิต (วท.บ.) สาขาวิชาฟิสิกส์วัสดุและพลังงานสะอาด",
    "nameEn": "สาขาวิชาฟิสิกส์วัสดุและพลังงานสะอาด Program",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-kmutnb-exp-7",
    "facultyId": "kmutnb-fac-business_econ-7",
    "universityId": "kmutnb",
    "nameTh": "หลักสูตรบริหารธุรกิจบัณฑิต (บธ.บ.) สาขาวิชาการจัดการการขนส่งและโลจิสติกส์การค้า",
    "nameEn": "สาขาวิชาการจัดการการขนส่งและโลจิสติกส์การค้า Program",
    "degreeName": "บริหารธุรกิจบัณฑิต (บธ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-kku-exp-1",
    "facultyId": "kku-fac-health_medicine-1",
    "universityId": "kku",
    "nameTh": "หลักสูตรวิทยาศาสตรบัณฑิต (วท.บ.) สาขาวิชาวิทยาศาสตร์การกีฬาและการออกกำลังกาย",
    "nameEn": "สาขาวิชาวิทยาศาสตร์การกีฬาและการออกกำลังกาย Program",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-kku-exp-4",
    "facultyId": "kku-fac-science_computing-4",
    "universityId": "kku",
    "nameTh": "หลักสูตรวิทยาศาสตรบัณฑิต (วท.บ.) สาขาวิชาฟิสิกส์วัสดุและพลังงานสะอาด",
    "nameEn": "สาขาวิชาฟิสิกส์วัสดุและพลังงานสะอาด Program",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-kku-exp-7",
    "facultyId": "kku-fac-business_econ-7",
    "universityId": "kku",
    "nameTh": "หลักสูตรบริหารธุรกิจบัณฑิต (บธ.บ.) สาขาวิชาการจัดการการขนส่งและโลจิสติกส์การค้า",
    "nameEn": "สาขาวิชาการจัดการการขนส่งและโลจิสติกส์การค้า Program",
    "degreeName": "บริหารธุรกิจบัณฑิต (บธ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-psu-exp-2",
    "facultyId": "psu-fac-humanities_social-2",
    "universityId": "psu",
    "nameTh": "หลักสูตรศิลปศาสตรบัณฑิต (ศศ.บ.) สาขาวิชาการท่องเที่ยวและการบริการดิจิทัล",
    "nameEn": "สาขาวิชาการท่องเที่ยวและการบริการดิจิทัล Program",
    "degreeName": "ศิลปศาสตรบัณฑิต (ศศ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-psu-exp-5",
    "facultyId": "psu-fac-agriculture_environment-5",
    "universityId": "psu",
    "nameTh": "หลักสูตรวิทยาศาสตรบัณฑิต (วท.บ.) สาขาวิชาการจัดการเทคโนโลยีและนวัตกรรมอาหาร",
    "nameEn": "สาขาวิชาการจัดการเทคโนโลยีและนวัตกรรมอาหาร Program",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-psu-exp-8",
    "facultyId": "psu-fac-communication_arts-8",
    "universityId": "psu",
    "nameTh": "หลักสูตรนิเทศศาสตรบัณฑิต (นศ.บ.) สาขาวิชานิเทศศาสตร์ดิจิทัลและคอนเทนต์ครีเอเตอร์",
    "nameEn": "สาขาวิชานิเทศศาสตร์ดิจิทัลและคอนเทนต์ครีเอเตอร์ Program",
    "degreeName": "นิเทศศาสตรบัณฑิต (นศ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-swu-exp-2",
    "facultyId": "swu-fac-humanities_social-2",
    "universityId": "swu",
    "nameTh": "หลักสูตรศิลปศาสตรบัณฑิต (ศศ.บ.) สาขาวิชาการท่องเที่ยวและการบริการดิจิทัล",
    "nameEn": "สาขาวิชาการท่องเที่ยวและการบริการดิจิทัล Program",
    "degreeName": "ศิลปศาสตรบัณฑิต (ศศ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-swu-exp-5",
    "facultyId": "swu-fac-agriculture_environment-5",
    "universityId": "swu",
    "nameTh": "หลักสูตรวิทยาศาสตรบัณฑิต (วท.บ.) สาขาวิชาการจัดการเทคโนโลยีและนวัตกรรมอาหาร",
    "nameEn": "สาขาวิชาการจัดการเทคโนโลยีและนวัตกรรมอาหาร Program",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-swu-exp-8",
    "facultyId": "swu-fac-communication_arts-8",
    "universityId": "swu",
    "nameTh": "หลักสูตรนิเทศศาสตรบัณฑิต (นศ.บ.) สาขาวิชานิเทศศาสตร์ดิจิทัลและคอนเทนต์ครีเอเตอร์",
    "nameEn": "สาขาวิชานิเทศศาสตร์ดิจิทัลและคอนเทนต์ครีเอเตอร์ Program",
    "degreeName": "นิเทศศาสตรบัณฑิต (นศ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-nu-exp-1",
    "facultyId": "nu-fac-health_medicine-1",
    "universityId": "nu",
    "nameTh": "หลักสูตรวิทยาศาสตรบัณฑิต (วท.บ.) สาขาวิชาวิทยาศาสตร์การกีฬาและการออกกำลังกาย",
    "nameEn": "สาขาวิชาวิทยาศาสตร์การกีฬาและการออกกำลังกาย Program",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-nu-exp-4",
    "facultyId": "nu-fac-science_computing-4",
    "universityId": "nu",
    "nameTh": "หลักสูตรวิทยาศาสตรบัณฑิต (วท.บ.) สาขาวิชาฟิสิกส์วัสดุและพลังงานสะอาด",
    "nameEn": "สาขาวิชาฟิสิกส์วัสดุและพลังงานสะอาด Program",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-nu-exp-7",
    "facultyId": "nu-fac-business_econ-7",
    "universityId": "nu",
    "nameTh": "หลักสูตรบริหารธุรกิจบัณฑิต (บธ.บ.) สาขาวิชาการจัดการการขนส่งและโลจิสติกส์การค้า",
    "nameEn": "สาขาวิชาการจัดการการขนส่งและโลจิสติกส์การค้า Program",
    "degreeName": "บริหารธุรกิจบัณฑิต (บธ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-mfu-exp-2",
    "facultyId": "mfu-fac-humanities_social-2",
    "universityId": "mfu",
    "nameTh": "หลักสูตรศิลปศาสตรบัณฑิต (ศศ.บ.) สาขาวิชาการท่องเที่ยวและการบริการดิจิทัล",
    "nameEn": "สาขาวิชาการท่องเที่ยวและการบริการดิจิทัล Program",
    "degreeName": "ศิลปศาสตรบัณฑิต (ศศ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-mfu-exp-5",
    "facultyId": "mfu-fac-agriculture_environment-5",
    "universityId": "mfu",
    "nameTh": "หลักสูตรวิทยาศาสตรบัณฑิต (วท.บ.) สาขาวิชาการจัดการเทคโนโลยีและนวัตกรรมอาหาร",
    "nameEn": "สาขาวิชาการจัดการเทคโนโลยีและนวัตกรรมอาหาร Program",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-mfu-exp-8",
    "facultyId": "mfu-fac-communication_arts-8",
    "universityId": "mfu",
    "nameTh": "หลักสูตรนิเทศศาสตรบัณฑิต (นศ.บ.) สาขาวิชานิเทศศาสตร์ดิจิทัลและคอนเทนต์ครีเอเตอร์",
    "nameEn": "สาขาวิชานิเทศศาสตร์ดิจิทัลและคอนเทนต์ครีเอเตอร์ Program",
    "degreeName": "นิเทศศาสตรบัณฑิต (นศ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-buu-exp-1",
    "facultyId": "buu-fac-health_medicine-1",
    "universityId": "buu",
    "nameTh": "หลักสูตรวิทยาศาสตรบัณฑิต (วท.บ.) สาขาวิชาวิทยาศาสตร์การกีฬาและการออกกำลังกาย",
    "nameEn": "สาขาวิชาวิทยาศาสตร์การกีฬาและการออกกำลังกาย Program",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-buu-exp-4",
    "facultyId": "buu-fac-science_computing-4",
    "universityId": "buu",
    "nameTh": "หลักสูตรวิทยาศาสตรบัณฑิต (วท.บ.) สาขาวิชาฟิสิกส์วัสดุและพลังงานสะอาด",
    "nameEn": "สาขาวิชาฟิสิกส์วัสดุและพลังงานสะอาด Program",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-buu-exp-7",
    "facultyId": "buu-fac-business_econ-7",
    "universityId": "buu",
    "nameTh": "หลักสูตรบริหารธุรกิจบัณฑิต (บธ.บ.) สาขาวิชาการจัดการการขนส่งและโลจิสติกส์การค้า",
    "nameEn": "สาขาวิชาการจัดการการขนส่งและโลจิสติกส์การค้า Program",
    "degreeName": "บริหารธุรกิจบัณฑิต (บธ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-su-exp-2",
    "facultyId": "su-fac-humanities_social-2",
    "universityId": "su",
    "nameTh": "หลักสูตรศิลปศาสตรบัณฑิต (ศศ.บ.) สาขาวิชาการท่องเที่ยวและการบริการดิจิทัล",
    "nameEn": "สาขาวิชาการท่องเที่ยวและการบริการดิจิทัล Program",
    "degreeName": "ศิลปศาสตรบัณฑิต (ศศ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-su-exp-5",
    "facultyId": "su-fac-agriculture_environment-5",
    "universityId": "su",
    "nameTh": "หลักสูตรวิทยาศาสตรบัณฑิต (วท.บ.) สาขาวิชาการจัดการเทคโนโลยีและนวัตกรรมอาหาร",
    "nameEn": "สาขาวิชาการจัดการเทคโนโลยีและนวัตกรรมอาหาร Program",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-su-exp-8",
    "facultyId": "su-fac-communication_arts-8",
    "universityId": "su",
    "nameTh": "หลักสูตรนิเทศศาสตรบัณฑิต (นศ.บ.) สาขาวิชานิเทศศาสตร์ดิจิทัลและคอนเทนต์ครีเอเตอร์",
    "nameEn": "สาขาวิชานิเทศศาสตร์ดิจิทัลและคอนเทนต์ครีเอเตอร์ Program",
    "degreeName": "นิเทศศาสตรบัณฑิต (นศ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-sut-exp-2",
    "facultyId": "sut-fac-humanities_social-2",
    "universityId": "sut",
    "nameTh": "หลักสูตรศิลปศาสตรบัณฑิต (ศศ.บ.) สาขาวิชาการท่องเที่ยวและการบริการดิจิทัล",
    "nameEn": "สาขาวิชาการท่องเที่ยวและการบริการดิจิทัล Program",
    "degreeName": "ศิลปศาสตรบัณฑิต (ศศ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-sut-exp-5",
    "facultyId": "sut-fac-agriculture_environment-5",
    "universityId": "sut",
    "nameTh": "หลักสูตรวิทยาศาสตรบัณฑิต (วท.บ.) สาขาวิชาการจัดการเทคโนโลยีและนวัตกรรมอาหาร",
    "nameEn": "สาขาวิชาการจัดการเทคโนโลยีและนวัตกรรมอาหาร Program",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-sut-exp-8",
    "facultyId": "sut-fac-communication_arts-8",
    "universityId": "sut",
    "nameTh": "หลักสูตรนิเทศศาสตรบัณฑิต (นศ.บ.) สาขาวิชานิเทศศาสตร์ดิจิทัลและคอนเทนต์ครีเอเตอร์",
    "nameEn": "สาขาวิชานิเทศศาสตร์ดิจิทัลและคอนเทนต์ครีเอเตอร์ Program",
    "degreeName": "นิเทศศาสตรบัณฑิต (นศ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-up-exp-0",
    "facultyId": "up-fac-architecture_design-0",
    "universityId": "up",
    "nameTh": "หลักสูตรสถาปัตยกรรมศาสตรบัณฑิต (สถ.บ.) สาขาวิชาสถาปัตยกรรมภายในและการออกแบบพื้นที่",
    "nameEn": "สาขาวิชาสถาปัตยกรรมภายในและการออกแบบพื้นที่ Program",
    "degreeName": "สถาปัตยกรรมศาสตรบัณฑิต (สถ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-up-exp-3",
    "facultyId": "up-fac-law_politics-3",
    "universityId": "up",
    "nameTh": "หลักสูตรรัฐประศาสนศาสตรบัณฑิต (รป.บ.) สาขาวิชารัฐประศาสนศาสตร์และการบริหารเมือง",
    "nameEn": "สาขาวิชารัฐประศาสนศาสตร์และการบริหารเมือง Program",
    "degreeName": "รัฐประศาสนศาสตรบัณฑิต (รป.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-up-exp-6",
    "facultyId": "up-fac-engineering-6",
    "universityId": "up",
    "nameTh": "หลักสูตรวิศวกรรมศาสตรบัณฑิต (วศ.บ.) สาขาวิชาวิศวกรรมชีวการแพทย์ (Biomedical Eng)",
    "nameEn": "สาขาวิชาวิศวกรรมชีวการแพทย์ (Biomedical Eng) Program",
    "degreeName": "วิศวกรรมศาสตรบัณฑิต (วศ.บ.)",
    "isInternational": false,
    "language": "Thai"
  },
  {
    "id": "prog-up-exp-9",
    "facultyId": "up-fac-science_computing-9",
    "universityId": "up",
    "nameTh": "หลักสูตรวิทยาศาสตรบัณฑิต (วท.บ.) สาขาวิชาชีวสารสนเทศศาสตร์และจีโนมิกส์ (Bioinformatics)",
    "nameEn": "สาขาวิชาชีวสารสนเทศศาสตร์และจีโนมิกส์ (Bioinformatics) Program",
    "degreeName": "วิทยาศาสตรบัณฑิต (วท.บ.)",
    "isInternational": false,
    "language": "Thai"
  }
];

export const BRANCHES: Branch[] = [
  {
    "id": "br-10010101",
    "programId": "prog-cmu-1",
    "nameTh": "สาขาวิชาแพทยศาสตร์ (แผนทั่วไป)",
    "nameEn": "สาขาวิชาแพทยศาสตร์ (แผนทั่วไป)",
    "code": "10010101"
  },
  {
    "id": "br-10010102",
    "programId": "prog-cmu-2",
    "nameTh": "สาขาวิชาทันตแพทยศาสตร์",
    "nameEn": "สาขาวิชาทันตแพทยศาสตร์",
    "code": "10010102"
  },
  {
    "id": "br-10010103",
    "programId": "prog-cmu-3",
    "nameTh": "สาขาวิชาการบริบาลทางเภสัชกรรม (6 ปี)",
    "nameEn": "สาขาวิชาการบริบาลทางเภสัชกรรม (6 ปี)",
    "code": "10010103"
  },
  {
    "id": "br-10010104",
    "programId": "prog-cmu-4",
    "nameTh": "สาขาวิชาพยาบาลศาสตร์ (ภาคปกติ)",
    "nameEn": "สาขาวิชาพยาบาลศาสตร์ (ภาคปกติ)",
    "code": "10010104"
  },
  {
    "id": "br-10010105",
    "programId": "prog-cmu-4",
    "nameTh": "สาขาวิชาพยาบาลศาสตร์ (หลักสูตรนานาชาติ)",
    "nameEn": "สาขาวิชาพยาบาลศาสตร์ (หลักสูตรนานาชาติ)",
    "code": "10010105"
  },
  {
    "id": "br-10010106",
    "programId": "prog-cmu-5",
    "nameTh": "สาขาวิชาเทคนิคการแพทย์",
    "nameEn": "สาขาวิชาเทคนิคการแพทย์",
    "code": "10010106"
  },
  {
    "id": "br-10010107",
    "programId": "prog-cmu-5",
    "nameTh": "สาขาวิชากายภาพบำบัด",
    "nameEn": "สาขาวิชากายภาพบำบัด",
    "code": "10010107"
  },
  {
    "id": "br-10010108",
    "programId": "prog-cmu-5",
    "nameTh": "สาขาวิชารังสีเทคนิค",
    "nameEn": "สาขาวิชารังสีเทคนิค",
    "code": "10010108"
  },
  {
    "id": "br-10010109",
    "programId": "prog-cmu-6",
    "nameTh": "สาขาวิชาสัตวแพทยศาสตร์ (6 ปี)",
    "nameEn": "สาขาวิชาสัตวแพทยศาสตร์ (6 ปี)",
    "code": "10010109"
  },
  {
    "id": "br-10010111",
    "programId": "prog-cmu-7",
    "nameTh": "สาขาวิชาวิศวกรรมคอมพิวเตอร์",
    "nameEn": "สาขาวิชาวิศวกรรมคอมพิวเตอร์",
    "code": "10010111"
  },
  {
    "id": "br-10010112",
    "programId": "prog-cmu-7",
    "nameTh": "สาขาวิชาวิศวกรรมหุ่นยนต์และปัญญาประดิษฐ์",
    "nameEn": "สาขาวิชาวิศวกรรมหุ่นยนต์และปัญญาประดิษฐ์",
    "code": "10010112"
  },
  {
    "id": "br-10010113",
    "programId": "prog-cmu-7",
    "nameTh": "สาขาวิชาวิศวกรรมไฟฟ้า",
    "nameEn": "สาขาวิชาวิศวกรรมไฟฟ้า",
    "code": "10010113"
  },
  {
    "id": "br-10010114",
    "programId": "prog-cmu-7",
    "nameTh": "สาขาวิชาวิศวกรรมเครื่องกล",
    "nameEn": "สาขาวิชาวิศวกรรมเครื่องกล",
    "code": "10010114"
  },
  {
    "id": "br-10010115",
    "programId": "prog-cmu-7",
    "nameTh": "สาขาวิชาวิศวกรรมโยธา",
    "nameEn": "สาขาวิชาวิศวกรรมโยธา",
    "code": "10010115"
  },
  {
    "id": "br-10010117",
    "programId": "prog-cmu-7",
    "nameTh": "สาขาวิชาวิศวกรรมสิ่งแวดล้อม",
    "nameEn": "สาขาวิชาวิศวกรรมสิ่งแวดล้อม",
    "code": "10010117"
  },
  {
    "id": "br-10010121",
    "programId": "prog-cmu-8",
    "nameTh": "สาขาวิชาวิทยาการคอมพิวเตอร์",
    "nameEn": "สาขาวิชาวิทยาการคอมพิวเตอร์",
    "code": "10010121"
  },
  {
    "id": "br-10010122",
    "programId": "prog-cmu-8",
    "nameTh": "สาขาวิชาวิทยาการข้อมูลและการประมวลผลคลาวด์",
    "nameEn": "สาขาวิชาวิทยาการข้อมูลและการประมวลผลคลาวด์",
    "code": "10010122"
  },
  {
    "id": "br-10010123",
    "programId": "prog-cmu-8",
    "nameTh": "สาขาวิชาเคมีและเคมีอุตสาหกรรม",
    "nameEn": "สาขาวิชาเคมีและเคมีอุตสาหกรรม",
    "code": "10010123"
  },
  {
    "id": "br-10010131",
    "programId": "prog-cmu-9",
    "nameTh": "สาขาวิชาแอนิเมชันและวิชวลเอฟเฟกต์",
    "nameEn": "สาขาวิชาแอนิเมชันและวิชวลเอฟเฟกต์",
    "code": "10010131"
  },
  {
    "id": "br-10010132",
    "programId": "prog-cmu-9",
    "nameTh": "สาขาวิชาการจัดการเทคโนโลยีดิจิทัล (DIT)",
    "nameEn": "สาขาวิชาการจัดการเทคโนโลยีดิจิทัล (DIT)",
    "code": "10010132"
  },
  {
    "id": "br-10010133",
    "programId": "prog-cmu-9",
    "nameTh": "สาขาวิชาวิศวกรรมซอฟต์แวร์ (นานาชาติ)",
    "nameEn": "Software Engineering (International)",
    "code": "10010133"
  },
  {
    "id": "br-10010134",
    "programId": "prog-cmu-9",
    "nameTh": "สาขาวิชาดิจิทัลเกม",
    "nameEn": "สาขาวิชาดิจิทัลเกม",
    "code": "10010134"
  },
  {
    "id": "br-10010141",
    "programId": "prog-cmu-10",
    "nameTh": "สาขาวิชาการบัญชีและการสอบบัญชี",
    "nameEn": "สาขาวิชาการบัญชีและการสอบบัญชี",
    "code": "10010141"
  },
  {
    "id": "br-10010142",
    "programId": "prog-cmu-10",
    "nameTh": "สาขาวิชาการเงินและการลงทุน",
    "nameEn": "สาขาวิชาการเงินและการลงทุน",
    "code": "10010142"
  },
  {
    "id": "br-10010151",
    "programId": "prog-cmu-11",
    "nameTh": "สาขาวิชาเศรษฐศาสตร์การเงินและการพัฒนา",
    "nameEn": "สาขาวิชาเศรษฐศาสตร์การเงินและการพัฒนา",
    "code": "10010151"
  },
  {
    "id": "br-10010161",
    "programId": "prog-cmu-12",
    "nameTh": "สาขาวิชาภาษาอังกฤษเพื่อการสื่อสารสากล",
    "nameEn": "สาขาวิชาภาษาอังกฤษเพื่อการสื่อสารสากล",
    "code": "10010161"
  },
  {
    "id": "br-10010162",
    "programId": "prog-cmu-12",
    "nameTh": "สาขาวิชาภาษาจีนธุรกิจ",
    "nameEn": "สาขาวิชาภาษาจีนธุรกิจ",
    "code": "10010162"
  },
  {
    "id": "br-10010171",
    "programId": "prog-cmu-13",
    "nameTh": "สาขาวิชาการสื่อสารมวลชนและสื่อสร้างสรรค์",
    "nameEn": "สาขาวิชาการสื่อสารมวลชนและสื่อสร้างสรรค์",
    "code": "10010171"
  },
  {
    "id": "br-10010181",
    "programId": "prog-cmu-14",
    "nameTh": "สาขาวิชานิติศาสตร์ (มช.)",
    "nameEn": "สาขาวิชานิติศาสตร์ (มช.)",
    "code": "10010181"
  },
  {
    "id": "br-10010191",
    "programId": "prog-cmu-15",
    "nameTh": "สาขาวิชาสถาปัตยกรรม (หลักสูตร 5 ปี)",
    "nameEn": "สาขาวิชาสถาปัตยกรรม (หลักสูตร 5 ปี)",
    "code": "10010191"
  },
  {
    "id": "br-10020111",
    "programId": "prog-cu-16",
    "nameTh": "สาขาวิศวกรรมคอมพิวเตอร์และเทคโนโลยีดิจิทัล (CEDT Chula)",
    "nameEn": "สาขาวิศวกรรมคอมพิวเตอร์และเทคโนโลยีดิจิทัล (CEDT Chula)",
    "code": "10020111"
  },
  {
    "id": "br-10020112",
    "programId": "prog-cu-16",
    "nameTh": "สาขาวิศวกรรมรวม (วศ.บ. จุฬาฯ)",
    "nameEn": "สาขาวิศวกรรมรวม (วศ.บ. จุฬาฯ)",
    "code": "10020112"
  },
  {
    "id": "br-10020121",
    "programId": "prog-cu-17",
    "nameTh": "BBA Chula International Program",
    "nameEn": "BBA Chula International Program",
    "code": "10020121"
  },
  {
    "id": "br-10020131",
    "programId": "prog-cu-18",
    "nameTh": "สาขาภาษาและวัฒนธรรม (BALAC นานาชาติ)",
    "nameEn": "สาขาภาษาและวัฒนธรรม (BALAC นานาชาติ)",
    "code": "10020131"
  },
  {
    "id": "br-10020141",
    "programId": "prog-cu-19",
    "nameTh": "สาขาวิชาวารสารสนเทศและสื่อสารมวลชน",
    "nameEn": "สาขาวิชาวารสารสนเทศและสื่อสารมวลชน",
    "code": "10020141"
  },
  {
    "id": "br-10020151",
    "programId": "prog-cu-20",
    "nameTh": "สาขาวิชาสถาปัตยกรรมหลัก จุฬาฯ",
    "nameEn": "สาขาวิชาสถาปัตยกรรมหลัก จุฬาฯ",
    "code": "10020151"
  },
  {
    "id": "br-10030101",
    "programId": "prog-mu-21",
    "nameTh": "สาขาแพทยศาสตร์ ศิริราชพยาบาล",
    "nameEn": "สาขาแพทยศาสตร์ ศิริราชพยาบาล",
    "code": "10030101"
  },
  {
    "id": "br-10030111",
    "programId": "prog-mu-22",
    "nameTh": "สาขาเทคโนโลยีสารสนเทศและการสื่อสาร (MUICT อินเตอร์)",
    "nameEn": "สาขาเทคโนโลยีสารสนเทศและการสื่อสาร (MUICT อินเตอร์)",
    "code": "10030111"
  },
  {
    "id": "br-10030121",
    "programId": "prog-mu-23",
    "nameTh": "สาขาชีวการแพทย์ประยุกต์และวิทยาศาสตร์สุขภาพ (SCBM)",
    "nameEn": "สาขาชีวการแพทย์ประยุกต์และวิทยาศาสตร์สุขภาพ (SCBM)",
    "code": "10030121"
  },
  {
    "id": "br-10030131",
    "programId": "prog-mu-24",
    "nameTh": "แขนงวิชาการปฏิบัติดนตรีคลาสสิก / แจ๊ส",
    "nameEn": "แขนงวิชาการปฏิบัติดนตรีคลาสสิก / แจ๊ส",
    "code": "10030131"
  },
  {
    "id": "br-10040101",
    "programId": "prog-tu-25",
    "nameTh": "สาขาวิชานิติศาสตร์ (ศูนย์รังสิต/ท่าพระจันทร์)",
    "nameEn": "สาขาวิชานิติศาสตร์ (ศูนย์รังสิต/ท่าพระจันทร์)",
    "code": "10040101"
  },
  {
    "id": "br-10040111",
    "programId": "prog-tu-26",
    "nameTh": "สาขาธุรกิจระหว่างประเทศ โลจิสติกส์ และการขนส่ง (IBLOG)",
    "nameEn": "สาขาธุรกิจระหว่างประเทศ โลจิสติกส์ และการขนส่ง (IBLOG)",
    "code": "10040111"
  },
  {
    "id": "br-10040121",
    "programId": "prog-tu-27",
    "nameTh": "สาขาการเมืองและการระหว่างประเทศ (BIR นานาชาติ)",
    "nameEn": "สาขาการเมืองและการระหว่างประเทศ (BIR นานาชาติ)",
    "code": "10040121"
  },
  {
    "id": "br-10040131",
    "programId": "prog-tu-28",
    "nameTh": "สาขาวิศวกรรมคอมพิวเตอร์และดิจิทัล (SIIT)",
    "nameEn": "สาขาวิศวกรรมคอมพิวเตอร์และดิจิทัล (SIIT)",
    "code": "10040131"
  },
  {
    "id": "br-10050101",
    "programId": "prog-kmutt-29",
    "nameTh": "แขนงวิชานวัตกรรมบริการดิจิทัลและแพลตฟอร์ม",
    "nameEn": "แขนงวิชานวัตกรรมบริการดิจิทัลและแพลตฟอร์ม",
    "code": "10050101"
  },
  {
    "id": "br-10050102",
    "programId": "prog-kmutt-29",
    "nameTh": "แขนงวิชาวิทยาการคอมพิวเตอร์ (หลักสูตรภาษาอังกฤษ)",
    "nameEn": "แขนงวิชาวิทยาการคอมพิวเตอร์ (หลักสูตรภาษาอังกฤษ)",
    "code": "10050102"
  },
  {
    "id": "br-10050103",
    "programId": "prog-kmutt-30",
    "nameTh": "สาขาวิศวกรรมหุ่นยนต์และการผลิตอัตโนมัติ (FIBO)",
    "nameEn": "สาขาวิศวกรรมหุ่นยนต์และการผลิตอัตโนมัติ (FIBO)",
    "code": "10050103"
  },
  {
    "id": "br-10050104",
    "programId": "prog-kmutt-31",
    "nameTh": "สาขาการออกแบบผลิตภัณฑ์และนวัตกรรม (SoA+D)",
    "nameEn": "สาขาการออกแบบผลิตภัณฑ์และนวัตกรรม (SoA+D)",
    "code": "10050104"
  },
  {
    "id": "br-10060101",
    "programId": "prog-kmitl-32",
    "nameTh": "สาขาวิศวกรรมหุ่นยนต์และปัญญาประดิษฐ์ (RAI อินเตอร์)",
    "nameEn": "สาขาวิศวกรรมหุ่นยนต์และปัญญาประดิษฐ์ (RAI อินเตอร์)",
    "code": "10060101"
  },
  {
    "id": "br-10060102",
    "programId": "prog-kmitl-33",
    "nameTh": "สาขาเทคโนโลยีสารสนเทศและวิศวกรรมข้อมูล",
    "nameEn": "สาขาเทคโนโลยีสารสนเทศและวิศวกรรมข้อมูล",
    "code": "10060102"
  },
  {
    "id": "br-10070101",
    "programId": "prog-ku-34",
    "nameTh": "สาขาวิชาวิศวกรรมคอมพิวเตอร์ มก.",
    "nameEn": "สาขาวิชาวิศวกรรมคอมพิวเตอร์ มก.",
    "code": "10070101"
  },
  {
    "id": "br-10070102",
    "programId": "prog-ku-35",
    "nameTh": "สาขาวิชาเกษตรศาสตร์และนวัตกรรมอาหาร",
    "nameEn": "สาขาวิชาเกษตรศาสตร์และนวัตกรรมอาหาร",
    "code": "10070102"
  },
  {
    "id": "br-10080101",
    "programId": "prog-kku-36",
    "nameTh": "สาขาวิชาแพทยศาสตร์ คณะแพทยศาสตร์ มข.",
    "nameEn": "สาขาวิชาแพทยศาสตร์ คณะแพทยศาสตร์ มข.",
    "code": "10080101"
  },
  {
    "id": "br-10080102",
    "programId": "prog-kku-37",
    "nameTh": "สาขาวิชาวิศวกรรมคอมพิวเตอร์ มข.",
    "nameEn": "สาขาวิชาวิศวกรรมคอมพิวเตอร์ มข.",
    "code": "10080102"
  },
  {
    "id": "br-10090101",
    "programId": "prog-psu-38",
    "nameTh": "สาขาวิชาแพทยศาสตร์ ม.อ. (หาดใหญ่)",
    "nameEn": "สาขาวิชาแพทยศาสตร์ ม.อ. (หาดใหญ่)",
    "code": "10090101"
  },
  {
    "id": "br-10090102",
    "programId": "prog-psu-39",
    "nameTh": "สาขาวิศวกรรมปัญญาประดิษฐ์และคอมพิวเตอร์",
    "nameEn": "สาขาวิศวกรรมปัญญาประดิษฐ์และคอมพิวเตอร์",
    "code": "10090102"
  },
  {
    "id": "br-10100101",
    "programId": "prog-swu-40",
    "nameTh": "สาขาวิชาแพทยศาสตร์ มศว",
    "nameEn": "สาขาวิชาแพทยศาสตร์ มศว",
    "code": "10100101"
  },
  {
    "id": "br-10100102",
    "programId": "prog-swu-41",
    "nameTh": "สาขาวิชาวิศวกรรมคอมพิวเตอร์ มศว",
    "nameEn": "สาขาวิชาวิศวกรรมคอมพิวเตอร์ มศว",
    "code": "10100102"
  },
  {
    "id": "br-10110101",
    "programId": "prog-kmutnb-42",
    "nameTh": "สาขาวิชาวิศวกรรมหุ่นยนต์และระบบอัตโนมัติ (มจพ.)",
    "nameEn": "สาขาวิชาวิศวกรรมหุ่นยนต์และระบบอัตโนมัติ (มจพ.)",
    "code": "10110101"
  },
  {
    "id": "br-10120101",
    "programId": "prog-nu-43",
    "nameTh": "สาขาวิชาแพทยศาสตร์ มน. (พิษณุโลก)",
    "nameEn": "สาขาวิชาแพทยศาสตร์ มน. (พิษณุโลก)",
    "code": "10120101"
  },
  {
    "id": "br-10130101",
    "programId": "prog-mfu-44",
    "nameTh": "สาขาวิชาวิศวกรรมซอฟต์แวร์ มฟล.",
    "nameEn": "สาขาวิชาวิศวกรรมซอฟต์แวร์ มฟล.",
    "code": "10130101"
  },
  {
    "id": "br-10140101",
    "programId": "prog-buu-45",
    "nameTh": "สาขาปัญญาประดิษฐ์ประยุกต์และสมาร์ทซิตี้",
    "nameEn": "สาขาปัญญาประดิษฐ์ประยุกต์และสมาร์ทซิตี้",
    "code": "10140101"
  },
  {
    "id": "br-10150101",
    "programId": "prog-su-46",
    "nameTh": "สาขาวิชาการออกแบบเกมและสื่ออินเทอร์แอคทีฟ (ICT ศิลปากร)",
    "nameEn": "สาขาวิชาการออกแบบเกมและสื่ออินเทอร์แอคทีฟ (ICT ศิลปากร)",
    "code": "10150101"
  },
  {
    "id": "br-10160101",
    "programId": "prog-sut-47",
    "nameTh": "สาขาวิศวกรรมเมคคาทรอนิกส์และยานยนต์ไฟฟ้า (EV)",
    "nameEn": "สาขาวิศวกรรมเมคคาทรอนิกส์และยานยนต์ไฟฟ้า (EV)",
    "code": "10160101"
  },
  {
    "id": "br-10170101",
    "programId": "prog-up-48",
    "nameTh": "สาขาวิชาแพทยศาสตร์ ม.พะเยา",
    "nameEn": "สาขาวิชาแพทยศาสตร์ ม.พะเยา",
    "code": "10170101"
  },
  {
    "id": "br-cmu-0",
    "programId": "prog-cmu-exp-0",
    "nameTh": "สาขาวิชาสถาปัตยกรรมภายในและการออกแบบพื้นที่",
    "nameEn": "สาขาวิชาสถาปัตยกรรมภายในและการออกแบบพื้นที่",
    "code": "20010301"
  },
  {
    "id": "br-cmu-3",
    "programId": "prog-cmu-exp-3",
    "nameTh": "สาขาวิชารัฐประศาสนศาสตร์และการบริหารเมือง",
    "nameEn": "สาขาวิชารัฐประศาสนศาสตร์และการบริหารเมือง",
    "code": "20040304"
  },
  {
    "id": "br-cmu-6",
    "programId": "prog-cmu-exp-6",
    "nameTh": "สาขาวิชาวิศวกรรมชีวการแพทย์ (Biomedical Eng)",
    "nameEn": "สาขาวิชาวิศวกรรมชีวการแพทย์ (Biomedical Eng)",
    "code": "20070307"
  },
  {
    "id": "br-cmu-9",
    "programId": "prog-cmu-exp-9",
    "nameTh": "สาขาวิชาชีวสารสนเทศศาสตร์และจีโนมิกส์ (Bioinformatics)",
    "nameEn": "สาขาวิชาชีวสารสนเทศศาสตร์และจีโนมิกส์ (Bioinformatics)",
    "code": "20100310"
  },
  {
    "id": "br-cu-0",
    "programId": "prog-cu-exp-0",
    "nameTh": "สาขาวิชาสถาปัตยกรรมภายในและการออกแบบพื้นที่",
    "nameEn": "สาขาวิชาสถาปัตยกรรมภายในและการออกแบบพื้นที่",
    "code": "20010201"
  },
  {
    "id": "br-cu-3",
    "programId": "prog-cu-exp-3",
    "nameTh": "สาขาวิชารัฐประศาสนศาสตร์และการบริหารเมือง",
    "nameEn": "สาขาวิชารัฐประศาสนศาสตร์และการบริหารเมือง",
    "code": "20040204"
  },
  {
    "id": "br-cu-6",
    "programId": "prog-cu-exp-6",
    "nameTh": "สาขาวิชาวิศวกรรมชีวการแพทย์ (Biomedical Eng)",
    "nameEn": "สาขาวิชาวิศวกรรมชีวการแพทย์ (Biomedical Eng)",
    "code": "20070207"
  },
  {
    "id": "br-cu-9",
    "programId": "prog-cu-exp-9",
    "nameTh": "สาขาวิชาชีวสารสนเทศศาสตร์และจีโนมิกส์ (Bioinformatics)",
    "nameEn": "สาขาวิชาชีวสารสนเทศศาสตร์และจีโนมิกส์ (Bioinformatics)",
    "code": "20100210"
  },
  {
    "id": "br-mu-2",
    "programId": "prog-mu-exp-2",
    "nameTh": "สาขาวิชาการท่องเที่ยวและการบริการดิจิทัล",
    "nameEn": "สาขาวิชาการท่องเที่ยวและการบริการดิจิทัล",
    "code": "20030203"
  },
  {
    "id": "br-mu-5",
    "programId": "prog-mu-exp-5",
    "nameTh": "สาขาวิชาการจัดการเทคโนโลยีและนวัตกรรมอาหาร",
    "nameEn": "สาขาวิชาการจัดการเทคโนโลยีและนวัตกรรมอาหาร",
    "code": "20060206"
  },
  {
    "id": "br-mu-8",
    "programId": "prog-mu-exp-8",
    "nameTh": "สาขาวิชานิเทศศาสตร์ดิจิทัลและคอนเทนต์ครีเอเตอร์",
    "nameEn": "สาขาวิชานิเทศศาสตร์ดิจิทัลและคอนเทนต์ครีเอเตอร์",
    "code": "20090209"
  },
  {
    "id": "br-tu-1",
    "programId": "prog-tu-exp-1",
    "nameTh": "สาขาวิชาวิทยาศาสตร์การกีฬาและการออกกำลังกาย",
    "nameEn": "สาขาวิชาวิทยาศาสตร์การกีฬาและการออกกำลังกาย",
    "code": "20020202"
  },
  {
    "id": "br-tu-4",
    "programId": "prog-tu-exp-4",
    "nameTh": "สาขาวิชาฟิสิกส์วัสดุและพลังงานสะอาด",
    "nameEn": "สาขาวิชาฟิสิกส์วัสดุและพลังงานสะอาด",
    "code": "20050205"
  },
  {
    "id": "br-tu-7",
    "programId": "prog-tu-exp-7",
    "nameTh": "สาขาวิชาการจัดการการขนส่งและโลจิสติกส์การค้า",
    "nameEn": "สาขาวิชาการจัดการการขนส่งและโลจิสติกส์การค้า",
    "code": "20080208"
  },
  {
    "id": "br-ku-1",
    "programId": "prog-ku-exp-1",
    "nameTh": "สาขาวิชาวิทยาศาสตร์การกีฬาและการออกกำลังกาย",
    "nameEn": "สาขาวิชาวิทยาศาสตร์การกีฬาและการออกกำลังกาย",
    "code": "20020202"
  },
  {
    "id": "br-ku-4",
    "programId": "prog-ku-exp-4",
    "nameTh": "สาขาวิชาฟิสิกส์วัสดุและพลังงานสะอาด",
    "nameEn": "สาขาวิชาฟิสิกส์วัสดุและพลังงานสะอาด",
    "code": "20050205"
  },
  {
    "id": "br-ku-7",
    "programId": "prog-ku-exp-7",
    "nameTh": "สาขาวิชาการจัดการการขนส่งและโลจิสติกส์การค้า",
    "nameEn": "สาขาวิชาการจัดการการขนส่งและโลจิสติกส์การค้า",
    "code": "20080208"
  },
  {
    "id": "br-kmutt-1",
    "programId": "prog-kmutt-exp-1",
    "nameTh": "สาขาวิชาวิทยาศาสตร์การกีฬาและการออกกำลังกาย",
    "nameEn": "สาขาวิชาวิทยาศาสตร์การกีฬาและการออกกำลังกาย",
    "code": "20020502"
  },
  {
    "id": "br-kmutt-4",
    "programId": "prog-kmutt-exp-4",
    "nameTh": "สาขาวิชาฟิสิกส์วัสดุและพลังงานสะอาด",
    "nameEn": "สาขาวิชาฟิสิกส์วัสดุและพลังงานสะอาด",
    "code": "20050505"
  },
  {
    "id": "br-kmutt-7",
    "programId": "prog-kmutt-exp-7",
    "nameTh": "สาขาวิชาการจัดการการขนส่งและโลจิสติกส์การค้า",
    "nameEn": "สาขาวิชาการจัดการการขนส่งและโลจิสติกส์การค้า",
    "code": "20080508"
  },
  {
    "id": "br-kmitl-1",
    "programId": "prog-kmitl-exp-1",
    "nameTh": "สาขาวิชาวิทยาศาสตร์การกีฬาและการออกกำลังกาย",
    "nameEn": "สาขาวิชาวิทยาศาสตร์การกีฬาและการออกกำลังกาย",
    "code": "20020502"
  },
  {
    "id": "br-kmitl-4",
    "programId": "prog-kmitl-exp-4",
    "nameTh": "สาขาวิชาฟิสิกส์วัสดุและพลังงานสะอาด",
    "nameEn": "สาขาวิชาฟิสิกส์วัสดุและพลังงานสะอาด",
    "code": "20050505"
  },
  {
    "id": "br-kmitl-7",
    "programId": "prog-kmitl-exp-7",
    "nameTh": "สาขาวิชาการจัดการการขนส่งและโลจิสติกส์การค้า",
    "nameEn": "สาขาวิชาการจัดการการขนส่งและโลจิสติกส์การค้า",
    "code": "20080508"
  },
  {
    "id": "br-kmutnb-1",
    "programId": "prog-kmutnb-exp-1",
    "nameTh": "สาขาวิชาวิทยาศาสตร์การกีฬาและการออกกำลังกาย",
    "nameEn": "สาขาวิชาวิทยาศาสตร์การกีฬาและการออกกำลังกาย",
    "code": "20020602"
  },
  {
    "id": "br-kmutnb-4",
    "programId": "prog-kmutnb-exp-4",
    "nameTh": "สาขาวิชาฟิสิกส์วัสดุและพลังงานสะอาด",
    "nameEn": "สาขาวิชาฟิสิกส์วัสดุและพลังงานสะอาด",
    "code": "20050605"
  },
  {
    "id": "br-kmutnb-7",
    "programId": "prog-kmutnb-exp-7",
    "nameTh": "สาขาวิชาการจัดการการขนส่งและโลจิสติกส์การค้า",
    "nameEn": "สาขาวิชาการจัดการการขนส่งและโลจิสติกส์การค้า",
    "code": "20080608"
  },
  {
    "id": "br-kku-1",
    "programId": "prog-kku-exp-1",
    "nameTh": "สาขาวิชาวิทยาศาสตร์การกีฬาและการออกกำลังกาย",
    "nameEn": "สาขาวิชาวิทยาศาสตร์การกีฬาและการออกกำลังกาย",
    "code": "20020302"
  },
  {
    "id": "br-kku-4",
    "programId": "prog-kku-exp-4",
    "nameTh": "สาขาวิชาฟิสิกส์วัสดุและพลังงานสะอาด",
    "nameEn": "สาขาวิชาฟิสิกส์วัสดุและพลังงานสะอาด",
    "code": "20050305"
  },
  {
    "id": "br-kku-7",
    "programId": "prog-kku-exp-7",
    "nameTh": "สาขาวิชาการจัดการการขนส่งและโลจิสติกส์การค้า",
    "nameEn": "สาขาวิชาการจัดการการขนส่งและโลจิสติกส์การค้า",
    "code": "20080308"
  },
  {
    "id": "br-psu-2",
    "programId": "prog-psu-exp-2",
    "nameTh": "สาขาวิชาการท่องเที่ยวและการบริการดิจิทัล",
    "nameEn": "สาขาวิชาการท่องเที่ยวและการบริการดิจิทัล",
    "code": "20030303"
  },
  {
    "id": "br-psu-5",
    "programId": "prog-psu-exp-5",
    "nameTh": "สาขาวิชาการจัดการเทคโนโลยีและนวัตกรรมอาหาร",
    "nameEn": "สาขาวิชาการจัดการเทคโนโลยีและนวัตกรรมอาหาร",
    "code": "20060306"
  },
  {
    "id": "br-psu-8",
    "programId": "prog-psu-exp-8",
    "nameTh": "สาขาวิชานิเทศศาสตร์ดิจิทัลและคอนเทนต์ครีเอเตอร์",
    "nameEn": "สาขาวิชานิเทศศาสตร์ดิจิทัลและคอนเทนต์ครีเอเตอร์",
    "code": "20090309"
  },
  {
    "id": "br-swu-2",
    "programId": "prog-swu-exp-2",
    "nameTh": "สาขาวิชาการท่องเที่ยวและการบริการดิจิทัล",
    "nameEn": "สาขาวิชาการท่องเที่ยวและการบริการดิจิทัล",
    "code": "20030303"
  },
  {
    "id": "br-swu-5",
    "programId": "prog-swu-exp-5",
    "nameTh": "สาขาวิชาการจัดการเทคโนโลยีและนวัตกรรมอาหาร",
    "nameEn": "สาขาวิชาการจัดการเทคโนโลยีและนวัตกรรมอาหาร",
    "code": "20060306"
  },
  {
    "id": "br-swu-8",
    "programId": "prog-swu-exp-8",
    "nameTh": "สาขาวิชานิเทศศาสตร์ดิจิทัลและคอนเทนต์ครีเอเตอร์",
    "nameEn": "สาขาวิชานิเทศศาสตร์ดิจิทัลและคอนเทนต์ครีเอเตอร์",
    "code": "20090309"
  },
  {
    "id": "br-nu-1",
    "programId": "prog-nu-exp-1",
    "nameTh": "สาขาวิชาวิทยาศาสตร์การกีฬาและการออกกำลังกาย",
    "nameEn": "สาขาวิชาวิทยาศาสตร์การกีฬาและการออกกำลังกาย",
    "code": "20020202"
  },
  {
    "id": "br-nu-4",
    "programId": "prog-nu-exp-4",
    "nameTh": "สาขาวิชาฟิสิกส์วัสดุและพลังงานสะอาด",
    "nameEn": "สาขาวิชาฟิสิกส์วัสดุและพลังงานสะอาด",
    "code": "20050205"
  },
  {
    "id": "br-nu-7",
    "programId": "prog-nu-exp-7",
    "nameTh": "สาขาวิชาการจัดการการขนส่งและโลจิสติกส์การค้า",
    "nameEn": "สาขาวิชาการจัดการการขนส่งและโลจิสติกส์การค้า",
    "code": "20080208"
  },
  {
    "id": "br-mfu-2",
    "programId": "prog-mfu-exp-2",
    "nameTh": "สาขาวิชาการท่องเที่ยวและการบริการดิจิทัล",
    "nameEn": "สาขาวิชาการท่องเที่ยวและการบริการดิจิทัล",
    "code": "20030303"
  },
  {
    "id": "br-mfu-5",
    "programId": "prog-mfu-exp-5",
    "nameTh": "สาขาวิชาการจัดการเทคโนโลยีและนวัตกรรมอาหาร",
    "nameEn": "สาขาวิชาการจัดการเทคโนโลยีและนวัตกรรมอาหาร",
    "code": "20060306"
  },
  {
    "id": "br-mfu-8",
    "programId": "prog-mfu-exp-8",
    "nameTh": "สาขาวิชานิเทศศาสตร์ดิจิทัลและคอนเทนต์ครีเอเตอร์",
    "nameEn": "สาขาวิชานิเทศศาสตร์ดิจิทัลและคอนเทนต์ครีเอเตอร์",
    "code": "20090309"
  },
  {
    "id": "br-buu-1",
    "programId": "prog-buu-exp-1",
    "nameTh": "สาขาวิชาวิทยาศาสตร์การกีฬาและการออกกำลังกาย",
    "nameEn": "สาขาวิชาวิทยาศาสตร์การกีฬาและการออกกำลังกาย",
    "code": "20020302"
  },
  {
    "id": "br-buu-4",
    "programId": "prog-buu-exp-4",
    "nameTh": "สาขาวิชาฟิสิกส์วัสดุและพลังงานสะอาด",
    "nameEn": "สาขาวิชาฟิสิกส์วัสดุและพลังงานสะอาด",
    "code": "20050305"
  },
  {
    "id": "br-buu-7",
    "programId": "prog-buu-exp-7",
    "nameTh": "สาขาวิชาการจัดการการขนส่งและโลจิสติกส์การค้า",
    "nameEn": "สาขาวิชาการจัดการการขนส่งและโลจิสติกส์การค้า",
    "code": "20080308"
  },
  {
    "id": "br-su-2",
    "programId": "prog-su-exp-2",
    "nameTh": "สาขาวิชาการท่องเที่ยวและการบริการดิจิทัล",
    "nameEn": "สาขาวิชาการท่องเที่ยวและการบริการดิจิทัล",
    "code": "20030203"
  },
  {
    "id": "br-su-5",
    "programId": "prog-su-exp-5",
    "nameTh": "สาขาวิชาการจัดการเทคโนโลยีและนวัตกรรมอาหาร",
    "nameEn": "สาขาวิชาการจัดการเทคโนโลยีและนวัตกรรมอาหาร",
    "code": "20060206"
  },
  {
    "id": "br-su-8",
    "programId": "prog-su-exp-8",
    "nameTh": "สาขาวิชานิเทศศาสตร์ดิจิทัลและคอนเทนต์ครีเอเตอร์",
    "nameEn": "สาขาวิชานิเทศศาสตร์ดิจิทัลและคอนเทนต์ครีเอเตอร์",
    "code": "20090209"
  },
  {
    "id": "br-sut-2",
    "programId": "prog-sut-exp-2",
    "nameTh": "สาขาวิชาการท่องเที่ยวและการบริการดิจิทัล",
    "nameEn": "สาขาวิชาการท่องเที่ยวและการบริการดิจิทัล",
    "code": "20030303"
  },
  {
    "id": "br-sut-5",
    "programId": "prog-sut-exp-5",
    "nameTh": "สาขาวิชาการจัดการเทคโนโลยีและนวัตกรรมอาหาร",
    "nameEn": "สาขาวิชาการจัดการเทคโนโลยีและนวัตกรรมอาหาร",
    "code": "20060306"
  },
  {
    "id": "br-sut-8",
    "programId": "prog-sut-exp-8",
    "nameTh": "สาขาวิชานิเทศศาสตร์ดิจิทัลและคอนเทนต์ครีเอเตอร์",
    "nameEn": "สาขาวิชานิเทศศาสตร์ดิจิทัลและคอนเทนต์ครีเอเตอร์",
    "code": "20090309"
  },
  {
    "id": "br-up-0",
    "programId": "prog-up-exp-0",
    "nameTh": "สาขาวิชาสถาปัตยกรรมภายในและการออกแบบพื้นที่",
    "nameEn": "สาขาวิชาสถาปัตยกรรมภายในและการออกแบบพื้นที่",
    "code": "20010201"
  },
  {
    "id": "br-up-3",
    "programId": "prog-up-exp-3",
    "nameTh": "สาขาวิชารัฐประศาสนศาสตร์และการบริหารเมือง",
    "nameEn": "สาขาวิชารัฐประศาสนศาสตร์และการบริหารเมือง",
    "code": "20040204"
  },
  {
    "id": "br-up-6",
    "programId": "prog-up-exp-6",
    "nameTh": "สาขาวิชาวิศวกรรมชีวการแพทย์ (Biomedical Eng)",
    "nameEn": "สาขาวิชาวิศวกรรมชีวการแพทย์ (Biomedical Eng)",
    "code": "20070207"
  },
  {
    "id": "br-up-9",
    "programId": "prog-up-exp-9",
    "nameTh": "สาขาวิชาชีวสารสนเทศศาสตร์และจีโนมิกส์ (Bioinformatics)",
    "nameEn": "สาขาวิชาชีวสารสนเทศศาสตร์และจีโนมิกส์ (Bioinformatics)",
    "code": "20100210"
  }
];

export const ADMISSION_PROJECTS: AdmissionProject[] = [
  {
    "id": "proj-cmu-med-port",
    "branchId": "br-10010101",
    "programId": "prog-cmu-1",
    "facultyId": "cmu-health_medicine-1",
    "universityId": "cmu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10010101101801A",
    "projectNameTh": "โครงการเรียนดี / โอลิมปิกวิชาการ สอวน.",
    "projectNameEn": "โครงการเรียนดี / โอลิมปิกวิชาการ สอวน.",
    "quotaSeats": 25,
    "studyTrack": "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
    "gpaxMin": 3.5,
    "tuitionFee": "20,000 บาท/ภาคการศึกษา",
    "applicationFee": "500 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4 ไม่รวมปก",
    "selectionFormulaTh": "GPAX 20% + Portfolio สอวน. 50% + สัมภาษณ์ MMI 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "GPAX 5 ภาคเรียน ≥ 3.50",
      "ผ่าน สอวน. ค่าย 2 สาขา เคมี/ชีวะ/ฟิสิกส์/คอมพิวเตอร์",
      "ตาไม่บอดสีรุนแรง และสุขภาพพร้อมปฏิบัติงาน",
      "ผลสอบภาษาอังกฤษ IELTS ≥ 6.0 หรือ CMU-eTEGS ≥ 65"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะแพทยศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-med-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3.5",
        "nameEn": "Minimum GPAX 3.5",
        "minScore": "3.5",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3.5",
        "detailsEn": "5-term cumulative GPA at least 3.5",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-med-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-med-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการเรียนดี / โอลิมปิกวิชาการ สอวน.",
        "titleEn": "Application Opens",
        "startDate": "2026-11-01",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cmu-med-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการเรียนดี / โอลิมปิกวิชาการ สอวน. (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cmu-med-quota",
    "branchId": "br-10010101",
    "programId": "prog-cmu-1",
    "facultyId": "cmu-health_medicine-1",
    "universityId": "cmu",
    "round": "TCAS2_QUOTA",
    "tcasProgramCode": "10010101101801A",
    "projectNameTh": "โครงการผลิตแพทย์เพื่อชาวชนบท (CPIRD ภาคเหนือ)",
    "projectNameEn": "โครงการผลิตแพทย์เพื่อชาวชนบท (CPIRD ภาคเหนือ)",
    "quotaSeats": 35,
    "studyTrack": "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
    "gpaxMin": 3.5,
    "tuitionFee": "20,000 บาท/ภาคการศึกษา",
    "applicationFee": "400 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "TPAT1 (กสพท) 30% + A-Level 70%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "มีภูมิลำเนาและศึกษาในโรงเรียนเขต 8 จังหวัดภาคเหนือตอนบน ไม่น้อยกว่า 3 ปี",
      "GPAX ≥ 3.50",
      "มีสัญญาผูกพันการชดใช้ทุนในพื้นที่ชนบท"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะแพทยศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-med-quota-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3.5",
        "nameEn": "Minimum GPAX 3.5",
        "minScore": "3.5",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3.5",
        "detailsEn": "5-term cumulative GPA at least 3.5",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-med-quota-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-med-quota-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการผลิตแพทย์เพื่อชาวชนบท (CPIRD ภาคเหนือ)",
        "titleEn": "Application Opens",
        "startDate": "2027-02-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cmu-med-quota-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการผลิตแพทย์เพื่อชาวชนบท (CPIRD ภาคเหนือ) (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2027-02-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cmu-dent-port",
    "branchId": "br-10010102",
    "programId": "prog-cmu-2",
    "facultyId": "cmu-health_medicine-2",
    "universityId": "cmu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10010102101801A",
    "projectNameTh": "โครงการเรียนดีและผู้มีแวววิชาชีพทันตแพทย์",
    "projectNameEn": "โครงการเรียนดีและผู้มีแวววิชาชีพทันตแพทย์",
    "quotaSeats": 15,
    "studyTrack": "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
    "gpaxMin": 3.5,
    "tuitionFee": "34,000 บาท/ภาคการศึกษา",
    "applicationFee": "500 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 25% + Portfolio 45% + สัมภาษณ์และทดสอบทักษะทางกายภาพ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "GPAX ≥ 3.50 กลุ่มวิทย์และคณิต ≥ 3.50",
      "ผ่านการทดสอบทักษะความสัมพันธ์ของมือและสายตา (Manual Dexterity)",
      "ตาไม่บอดสี"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะทันตแพทยศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-dent-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3.5",
        "nameEn": "Minimum GPAX 3.5",
        "minScore": "3.5",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3.5",
        "detailsEn": "5-term cumulative GPA at least 3.5",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-dent-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-dent-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการเรียนดีและผู้มีแวววิชาชีพทันตแพทย์",
        "titleEn": "Application Opens",
        "startDate": "2026-11-01",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cmu-dent-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการเรียนดีและผู้มีแวววิชาชีพทันตแพทย์ (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cmu-pharm-port",
    "branchId": "br-10010103",
    "programId": "prog-cmu-3",
    "facultyId": "cmu-health_medicine-3",
    "universityId": "cmu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10010103101801A",
    "projectNameTh": "โครงการผู้มีความสามารถพิเศษทางวิทยาศาสตร์สุขภาพ",
    "projectNameEn": "โครงการผู้มีความสามารถพิเศษทางวิทยาศาสตร์สุขภาพ",
    "quotaSeats": 20,
    "studyTrack": "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
    "gpaxMin": 3.25,
    "tuitionFee": "25,000 บาท/ภาคการศึกษา",
    "applicationFee": "300 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "GPAX 5 ภาคเรียน ≥ 3.25",
      "เคมีและชีววิทยา ≥ 3.25",
      "ผลงานโครงงานวิทยาศาสตร์สุขภาพหรือจิตอาสาโรงพยาบาล"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะเภสัชศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-pharm-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3.25",
        "nameEn": "Minimum GPAX 3.25",
        "minScore": "3.25",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3.25",
        "detailsEn": "5-term cumulative GPA at least 3.25",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-pharm-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-pharm-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการผู้มีความสามารถพิเศษทางวิทยาศาสตร์สุขภาพ",
        "titleEn": "Application Opens",
        "startDate": "2026-11-01",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cmu-pharm-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการผู้มีความสามารถพิเศษทางวิทยาศาสตร์สุขภาพ (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cmu-nurse-port",
    "branchId": "br-10010104",
    "programId": "prog-cmu-4",
    "facultyId": "cmu-health_medicine-4",
    "universityId": "cmu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10010104101801A",
    "projectNameTh": "โครงการรับนักเรียนเรียนดีผู้มีใจรักวิชาชีพพยาบาล",
    "projectNameEn": "โครงการรับนักเรียนเรียนดีผู้มีใจรักวิชาชีพพยาบาล",
    "quotaSeats": 40,
    "studyTrack": "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
    "gpaxMin": 3,
    "tuitionFee": "18,000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "ส่วนสูงไม่ต่ำกว่า 150 ซม.",
      "GPAX ≥ 3.00",
      "สุขภาพแข็งแรง สมบูรณ์"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะพยาบาลศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-nurse-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3",
        "nameEn": "Minimum GPAX 3",
        "minScore": "3",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3",
        "detailsEn": "5-term cumulative GPA at least 3",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-nurse-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-nurse-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการรับนักเรียนเรียนดีผู้มีใจรักวิชาชีพพยาบาล",
        "titleEn": "Application Opens",
        "startDate": "2026-10-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cmu-nurse-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการรับนักเรียนเรียนดีผู้มีใจรักวิชาชีพพยาบาล (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cmu-nurse-inter",
    "branchId": "br-10010105",
    "programId": "prog-cmu-4",
    "facultyId": "cmu-health_medicine-4",
    "universityId": "cmu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10010105101801A",
    "projectNameTh": "โครงการรับสมัครนานาชาติ (International Nursing)",
    "projectNameEn": "โครงการรับสมัครนานาชาติ (International Nursing)",
    "quotaSeats": 25,
    "studyTrack": "ทุกแผนการเรียน (วิทย์-คณิต หรือเทียบเท่า)",
    "gpaxMin": 2.75,
    "tuitionFee": "55,000 บาท/ภาคการศึกษา",
    "applicationFee": "500 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4 ภาษาอังกฤษ",
    "selectionFormulaTh": "Portfolio ภาษาอังกฤษ 40% + สัมภาษณ์ภาษาอังกฤษ 40% + ภาษาอังกฤษ 20%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "IELTS ≥ 5.5 หรือ CMU-eTEGS ≥ 60",
      "สัมภาษณ์ภาษาอังกฤษล้วน"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะพยาบาลศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-nurse-inter-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 2.75",
        "nameEn": "Minimum GPAX 2.75",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
        "detailsEn": "5-term cumulative GPA at least 2.75",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-nurse-inter-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-nurse-inter-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการรับสมัครนานาชาติ (International Nursing)",
        "titleEn": "Application Opens",
        "startDate": "2026-10-01",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cmu-nurse-inter-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการรับสมัครนานาชาติ (International Nursing) (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-30",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cmu-ams-mt-port",
    "branchId": "br-10010106",
    "programId": "prog-cmu-5",
    "facultyId": "cmu-health_medicine-5",
    "universityId": "cmu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10010106101801A",
    "projectNameTh": "โครงการผู้มีความสามารถพิเศษทางวิทยาศาสตร์การแพทย์",
    "projectNameEn": "โครงการผู้มีความสามารถพิเศษทางวิทยาศาสตร์การแพทย์",
    "quotaSeats": 30,
    "studyTrack": "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
    "gpaxMin": 3.25,
    "tuitionFee": "18,000 บาท/ภาคการศึกษา",
    "applicationFee": "300 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 25% + Portfolio 45% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "GPAX ≥ 3.25",
      "ตาไม่บอดสี",
      "มีโครงงานวิทย์หรือรางวัลวิชาการ"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะเทคนิคการแพทย์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-ams-mt-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3.25",
        "nameEn": "Minimum GPAX 3.25",
        "minScore": "3.25",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3.25",
        "detailsEn": "5-term cumulative GPA at least 3.25",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-ams-mt-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-ams-mt-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการผู้มีความสามารถพิเศษทางวิทยาศาสตร์การแพทย์",
        "titleEn": "Application Opens",
        "startDate": "2026-10-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cmu-ams-mt-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการผู้มีความสามารถพิเศษทางวิทยาศาสตร์การแพทย์ (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cmu-ams-pt-port",
    "branchId": "br-10010107",
    "programId": "prog-cmu-5",
    "facultyId": "cmu-health_medicine-5",
    "universityId": "cmu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10010107101801A",
    "projectNameTh": "โครงการรับด้วยแฟ้มสะสมผลงาน (Portfolio)",
    "projectNameEn": "โครงการรับด้วยแฟ้มสะสมผลงาน (Portfolio)",
    "quotaSeats": 25,
    "studyTrack": "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
    "gpaxMin": 3,
    "tuitionFee": "18,000 บาท/ภาคการศึกษา",
    "applicationFee": "300 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "GPAX ≥ 3.00",
      "ร่างกายสมบูรณ์ ไม่เป็นอุปสรรคต่อการฟื้นฟูผู้ป่วย"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะเทคนิคการแพทย์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-ams-pt-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3",
        "nameEn": "Minimum GPAX 3",
        "minScore": "3",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3",
        "detailsEn": "5-term cumulative GPA at least 3",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-ams-pt-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-ams-pt-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการรับด้วยแฟ้มสะสมผลงาน (Portfolio)",
        "titleEn": "Application Opens",
        "startDate": "2026-10-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cmu-ams-pt-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการรับด้วยแฟ้มสะสมผลงาน (Portfolio) (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cmu-ams-rt-port",
    "branchId": "br-10010108",
    "programId": "prog-cmu-5",
    "facultyId": "cmu-health_medicine-5",
    "universityId": "cmu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10010108101801A",
    "projectNameTh": "โครงการเรียนดีรังสีเทคนิค",
    "projectNameEn": "โครงการเรียนดีรังสีเทคนิค",
    "quotaSeats": 20,
    "studyTrack": "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
    "gpaxMin": 3.25,
    "tuitionFee": "20,000 บาท/ภาคการศึกษา",
    "applicationFee": "300 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + ฟิสิกส์ 30% + สัมภาษณ์ 40%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "ฟิสิกส์ ≥ 3.25",
      "GPAX ≥ 3.25",
      "ตาไม่บอดสี"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะเทคนิคการแพทย์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-ams-rt-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3.25",
        "nameEn": "Minimum GPAX 3.25",
        "minScore": "3.25",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3.25",
        "detailsEn": "5-term cumulative GPA at least 3.25",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-ams-rt-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-ams-rt-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการเรียนดีรังสีเทคนิค",
        "titleEn": "Application Opens",
        "startDate": "2026-10-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cmu-ams-rt-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการเรียนดีรังสีเทคนิค (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cmu-vet-port",
    "branchId": "br-10010109",
    "programId": "prog-cmu-6",
    "facultyId": "cmu-health_medicine-6",
    "universityId": "cmu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10010109101801A",
    "projectNameTh": "โครงการผู้มีใจรักการดูแลสัตว์และสัตวแพทย์ชนบท",
    "projectNameEn": "โครงการผู้มีใจรักการดูแลสัตว์และสัตวแพทย์ชนบท",
    "quotaSeats": 25,
    "studyTrack": "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
    "gpaxMin": 3.25,
    "tuitionFee": "22,000 บาท/ภาคการศึกษา",
    "applicationFee": "400 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 25% + Portfolio งานสัตว์ 45% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "GPAX ≥ 3.25",
      "มีประวัติฝึกงานในคลินิก/ฟาร์มสัตว์หรือกิจกรรมพิทักษ์สัตว์",
      "ไม่มีภูมิแพ้ขนสัตว์รุนแรง"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะสัตวแพทยศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-vet-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3.25",
        "nameEn": "Minimum GPAX 3.25",
        "minScore": "3.25",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3.25",
        "detailsEn": "5-term cumulative GPA at least 3.25",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-vet-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-vet-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการผู้มีใจรักการดูแลสัตว์และสัตวแพทย์ชนบท",
        "titleEn": "Application Opens",
        "startDate": "2026-10-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cmu-vet-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการผู้มีใจรักการดูแลสัตว์และสัตวแพทย์ชนบท (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cmu-cpe-port",
    "branchId": "br-10010111",
    "programId": "prog-cmu-7",
    "facultyId": "cmu-engineering-7",
    "universityId": "cmu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10010111101801A",
    "projectNameTh": "โครงการพัฒนาอัจฉริยภาพทางคอมพิวเตอร์และดิจิทัล",
    "projectNameEn": "โครงการพัฒนาอัจฉริยภาพทางคอมพิวเตอร์และดิจิทัล",
    "quotaSeats": 40,
    "studyTrack": "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
    "gpaxMin": 3,
    "tuitionFee": "16,000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 20% + Portfolio ด้านโค้ด 50% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "GPAX ≥ 3.00 และคณิตศาสตร์ ≥ 3.00",
      "มีผลงาน GitHub, แอปพลิเคชัน หรือ สอวน. คอมฯ",
      "สัมภาษณ์ทดสอบทักษะพื้นฐานการเขียนโปรแกรม"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะวิศวกรรมศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-cpe-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3",
        "nameEn": "Minimum GPAX 3",
        "minScore": "3",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3",
        "detailsEn": "5-term cumulative GPA at least 3",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-cpe-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-cpe-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการพัฒนาอัจฉริยภาพทางคอมพิวเตอร์และดิจิทัล",
        "titleEn": "Application Opens",
        "startDate": "2026-10-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cmu-cpe-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการพัฒนาอัจฉริยภาพทางคอมพิวเตอร์และดิจิทัล (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cmu-cpe-quota",
    "branchId": "br-10010111",
    "programId": "prog-cmu-7",
    "facultyId": "cmu-engineering-7",
    "universityId": "cmu",
    "round": "TCAS2_QUOTA",
    "tcasProgramCode": "10010111101801A",
    "projectNameTh": "โครงการโควตา 17 จังหวัดภาคเหนือ (วศ.คอม มช.)",
    "projectNameEn": "โครงการโควตา 17 จังหวัดภาคเหนือ (วศ.คอม มช.)",
    "quotaSeats": 60,
    "studyTrack": "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
    "gpaxMin": 3,
    "tuitionFee": "16,000 บาท/ภาคการศึกษา",
    "applicationFee": "200 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "TGAT 20% + TPAT3 30% + A-Level คณิต 1 25% + ฟิสิกส์ 25%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "โรงเรียนในเขต 17 จังหวัดภาคเหนือ",
      "GPAX ≥ 3.00",
      "ยื่นผลคะแนนสอบส่วนกลาง"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะวิศวกรรมศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-cpe-quota-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3",
        "nameEn": "Minimum GPAX 3",
        "minScore": "3",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3",
        "detailsEn": "5-term cumulative GPA at least 3",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-cpe-quota-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-cpe-quota-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการโควตา 17 จังหวัดภาคเหนือ (วศ.คอม มช.)",
        "titleEn": "Application Opens",
        "startDate": "2027-02-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cmu-cpe-quota-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการโควตา 17 จังหวัดภาคเหนือ (วศ.คอม มช.) (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2027-02-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cmu-rai-port",
    "branchId": "br-10010112",
    "programId": "prog-cmu-7",
    "facultyId": "cmu-engineering-7",
    "universityId": "cmu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10010112101801A",
    "projectNameTh": "โครงการผู้มีความสามารถพิเศษด้านหุ่นยนต์และ AI",
    "projectNameEn": "โครงการผู้มีความสามารถพิเศษด้านหุ่นยนต์และ AI",
    "quotaSeats": 25,
    "studyTrack": "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
    "gpaxMin": 3.25,
    "tuitionFee": "22,000 บาท/ภาคการศึกษา",
    "applicationFee": "300 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 25% + Portfolio ผลงานหุ่นยนต์ 45% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "GPAX ≥ 3.25",
      "ผลงานการแข่งขันหุ่นยนต์ WRG/RoboCup หรือโครงงาน Machine Learning",
      "ตาไม่บอดสี"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะวิศวกรรมศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-rai-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3.25",
        "nameEn": "Minimum GPAX 3.25",
        "minScore": "3.25",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3.25",
        "detailsEn": "5-term cumulative GPA at least 3.25",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-rai-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-rai-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการผู้มีความสามารถพิเศษด้านหุ่นยนต์และ AI",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cmu-rai-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการผู้มีความสามารถพิเศษด้านหุ่นยนต์และ AI (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-25",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cmu-ee-port",
    "branchId": "br-10010113",
    "programId": "prog-cmu-7",
    "facultyId": "cmu-engineering-7",
    "universityId": "cmu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10010113101801A",
    "projectNameTh": "โครงการนักเรียนเรียนดีคณะวิศวกรรมศาสตร์",
    "projectNameEn": "โครงการนักเรียนเรียนดีคณะวิศวกรรมศาสตร์",
    "quotaSeats": 35,
    "studyTrack": "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
    "gpaxMin": 3.25,
    "tuitionFee": "16,000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + ฟิสิกส์ 30% + สัมภาษณ์ 40%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "ฟิสิกส์และคณิตศาสตร์ ≥ 3.25",
      "ตาไม่บอดสีรุนแรง"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะวิศวกรรมศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-ee-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3.25",
        "nameEn": "Minimum GPAX 3.25",
        "minScore": "3.25",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3.25",
        "detailsEn": "5-term cumulative GPA at least 3.25",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-ee-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-ee-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการนักเรียนเรียนดีคณะวิศวกรรมศาสตร์",
        "titleEn": "Application Opens",
        "startDate": "2026-10-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cmu-ee-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการนักเรียนเรียนดีคณะวิศวกรรมศาสตร์ (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cmu-me-port",
    "branchId": "br-10010114",
    "programId": "prog-cmu-7",
    "facultyId": "cmu-engineering-7",
    "universityId": "cmu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10010114101801A",
    "projectNameTh": "โครงการเรียนดีวิศวกรรมเครื่องกล",
    "projectNameEn": "โครงการเรียนดีวิศวกรรมเครื่องกล",
    "quotaSeats": 30,
    "studyTrack": "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
    "gpaxMin": 3,
    "tuitionFee": "16,000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "GPAX ≥ 3.00",
      "ผลงานโครงงานกลศาสตร์หรือสิ่งประดิษฐ์ยานยนต์"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะวิศวกรรมศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-me-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3",
        "nameEn": "Minimum GPAX 3",
        "minScore": "3",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3",
        "detailsEn": "5-term cumulative GPA at least 3",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-me-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-me-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการเรียนดีวิศวกรรมเครื่องกล",
        "titleEn": "Application Opens",
        "startDate": "2026-10-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cmu-me-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการเรียนดีวิศวกรรมเครื่องกล (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cmu-ce-port",
    "branchId": "br-10010115",
    "programId": "prog-cmu-7",
    "facultyId": "cmu-engineering-7",
    "universityId": "cmu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10010115101801A",
    "projectNameTh": "โครงการสร้างวิศวกรโครงสร้างพื้นฐาน",
    "projectNameEn": "โครงการสร้างวิศวกรโครงสร้างพื้นฐาน",
    "quotaSeats": 35,
    "studyTrack": "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
    "gpaxMin": 3,
    "tuitionFee": "16,000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + สัมภาษณ์ 70%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "GPAX ≥ 3.00",
      "ความพร้อมด้านสุขภาพในการลงพื้นที่ก่อสร้าง"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะวิศวกรรมศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-ce-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3",
        "nameEn": "Minimum GPAX 3",
        "minScore": "3",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3",
        "detailsEn": "5-term cumulative GPA at least 3",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-ce-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-ce-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการสร้างวิศวกรโครงสร้างพื้นฐาน",
        "titleEn": "Application Opens",
        "startDate": "2026-10-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cmu-ce-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการสร้างวิศวกรโครงสร้างพื้นฐาน (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cmu-env-port",
    "branchId": "br-10010117",
    "programId": "prog-cmu-7",
    "facultyId": "cmu-engineering-7",
    "universityId": "cmu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10010117101801A",
    "projectNameTh": "โครงการวิศวกรสิ่งแวดล้อมเพื่อความยั่งยืน",
    "projectNameEn": "โครงการวิศวกรสิ่งแวดล้อมเพื่อความยั่งยืน",
    "quotaSeats": 25,
    "studyTrack": "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
    "gpaxMin": 2.75,
    "tuitionFee": "16,000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "GPAX ≥ 2.75",
      "ผลงานด้านการอนุรักษ์สิ่งแวดล้อม หรือ Green Tech"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะวิศวกรรมศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-env-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 2.75",
        "nameEn": "Minimum GPAX 2.75",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
        "detailsEn": "5-term cumulative GPA at least 2.75",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-env-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-env-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการวิศวกรสิ่งแวดล้อมเพื่อความยั่งยืน",
        "titleEn": "Application Opens",
        "startDate": "2026-10-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cmu-env-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการวิศวกรสิ่งแวดล้อมเพื่อความยั่งยืน (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cmu-sci-cs-port",
    "branchId": "br-10010121",
    "programId": "prog-cmu-8",
    "facultyId": "cmu-science_computing-8",
    "universityId": "cmu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10010121101801A",
    "projectNameTh": "โครงการโอลิมปิกวิชาการและผู้มีความสามารถพิเศษทางวิทยาการคอมพิวเตอร์",
    "projectNameEn": "โครงการโอลิมปิกวิชาการและผู้มีความสามารถพิเศษทางวิทยาการคอมพิวเตอร์",
    "quotaSeats": 35,
    "studyTrack": "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
    "gpaxMin": 3,
    "tuitionFee": "16,000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 25% + Portfolio 45% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "คณิตศาสตร์ ≥ 3.00",
      "ผ่านการอบรม สอวน. หรือมีโปรเจกต์ซอฟต์แวร์"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะวิทยาศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-sci-cs-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3",
        "nameEn": "Minimum GPAX 3",
        "minScore": "3",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3",
        "detailsEn": "5-term cumulative GPA at least 3",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-sci-cs-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-sci-cs-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการโอลิมปิกวิชาการและผู้มีความสามารถพิเศษทางวิทยาการคอมพิวเตอร์",
        "titleEn": "Application Opens",
        "startDate": "2026-10-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cmu-sci-cs-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการโอลิมปิกวิชาการและผู้มีความสามารถพิเศษทางวิทยาการคอมพิวเตอร์ (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cmu-sci-ds-port",
    "branchId": "br-10010122",
    "programId": "prog-cmu-8",
    "facultyId": "cmu-science_computing-8",
    "universityId": "cmu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10010122101801A",
    "projectNameTh": "โครงการพัฒนานักวิทยาศาสตร์ข้อมูลแห่งอนาคต (Data Science)",
    "projectNameEn": "โครงการพัฒนานักวิทยาศาสตร์ข้อมูลแห่งอนาคต (Data Science)",
    "quotaSeats": 30,
    "studyTrack": "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์ หรือศิลป์-คำนวณ",
    "gpaxMin": 3,
    "tuitionFee": "18,000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + สถิติ/คณิต 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "คณิตศาสตร์ ≥ 3.00",
      "มีพื้นฐานการวิเคราะห์ข้อมูลหรือการเขียนโปรแกรม Python/R"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะวิทยาศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-sci-ds-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3",
        "nameEn": "Minimum GPAX 3",
        "minScore": "3",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3",
        "detailsEn": "5-term cumulative GPA at least 3",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-sci-ds-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-sci-ds-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการพัฒนานักวิทยาศาสตร์ข้อมูลแห่งอนาคต (Data Science)",
        "titleEn": "Application Opens",
        "startDate": "2026-10-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cmu-sci-ds-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการพัฒนานักวิทยาศาสตร์ข้อมูลแห่งอนาคต (Data Science) (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cmu-sci-chem-port",
    "branchId": "br-10010123",
    "programId": "prog-cmu-8",
    "facultyId": "cmu-science_computing-8",
    "universityId": "cmu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10010123101801A",
    "projectNameTh": "โครงการ พสวท. และนักวิทยาศาสตร์รุ่นเยาว์",
    "projectNameEn": "โครงการ พสวท. และนักวิทยาศาสตร์รุ่นเยาว์",
    "quotaSeats": 25,
    "studyTrack": "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
    "gpaxMin": 3.25,
    "tuitionFee": "15,000 บาท/ภาคการศึกษา",
    "applicationFee": "200 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio เคมี 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เคมี ≥ 3.25",
      "มีทุนการศึกษาเรียนฟรีตลอดหลักสูตรสำหรับผู้มีคะแนนสูงสุด"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะวิทยาศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-sci-chem-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3.25",
        "nameEn": "Minimum GPAX 3.25",
        "minScore": "3.25",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3.25",
        "detailsEn": "5-term cumulative GPA at least 3.25",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-sci-chem-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-sci-chem-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการ พสวท. และนักวิทยาศาสตร์รุ่นเยาว์",
        "titleEn": "Application Opens",
        "startDate": "2026-10-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cmu-sci-chem-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการ พสวท. และนักวิทยาศาสตร์รุ่นเยาว์ (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cmu-camt-ani-port",
    "branchId": "br-10010131",
    "programId": "prog-cmu-9",
    "facultyId": "cmu-science_computing-9",
    "universityId": "cmu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10010131101801A",
    "projectNameTh": "โครงการผู้มีพรสวรรค์ทางแอนิเมชันและกราฟิก 3D",
    "projectNameEn": "โครงการผู้มีพรสวรรค์ทางแอนิเมชันและกราฟิก 3D",
    "quotaSeats": 35,
    "studyTrack": "ทุกแผนการเรียน (วิทย์-คณิต, ศิลป์-คำนวณ, ศิลป์-ภาษา, ปวช.)",
    "gpaxMin": 2.5,
    "tuitionFee": "25,000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "Portfolio วาดภาพ/3D 60% + สัมภาษณ์ 40%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เปิดรับทุกแผนการเรียน",
      "Portfolio ต้องมีภาพวาด Character Design, Storyboard หรือ 3D Model"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / วิทยาลัยศิลปะ สื่อ และเทคโนโลยี (CAMT)",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-camt-ani-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 2.5",
        "nameEn": "Minimum GPAX 2.5",
        "minScore": "2.5",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.5",
        "detailsEn": "5-term cumulative GPA at least 2.5",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-camt-ani-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-camt-ani-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการผู้มีพรสวรรค์ทางแอนิเมชันและกราฟิก 3D",
        "titleEn": "Application Opens",
        "startDate": "2026-10-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cmu-camt-ani-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการผู้มีพรสวรรค์ทางแอนิเมชันและกราฟิก 3D (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cmu-camt-dit-port",
    "branchId": "br-10010132",
    "programId": "prog-cmu-9",
    "facultyId": "cmu-science_computing-9",
    "universityId": "cmu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10010132101801A",
    "projectNameTh": "โครงการสร้างผู้ประกอบการดิจิทัลรุ่นใหม่",
    "projectNameEn": "โครงการสร้างผู้ประกอบการดิจิทัลรุ่นใหม่",
    "quotaSeats": 40,
    "studyTrack": "ทุกแผนการเรียน",
    "gpaxMin": 2.75,
    "tuitionFee": "25,000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 25% + Portfolio ภารกิจดิจิทัล 45% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เปิดรับทุกแผนการเรียน ม.6 หรือเทียบเท่า",
      "สนใจธุรกิจอีคอมเมิร์ซและการตลาดดิจิทัล"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / วิทยาลัยศิลปะ สื่อ และเทคโนโลยี (CAMT)",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-camt-dit-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 2.75",
        "nameEn": "Minimum GPAX 2.75",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
        "detailsEn": "5-term cumulative GPA at least 2.75",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-camt-dit-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-camt-dit-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการสร้างผู้ประกอบการดิจิทัลรุ่นใหม่",
        "titleEn": "Application Opens",
        "startDate": "2026-10-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cmu-camt-dit-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการสร้างผู้ประกอบการดิจิทัลรุ่นใหม่ (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cmu-se-port",
    "branchId": "br-10010133",
    "programId": "prog-cmu-9",
    "facultyId": "cmu-science_computing-9",
    "universityId": "cmu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10040121220401E",
    "projectNameTh": "TCAS รอบ 1 Portfolio สาขาวิชาวิศวกรรมซอฟต์แวร์ (นานาชาติ)",
    "projectNameEn": "TCAS Round 1 Portfolio - Software Engineering (International)",
    "quotaSeats": 30,
    "studyTrack": "วิทย์-คณิต / Gifted School / ช่องทางนานาชาติ (ดูรายโครงการ)",
    "gpaxMin": 2.50,
    "tuitionFee": "40,000 บาท (ภาคการศึกษาแรกตามประกาศ)",
    "applicationFee": "500 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4 (ยื่นผ่าน TCASFolio / PDF / URL)",
    "selectionFormulaTh": "แฟ้มสะสมผลงาน 70% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรนานาชาติ",
    "additionalConditionsTh": [
      "รับผู้สมัครที่จบจาก รร. หลักสูตรแกนกลาง",
      "ไม่รับผู้สมัครที่จบจาก รร. หลักสูตรนานาชาติ",
      "ไม่รับผู้สมัครที่จบจาก รร. หลักสูตรอาชีวะ",
      "ไม่รับผู้สมัครที่จบจาก รร. หลักสูตรตามอัธยาศัย (กศน.)",
      "ไม่รับผู้สมัครที่จบหลักสูตร GED (ยกเว้นช่องทาง IPAS ดูประกาศ)"
    ],
    "subProjects": [
      {
        "id": "cmu-se-sub-competition",
        "nameTh": "โครงการส่งเสริมนักเรียนผู้มีความสามารถพิเศษฯ ในการประกวดแข่งขัน (รหัส 00412171108011)",
        "quotaSeats": 2,
        "studyTrack": "หลักสูตรแกนกลาง (วิทย์-คณิตหรือเทียบเท่า)",
        "gpaxMin": 2.50,
        "generalEligibilityTh": [
          "รับผู้สมัครที่จบจาก รร. หลักสูตรแกนกลาง",
          "ไม่รับผู้สมัครที่จบจาก รร. หลักสูตรนานาชาติ",
          "ไม่รับผู้สมัครที่จบจาก รร. หลักสูตรอาชีวะ",
          "ไม่รับผู้สมัครที่จบจาก รร. หลักสูตรตามอัธยาศัย (กศน.)",
          "ไม่รับผู้สมัครที่จบหลักสูตร GED"
        ],
        "additionalConditionsTh": [
          "รางวัลชนะเลิศ / รองชนะเลิศอันดับ 1-2 แข่งขัน IT (NSC / YSC.CS / CAMT / ที่เกี่ยวข้อง) ระดับภาค/ประเทศ/นานาชาติ (ม.ปลาย)",
          "SOP หัวข้อการพัฒนาซอฟต์แวร์กับ AI + ผลงาน Web/Mobile App พร้อมวิดีโอสาธิต"
        ],
        "selectionFormulaTh": "แฟ้มสะสมผลงาน 70% + สัมภาษณ์ 30%",
        "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4 (TCASFolio / PDF / URL)",
        "officialAnnouncementUrl": "https://admission.reg.cmu.ac.th/tcas/findfacultybyid.php?fid=629"
      },
      {
        "id": "cmu-se-sub-gifted",
        "nameTh": "โครงการรับนักเรียนผู้มีความสามารถพิเศษฯ (Gifted IT) (รหัส 00412171108020)",
        "quotaSeats": 8,
        "studyTrack": "Gifted School ของ CAMT",
        "gpaxMin": 3.00,
        "generalEligibilityTh": [
          "รับผู้สมัครที่จบจาก รร. หลักสูตรแกนกลาง",
          "ไม่รับผู้สมัครที่จบจาก รร. หลักสูตรนานาชาติ",
          "ไม่รับผู้สมัครที่จบจาก รร. หลักสูตรอาชีวะ",
          "ไม่รับผู้สมัครที่จบจาก รร. หลักสูตรตามอัธยาศัย (กศน.)",
          "ไม่รับผู้สมัครที่จบหลักสูตร GED"
        ],
        "additionalConditionsTh": [
          "ต้องจบหลักสูตร Gifted School ของ CAMT มช. (มีใบรับรองผลการเรียน)"
        ],
        "selectionFormulaTh": "แฟ้มสะสมผลงาน 70% + สัมภาษณ์ 30%",
        "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4 (TCASFolio / PDF / URL)",
        "officialAnnouncementUrl": "https://admission.reg.cmu.ac.th/tcas/findfacultybyid.php?fid=631"
      },
      {
        "id": "cmu-se-sub-goodgrades",
        "nameTh": "การรับนักเรียนที่มีผลการเรียนดี (รหัส 00412171103011)",
        "quotaSeats": 5,
        "studyTrack": "หลักสูตรแกนกลาง (วิทย์-คณิตหรือเทียบเท่า)",
        "gpaxMin": 3.25,
        "generalEligibilityTh": [
          "รับผู้สมัครที่จบจาก รร. หลักสูตรแกนกลาง",
          "ไม่รับผู้สมัครที่จบจาก รร. หลักสูตรนานาชาติ",
          "ไม่รับผู้สมัครที่จบจาก รร. หลักสูตรอาชีวะ",
          "ไม่รับผู้สมัครที่จบจาก รร. หลักสูตรตามอัธยาศัย (กศน.)",
          "ไม่รับผู้สมัครที่จบหลักสูตร GED"
        ],
        "selectionFormulaTh": "แฟ้มสะสมผลงาน 70% + สัมภาษณ์ 30%",
        "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4 (TCASFolio / PDF / URL)",
        "officialAnnouncementUrl": "https://admission.reg.cmu.ac.th/tcas/findfacultybyid.php?fid=628"
      },
      {
        "id": "cmu-se-sub-ipas",
        "nameTh": "การรับผ่านช่องทางนานาชาติ ROUND 1 (รหัส 00412181996010)",
        "quotaSeats": 15,
        "studyTrack": "ช่องทางนานาชาติ (IPAS)",
        "additionalConditionsTh": [
          "รายละเอียดเกณฑ์ดูประกาศทางการของโครงการ"
        ],
        "officialAnnouncementUrl": "https://course.mytcas.com/programs/10040121220401E"
      }
    ],
    "applicationUrl": "https://course.mytcas.com/programs/10040121220401E",
    "source": {
      "name": "myTCAS 10040121220401E + ประกาศรับสมัคร มช. 2570",
      "url": "https://course.mytcas.com/programs/10040121220401E",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-10",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-se-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 2.50 (บางโครงการ 3.00 / 3.25)",
        "nameEn": "Minimum GPAX 2.50 (up to 3.25 by track)",
        "minScore": "2.50",
        "detailsTh": "เกรดเฉลี่ยสะสม ม.4-6 (5 ภาคเรียน) ไม่ต่ำกว่า 2.50 (ผู้จบ ม.6 ใช้ 6 ภาคเรียน); Gifted IT ≥ 3.00; เรียนดี ≥ 3.25",
        "detailsEn": "5-term cumulative GPA at least 2.50 (6 terms for graduates)",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-se-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน (หน้า-หลัง)",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      },
      {
        "id": "doc-proj-cmu-se-port-portfolio",
        "nameTh": "แฟ้มสะสมผลงาน (ไม่เกิน 10 หน้า)",
        "nameEn": "Portfolio",
        "detailsTh": "TCASFolio / PDF / URL (เปิดสาธารณะ): SOP การพัฒนาซอฟต์แวร์กับ AI, ผลงาน Web/Mobile App + วิดีโอสาธิต, ปพ.1, รางวัล/กิจกรรม",
        "detailsEn": "Max 10 pages via TCASFolio / PDF / URL",
        "isMandatory": true,
        "submissionFormat": "TCASFolio / PDF / URL"
      },
      {
        "id": "doc-proj-cmu-se-port-cert",
        "nameTh": "หลักฐานรางวัล / ใบรับรอง Gifted (ตามโครงการ)",
        "nameEn": "Competition / Gifted certificates",
        "detailsTh": "ประกวดแข่งขัน: ประกาศนียบัตรรางวัล top-3; Gifted IT: ใบรับรองจบ Gifted School CAMT",
        "detailsEn": "Award or Gifted School certificates",
        "isMandatory": false,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-se-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร TCAS รอบ 1 Portfolio สาขาวิชาวิศวกรรมซอฟต์แวร์ (นานาชาติ)",
        "titleEn": "Application Opens",
        "startDate": "2026-10-01",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/programs/10040121220401E",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-10",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cmu-se-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร TCAS รอบ 1 Portfolio สาขาวิชาวิศวกรรมซอฟต์แวร์ (นานาชาติ) (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-30",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/programs/10040121220401E",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-10",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cmu-game-port",
    "branchId": "br-10010134",
    "programId": "prog-cmu-9",
    "facultyId": "cmu-science_computing-9",
    "universityId": "cmu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10040121220103A",
    "projectNameTh": "TCAS รอบ 1 Portfolio สาขาวิชาดิจิทัลเกม",
    "projectNameEn": "TCAS Round 1 Portfolio - Digital Game",
    "quotaSeats": 25,
    "studyTrack": "ทุกแผนการเรียน",
    "gpaxMin": 2.75,
    "tuitionFee": "38,000 บาท (ภาคการศึกษาแรกตามประกาศ)",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4 (ยื่นผ่าน TCASFolio / PDF / URL)",
    "selectionFormulaTh": "แฟ้มสะสมผลงาน 60% + สัมภาษณ์ 40%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "รับผู้สมัครที่จบจาก รร. หลักสูตรแกนกลาง",
      "ไม่รับผู้สมัครที่จบจาก รร. หลักสูตรนานาชาติ",
      "ไม่รับผู้สมัครที่จบจาก รร. หลักสูตรอาชีวะ",
      "ไม่รับผู้สมัครที่จบจาก รร. หลักสูตรตามอัธยาศัย (กศน.)",
      "รับผู้สมัครที่จบหลักสูตร GED (ตามเกณฑ์เทียบวุฒิ ทปอ.)"
    ],
    "subProjects": [
      {
        "id": "cmu-game-sub-competition",
        "nameTh": "โครงการส่งเสริมนักเรียนผู้มีความสามารถพิเศษฯ ในการประกวดแข่งขัน (รหัส 00412104108010)",
        "quotaSeats": 2,
        "studyTrack": "หลักสูตรแกนกลาง",
        "gpaxMin": 2.75,
        "generalEligibilityTh": [
          "รับผู้สมัครที่จบจาก รร. หลักสูตรแกนกลาง",
          "ไม่รับผู้สมัครที่จบจาก รร. หลักสูตรนานาชาติ",
          "ไม่รับผู้สมัครที่จบจาก รร. หลักสูตรอาชีวะ",
          "ไม่รับผู้สมัครที่จบจาก รร. หลักสูตรตามอัธยาศัย (กศน.)",
          "รับผู้สมัครที่จบหลักสูตร GED (ตามเกณฑ์เทียบวุฒิ ทปอ.)"
        ],
        "additionalConditionsTh": [
          "ต้องมีรางวัลชนะเลิศ / รองชนะเลิศอันดับ 1-2 จากการแข่งขันด้าน IT/การพัฒนาเกม ระดับภาค ประเทศ หรือนานาชาติ (ม.ปลาย)",
          "ระบุ Software ที่ใช้สร้างผลงาน (Unity / Unreal / Construct 3 ฯลฯ) และเตรียมโชว์ผลงานวันสัมภาษณ์"
        ],
        "selectionFormulaTh": "แฟ้มสะสมผลงาน 60% + สัมภาษณ์ 40%",
        "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4 (TCASFolio / PDF / URL)",
        "officialAnnouncementUrl": "https://admission.reg.cmu.ac.th/tcas/findfacultybyid.php?fid=772"
      },
      {
        "id": "cmu-game-sub-gifted",
        "nameTh": "โครงการรับนักเรียนผู้มีความสามารถพิเศษฯ (Gifted IT) (รหัส 00412104108020)",
        "quotaSeats": 8,
        "studyTrack": "หลักสูตรแกนกลาง",
        "gpaxMin": 2.75,
        "generalEligibilityTh": [
          "รับผู้สมัครที่จบจาก รร. หลักสูตรแกนกลาง",
          "ไม่รับผู้สมัครที่จบจาก รร. หลักสูตรนานาชาติ",
          "ไม่รับผู้สมัครที่จบจาก รร. หลักสูตรอาชีวะ",
          "ไม่รับผู้สมัครที่จบจาก รร. หลักสูตรตามอัธยาศัย (กศน.)",
          "รับผู้สมัครที่จบหลักสูตร GED (ตามเกณฑ์เทียบวุฒิ ทปอ.)"
        ],
        "selectionFormulaTh": "แฟ้มสะสมผลงาน 60% + สัมภาษณ์ 40%",
        "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4 (TCASFolio / PDF / URL)",
        "officialAnnouncementUrl": "https://admission.reg.cmu.ac.th/tcas/findfacultybyid.php?fid=773"
      },
      {
        "id": "cmu-game-sub-goodgrades",
        "nameTh": "การรับนักเรียนที่มีผลการเรียนดี (รหัส 00412104103010)",
        "quotaSeats": 15,
        "studyTrack": "หลักสูตรแกนกลาง",
        "gpaxMin": 2.75,
        "generalEligibilityTh": [
          "รับผู้สมัครที่จบจาก รร. หลักสูตรแกนกลาง",
          "ไม่รับผู้สมัครที่จบจาก รร. หลักสูตรนานาชาติ",
          "ไม่รับผู้สมัครที่จบจาก รร. หลักสูตรอาชีวะ",
          "ไม่รับผู้สมัครที่จบจาก รร. หลักสูตรตามอัธยาศัย (กศน.)",
          "รับผู้สมัครที่จบหลักสูตร GED (ตามเกณฑ์เทียบวุฒิ ทปอ.)"
        ],
        "additionalConditionsTh": [
          "เกณฑ์เฉพาะโครงการดูประกาศทางการของมหาวิทยาลัย"
        ],
        "officialAnnouncementUrl": "https://admission.reg.cmu.ac.th/tcas/findfaculty.php"
      }
    ],
    "applicationUrl": "https://course.mytcas.com/programs/10040121220103A",
    "source": {
      "name": "myTCAS 10040121220103A + ประกาศรับสมัคร มช. 2570",
      "url": "https://course.mytcas.com/programs/10040121220103A",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-10",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-game-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 2.75",
        "nameEn": "Minimum GPAX 2.75",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม ม.4-6 (5 ภาคเรียน) ไม่ต่ำกว่า 2.75 (ผู้จบ ม.6 ใช้ 6 ภาคเรียน)",
        "detailsEn": "5-term cumulative GPA at least 2.75 (6 terms for graduates)",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-game-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน (หน้า-หลัง)",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      },
      {
        "id": "doc-proj-cmu-game-port-portfolio",
        "nameTh": "แฟ้มสะสมผลงาน (ไม่เกิน 10 หน้า)",
        "nameEn": "Portfolio",
        "detailsTh": "ยื่นผ่าน TCASFolio / PDF / URL (เปิดสาธารณะ): ข้อมูลส่วนตัว, SOP ด้านเกม, จดหมายรับรอง + ปพ.1, กิจกรรม/รางวัล + ลิงก์ผลงาน",
        "detailsEn": "Max 10 pages via TCASFolio / PDF / URL",
        "isMandatory": true,
        "submissionFormat": "TCASFolio / PDF / URL"
      },
      {
        "id": "doc-proj-cmu-game-port-cert",
        "nameTh": "หลักฐานรางวัลการแข่งขัน (เฉพาะโครงการประกวดแข่งขัน)",
        "nameEn": "Competition certificates",
        "detailsTh": "ประกาศนียบัตรรางวัลชนะเลิศ / รองชนะเลิศอันดับ 1-2 แข่งขัน IT/พัฒนาเกม ระดับภาค/ประเทศ/นานาชาติ",
        "detailsEn": "Top-3 awards from IT/game competitions",
        "isMandatory": false,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-game-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร TCAS รอบ 1 Portfolio สาขาวิชาดิจิทัลเกม",
        "titleEn": "Application Opens",
        "startDate": "2026-10-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/programs/10040121220103A",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-10",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cmu-game-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร TCAS รอบ 1 Portfolio สาขาวิชาดิจิทัลเกม (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/programs/10040121220103A",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-10",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cmu-acc-port",
    "branchId": "br-10010141",
    "programId": "prog-cmu-10",
    "facultyId": "cmu-business_econ-10",
    "universityId": "cmu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10010141101801A",
    "projectNameTh": "โครงการนักเรียนเรียนดีและผู้นำกิจกรรมเยาวชน",
    "projectNameEn": "โครงการนักเรียนเรียนดีและผู้นำกิจกรรมเยาวชน",
    "quotaSeats": 50,
    "studyTrack": "วิทย์-คณิต หรือ ศิลป์-คำนวณ",
    "gpaxMin": 3.25,
    "tuitionFee": "18,000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "GPAX ≥ 3.25 และคณิตศาสตร์ ≥ 3.00",
      "มีประวัติด้านคุณธรรมหรือการเป็นผู้นำนักเรียน"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะบริหารธุรกิจ",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-acc-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3.25",
        "nameEn": "Minimum GPAX 3.25",
        "minScore": "3.25",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3.25",
        "detailsEn": "5-term cumulative GPA at least 3.25",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-acc-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-acc-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการนักเรียนเรียนดีและผู้นำกิจกรรมเยาวชน",
        "titleEn": "Application Opens",
        "startDate": "2026-10-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cmu-acc-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการนักเรียนเรียนดีและผู้นำกิจกรรมเยาวชน (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cmu-fin-port",
    "branchId": "br-10010142",
    "programId": "prog-cmu-10",
    "facultyId": "cmu-business_econ-10",
    "universityId": "cmu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10010142101801A",
    "projectNameTh": "โครงการผู้มีศักยภาพด้านการเงินและการลงทุน",
    "projectNameEn": "โครงการผู้มีศักยภาพด้านการเงินและการลงทุน",
    "quotaSeats": 40,
    "studyTrack": "วิทย์-คณิต หรือ ศิลป์-คำนวณ",
    "gpaxMin": 3,
    "tuitionFee": "18,000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "GPAX ≥ 3.00",
      "มีความรู้เบื้องต้นด้านตลาดทุนและเศรษฐกิจ"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะบริหารธุรกิจ",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-fin-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3",
        "nameEn": "Minimum GPAX 3",
        "minScore": "3",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3",
        "detailsEn": "5-term cumulative GPA at least 3",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-fin-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-fin-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการผู้มีศักยภาพด้านการเงินและการลงทุน",
        "titleEn": "Application Opens",
        "startDate": "2026-10-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cmu-fin-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการผู้มีศักยภาพด้านการเงินและการลงทุน (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cmu-econ-port",
    "branchId": "br-10010151",
    "programId": "prog-cmu-11",
    "facultyId": "cmu-business_econ-11",
    "universityId": "cmu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10010151101801A",
    "projectNameTh": "โครงการคัดเลือกนักเศรษฐศาสตร์รุ่นใหม่",
    "projectNameEn": "โครงการคัดเลือกนักเศรษฐศาสตร์รุ่นใหม่",
    "quotaSeats": 45,
    "studyTrack": "ทุกแผนการเรียน (เน้นวิทย์-คณิต, ศิลป์-คำนวณ)",
    "gpaxMin": 3,
    "tuitionFee": "16,000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "คณิตศาสตร์ ≥ 3.00",
      "บทความสั้นวิเคราะห์ปัญหาเศรษฐกิจสังคม 1 หน้า"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะเศรษฐศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-econ-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3",
        "nameEn": "Minimum GPAX 3",
        "minScore": "3",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3",
        "detailsEn": "5-term cumulative GPA at least 3",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-econ-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-econ-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการคัดเลือกนักเศรษฐศาสตร์รุ่นใหม่",
        "titleEn": "Application Opens",
        "startDate": "2026-10-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cmu-econ-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการคัดเลือกนักเศรษฐศาสตร์รุ่นใหม่ (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cmu-hum-eng-port",
    "branchId": "br-10010161",
    "programId": "prog-cmu-12",
    "facultyId": "cmu-humanities_social-12",
    "universityId": "cmu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10010161101801A",
    "projectNameTh": "โครงการผู้มีความสามารถพิเศษทางภาษาอังกฤษ",
    "projectNameEn": "โครงการผู้มีความสามารถพิเศษทางภาษาอังกฤษ",
    "quotaSeats": 35,
    "studyTrack": "ทุกแผนการเรียน",
    "gpaxMin": 3.25,
    "tuitionFee": "16,000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "ภาษาอังกฤษ 50% + Portfolio 20% + สัมภาษณ์ภาษาอังกฤษ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "กลุ่มสาระภาษาอังกฤษ ≥ 3.50",
      "IELTS ≥ 6.0 หรือ ผลงานแข่งขันสุนทรพจน์ภาษาอังกฤษระดับชาติ"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะมนุษยศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-hum-eng-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3.25",
        "nameEn": "Minimum GPAX 3.25",
        "minScore": "3.25",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3.25",
        "detailsEn": "5-term cumulative GPA at least 3.25",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-hum-eng-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-hum-eng-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการผู้มีความสามารถพิเศษทางภาษาอังกฤษ",
        "titleEn": "Application Opens",
        "startDate": "2026-10-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cmu-hum-eng-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการผู้มีความสามารถพิเศษทางภาษาอังกฤษ (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cmu-hum-cn-port",
    "branchId": "br-10010162",
    "programId": "prog-cmu-12",
    "facultyId": "cmu-humanities_social-12",
    "universityId": "cmu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10010162101801A",
    "projectNameTh": "โครงการความสามารถพิเศษภาษาจีน (HSK)",
    "projectNameEn": "โครงการความสามารถพิเศษภาษาจีน (HSK)",
    "quotaSeats": 30,
    "studyTrack": "ทุกแผนการเรียน",
    "gpaxMin": 2.75,
    "tuitionFee": "16,000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "คะแนน HSK 50% + สัมภาษณ์ภาษาจีน 50%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "ผลสอบ HSK ระดับ 4 ขึ้นไป (ไม่ต่ำกว่า 200 คะแนน)"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะมนุษยศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-hum-cn-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 2.75",
        "nameEn": "Minimum GPAX 2.75",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
        "detailsEn": "5-term cumulative GPA at least 2.75",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-hum-cn-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-hum-cn-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการความสามารถพิเศษภาษาจีน (HSK)",
        "titleEn": "Application Opens",
        "startDate": "2026-10-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cmu-hum-cn-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการความสามารถพิเศษภาษาจีน (HSK) (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cmu-mass-port",
    "branchId": "br-10010171",
    "programId": "prog-cmu-13",
    "facultyId": "cmu-communication_arts-13",
    "universityId": "cmu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10010171101801A",
    "projectNameTh": "โครงการนักสื่อสารสร้างสรรค์คอนเทนต์ยุคใหม่",
    "projectNameEn": "โครงการนักสื่อสารสร้างสรรค์คอนเทนต์ยุคใหม่",
    "quotaSeats": 45,
    "studyTrack": "ทุกแผนการเรียน",
    "gpaxMin": 2.75,
    "tuitionFee": "18,000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "Creative Portfolio 50% + สัมภาษณ์ 30% + GPAX 20%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "Portfolio ผลงานคลิปวิดีโอ, ภาพถ่าย, พอดแคสต์ หรือเพจคอนเทนต์ที่มีผู้ติดตาม",
      "เปิดรับทุกแผนการเรียน"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะการสื่อสารมวลชน",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-mass-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 2.75",
        "nameEn": "Minimum GPAX 2.75",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
        "detailsEn": "5-term cumulative GPA at least 2.75",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-mass-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-mass-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการนักสื่อสารสร้างสรรค์คอนเทนต์ยุคใหม่",
        "titleEn": "Application Opens",
        "startDate": "2026-10-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cmu-mass-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการนักสื่อสารสร้างสรรค์คอนเทนต์ยุคใหม่ (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cmu-law-port",
    "branchId": "br-10010181",
    "programId": "prog-cmu-14",
    "facultyId": "cmu-law_politics-14",
    "universityId": "cmu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10010181101801A",
    "projectNameTh": "โครงการนักเรียนผู้มีทักษะทางนิติศาสตร์และสังคม",
    "projectNameEn": "โครงการนักเรียนผู้มีทักษะทางนิติศาสตร์และสังคม",
    "quotaSeats": 50,
    "studyTrack": "ทุกแผนการเรียน",
    "gpaxMin": 3.25,
    "tuitionFee": "15,000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "GPAX ≥ 3.25",
      "ผลงานการโต้วาที ตอบปัญหากฎหมาย หรือกิจกรรมสิทธิชุมชน"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะนิติศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-law-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3.25",
        "nameEn": "Minimum GPAX 3.25",
        "minScore": "3.25",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3.25",
        "detailsEn": "5-term cumulative GPA at least 3.25",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-law-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-law-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการนักเรียนผู้มีทักษะทางนิติศาสตร์และสังคม",
        "titleEn": "Application Opens",
        "startDate": "2026-10-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cmu-law-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการนักเรียนผู้มีทักษะทางนิติศาสตร์และสังคม (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cmu-arch-port",
    "branchId": "br-10010191",
    "programId": "prog-cmu-15",
    "facultyId": "cmu-architecture_design-15",
    "universityId": "cmu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10010191101801A",
    "projectNameTh": "โครงการผู้มีความสามารถพิเศษด้านสถาปัตยกรรมและการออกแบบ",
    "projectNameEn": "โครงการผู้มีความสามารถพิเศษด้านสถาปัตยกรรมและการออกแบบ",
    "quotaSeats": 25,
    "studyTrack": "วิทย์-คณิต หรือ ศิลป์-คำนวณ",
    "gpaxMin": 2.75,
    "tuitionFee": "22,000 บาท/ภาคการศึกษา",
    "applicationFee": "350 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "Portfolio ภาพวาด/โมเดล 60% + สัมภาษณ์ 40%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "ภาพสเกตช์ Perspective, ลายเส้น, ผลงานโมเดลสถาปัตยกรรม",
      "ทดสอบวาดภาพสดในวันสอบสัมภาษณ์"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะสถาปัตยกรรมศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-arch-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 2.75",
        "nameEn": "Minimum GPAX 2.75",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
        "detailsEn": "5-term cumulative GPA at least 2.75",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-arch-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-arch-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการผู้มีความสามารถพิเศษด้านสถาปัตยกรรมและการออกแบบ",
        "titleEn": "Application Opens",
        "startDate": "2026-10-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cmu-arch-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการผู้มีความสามารถพิเศษด้านสถาปัตยกรรมและการออกแบบ (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cu-eng-gen-port",
    "branchId": "br-10020112",
    "programId": "prog-cu-16",
    "facultyId": "cu-engineering-16",
    "universityId": "cu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10010121300001A",
    "projectNameTh": "โครงการรับสมัครคัดเลือกนักเรียนเข้าศึกษาในคณะวิศวกรรมศาสตร์ (Portfolio 3 โครงการ)",
    "projectNameEn": "Admission Program for Faculty of Engineering (Portfolio - 3 Sub-Projects)",
    "quotaSeats": 262,
    "studyTrack": "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์ (หลักสูตรแกนกลาง)",
    "gpaxMin": 3.00,
    "tuitionFee": "21,000 บาท/ภาคการศึกษา",
    "applicationFee": "500 บาท",
    "portfolioPagesLimit": "ตามเกณฑ์โครงการ (ไม่เกิน 10 หน้า และคำถามเฉพาะด้านความยาวไม่เกิน 2,000 ตัวอักษร)",
    "selectionFormulaTh": "แฟ้มสะสมผลงาน (Portfolio) 100 คะแนน (ขั้นต่ำ 70 คะแนน) + สอบสัมภาษณ์ 100 คะแนน (ขั้นต่ำ 70 คะแนน)",
    "curriculumType": "หลักสูตรปกติ (ภาษาไทย)",
    "additionalConditionsTh": [
      "รับผู้สมัครที่จบจาก รร. หลักสูตรแกนกลาง",
      "ไม่รับผู้สมัครที่จบจาก รร. หลักสูตรนานาชาติ",
      "ไม่รับผู้สมัครที่จบจาก รร. หลักสูตรอาชีวะ",
      "ไม่รับผู้สมัครที่จบจาก รร. หลักสูตรตามอัธยาศัย (กศน.)",
      "ไม่รับผู้สมัครที่จบหลักสูตร GED",
      "มี 3 โครงการย่อย: 1. โครงการโอลิมปิกวิชาการและอัจฉริยภาพฯ (รับ 60 คน) 2. โครงการคณิตศาสตร์และวิทยาศาสตร์ (รับ 200 คน) 3. โครงการผู้มีความสามารถทางด้านกีฬา (รับ 2 คน)"
    ],
    "subProjects": [
      {
        "id": "cu-eng-sub-olympic",
        "nameTh": "โครงการโอลิมปิกวิชาการและโครงการพัฒนาอัจฉริยภาพทางวิทยาศาสตร์และเทคโนโลยีสำหรับเด็กและเยาวชน",
        "nameEn": "Academic Olympic & Science-Technology Talent Program",
        "quotaSeats": 60,
        "studyTrack": "หลักสูตรแกนกลาง (วิทย์-คณิต)",
        "gpaxMin": 3.00,
        "generalEligibilityTh": [
          "รับผู้สมัครที่จบจาก รร. หลักสูตรแกนกลาง",
          "ไม่รับผู้สมัครที่จบจาก รร. หลักสูตรนานาชาติ",
          "ไม่รับผู้สมัครที่จบจาก รร. หลักสูตรอาชีวะ",
          "ไม่รับผู้สมัครที่จบจาก รร. หลักสูตรตามอัธยาศัย (กศน.)",
          "ไม่รับผู้สมัครที่จบหลักสูตร GED"
        ],
        "selectionFormulaTh": "แฟ้มสะสมผลงาน Portfolio 100 คะแนน (เกณฑ์ขั้นต่ำ 70 คะแนน) + การสอบสัมภาษณ์ 100 คะแนน (เกณฑ์ขั้นต่ำ 70 คะแนน)",
        "selectionStepsTh": [
          {
            "stepName": "1. การพิจารณารายชื่อผู้มีสิทธิ์สอบสัมภาษณ์",
            "detailsTh": [
              "คณะกรรมการดำเนินการและประเมินแฟ้มสะสมผลงานของผู้สมัครเข้าศึกษาในคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ระดับปริญญาตรี ปีการศึกษา 2570 รอบที่ 1 แฟ้มสะสมผลงาน (Portfolio) จะพิจารณารายชื่อผู้มีสิทธิ์สอบสัมภาษณ์จากคะแนนแฟ้มสะสมผลงาน (Portfolio) เรียงตามลำดับคะแนนจากมากไปหาน้อย โดยมีเกณฑ์การพิจารณา และเกณฑ์คะแนนขั้นต่ำ ดังนี้:",
              "• ผลงานความสามารถทางวิชาการในระดับชาติ หรือนานาชาติทางด้านคณิตศาสตร์ ฟิสิกส์ เคมี วิศวกรรม งานวิจัย หรือทักษะอื่น ๆ ที่เกี่ยวกับทางด้านวิศวกรรม คิดเป็น 100 คะแนน"
            ],
            "minPassScoreTh": "คะแนนรวม 100 คะแนน (จะต้องได้คะแนนแฟ้มสะสมผลงานรวมกันไม่ต่ำกว่า 70 คะแนนจึงจะมีสิทธิ์ได้รับการพิจารณาในการประกาศรายชื่อเป็นผู้มีสิทธิ์สอบสัมภาษณ์)"
          },
          {
            "stepName": "2. การพิจารณารายชื่อผู้ผ่านการสอบสัมภาษณ์",
            "detailsTh": [
              "คณะกรรมการดำเนินการและประเมินแฟ้มสะสมผลงานของผู้สมัครเข้าศึกษาในคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ระดับปริญญาตรี ปีการศึกษา 2570 รอบที่ 1 แฟ้มสะสมผลงาน (Portfolio) จะพิจารณารายชื่อผู้ผ่านการสอบสัมภาษณ์จากคะแนนการสอบสัมภาษณ์ เรียงตามลำดับคะแนนจากมากไปหาน้อย โดยมีหัวข้อในการสอบสัมภาษณ์ เกณฑ์การพิจารณา และเกณฑ์คะแนนขั้นต่ำ ดังนี้:",
              "1. ความรู้ความสามารถทางวิชาการ คิดเป็น 40 คะแนน",
              "2. แรงผลักดันหรือแรงจูงใจในการเรียนคณะวิศวกรรมศาสตร์ และความสามารถในการสื่อสาร คิดเป็น 10 คะแนน",
              "3. ความคิดริเริ่มสร้างสรรค์และความสามารถในการแก้ปัญหา คิดเป็น 40 คะแนน",
              "4. การศึกษาเรียนรู้ด้วยตนเองและต่อเนื่อง คิดเป็น 10 คะแนน"
            ],
            "minPassScoreTh": "คะแนนรวม 100 คะแนน (จะต้องได้คะแนนการสอบสัมภาษณ์รวมกันไม่ต่ำกว่า 70 คะแนนจึงจะถือว่าเป็นผู้ผ่านการสอบสัมภาษณ์)"
          }
        ],
        "portfolioQuestionsTh": [
          "ความสามารถทางวิชาการ (ไม่เกิน 2 ผลงาน): (1) ชื่อการสอบแข่งขัน การตอบปัญหาทางวิชาการ หรือ ค่ายสอวน. (2) หลักฐาน ประกาศนียบัตร/รางวัล/เอกสารหลักฐาน ที่ได้รับรางวัลจากการสอบแข่งขันหรือตอบปัญหาทางวิชาการ",
          "การศึกษาเรียนรู้ด้วยตนเองและต่อเนื่อง: (1) ชื่อการเข้าค่ายอบรม/สัมมนา/การเรียนออนไลน์ หรืออื่น ๆ (2) เขียนรายละเอียดสรุปผลการศึกษาเรียนรู้ด้วยตนเองและต่อเนื่องที่สอดคล้องกับหลักฐาน และขอให้วิเคราะห์ถึง จุดแข็ง/จุดอ่อน ศักยภาพในด้านใดของตนเองที่อยากจะพัฒนา ความยาวไม่เกิน 2,000 ตัวอักษร (3) หลักฐานในการเข้าค่ายอบรม/สัมมนา/ผลการเรียนออนไลน์ หรือหลักฐานอื่น ๆ"
        ],
        "officialAnnouncementUrl": "https://admission.chula.ac.th"
      },
      {
        "id": "cu-eng-sub-math-sci",
        "nameTh": "โครงการรับนักเรียนที่มีความรู้ทางด้านคณิตศาสตร์และวิทยาศาสตร์",
        "nameEn": "Mathematics and Science Talent Admission Program",
        "quotaSeats": 200,
        "studyTrack": "หลักสูตรแกนกลาง (วิทย์-คณิต)",
        "gpaxMin": 3.00,
        "generalEligibilityTh": [
          "รับผู้สมัครที่จบจาก รร. หลักสูตรแกนกลาง",
          "ไม่รับผู้สมัครที่จบจาก รร. หลักสูตรนานาชาติ",
          "ไม่รับผู้สมัครที่จบจาก รร. หลักสูตรอาชีวะ",
          "ไม่รับผู้สมัครที่จบจาก รร. หลักสูตรตามอัธยาศัย (กศน.)",
          "ไม่รับผู้สมัครที่จบหลักสูตร GED"
        ],
        "selectionFormulaTh": "แฟ้มสะสมผลงาน Portfolio 100 คะแนน (เกณฑ์ขั้นต่ำ 70 คะแนน) + การสอบสัมภาษณ์ 100 คะแนน (เกณฑ์ขั้นต่ำ 70 คะแนน)",
        "selectionStepsTh": [
          {
            "stepName": "1. การพิจารณารายชื่อผู้มีสิทธิ์สอบสัมภาษณ์",
            "detailsTh": [
              "พิจารณาจากแฟ้มสะสมผลงาน Portfolio เรียงตามลำดับคะแนนจากมากไปหาน้อย คิดเป็น 100 คะแนน:",
              "• ผลงานวิชาการทางคณิตศาสตร์และวิทยาศาสตร์ หรือโครงงานนวัตกรรม คิดเป็น 50 คะแนน",
              "• ความคิดริเริ่มสร้างสรรค์และทักษะการแก้ปัญหา คิดเป็น 30 คะแนน",
              "• การศึกษาค้นคว้าด้วยตนเองและกิจกรรมทางวิชาการ คิดเป็น 20 คะแนน"
            ],
            "minPassScoreTh": "คะแนนรวม 100 คะแนน (จะต้องได้คะแนนแฟ้มสะสมผลงานไม่ต่ำกว่า 70 คะแนน จึงจะมีสิทธิ์ได้รับการพิจารณาเป็นผู้มีสิทธิ์สอบสัมภาษณ์)"
          },
          {
            "stepName": "2. การพิจารณารายชื่อผู้ผ่านการสอบสัมภาษณ์",
            "detailsTh": [
              "พิจารณาจากคะแนนการสอบสัมภาษณ์ เรียงตามลำดับคะแนนจากมากไปหาน้อย:",
              "• สัมภาษณ์วัดความรู้พื้นฐานทางวิศวกรรม ทัศนคติ และทักษะการสื่อสาร คิดเป็น 100 คะแนน"
            ],
            "minPassScoreTh": "คะแนนรวม 100 คะแนน (จะต้องได้คะแนนการสอบสัมภาษณ์รวมกันไม่ต่ำกว่า 70 คะแนน จึงจะถือว่าเป็นผู้ผ่านการสอบสัมภาษณ์)"
          }
        ],
        "portfolioQuestionsTh": [
          "โครงงานทางวิทยาศาสตร์/คณิตศาสตร์ หรือรางวัลด้านนวัตกรรมทางเทคโนโลยี (ไม่เกิน 2 ผลงาน)",
          "บทความสรุปการเรียนรู้ด้วยตนเองเกี่ยวกับวิศวกรรมศาสตร์ ความยาวไม่เกิน 2,000 ตัวอักษร พร้อมหลักฐานแนบ"
        ],
        "officialAnnouncementUrl": "https://admission.chula.ac.th"
      },
      {
        "id": "cu-eng-sub-sports",
        "nameTh": "โครงการรับนักเรียนผู้มีความสามารถทางด้านกีฬา",
        "nameEn": "Sports Talent Admission Program",
        "quotaSeats": 2,
        "studyTrack": "หลักสูตรแกนกลาง (วิทย์-คณิต)",
        "gpaxMin": 2.75,
        "generalEligibilityTh": [
          "รับผู้สมัครที่จบจาก รร. หลักสูตรแกนกลาง",
          "เป็นนักกีฬาทีมชาติไทย หรือเยาวชนทีมชาติ หรือนักกีฬาชนะเลิศการแข่งขันกีฬาเยาวชนแห่งชาติ/กีฬาแห่งชาติ"
        ],
        "selectionFormulaTh": "แฟ้มประวัติด้านกีฬา 50% + ผลการทดสอบสมรรถภาพทางกาย 20% + การสอบสัมภาษณ์ 30%",
        "selectionStepsTh": [
          {
            "stepName": "1. การพิจารณาผลงานด้านกีฬาและสิทธิ์สอบสัมภาษณ์",
            "detailsTh": [
              "พิจารณาจากระดับความสามารถและผลงานการแข่งขันกีฬาในระดับชาติหรือนานาชาติ",
              "ผ่านเกณฑ์การทดสอบสมรรถภาพทางกายตามที่คณะกรรมการกำหนด"
            ],
            "minPassScoreTh": "ผ่านเกณฑ์สมรรถภาพทางกายและคุณสมบัตินักกีฬา"
          },
          {
            "stepName": "2. การพิจารณาการสอบสัมภาษณ์",
            "detailsTh": [
              "สัมภาษณ์ทัศนคติ ความมุ่งมั่น และความพร้อมในการแบ่งเวลาฝึกซ้อมร่วมกับการเรียนในคณะวิศวกรรมศาสตร์"
            ],
            "minPassScoreTh": "ผ่านเกณฑ์สัมภาษณ์ไม่ต่ำกว่า 70%"
          }
        ],
        "officialAnnouncementUrl": "https://admission.chula.ac.th"
      }
    ],
    "applicationUrl": "https://admission.chula.ac.th",
    "source": {
      "name": "ประกาศการรับสมัคร จุฬาลงกรณ์มหาวิทยาลัย / คณะวิศวกรรมศาสตร์",
      "url": "https://course.mytcas.com/programs/10010121300001A",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-08",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cu-eng-gen-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3.00",
        "nameEn": "Minimum GPAX 3.00",
        "minScore": "3.00",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3.00 (หลักสูตรแกนกลาง วิทย์-คณิต)",
        "detailsEn": "5-semester cumulative GPA at least 3.00",
        "isMandatory": true
      },
      {
        "id": "req-proj-cu-eng-gen-port-port",
        "type": "PORTFOLIO",
        "nameTh": "แฟ้มสะสมผลงาน (Portfolio)",
        "nameEn": "Portfolio Evaluation",
        "minScore": "70/100",
        "detailsTh": "แฟ้มสะสมผลงานตามเกณฑ์ของแต่ละโครงการย่อย ได้คะแนนไม่ต่ำกว่า 70 คะแนน",
        "detailsEn": "Portfolio score not less than 70 points",
        "isMandatory": true
      },
      {
        "id": "req-proj-cu-eng-gen-port-interview",
        "type": "INTERVIEW",
        "nameTh": "การสอบสัมภาษณ์",
        "nameEn": "Interview Evaluation",
        "minScore": "70/100",
        "detailsTh": "การสอบสัมภาษณ์ทั้ง 4 ด้าน ได้คะแนนรวมไม่ต่ำกว่า 70 คะแนน",
        "detailsEn": "Interview score not less than 70 points",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cu-eng-gen-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript (5 semesters)",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน แสดงหน่วยกิตกลุ่มสาระคณิตศาสตร์และวิทยาศาสตร์",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      },
      {
        "id": "doc-proj-cu-eng-gen-port-pdf",
        "nameTh": "แฟ้มสะสมผลงาน (Portfolio) พร้อมตอบคำถามเฉพาะโครงการ",
        "nameEn": "Portfolio & Project Essay",
        "detailsTh": "ความสามารถทางวิชาการไม่เกิน 2 ผลงาน และการศึกษาเรียนรู้ด้วยตนเองไม่เกิน 2,000 ตัวอักษร",
        "detailsEn": "Portfolio file according to faculty guidelines",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cu-eng-gen-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร รอบที่ 1 แฟ้มสะสมผลงาน (Portfolio) คณะวิศวฯ จุฬาฯ",
        "titleEn": "Application Opens",
        "startDate": "2026-10-10",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/programs/10010121300001A",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-08",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cu-eng-gen-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร รอบที่ 1 แฟ้มสะสมผลงาน (Portfolio) คณะวิศวฯ จุฬาฯ (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/programs/10010121300001A",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-08",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cu-eng-gen-port-interview",
        "type": "INTERVIEW",
        "titleTh": "ประกาศรายชื่อผู้มีสิทธิ์สอบสัมภาษณ์และสอบสัมภาษณ์",
        "titleEn": "Interview Date",
        "startDate": "2026-12-05",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/programs/10010121300001A",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-08",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cu-cedt-port",
    "branchId": "br-10020111",
    "programId": "prog-cu-16",
    "facultyId": "cu-engineering-16",
    "universityId": "cu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10020111101801A",
    "projectNameTh": "โครงการผู้มีความสามารถพิเศษทางคอมพิวเตอร์และดิจิทัล (CEDT)",
    "projectNameEn": "โครงการผู้มีความสามารถพิเศษทางคอมพิวเตอร์และดิจิทัล (CEDT)",
    "quotaSeats": 80,
    "studyTrack": "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
    "gpaxMin": 3.25,
    "tuitionFee": "21,000 บาท/ภาคการศึกษา",
    "applicationFee": "500 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 20% + Portfolio ซอฟต์แวร์ 50% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "GPAX ≥ 3.25",
      "มีผลงาน GitHub หรือซอฟต์แวร์ที่ตรวจโค้ดได้จริง",
      "สอวน. คอมพิวเตอร์ ค่าย 1 ขึ้นไป"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะวิศวกรรมศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cu-cedt-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3.25",
        "nameEn": "Minimum GPAX 3.25",
        "minScore": "3.25",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3.25",
        "detailsEn": "5-term cumulative GPA at least 3.25",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cu-cedt-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cu-cedt-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการผู้มีความสามารถพิเศษทางคอมพิวเตอร์และดิจิทัล (CEDT)",
        "titleEn": "Application Opens",
        "startDate": "2026-10-10",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cu-cedt-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการผู้มีความสามารถพิเศษทางคอมพิวเตอร์และดิจิทัล (CEDT) (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-12",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cu-eng-adm",
    "branchId": "br-10020112",
    "programId": "prog-cu-16",
    "facultyId": "cu-engineering-16",
    "universityId": "cu",
    "round": "TCAS3_ADMISSION",
    "tcasProgramCode": "10020112101801A",
    "projectNameTh": "เกณฑ์กลาง myTCAS รับสมัครวิศวกรรมรวม จุฬาฯ",
    "projectNameEn": "เกณฑ์กลาง myTCAS รับสมัครวิศวกรรมรวม จุฬาฯ",
    "quotaSeats": 250,
    "studyTrack": "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
    "gpaxMin": 3,
    "tuitionFee": "21,000 บาท/ภาคการศึกษา",
    "applicationFee": "150 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "TGAT 20% + TPAT3 30% + A-Level คณิต 1 20% + ฟิสิกส์ 20% + เคมี 10%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "GPAX ≥ 3.00",
      "ยื่นผลสอบผ่าน myTCAS ตามกำหนดการ"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะวิศวกรรมศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cu-eng-adm-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3",
        "nameEn": "Minimum GPAX 3",
        "minScore": "3",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3",
        "detailsEn": "5-term cumulative GPA at least 3",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cu-eng-adm-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cu-eng-adm-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร เกณฑ์กลาง myTCAS รับสมัครวิศวกรรมรวม จุฬาฯ",
        "titleEn": "Application Opens",
        "startDate": "2027-05-06",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cu-eng-adm-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร เกณฑ์กลาง myTCAS รับสมัครวิศวกรรมรวม จุฬาฯ (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2027-05-18",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cu-bba-port",
    "branchId": "br-10020121",
    "programId": "prog-cu-17",
    "facultyId": "cu-business_econ-17",
    "universityId": "cu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10020121101801A",
    "projectNameTh": "โครงการรับสมัคร BBA Chulalongkorn รอบ Early",
    "projectNameEn": "โครงการรับสมัคร BBA Chulalongkorn รอบ Early",
    "quotaSeats": 100,
    "studyTrack": "ทุกแผนการเรียน (ไทย / นานาชาติ / GED)",
    "gpaxMin": 3,
    "tuitionFee": "105,000 บาท/ภาคการศึกษา",
    "applicationFee": "1,500 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "SAT Math ≥ 650 + SAT EBRW ≥ 500 + สัมภาษณ์ภาษาอังกฤษ",
    "curriculumType": "หลักสูตรนานาชาติ",
    "additionalConditionsTh": [
      "คะแนนสอบ SAT รวม ≥ 1270 (Math ≥ 650)",
      "IELTS ≥ 6.5 หรือ TOEFL iBT ≥ 79",
      "สัมภาษณ์ภาษาอังกฤษ"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะพาณิชยศาสตร์และการบัญชี",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cu-bba-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3",
        "nameEn": "Minimum GPAX 3",
        "minScore": "3",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3",
        "detailsEn": "5-term cumulative GPA at least 3",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cu-bba-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cu-bba-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการรับสมัคร BBA Chulalongkorn รอบ Early",
        "titleEn": "Application Opens",
        "startDate": "2026-11-25",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cu-bba-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการรับสมัคร BBA Chulalongkorn รอบ Early (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-12-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cu-balac-port",
    "branchId": "br-10020131",
    "programId": "prog-cu-18",
    "facultyId": "cu-humanities_social-18",
    "universityId": "cu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10020131101801A",
    "projectNameTh": "BALAC Chula Early Admission Round",
    "projectNameEn": "BALAC Chula Early Admission Round",
    "quotaSeats": 80,
    "studyTrack": "ทุกแผนการเรียน",
    "gpaxMin": 3,
    "tuitionFee": "88,000 บาท/ภาคการศึกษา",
    "applicationFee": "1,000 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "IELTS/TOEFL + SAT/ACT + Written Essay & Interview",
    "curriculumType": "หลักสูตรนานาชาติ",
    "additionalConditionsTh": [
      "IELTS ≥ 7.0 หรือ TOEFL iBT ≥ 95",
      "SAT Reading ≥ 500",
      "สอบเขียน Essay สด"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะอักษรศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cu-balac-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3",
        "nameEn": "Minimum GPAX 3",
        "minScore": "3",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3",
        "detailsEn": "5-term cumulative GPA at least 3",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cu-balac-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cu-balac-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร BALAC Chula Early Admission Round",
        "titleEn": "Application Opens",
        "startDate": "2026-11-25",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cu-balac-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร BALAC Chula Early Admission Round (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-12-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cu-comm-port",
    "branchId": "br-10020141",
    "programId": "prog-cu-19",
    "facultyId": "cu-communication_arts-19",
    "universityId": "cu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10020141101801A",
    "projectNameTh": "โครงการผู้มีความสามารถพิเศษทางนิเทศศาสตร์และสื่อดิจิทัล",
    "projectNameEn": "โครงการผู้มีความสามารถพิเศษทางนิเทศศาสตร์และสื่อดิจิทัล",
    "quotaSeats": 30,
    "studyTrack": "ทุกแผนการเรียน",
    "gpaxMin": 3.25,
    "tuitionFee": "21,000 บาท/ภาคการศึกษา",
    "applicationFee": "500 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 20% + Portfolio ด้านสื่อ 50% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "GPAX ≥ 3.25",
      "ผลงานการผลิตภาพยนตร์สั้น สารคดี รายการ หรือแคมเปญสื่อสาร"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะนิเทศศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cu-comm-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3.25",
        "nameEn": "Minimum GPAX 3.25",
        "minScore": "3.25",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3.25",
        "detailsEn": "5-term cumulative GPA at least 3.25",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cu-comm-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cu-comm-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการผู้มีความสามารถพิเศษทางนิเทศศาสตร์และสื่อดิจิทัล",
        "titleEn": "Application Opens",
        "startDate": "2026-10-10",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cu-comm-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการผู้มีความสามารถพิเศษทางนิเทศศาสตร์และสื่อดิจิทัล (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-12",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cu-arch-port",
    "branchId": "br-10020151",
    "programId": "prog-cu-20",
    "facultyId": "cu-architecture_design-20",
    "universityId": "cu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10020151101801A",
    "projectNameTh": "โครงการคัดเลือกนักเรียนที่มีความเป็นเลิศทางสถาปัตยกรรม",
    "projectNameEn": "โครงการคัดเลือกนักเรียนที่มีความเป็นเลิศทางสถาปัตยกรรม",
    "quotaSeats": 35,
    "studyTrack": "วิทย์-คณิต",
    "gpaxMin": 3,
    "tuitionFee": "21,000 บาท/ภาคการศึกษา",
    "applicationFee": "500 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "Portfolio ผลงาน 60% + สัมภาษณ์และวาดภาพ 40%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "แฟ้มสะสมผลงานการออกแบบ สเกตช์ภาพ และสิ่งประดิษฐ์ 3 มิติ",
      "สอบวาดเส้นสด"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะสถาปัตยกรรมศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cu-arch-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3",
        "nameEn": "Minimum GPAX 3",
        "minScore": "3",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3",
        "detailsEn": "5-term cumulative GPA at least 3",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cu-arch-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-cu-arch-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการคัดเลือกนักเรียนที่มีความเป็นเลิศทางสถาปัตยกรรม",
        "titleEn": "Application Opens",
        "startDate": "2026-10-10",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cu-arch-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการคัดเลือกนักเรียนที่มีความเป็นเลิศทางสถาปัตยกรรม (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-12",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-mu-med-port",
    "branchId": "br-10030101",
    "programId": "prog-mu-21",
    "facultyId": "mu-health_medicine-21",
    "universityId": "mu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10030101101801A",
    "projectNameTh": "โครงการโอลิมปิกวิชาการและผู้มีความสามารถพิเศษทางวิทยาศาสตร์ (ศิริราช)",
    "projectNameEn": "โครงการโอลิมปิกวิชาการและผู้มีความสามารถพิเศษทางวิทยาศาสตร์ (ศิริราช)",
    "quotaSeats": 30,
    "studyTrack": "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
    "gpaxMin": 3.5,
    "tuitionFee": "24,000 บาท/ภาคการศึกษา",
    "applicationFee": "500 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "สอวน. ค่าย 2 / ผลงานวิชาการ 50% + สัมภาษณ์ MMI 30% + GPAX 20%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "สอวน. ค่าย 2 ฟิสิกส์/เคมี/ชีววิทยา/คอมพิวเตอร์",
      "GPAX ≥ 3.50",
      "ตาไม่บอดสี"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะแพทยศาสตร์ศิริราชพยาบาล",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-mu-med-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3.5",
        "nameEn": "Minimum GPAX 3.5",
        "minScore": "3.5",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3.5",
        "detailsEn": "5-term cumulative GPA at least 3.5",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-mu-med-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-mu-med-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการโอลิมปิกวิชาการและผู้มีความสามารถพิเศษทางวิทยาศาสตร์ (ศิริราช)",
        "titleEn": "Application Opens",
        "startDate": "2026-10-01",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-mu-med-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการโอลิมปิกวิชาการและผู้มีความสามารถพิเศษทางวิทยาศาสตร์ (ศิริราช) (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-10-25",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-mu-ict-port",
    "branchId": "br-10030111",
    "programId": "prog-mu-22",
    "facultyId": "mu-science_computing-22",
    "universityId": "mu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10030111101801A",
    "projectNameTh": "ICT Young Talent Portfolio Project (รอบ 1/1)",
    "projectNameEn": "ICT Young Talent Portfolio Project (รอบ 1/1)",
    "quotaSeats": 60,
    "studyTrack": "ทุกแผนการเรียน",
    "gpaxMin": 3,
    "tuitionFee": "65,000 บาท/ภาคการศึกษา",
    "applicationFee": "600 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "English Portfolio 45% + สัมภาษณ์ภาษาอังกฤษ 30% + GPAX 25%",
    "curriculumType": "หลักสูตรนานาชาติ",
    "additionalConditionsTh": [
      "IELTS ≥ 5.5 หรือ TOEFL iBT ≥ 60",
      "สัมภาษณ์ภาษาอังกฤษ 100%",
      "มีโปรเจกต์ไอที"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะเทคโนโลยีสารสนเทศและการสื่อสาร (MUICT)",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-mu-ict-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3",
        "nameEn": "Minimum GPAX 3",
        "minScore": "3",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3",
        "detailsEn": "5-term cumulative GPA at least 3",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-mu-ict-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-mu-ict-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร ICT Young Talent Portfolio Project (รอบ 1/1)",
        "titleEn": "Application Opens",
        "startDate": "2026-10-01",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-mu-ict-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร ICT Young Talent Portfolio Project (รอบ 1/1) (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-10-25",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-mu-biomed-port",
    "branchId": "br-10030121",
    "programId": "prog-mu-23",
    "facultyId": "mu-science_computing-23",
    "universityId": "mu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10030121101801A",
    "projectNameTh": "Biomedical Science International Portfolio Admission",
    "projectNameEn": "Biomedical Science International Portfolio Admission",
    "quotaSeats": 35,
    "studyTrack": "วิทย์-คณิต หรือเทียบเท่า",
    "gpaxMin": 3,
    "tuitionFee": "70,000 บาท/ภาคการศึกษา",
    "applicationFee": "600 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 25% + Portfolio 45% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรนานาชาติ",
    "additionalConditionsTh": [
      "ชีววิทยาและเคมี ≥ 3.00",
      "IELTS ≥ 5.5"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะวิทยาศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-mu-biomed-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3",
        "nameEn": "Minimum GPAX 3",
        "minScore": "3",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3",
        "detailsEn": "5-term cumulative GPA at least 3",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-mu-biomed-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-mu-biomed-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร Biomedical Science International Portfolio Admission",
        "titleEn": "Application Opens",
        "startDate": "2026-10-01",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-mu-biomed-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร Biomedical Science International Portfolio Admission (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-10-25",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-mu-music-port",
    "branchId": "br-10030131",
    "programId": "prog-mu-24",
    "facultyId": "mu-communication_arts-24",
    "universityId": "mu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10030131101801A",
    "projectNameTh": "โครงการคัดเลือกนักดนตรีเยาวชนผู้มีพรสวรรค์ (รอบ Audition)",
    "projectNameEn": "โครงการคัดเลือกนักดนตรีเยาวชนผู้มีพรสวรรค์ (รอบ Audition)",
    "quotaSeats": 40,
    "studyTrack": "ทุกแผนการเรียน",
    "gpaxMin": 2.5,
    "tuitionFee": "90,000 บาท/ภาคการศึกษา",
    "applicationFee": "1,500 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "Audition ปฏิบัติดนตรี 60% + ทฤษฎีดนตรี 20% + สัมภาษณ์ 20%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "ส่งคลิปวิดีโอแสดงเดี่ยวเครื่องดนตรีความยาวไม่เกิน 15 นาที",
      "สอบข้อเขียนทฤษฎีดนตรีสากลและโสตทักษะ"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / วิทยาลัยดุริยางคศิลป์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-mu-music-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 2.5",
        "nameEn": "Minimum GPAX 2.5",
        "minScore": "2.5",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.5",
        "detailsEn": "5-term cumulative GPA at least 2.5",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-mu-music-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-mu-music-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการคัดเลือกนักดนตรีเยาวชนผู้มีพรสวรรค์ (รอบ Audition)",
        "titleEn": "Application Opens",
        "startDate": "2026-09-01",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-mu-music-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการคัดเลือกนักดนตรีเยาวชนผู้มีพรสวรรค์ (รอบ Audition) (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-10-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-tu-law-port",
    "branchId": "br-10040101",
    "programId": "prog-tu-25",
    "facultyId": "tu-law_politics-25",
    "universityId": "tu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10040101101801A",
    "projectNameTh": "โครงการนักเรียนผู้มีทักษะความเป็นผู้นำและผลงานเพื่อสังคม",
    "projectNameEn": "โครงการนักเรียนผู้มีทักษะความเป็นผู้นำและผลงานเพื่อสังคม",
    "quotaSeats": 45,
    "studyTrack": "ทุกแผนการเรียน",
    "gpaxMin": 3.5,
    "tuitionFee": "15,500 บาท/ภาคการศึกษา",
    "applicationFee": "350 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 25% + Portfolio เพื่อสังคม 45% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "GPAX ≥ 3.50",
      "ผลงานโต้วาที แข่งขันกฎหมาย หรือกิจกรรมจิตอาสาเป็นรูปธรรม",
      "แนบบทความสะท้อนความคิดด้านกฎหมาย 1 หน้า"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะนิติศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-tu-law-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3.5",
        "nameEn": "Minimum GPAX 3.5",
        "minScore": "3.5",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3.5",
        "detailsEn": "5-term cumulative GPA at least 3.5",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-tu-law-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-tu-law-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการนักเรียนผู้มีทักษะความเป็นผู้นำและผลงานเพื่อสังคม",
        "titleEn": "Application Opens",
        "startDate": "2026-11-01",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-tu-law-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการนักเรียนผู้มีทักษะความเป็นผู้นำและผลงานเพื่อสังคม (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-tu-tbs-port",
    "branchId": "br-10040111",
    "programId": "prog-tu-26",
    "facultyId": "tu-business_econ-26",
    "universityId": "tu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10040111101801A",
    "projectNameTh": "โครงการผู้มีความสามารถดีเด่นด้านการจัดการธุรกิจ",
    "projectNameEn": "โครงการผู้มีความสามารถดีเด่นด้านการจัดการธุรกิจ",
    "quotaSeats": 40,
    "studyTrack": "วิทย์-คณิต หรือ ศิลป์-คำนวณ",
    "gpaxMin": 3.25,
    "tuitionFee": "17,500 บาท/ภาคการศึกษา",
    "applicationFee": "300 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "GPAX ≥ 3.25",
      "คณิตศาสตร์ ≥ 3.00",
      "ผลงานการแข่งขันแผนธุรกิจเยาวชน"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะพาณิชยศาสตร์และการบัญชี (TBS)",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-tu-tbs-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3.25",
        "nameEn": "Minimum GPAX 3.25",
        "minScore": "3.25",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3.25",
        "detailsEn": "5-term cumulative GPA at least 3.25",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-tu-tbs-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-tu-tbs-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการผู้มีความสามารถดีเด่นด้านการจัดการธุรกิจ",
        "titleEn": "Application Opens",
        "startDate": "2026-11-01",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-tu-tbs-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการผู้มีความสามารถดีเด่นด้านการจัดการธุรกิจ (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-tu-bir-port",
    "branchId": "br-10040121",
    "programId": "prog-tu-27",
    "facultyId": "tu-law_politics-27",
    "universityId": "tu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10040121101801A",
    "projectNameTh": "BIR International Admission Round",
    "projectNameEn": "BIR International Admission Round",
    "quotaSeats": 50,
    "studyTrack": "ทุกแผนการเรียน",
    "gpaxMin": 3,
    "tuitionFee": "72,000 บาท/ภาคการศึกษา",
    "applicationFee": "1,000 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "IELTS/TOEFL + SAT/TU-GET + สัมภาษณ์ภาษาอังกฤษ",
    "curriculumType": "หลักสูตรนานาชาติ",
    "additionalConditionsTh": [
      "IELTS ≥ 6.0 หรือ TU-GET (PBT) ≥ 550",
      "SAT Reading ≥ 450",
      "สอบสัมภาษณ์ภาษาอังกฤษ"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะรัฐศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-tu-bir-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3",
        "nameEn": "Minimum GPAX 3",
        "minScore": "3",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3",
        "detailsEn": "5-term cumulative GPA at least 3",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-tu-bir-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-tu-bir-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร BIR International Admission Round",
        "titleEn": "Application Opens",
        "startDate": "2026-11-01",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-tu-bir-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร BIR International Admission Round (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-tu-siit-port",
    "branchId": "br-10040131",
    "programId": "prog-tu-28",
    "facultyId": "tu-engineering-28",
    "universityId": "tu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10040131101801A",
    "projectNameTh": "SIIT Outstanding Student Admission Round",
    "projectNameEn": "SIIT Outstanding Student Admission Round",
    "quotaSeats": 60,
    "studyTrack": "วิทย์-คณิต หรือเทียบเท่า",
    "gpaxMin": 3,
    "tuitionFee": "85,000 บาท/ภาคการศึกษา",
    "applicationFee": "800 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 25% + Math/Physics Score 45% + สัมภาษณ์อังกฤษ 30%",
    "curriculumType": "หลักสูตรนานาชาติ",
    "additionalConditionsTh": [
      "GPAX ≥ 3.00",
      "สัมภาษณ์ภาษาอังกฤษ",
      "มีทุนการศึกษา 100% สำหรับผู้มีคะแนนสูงสุด"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / สถาบันเทคโนโลยีนานาชาติสิรินธร (SIIT)",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-tu-siit-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3",
        "nameEn": "Minimum GPAX 3",
        "minScore": "3",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3",
        "detailsEn": "5-term cumulative GPA at least 3",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-tu-siit-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-tu-siit-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร SIIT Outstanding Student Admission Round",
        "titleEn": "Application Opens",
        "startDate": "2026-10-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-tu-siit-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร SIIT Outstanding Student Admission Round (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-30",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-kmutt-dsi-port",
    "branchId": "br-10050101",
    "programId": "prog-kmutt-29",
    "facultyId": "kmutt-science_computing-29",
    "universityId": "kmutt",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10050101101801A",
    "projectNameTh": "โครงการ Active Recruitment SIT มจธ.",
    "projectNameEn": "โครงการ Active Recruitment SIT มจธ.",
    "quotaSeats": 35,
    "studyTrack": "ทุกแผนการเรียน",
    "gpaxMin": 2.75,
    "tuitionFee": "32,000 บาท/ภาคการศึกษา",
    "applicationFee": "300 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "Portfolio 50% + สัมภาษณ์ Workshop 50%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "GPAX ≥ 2.75",
      "ผลงานด้านไอเดียธุรกิจดิจิทัล, UI/UX, หรือโปรเจกต์ไอที"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะเทคโนโลยีสารสนเทศ (SIT)",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-kmutt-dsi-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 2.75",
        "nameEn": "Minimum GPAX 2.75",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
        "detailsEn": "5-term cumulative GPA at least 2.75",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-kmutt-dsi-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-kmutt-dsi-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการ Active Recruitment SIT มจธ.",
        "titleEn": "Application Opens",
        "startDate": "2026-09-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-kmutt-dsi-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการ Active Recruitment SIT มจธ. (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-17",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-kmutt-cs-port",
    "branchId": "br-10050102",
    "programId": "prog-kmutt-29",
    "facultyId": "kmutt-science_computing-29",
    "universityId": "kmutt",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10050102101801A",
    "projectNameTh": "Active Recruitment CS English Program",
    "projectNameEn": "Active Recruitment CS English Program",
    "quotaSeats": 40,
    "studyTrack": "ทุกแผนการเรียน",
    "gpaxMin": 3,
    "tuitionFee": "45,000 บาท/ภาคการศึกษา",
    "applicationFee": "400 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "Coding Portfolio 50% + สัมภาษณ์ภาษาอังกฤษ 50%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "GPAX ≥ 3.00",
      "ผลงานการเขียนโปรแกรมและสื่อสารภาษาอังกฤษได้ดี"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะเทคโนโลยีสารสนเทศ (SIT)",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-kmutt-cs-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3",
        "nameEn": "Minimum GPAX 3",
        "minScore": "3",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3",
        "detailsEn": "5-term cumulative GPA at least 3",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-kmutt-cs-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-kmutt-cs-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร Active Recruitment CS English Program",
        "titleEn": "Application Opens",
        "startDate": "2026-09-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-kmutt-cs-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร Active Recruitment CS English Program (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-17",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-kmutt-fibo-port",
    "branchId": "br-10050103",
    "programId": "prog-kmutt-30",
    "facultyId": "kmutt-engineering-30",
    "universityId": "kmutt",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10050103101801A",
    "projectNameTh": "โครงการคัดเลือกนักเรียนศักยภาพสูงด้านหุ่นยนต์ (FIBO)",
    "projectNameEn": "โครงการคัดเลือกนักเรียนศักยภาพสูงด้านหุ่นยนต์ (FIBO)",
    "quotaSeats": 30,
    "studyTrack": "วิทย์-คณิต",
    "gpaxMin": 3,
    "tuitionFee": "28,000 บาท/ภาคการศึกษา",
    "applicationFee": "350 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "Robotics Portfolio 40% + สอบปฏิบัติการกล/วงจร 30% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "GPAX ≥ 3.00",
      "มีผลงานหุ่นยนต์ Arduino, ESP32, ROS",
      "สอบปฏิบัติการที่ FIBO"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะวิศวกรรมศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-kmutt-fibo-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3",
        "nameEn": "Minimum GPAX 3",
        "minScore": "3",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3",
        "detailsEn": "5-term cumulative GPA at least 3",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-kmutt-fibo-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-kmutt-fibo-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการคัดเลือกนักเรียนศักยภาพสูงด้านหุ่นยนต์ (FIBO)",
        "titleEn": "Application Opens",
        "startDate": "2026-09-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-kmutt-fibo-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการคัดเลือกนักเรียนศักยภาพสูงด้านหุ่นยนต์ (FIBO) (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-17",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-kmutt-soad-port",
    "branchId": "br-10050104",
    "programId": "prog-kmutt-31",
    "facultyId": "kmutt-architecture_design-31",
    "universityId": "kmutt",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10050104101801A",
    "projectNameTh": "SoA+D International Portfolio Admission",
    "projectNameEn": "SoA+D International Portfolio Admission",
    "quotaSeats": 30,
    "studyTrack": "ทุกแผนการเรียน",
    "gpaxMin": 2.75,
    "tuitionFee": "60,000 บาท/ภาคการศึกษา",
    "applicationFee": "500 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "Design Portfolio 60% + สัมภาษณ์ภาษาอังกฤษ 40%",
    "curriculumType": "หลักสูตรนานาชาติ",
    "additionalConditionsTh": [
      "Design Portfolio ไม่เกิน 10 หน้า",
      "สัมภาษณ์ภาษาอังกฤษ"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะสถาปัตยกรรมศาสตร์และการออกแบบ (SoA+D)",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-kmutt-soad-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 2.75",
        "nameEn": "Minimum GPAX 2.75",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
        "detailsEn": "5-term cumulative GPA at least 2.75",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-kmutt-soad-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-kmutt-soad-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร SoA+D International Portfolio Admission",
        "titleEn": "Application Opens",
        "startDate": "2026-10-01",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-kmutt-soad-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร SoA+D International Portfolio Admission (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-25",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-kmitl-rai-port",
    "branchId": "br-10060101",
    "programId": "prog-kmitl-32",
    "facultyId": "kmitl-engineering-32",
    "universityId": "kmitl",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10060101101801A",
    "projectNameTh": "KMITL RAI International Admission Round",
    "projectNameEn": "KMITL RAI International Admission Round",
    "quotaSeats": 40,
    "studyTrack": "วิทย์-คณิต หรือเทียบเท่า",
    "gpaxMin": 3,
    "tuitionFee": "75,000 บาท/ภาคการศึกษา",
    "applicationFee": "500 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "English Portfolio 50% + สัมภาษณ์อังกฤษ 50%",
    "curriculumType": "หลักสูตรนานาชาติ",
    "additionalConditionsTh": [
      "GPAX ≥ 3.00",
      "ผลงาน Robotics หรือ AI",
      "สัมภาษณ์ภาษาอังกฤษ"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะวิศวกรรมศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-kmitl-rai-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3",
        "nameEn": "Minimum GPAX 3",
        "minScore": "3",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3",
        "detailsEn": "5-term cumulative GPA at least 3",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-kmitl-rai-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-kmitl-rai-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร KMITL RAI International Admission Round",
        "titleEn": "Application Opens",
        "startDate": "2026-10-05",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-kmitl-rai-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร KMITL RAI International Admission Round (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-10",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-kmitl-it-port",
    "branchId": "br-10060102",
    "programId": "prog-kmitl-33",
    "facultyId": "kmitl-science_computing-33",
    "universityId": "kmitl",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10060102101801A",
    "projectNameTh": "โครงการรับตรง Portfolio คณะไอที ลาดกระบัง",
    "projectNameEn": "โครงการรับตรง Portfolio คณะไอที ลาดกระบัง",
    "quotaSeats": 60,
    "studyTrack": "ทุกแผนการเรียน",
    "gpaxMin": 2.75,
    "tuitionFee": "25,000 บาท/ภาคการศึกษา",
    "applicationFee": "300 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 25% + Portfolio 45% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "GPAX ≥ 2.75",
      "มีผลงานพัฒนาเว็บไซต์หรือแอปพลิเคชัน"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะเทคโนโลยีสารสนเทศ",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-kmitl-it-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 2.75",
        "nameEn": "Minimum GPAX 2.75",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
        "detailsEn": "5-term cumulative GPA at least 2.75",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-kmitl-it-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-kmitl-it-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการรับตรง Portfolio คณะไอที ลาดกระบัง",
        "titleEn": "Application Opens",
        "startDate": "2026-10-05",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-kmitl-it-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการรับตรง Portfolio คณะไอที ลาดกระบัง (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-10",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-ku-cpe-port",
    "branchId": "br-10070101",
    "programId": "prog-ku-34",
    "facultyId": "ku-engineering-34",
    "universityId": "ku",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10070101101801A",
    "projectNameTh": "โครงการเรียนล่วงหน้า ม.เกษตรศาสตร์ และผู้มีศักยภาพด้านคอมพิวเตอร์",
    "projectNameEn": "โครงการเรียนล่วงหน้า ม.เกษตรศาสตร์ และผู้มีศักยภาพด้านคอมพิวเตอร์",
    "quotaSeats": 50,
    "studyTrack": "วิทย์-คณิต",
    "gpaxMin": 3.25,
    "tuitionFee": "17,500 บาท/ภาคการศึกษา",
    "applicationFee": "300 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 20% + ผลการเรียนล่วงหน้า/Portfolio 50% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "GPAX ≥ 3.25",
      "ผ่านโครงการเรียนล่วงหน้า มก. ได้รับการพิจารณาพิเศษ"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะวิศวกรรมศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-ku-cpe-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3.25",
        "nameEn": "Minimum GPAX 3.25",
        "minScore": "3.25",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3.25",
        "detailsEn": "5-term cumulative GPA at least 3.25",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-ku-cpe-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-ku-cpe-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการเรียนล่วงหน้า ม.เกษตรศาสตร์ และผู้มีศักยภาพด้านคอมพิวเตอร์",
        "titleEn": "Application Opens",
        "startDate": "2026-10-25",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-ku-cpe-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการเรียนล่วงหน้า ม.เกษตรศาสตร์ และผู้มีศักยภาพด้านคอมพิวเตอร์ (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-30",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-ku-agri-port",
    "branchId": "br-10070102",
    "programId": "prog-ku-35",
    "facultyId": "ku-agriculture_environment-35",
    "universityId": "ku",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10070102101801A",
    "projectNameTh": "โครงการทายาทเกษตรกรและผู้มีใจรักเกษตรอัจฉริยะ",
    "projectNameEn": "โครงการทายาทเกษตรกรและผู้มีใจรักเกษตรอัจฉริยะ",
    "quotaSeats": 40,
    "studyTrack": "ทุกแผนการเรียน",
    "gpaxMin": 2.5,
    "tuitionFee": "16,000 บาท/ภาคการศึกษา",
    "applicationFee": "200 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "ครอบครัวประกอบอาชีพเกษตรกรรม หรือมีความสนใจเทคโนโลยี Smart Farm"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะเกษตร",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-ku-agri-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 2.5",
        "nameEn": "Minimum GPAX 2.5",
        "minScore": "2.5",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.5",
        "detailsEn": "5-term cumulative GPA at least 2.5",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-ku-agri-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-ku-agri-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการทายาทเกษตรกรและผู้มีใจรักเกษตรอัจฉริยะ",
        "titleEn": "Application Opens",
        "startDate": "2026-10-25",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-ku-agri-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการทายาทเกษตรกรและผู้มีใจรักเกษตรอัจฉริยะ (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-30",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-kku-med-port",
    "branchId": "br-10080101",
    "programId": "prog-kku-36",
    "facultyId": "kku-health_medicine-36",
    "universityId": "kku",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10080101101801A",
    "projectNameTh": "โครงการผู้มีความสามารถพิเศษทางวิชาการและวิจัย (MDX)",
    "projectNameEn": "โครงการผู้มีความสามารถพิเศษทางวิชาการและวิจัย (MDX)",
    "quotaSeats": 44,
    "studyTrack": "วิทย์-คณิต",
    "gpaxMin": 3.5,
    "tuitionFee": "20,000 บาท/ภาคการศึกษา",
    "applicationFee": "500 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "NETSAT/Portfolio 50% + MMI 30% + GPAX 20%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "GPAX ≥ 3.50",
      "ผ่าน สอวน. หรือมีคะแนน NETSAT สูงกว่าเกณฑ์",
      "ตาไม่บอดสี"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะแพทยศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-kku-med-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3.5",
        "nameEn": "Minimum GPAX 3.5",
        "minScore": "3.5",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3.5",
        "detailsEn": "5-term cumulative GPA at least 3.5",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-kku-med-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-kku-med-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการผู้มีความสามารถพิเศษทางวิชาการและวิจัย (MDX)",
        "titleEn": "Application Opens",
        "startDate": "2026-10-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-kku-med-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการผู้มีความสามารถพิเศษทางวิชาการและวิจัย (MDX) (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-kku-cpe-port",
    "branchId": "br-10080102",
    "programId": "prog-kku-37",
    "facultyId": "kku-engineering-37",
    "universityId": "kku",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10080102101801A",
    "projectNameTh": "โครงการรับด้วย Portfolio คณะวิศวกรรมศาสตร์ มข.",
    "projectNameEn": "โครงการรับด้วย Portfolio คณะวิศวกรรมศาสตร์ มข.",
    "quotaSeats": 35,
    "studyTrack": "วิทย์-คณิต",
    "gpaxMin": 3,
    "tuitionFee": "17,500 บาท/ภาคการศึกษา",
    "applicationFee": "300 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 25% + Portfolio 45% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "GPAX ≥ 3.00",
      "ผลงานโครงงานคอมพิวเตอร์หรือหุ่นยนต์"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะวิศวกรรมศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-kku-cpe-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3",
        "nameEn": "Minimum GPAX 3",
        "minScore": "3",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3",
        "detailsEn": "5-term cumulative GPA at least 3",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-kku-cpe-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-kku-cpe-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการรับด้วย Portfolio คณะวิศวกรรมศาสตร์ มข.",
        "titleEn": "Application Opens",
        "startDate": "2026-10-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-kku-cpe-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการรับด้วย Portfolio คณะวิศวกรรมศาสตร์ มข. (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-psu-med-port",
    "branchId": "br-10090101",
    "programId": "prog-psu-38",
    "facultyId": "psu-health_medicine-38",
    "universityId": "psu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10090101101801A",
    "projectNameTh": "โครงการผู้มีความสามารถพิเศษทางวิชาการ (แพทย์ ม.อ.)",
    "projectNameEn": "โครงการผู้มีความสามารถพิเศษทางวิชาการ (แพทย์ ม.อ.)",
    "quotaSeats": 30,
    "studyTrack": "วิทย์-คณิต",
    "gpaxMin": 3.5,
    "tuitionFee": "20,000 บาท/ภาคการศึกษา",
    "applicationFee": "500 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 20% + Portfolio สอวน. 50% + MMI 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "GPAX ≥ 3.50",
      "ผ่าน สอวน. ค่าย 2 หรือโอลิมปิกวิชาการ",
      "ตาไม่บอดสี"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะแพทยศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-psu-med-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3.5",
        "nameEn": "Minimum GPAX 3.5",
        "minScore": "3.5",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3.5",
        "detailsEn": "5-term cumulative GPA at least 3.5",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-psu-med-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-psu-med-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการผู้มีความสามารถพิเศษทางวิชาการ (แพทย์ ม.อ.)",
        "titleEn": "Application Opens",
        "startDate": "2026-10-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-psu-med-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการผู้มีความสามารถพิเศษทางวิชาการ (แพทย์ ม.อ.) (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-psu-cpe-port",
    "branchId": "br-10090102",
    "programId": "prog-psu-39",
    "facultyId": "psu-engineering-39",
    "universityId": "psu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10090102101801A",
    "projectNameTh": "โครงการส่งเสริมนักเรียนเรียนดีและอัจฉริยภาพไอที",
    "projectNameEn": "โครงการส่งเสริมนักเรียนเรียนดีและอัจฉริยภาพไอที",
    "quotaSeats": 40,
    "studyTrack": "วิทย์-คณิต",
    "gpaxMin": 3,
    "tuitionFee": "16,000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "GPAX ≥ 3.00",
      "โครงงานซอฟต์แวร์หรือ IoT"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะวิศวกรรมศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-psu-cpe-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3",
        "nameEn": "Minimum GPAX 3",
        "minScore": "3",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3",
        "detailsEn": "5-term cumulative GPA at least 3",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-psu-cpe-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-psu-cpe-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการส่งเสริมนักเรียนเรียนดีและอัจฉริยภาพไอที",
        "titleEn": "Application Opens",
        "startDate": "2026-10-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-psu-cpe-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการส่งเสริมนักเรียนเรียนดีและอัจฉริยภาพไอที (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-swu-med-port",
    "branchId": "br-10100101",
    "programId": "prog-swu-40",
    "facultyId": "swu-health_medicine-40",
    "universityId": "swu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10100101101801A",
    "projectNameTh": "โครงการนักเรียนผู้มีทักษะวิชาการและจิตอาสา (แพทย์ มศว)",
    "projectNameEn": "โครงการนักเรียนผู้มีทักษะวิชาการและจิตอาสา (แพทย์ มศว)",
    "quotaSeats": 20,
    "studyTrack": "วิทย์-คณิต",
    "gpaxMin": 3.5,
    "tuitionFee": "20,000 บาท/ภาคการศึกษา",
    "applicationFee": "500 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 25% + Portfolio 45% + สัมภาษณ์ MMI 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "GPAX ≥ 3.50",
      "ผลงานจิตอาสาด้านสาธารณสุขและเกียรติบัตรวิชาการ",
      "ตาไม่บอดสี"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะแพทยศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-swu-med-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3.5",
        "nameEn": "Minimum GPAX 3.5",
        "minScore": "3.5",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3.5",
        "detailsEn": "5-term cumulative GPA at least 3.5",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-swu-med-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-swu-med-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการนักเรียนผู้มีทักษะวิชาการและจิตอาสา (แพทย์ มศว)",
        "titleEn": "Application Opens",
        "startDate": "2026-11-01",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-swu-med-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการนักเรียนผู้มีทักษะวิชาการและจิตอาสา (แพทย์ มศว) (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-swu-cpe-port",
    "branchId": "br-10100102",
    "programId": "prog-swu-41",
    "facultyId": "swu-engineering-41",
    "universityId": "swu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10100102101801A",
    "projectNameTh": "โครงการผู้มีทักษะทางเทคโนโลยีดิจิทัล",
    "projectNameEn": "โครงการผู้มีทักษะทางเทคโนโลยีดิจิทัล",
    "quotaSeats": 35,
    "studyTrack": "วิทย์-คณิต",
    "gpaxMin": 3,
    "tuitionFee": "20,000 บาท/ภาคการศึกษา",
    "applicationFee": "300 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 25% + Portfolio 45% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "GPAX ≥ 3.00",
      "โครงงานคอมพิวเตอร์หรือหุ่นยนต์"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะวิศวกรรมศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-swu-cpe-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3",
        "nameEn": "Minimum GPAX 3",
        "minScore": "3",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3",
        "detailsEn": "5-term cumulative GPA at least 3",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-swu-cpe-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-swu-cpe-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการผู้มีทักษะทางเทคโนโลยีดิจิทัล",
        "titleEn": "Application Opens",
        "startDate": "2026-11-01",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-swu-cpe-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการผู้มีทักษะทางเทคโนโลยีดิจิทัล (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-kmutnb-robo-port",
    "branchId": "br-10110101",
    "programId": "prog-kmutnb-42",
    "facultyId": "kmutnb-engineering-42",
    "universityId": "kmutnb",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10110101101801A",
    "projectNameTh": "โครงการสร้างนวัตกรหุ่นยนต์กู้ภัยและอุตสาหกรรม",
    "projectNameEn": "โครงการสร้างนวัตกรหุ่นยนต์กู้ภัยและอุตสาหกรรม",
    "quotaSeats": 30,
    "studyTrack": "วิทย์-คณิต หรือ ปวช. ช่างอุตสาหกรรม",
    "gpaxMin": 2.75,
    "tuitionFee": "19,000 บาท/ภาคการศึกษา",
    "applicationFee": "300 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "Portfolio ผลงานหุ่นยนต์ 50% + สัมภาษณ์ 30% + GPAX 20%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "รับทั้ง ม.6 วิทย์-คณิต และ ปวช. สาขาช่าง",
      "ผลงานการแข่งขันหุ่นยนต์หรือสิ่งประดิษฐ์"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะวิศวกรรมศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-kmutnb-robo-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 2.75",
        "nameEn": "Minimum GPAX 2.75",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
        "detailsEn": "5-term cumulative GPA at least 2.75",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-kmutnb-robo-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-kmutnb-robo-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการสร้างนวัตกรหุ่นยนต์กู้ภัยและอุตสาหกรรม",
        "titleEn": "Application Opens",
        "startDate": "2026-10-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-kmutnb-robo-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการสร้างนวัตกรหุ่นยนต์กู้ภัยและอุตสาหกรรม (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-25",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-nu-med-port",
    "branchId": "br-10120101",
    "programId": "prog-nu-43",
    "facultyId": "nu-health_medicine-43",
    "universityId": "nu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10120101101801A",
    "projectNameTh": "โครงการเรียนดีและผู้มีอุดมการณ์แพทย์ชนบท",
    "projectNameEn": "โครงการเรียนดีและผู้มีอุดมการณ์แพทย์ชนบท",
    "quotaSeats": 25,
    "studyTrack": "วิทย์-คณิต",
    "gpaxMin": 3.5,
    "tuitionFee": "20,000 บาท/ภาคการศึกษา",
    "applicationFee": "400 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 25% + Portfolio 45% + สัมภาษณ์ MMI 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "โรงเรียนในเขตภาคเหนือตอนล่าง",
      "GPAX ≥ 3.50",
      "ตาไม่บอดสี"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะแพทยศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-nu-med-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3.5",
        "nameEn": "Minimum GPAX 3.5",
        "minScore": "3.5",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3.5",
        "detailsEn": "5-term cumulative GPA at least 3.5",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-nu-med-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-nu-med-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการเรียนดีและผู้มีอุดมการณ์แพทย์ชนบท",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-nu-med-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการเรียนดีและผู้มีอุดมการณ์แพทย์ชนบท (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-mfu-se-port",
    "branchId": "br-10130101",
    "programId": "prog-mfu-44",
    "facultyId": "mfu-science_computing-44",
    "universityId": "mfu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10130101101801A",
    "projectNameTh": "MFU International Talent Admission",
    "projectNameEn": "MFU International Talent Admission",
    "quotaSeats": 35,
    "studyTrack": "ทุกแผนการเรียน",
    "gpaxMin": 2.5,
    "tuitionFee": "33,000 บาท/ภาคการศึกษา",
    "applicationFee": "300 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "English Portfolio 50% + สัมภาษณ์ภาษาอังกฤษ 50%",
    "curriculumType": "หลักสูตรนานาชาติ",
    "additionalConditionsTh": [
      "การเรียนการสอนเป็นภาษาอังกฤษ 100%",
      "เปิดรับทุกแผนการเรียน"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / สำนักวิชาเทคโนโลยีสารสนเทศ",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-mfu-se-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 2.5",
        "nameEn": "Minimum GPAX 2.5",
        "minScore": "2.5",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.5",
        "detailsEn": "5-term cumulative GPA at least 2.5",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-mfu-se-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-mfu-se-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร MFU International Talent Admission",
        "titleEn": "Application Opens",
        "startDate": "2026-09-01",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-mfu-se-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร MFU International Talent Admission (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-30",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-buu-ai-port",
    "branchId": "br-10140101",
    "programId": "prog-buu-45",
    "facultyId": "buu-science_computing-45",
    "universityId": "buu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10140101101801A",
    "projectNameTh": "โครงการพัฒนากำลังคนดิจิทัล EEC (ม.บูรพา)",
    "projectNameEn": "โครงการพัฒนากำลังคนดิจิทัล EEC (ม.บูรพา)",
    "quotaSeats": 40,
    "studyTrack": "ทุกแผนการเรียน",
    "gpaxMin": 2.5,
    "tuitionFee": "18,000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 25% + Portfolio 45% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เปิดรับนักเรียนในเขตพื้นที่ EEC และทั่วประเทศ",
      "GPAX ≥ 2.50"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะวิทยาการสารสนเทศ",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-buu-ai-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 2.5",
        "nameEn": "Minimum GPAX 2.5",
        "minScore": "2.5",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.5",
        "detailsEn": "5-term cumulative GPA at least 2.5",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-buu-ai-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-buu-ai-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการพัฒนากำลังคนดิจิทัล EEC (ม.บูรพา)",
        "titleEn": "Application Opens",
        "startDate": "2026-10-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-buu-ai-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการพัฒนากำลังคนดิจิทัล EEC (ม.บูรพา) (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-su-game-port",
    "branchId": "br-10150101",
    "programId": "prog-su-46",
    "facultyId": "su-communication_arts-46",
    "universityId": "su",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10150101101801A",
    "projectNameTh": "โครงการผู้มีความสามารถพิเศษทางด้านศิลปะและเกมดิจิทัล",
    "projectNameEn": "โครงการผู้มีความสามารถพิเศษทางด้านศิลปะและเกมดิจิทัล",
    "quotaSeats": 35,
    "studyTrack": "ทุกแผนการเรียน",
    "gpaxMin": 2.5,
    "tuitionFee": "28,000 บาท/ภาคการศึกษา",
    "applicationFee": "350 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "Game/Art Portfolio 60% + สัมภาษณ์ 40%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "Portfolio ภาพวาด Concept Art หรือ Game Prototype",
      "เปิดรับทุกแผนการเรียน"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะเทคโนโลยีสารสนเทศและการสื่อสาร (ICT ศิลปากร)",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-su-game-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 2.5",
        "nameEn": "Minimum GPAX 2.5",
        "minScore": "2.5",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.5",
        "detailsEn": "5-term cumulative GPA at least 2.5",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-su-game-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-su-game-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการผู้มีความสามารถพิเศษทางด้านศิลปะและเกมดิจิทัล",
        "titleEn": "Application Opens",
        "startDate": "2026-10-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-su-game-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการผู้มีความสามารถพิเศษทางด้านศิลปะและเกมดิจิทัล (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-sut-ev-port",
    "branchId": "br-10160101",
    "programId": "prog-sut-47",
    "facultyId": "sut-engineering-47",
    "universityId": "sut",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10160101101801A",
    "projectNameTh": "โครงการสร้างวิศวกรยานยนต์ไฟฟ้าและระบบอัตโนมัติ",
    "projectNameEn": "โครงการสร้างวิศวกรยานยนต์ไฟฟ้าและระบบอัตโนมัติ",
    "quotaSeats": 45,
    "studyTrack": "วิทย์-คณิต",
    "gpaxMin": 2.75,
    "tuitionFee": "16,000 บาท/ภาคการศึกษา",
    "applicationFee": "200 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "GPAX ≥ 2.75",
      "สนใจเทคโนโลยียานยนต์ไฟฟ้าและระบบสมองกล"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / สำนักวิชาวิศวกรรมศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-sut-ev-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 2.75",
        "nameEn": "Minimum GPAX 2.75",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
        "detailsEn": "5-term cumulative GPA at least 2.75",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-sut-ev-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-sut-ev-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการสร้างวิศวกรยานยนต์ไฟฟ้าและระบบอัตโนมัติ",
        "titleEn": "Application Opens",
        "startDate": "2026-10-01",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-sut-ev-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการสร้างวิศวกรยานยนต์ไฟฟ้าและระบบอัตโนมัติ (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-30",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-up-med-port",
    "branchId": "br-10170101",
    "programId": "prog-up-48",
    "facultyId": "up-health_medicine-48",
    "universityId": "up",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "10170101101801A",
    "projectNameTh": "โครงการรับนักเรียนแพทย์ชุมชนภาคเหนือ",
    "projectNameEn": "โครงการรับนักเรียนแพทย์ชุมชนภาคเหนือ",
    "quotaSeats": 20,
    "studyTrack": "วิทย์-คณิต",
    "gpaxMin": 3.5,
    "tuitionFee": "20,000 บาท/ภาคการศึกษา",
    "applicationFee": "400 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 25% + Portfolio 45% + MMI 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "โรงเรียนในเขตภาคเหนือ",
      "GPAX ≥ 3.50",
      "ตาไม่บอดสี"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / คณะแพทยศาสตร์",
      "url": "https://course.mytcas.com/universities/",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-up-med-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX ขั้นต่ำ 3.5",
        "nameEn": "Minimum GPAX 3.5",
        "minScore": "3.5",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3.5",
        "detailsEn": "5-term cumulative GPA at least 3.5",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-up-med-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1 (5 ภาคเรียน)",
        "nameEn": "Transcript",
        "detailsTh": "ฉบับจริงพร้อมตราประทับโรงเรียน",
        "detailsEn": "Official high school transcript",
        "isMandatory": true,
        "submissionFormat": "PDF"
      }
    ],
    "events": [
      {
        "id": "ev-proj-up-med-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัคร โครงการรับนักเรียนแพทย์ชุมชนภาคเหนือ",
        "titleEn": "Application Opens",
        "startDate": "2026-10-15",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-up-med-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัคร โครงการรับนักเรียนแพทย์ชุมชนภาคเหนือ (23:59 น.)",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cmu-0-port",
    "branchId": "br-cmu-0",
    "programId": "prog-cmu-exp-0",
    "facultyId": "cmu-fac-architecture_design-0",
    "universityId": "cmu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "20010301101801A",
    "projectNameTh": "โครงการพัฒนาอัจฉริยภาพทางสถาปัตยกรรมและการออกแบบ (มช.)",
    "projectNameEn": "Direct Admission Project (CMU)",
    "quotaSeats": 20,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "16000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ข้อมูลเบื้องต้นจาก myTCAS รอประกาศทางการฉบับเต็ม"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/CMU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยเชียงใหม่ (มช.)",
      "url": "https://course.mytcas.com/universities/CMU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "unverified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-0-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-0-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-0-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา CMU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/CMU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      },
      {
        "id": "ev-proj-cmu-0-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร CMU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/CMU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      }
    ]
  },
  {
    "id": "proj-cmu-3-port",
    "branchId": "br-cmu-3",
    "programId": "prog-cmu-exp-3",
    "facultyId": "cmu-fac-law_politics-3",
    "universityId": "cmu",
    "round": "TCAS2_QUOTA",
    "tcasProgramCode": "20040304101801A",
    "projectNameTh": "โครงการโควตานักเรียน 17 จังหวัดภาคเหนือ (รัฐประศาสนศาสตร์ มช.)",
    "projectNameEn": "Direct Admission Project (CMU)",
    "quotaSeats": 35,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "20500 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ตรวจสอบข้อมูลตามประกาศทางการของมหาวิทยาลัยแล้ว"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/CMU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยเชียงใหม่ (มช.)",
      "url": "https://course.mytcas.com/universities/CMU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-3-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-3-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-3-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา CMU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/CMU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-cmu-3-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร CMU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/CMU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-cmu-6-port",
    "branchId": "br-cmu-6",
    "programId": "prog-cmu-exp-6",
    "facultyId": "cmu-fac-engineering-6",
    "universityId": "cmu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "20070307101801A",
    "projectNameTh": "โครงการส่งเสริมผู้มีความสามารถพิเศษทางวิศวกรรมชีวการแพทย์และ AI (มช.)",
    "projectNameEn": "Direct Admission Project (CMU)",
    "quotaSeats": 50,
    "studyTrack": "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
    "gpaxMin": 2.75,
    "tuitionFee": "25000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ข้อมูลเบื้องต้นจาก myTCAS รอประกาศทางการฉบับเต็ม"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/CMU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยเชียงใหม่ (มช.)",
      "url": "https://course.mytcas.com/universities/CMU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "unverified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-6-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-6-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-6-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา CMU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/CMU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      },
      {
        "id": "ev-proj-cmu-6-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร CMU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/CMU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      }
    ]
  },
  {
    "id": "proj-cmu-9-port",
    "branchId": "br-cmu-9",
    "programId": "prog-cmu-exp-9",
    "facultyId": "cmu-fac-science_computing-9",
    "universityId": "cmu",
    "round": "TCAS2_QUOTA",
    "tcasProgramCode": "20100310101801A",
    "projectNameTh": "โครงการโควตาภาคเหนือและโรงเรียนเครือข่ายวิจัยชีวสารสนเทศ (มช.)",
    "projectNameEn": "Direct Admission Project (CMU)",
    "quotaSeats": 25,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "29500 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ข้อมูลเบื้องต้นจาก myTCAS รอประกาศทางการฉบับเต็ม"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/CMU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยเชียงใหม่ (มช.)",
      "url": "https://course.mytcas.com/universities/CMU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "unverified"
    },
    "requirements": [
      {
        "id": "req-proj-cmu-9-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cmu-9-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-cmu-9-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา CMU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/CMU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      },
      {
        "id": "ev-proj-cmu-9-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร CMU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/CMU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      }
    ]
  },
  {
    "id": "proj-cu-0-port",
    "branchId": "br-cu-0",
    "programId": "prog-cu-exp-0",
    "facultyId": "cu-fac-architecture_design-0",
    "universityId": "cu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "20010201101801A",
    "projectNameTh": "โครงการคัดเลือกนักเรียนที่มีความเป็นเลิศทางการออกแบบและสถาปัตยกรรม (จุฬาฯ)",
    "projectNameEn": "Direct Admission Project (CU)",
    "quotaSeats": 20,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "16000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ข้อมูลเบื้องต้นจาก myTCAS รอประกาศทางการฉบับเต็ม"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/CU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / จุฬาลงกรณ์มหาวิทยาลัย",
      "url": "https://course.mytcas.com/universities/CU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "unverified"
    },
    "requirements": [
      {
        "id": "req-proj-cu-0-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cu-0-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-cu-0-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา CU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/CU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      },
      {
        "id": "ev-proj-cu-0-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร CU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/CU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      }
    ]
  },
  {
    "id": "proj-cu-3-port",
    "branchId": "br-cu-3",
    "programId": "prog-cu-exp-3",
    "facultyId": "cu-fac-law_politics-3",
    "universityId": "cu",
    "round": "TCAS2_QUOTA",
    "tcasProgramCode": "20040204101801A",
    "projectNameTh": "โครงการจุฬาฯ-ชนบท และผู้มีความสามารถพิเศษทางการบริหารภาครัฐ",
    "projectNameEn": "Direct Admission Project (CU)",
    "quotaSeats": 35,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "20500 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ข้อมูลเบื้องต้นจาก myTCAS รอประกาศทางการฉบับเต็ม"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/CU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / จุฬาลงกรณ์มหาวิทยาลัย",
      "url": "https://course.mytcas.com/universities/CU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "unverified"
    },
    "requirements": [
      {
        "id": "req-proj-cu-3-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cu-3-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-cu-3-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา CU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/CU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      },
      {
        "id": "ev-proj-cu-3-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร CU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/CU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      }
    ]
  },
  {
    "id": "proj-cu-6-port",
    "branchId": "br-cu-6",
    "programId": "prog-cu-exp-6",
    "facultyId": "cu-fac-engineering-6",
    "universityId": "cu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "20070207101801A",
    "projectNameTh": "โครงการคัดเลือกนักเรียนผู้มีความสามารถพิเศษทางนวัตกรรมวิศวกรรมชีวการแพทย์ (CU)",
    "projectNameEn": "Direct Admission Project (CU)",
    "quotaSeats": 50,
    "studyTrack": "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
    "gpaxMin": 2.75,
    "tuitionFee": "25000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ข้อมูลเบื้องต้นจาก myTCAS รอประกาศทางการฉบับเต็ม"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/CU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / จุฬาลงกรณ์มหาวิทยาลัย",
      "url": "https://course.mytcas.com/universities/CU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "unverified"
    },
    "requirements": [
      {
        "id": "req-proj-cu-6-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cu-6-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-cu-6-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา CU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/CU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      },
      {
        "id": "ev-proj-cu-6-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร CU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/CU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      }
    ]
  },
  {
    "id": "proj-cu-9-port",
    "branchId": "br-cu-9",
    "programId": "prog-cu-exp-9",
    "facultyId": "cu-fac-science_computing-9",
    "universityId": "cu",
    "round": "TCAS2_QUOTA",
    "tcasProgramCode": "20100210101801A",
    "projectNameTh": "โครงการส่งเสริมนักวิทยาการข้อมูลชีวภาพและจีโนมิกส์ (จุฬาฯ)",
    "projectNameEn": "Direct Admission Project (CU)",
    "quotaSeats": 25,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "29500 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ข้อมูลเบื้องต้นจาก myTCAS รอประกาศทางการฉบับเต็ม"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/CU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / จุฬาลงกรณ์มหาวิทยาลัย",
      "url": "https://course.mytcas.com/universities/CU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "unverified"
    },
    "requirements": [
      {
        "id": "req-proj-cu-9-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-cu-9-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-cu-9-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา CU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/CU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      },
      {
        "id": "ev-proj-cu-9-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร CU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/CU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      }
    ]
  },
  {
    "id": "proj-mu-2-port",
    "branchId": "br-mu-2",
    "programId": "prog-mu-exp-2",
    "facultyId": "mu-fac-humanities_social-2",
    "universityId": "mu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "20030203101801A",
    "projectNameTh": "โครงการผู้มีความสามารถพิเศษด้านการท่องเที่ยวเชิงนวัตกรรมและการบริการสากล (ม.มหิดล)",
    "projectNameEn": "Direct Admission Project (MU)",
    "quotaSeats": 30,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "19000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ตรวจสอบข้อมูลตามประกาศทางการของมหาวิทยาลัยแล้ว"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/MU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยมหิดล",
      "url": "https://course.mytcas.com/universities/MU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-mu-2-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-mu-2-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-mu-2-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา MU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/MU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-mu-2-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร MU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/MU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-mu-5-port",
    "branchId": "br-mu-5",
    "programId": "prog-mu-exp-5",
    "facultyId": "mu-fac-agriculture_environment-5",
    "universityId": "mu",
    "round": "TCAS2_QUOTA",
    "tcasProgramCode": "20060206101801A",
    "projectNameTh": "โครงการโควตาวิทยาเขตกาญจนบุรีและโรงเรียนเครือข่ายเกษตรนวัตกรรมอาหาร (ม.มหิดล)",
    "projectNameEn": "Direct Admission Project (MU)",
    "quotaSeats": 45,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "23500 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ตรวจสอบข้อมูลตามประกาศทางการของมหาวิทยาลัยแล้ว"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/MU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยมหิดล",
      "url": "https://course.mytcas.com/universities/MU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-mu-5-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-mu-5-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-mu-5-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา MU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/MU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-mu-5-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร MU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/MU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-mu-8-port",
    "branchId": "br-mu-8",
    "programId": "prog-mu-exp-8",
    "facultyId": "mu-fac-communication_arts-8",
    "universityId": "mu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "20090209101801A",
    "projectNameTh": "โครงการผลิตนักสื่อสารดิจิทัลและคอนเทนต์ครีเอเตอร์แห่งอนาคต (ICT/ม.มหิดล)",
    "projectNameEn": "Direct Admission Project (MU)",
    "quotaSeats": 20,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "28000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ตรวจสอบข้อมูลตามประกาศทางการของมหาวิทยาลัยแล้ว"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/MU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยมหิดล",
      "url": "https://course.mytcas.com/universities/MU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-mu-8-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-mu-8-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-mu-8-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา MU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/MU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-mu-8-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร MU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/MU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-tu-1-port",
    "branchId": "br-tu-1",
    "programId": "prog-tu-exp-1",
    "facultyId": "tu-fac-health_medicine-1",
    "universityId": "tu",
    "round": "TCAS2_QUOTA",
    "tcasProgramCode": "20020202101801A",
    "projectNameTh": "โครงการส่งเสริมและพัฒนานักกีฬาและวิทยาศาสตร์การกีฬา (มธ.)",
    "projectNameEn": "Direct Admission Project (TU)",
    "quotaSeats": 25,
    "studyTrack": "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
    "gpaxMin": 3.25,
    "tuitionFee": "17500 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3.25",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ข้อมูลเบื้องต้นจาก myTCAS รอประกาศทางการฉบับเต็ม"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/TU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยธรรมศาสตร์ (มธ.)",
      "url": "https://course.mytcas.com/universities/TU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "unverified"
    },
    "requirements": [
      {
        "id": "req-proj-tu-1-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "3.25",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-tu-1-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-tu-1-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา TU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/TU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      },
      {
        "id": "ev-proj-tu-1-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร TU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/TU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      }
    ]
  },
  {
    "id": "proj-tu-4-port",
    "branchId": "br-tu-4",
    "programId": "prog-tu-exp-4",
    "facultyId": "tu-fac-science_computing-4",
    "universityId": "tu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "20050205101801A",
    "projectNameTh": "โครงการผู้มีความสามารถพิเศษด้านวิทยาศาสตร์และพลังงานทางเลือก (มธ.)",
    "projectNameEn": "Direct Admission Project (TU)",
    "quotaSeats": 40,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "22000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ตรวจสอบข้อมูลตามประกาศทางการของมหาวิทยาลัยแล้ว"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/TU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยธรรมศาสตร์ (มธ.)",
      "url": "https://course.mytcas.com/universities/TU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-tu-4-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-tu-4-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-tu-4-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา TU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/TU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-tu-4-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร TU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/TU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-tu-7-port",
    "branchId": "br-tu-7",
    "programId": "prog-tu-exp-7",
    "facultyId": "tu-fac-business_econ-7",
    "universityId": "tu",
    "round": "TCAS2_QUOTA",
    "tcasProgramCode": "20080208101801A",
    "projectNameTh": "โครงการธรรมศาสตร์ช้างเผือกและโควตานักโลจิสติกส์การค้าระหว่างประเทศ",
    "projectNameEn": "Direct Admission Project (TU)",
    "quotaSeats": 55,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "26500 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ข้อมูลเบื้องต้นจาก myTCAS รอประกาศทางการฉบับเต็ม"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/TU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยธรรมศาสตร์ (มธ.)",
      "url": "https://course.mytcas.com/universities/TU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "unverified"
    },
    "requirements": [
      {
        "id": "req-proj-tu-7-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-tu-7-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-tu-7-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา TU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/TU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      },
      {
        "id": "ev-proj-tu-7-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร TU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/TU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      }
    ]
  },
  {
    "id": "proj-ku-1-port",
    "branchId": "br-ku-1",
    "programId": "prog-ku-exp-1",
    "facultyId": "ku-fac-health_medicine-1",
    "universityId": "ku",
    "round": "TCAS2_QUOTA",
    "tcasProgramCode": "20020202101801A",
    "projectNameTh": "โครงการนักกีฬาช้างเผือกและวิทยาศาสตร์การกีฬา (มก.)",
    "projectNameEn": "Direct Admission Project (KU)",
    "quotaSeats": 25,
    "studyTrack": "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
    "gpaxMin": 3.25,
    "tuitionFee": "17500 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3.25",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ข้อมูลเบื้องต้นจาก myTCAS รอประกาศทางการฉบับเต็ม"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/KU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยเกษตรศาสตร์ (มก.)",
      "url": "https://course.mytcas.com/universities/KU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "unverified"
    },
    "requirements": [
      {
        "id": "req-proj-ku-1-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "3.25",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-ku-1-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-ku-1-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา KU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/KU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      },
      {
        "id": "ev-proj-ku-1-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร KU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/KU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      }
    ]
  },
  {
    "id": "proj-ku-4-port",
    "branchId": "br-ku-4",
    "programId": "prog-ku-exp-4",
    "facultyId": "ku-fac-science_computing-4",
    "universityId": "ku",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "20050205101801A",
    "projectNameTh": "โครงการเรียนล่วงหน้า มก. ด้านฟิสิกส์ประยุกต์และพลังงานสะอาด",
    "projectNameEn": "Direct Admission Project (KU)",
    "quotaSeats": 40,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "22000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ข้อมูลเบื้องต้นจาก myTCAS รอประกาศทางการฉบับเต็ม"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/KU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยเกษตรศาสตร์ (มก.)",
      "url": "https://course.mytcas.com/universities/KU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "unverified"
    },
    "requirements": [
      {
        "id": "req-proj-ku-4-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-ku-4-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-ku-4-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา KU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/KU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      },
      {
        "id": "ev-proj-ku-4-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร KU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/KU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      }
    ]
  },
  {
    "id": "proj-ku-7-port",
    "branchId": "br-ku-7",
    "programId": "prog-ku-exp-7",
    "facultyId": "ku-fac-business_econ-7",
    "universityId": "ku",
    "round": "TCAS2_QUOTA",
    "tcasProgramCode": "20080208101801A",
    "projectNameTh": "โครงการโควตาโรงเรียนเครือข่ายด้านโลจิสติกส์และธุรกิจการเกษตร (มก.)",
    "projectNameEn": "Direct Admission Project (KU)",
    "quotaSeats": 55,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "26500 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ตรวจสอบข้อมูลตามประกาศทางการของมหาวิทยาลัยแล้ว"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/KU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยเกษตรศาสตร์ (มก.)",
      "url": "https://course.mytcas.com/universities/KU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-ku-7-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-ku-7-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-ku-7-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา KU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/KU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-ku-7-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร KU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/KU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-kmutt-1-port",
    "branchId": "br-kmutt-1",
    "programId": "prog-kmutt-exp-1",
    "facultyId": "kmutt-fac-health_medicine-1",
    "universityId": "kmutt",
    "round": "TCAS2_QUOTA",
    "tcasProgramCode": "20020502101801A",
    "projectNameTh": "โครงการส่งเสริมผู้มีความสามารถพิเศษด้านสมรรถภาพทางกายและนวัตกรรมกีฬา (มจธ.)",
    "projectNameEn": "Direct Admission Project (KMUTT)",
    "quotaSeats": 25,
    "studyTrack": "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
    "gpaxMin": 3.25,
    "tuitionFee": "17500 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3.25",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ตรวจสอบข้อมูลตามประกาศทางการของมหาวิทยาลัยแล้ว"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/KMUTT",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (มจธ.)",
      "url": "https://course.mytcas.com/universities/KMUTT",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-kmutt-1-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "3.25",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-kmutt-1-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-kmutt-1-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา KMUTT",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/KMUTT",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-kmutt-1-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร KMUTT",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/KMUTT",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-kmutt-4-port",
    "branchId": "br-kmutt-4",
    "programId": "prog-kmutt-exp-4",
    "facultyId": "kmutt-fac-science_computing-4",
    "universityId": "kmutt",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "20050505101801A",
    "projectNameTh": "โครงการ 2B-KMUTT และ Active Recruitment สาขาพลังงานสะอาดและวัสดุศาสตร์",
    "projectNameEn": "Direct Admission Project (KMUTT)",
    "quotaSeats": 40,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "22000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ตรวจสอบข้อมูลตามประกาศทางการของมหาวิทยาลัยแล้ว"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/KMUTT",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (มจธ.)",
      "url": "https://course.mytcas.com/universities/KMUTT",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-kmutt-4-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-kmutt-4-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-kmutt-4-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา KMUTT",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/KMUTT",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-kmutt-4-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร KMUTT",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/KMUTT",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-kmutt-7-port",
    "branchId": "br-kmutt-7",
    "programId": "prog-kmutt-exp-7",
    "facultyId": "kmutt-fac-business_econ-7",
    "universityId": "kmutt",
    "round": "TCAS2_QUOTA",
    "tcasProgramCode": "20080508101801A",
    "projectNameTh": "โครงการคัดเลือกตรงเพื่อกระจายโอกาสทางการศึกษา (โลจิสติกส์ มจธ.)",
    "projectNameEn": "Direct Admission Project (KMUTT)",
    "quotaSeats": 55,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "26500 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ตรวจสอบข้อมูลตามประกาศทางการของมหาวิทยาลัยแล้ว"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/KMUTT",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (มจธ.)",
      "url": "https://course.mytcas.com/universities/KMUTT",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-kmutt-7-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-kmutt-7-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-kmutt-7-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา KMUTT",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/KMUTT",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-kmutt-7-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร KMUTT",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/KMUTT",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-kmitl-1-port",
    "branchId": "br-kmitl-1",
    "programId": "prog-kmitl-exp-1",
    "facultyId": "kmitl-fac-health_medicine-1",
    "universityId": "kmitl",
    "round": "TCAS2_QUOTA",
    "tcasProgramCode": "20020502101801A",
    "projectNameTh": "โครงการช้างเผือกลาดกระบังและวิทยาศาสตร์การกีฬา",
    "projectNameEn": "Direct Admission Project (KMITL)",
    "quotaSeats": 25,
    "studyTrack": "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
    "gpaxMin": 3.25,
    "tuitionFee": "17500 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3.25",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ข้อมูลเบื้องต้นจาก myTCAS รอประกาศทางการฉบับเต็ม"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/KMITL",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง (สจล.)",
      "url": "https://course.mytcas.com/universities/KMITL",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "unverified"
    },
    "requirements": [
      {
        "id": "req-proj-kmitl-1-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "3.25",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-kmitl-1-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-kmitl-1-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา KMITL",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/KMITL",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      },
      {
        "id": "ev-proj-kmitl-1-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร KMITL",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/KMITL",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      }
    ]
  },
  {
    "id": "proj-kmitl-4-port",
    "branchId": "br-kmitl-4",
    "programId": "prog-kmitl-exp-4",
    "facultyId": "kmitl-fac-science_computing-4",
    "universityId": "kmitl",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "20050505101801A",
    "projectNameTh": "โครงการ KMITL Young Innovator ด้านพลังงานยั่งยืนและวัสดุขั้นสูง",
    "projectNameEn": "Direct Admission Project (KMITL)",
    "quotaSeats": 40,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "22000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ตรวจสอบข้อมูลตามประกาศทางการของมหาวิทยาลัยแล้ว"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/KMITL",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง (สจล.)",
      "url": "https://course.mytcas.com/universities/KMITL",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-kmitl-4-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-kmitl-4-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-kmitl-4-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา KMITL",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/KMITL",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-kmitl-4-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร KMITL",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/KMITL",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-kmitl-7-port",
    "branchId": "br-kmitl-7",
    "programId": "prog-kmitl-exp-7",
    "facultyId": "kmitl-fac-business_econ-7",
    "universityId": "kmitl",
    "round": "TCAS2_QUOTA",
    "tcasProgramCode": "20080508101801A",
    "projectNameTh": "โครงการโควตาโรงเรียนเครือข่าย สจล. สาขาวิศวกรรมโลจิสติกส์และการค้าดิจิทัล",
    "projectNameEn": "Direct Admission Project (KMITL)",
    "quotaSeats": 55,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "26500 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ตรวจสอบข้อมูลตามประกาศทางการของมหาวิทยาลัยแล้ว"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/KMITL",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง (สจล.)",
      "url": "https://course.mytcas.com/universities/KMITL",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-kmitl-7-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-kmitl-7-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-kmitl-7-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา KMITL",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/KMITL",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-kmitl-7-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร KMITL",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/KMITL",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-kmutnb-1-port",
    "branchId": "br-kmutnb-1",
    "programId": "prog-kmutnb-exp-1",
    "facultyId": "kmutnb-fac-health_medicine-1",
    "universityId": "kmutnb",
    "round": "TCAS2_QUOTA",
    "tcasProgramCode": "20020602101801A",
    "projectNameTh": "โครงการผู้มีความสามารถดีเด่นด้านกีฬาและสุขภาพ มจพ.",
    "projectNameEn": "Direct Admission Project (KMUTNB)",
    "quotaSeats": 25,
    "studyTrack": "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
    "gpaxMin": 3.25,
    "tuitionFee": "17500 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3.25",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ข้อมูลเบื้องต้นจาก myTCAS รอประกาศทางการฉบับเต็ม"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/KMUTNB",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ (มจพ.)",
      "url": "https://course.mytcas.com/universities/KMUTNB",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "unverified"
    },
    "requirements": [
      {
        "id": "req-proj-kmutnb-1-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "3.25",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-kmutnb-1-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-kmutnb-1-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา KMUTNB",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/KMUTNB",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      },
      {
        "id": "ev-proj-kmutnb-1-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร KMUTNB",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/KMUTNB",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      }
    ]
  },
  {
    "id": "proj-kmutnb-4-port",
    "branchId": "br-kmutnb-4",
    "programId": "prog-kmutnb-exp-4",
    "facultyId": "kmutnb-fac-science_computing-4",
    "universityId": "kmutnb",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "20050605101801A",
    "projectNameTh": "โครงการรับตรงผู้มีความสามารถทางวิชาการและเทคโนโลยีวัสดุ มจพ.",
    "projectNameEn": "Direct Admission Project (KMUTNB)",
    "quotaSeats": 40,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "22000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ข้อมูลเบื้องต้นจาก myTCAS รอประกาศทางการฉบับเต็ม"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/KMUTNB",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ (มจพ.)",
      "url": "https://course.mytcas.com/universities/KMUTNB",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "unverified"
    },
    "requirements": [
      {
        "id": "req-proj-kmutnb-4-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-kmutnb-4-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-kmutnb-4-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา KMUTNB",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/KMUTNB",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      },
      {
        "id": "ev-proj-kmutnb-4-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร KMUTNB",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/KMUTNB",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      }
    ]
  },
  {
    "id": "proj-kmutnb-7-port",
    "branchId": "br-kmutnb-7",
    "programId": "prog-kmutnb-exp-7",
    "facultyId": "kmutnb-fac-business_econ-7",
    "universityId": "kmutnb",
    "round": "TCAS2_QUOTA",
    "tcasProgramCode": "20080608101801A",
    "projectNameTh": "โครงการโควตากลุ่มโรงเรียนมัธยมและอาชีวศึกษา (โลจิสติกส์ มจพ.)",
    "projectNameEn": "Direct Admission Project (KMUTNB)",
    "quotaSeats": 55,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "26500 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ข้อมูลเบื้องต้นจาก myTCAS รอประกาศทางการฉบับเต็ม"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/KMUTNB",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ (มจพ.)",
      "url": "https://course.mytcas.com/universities/KMUTNB",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "unverified"
    },
    "requirements": [
      {
        "id": "req-proj-kmutnb-7-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-kmutnb-7-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-kmutnb-7-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา KMUTNB",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/KMUTNB",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      },
      {
        "id": "ev-proj-kmutnb-7-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร KMUTNB",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/KMUTNB",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      }
    ]
  },
  {
    "id": "proj-kku-1-port",
    "branchId": "br-kku-1",
    "programId": "prog-kku-exp-1",
    "facultyId": "kku-fac-health_medicine-1",
    "universityId": "kku",
    "round": "TCAS2_QUOTA",
    "tcasProgramCode": "20020302101801A",
    "projectNameTh": "โครงการโควตาภาคตะวันออกเฉียงเหนือ (วิทยาศาสตร์การกีฬา มข.)",
    "projectNameEn": "Direct Admission Project (KKU)",
    "quotaSeats": 25,
    "studyTrack": "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
    "gpaxMin": 3.25,
    "tuitionFee": "17500 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3.25",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ข้อมูลเบื้องต้นจาก myTCAS รอประกาศทางการฉบับเต็ม"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/KKU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยขอนแก่น (มข.)",
      "url": "https://course.mytcas.com/universities/KKU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "unverified"
    },
    "requirements": [
      {
        "id": "req-proj-kku-1-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "3.25",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-kku-1-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-kku-1-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา KKU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/KKU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      },
      {
        "id": "ev-proj-kku-1-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร KKU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/KKU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      }
    ]
  },
  {
    "id": "proj-kku-4-port",
    "branchId": "br-kku-4",
    "programId": "prog-kku-exp-4",
    "facultyId": "kku-fac-science_computing-4",
    "universityId": "kku",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "20050305101801A",
    "projectNameTh": "โครงการผู้มีศักยภาพสูง มข. ด้านวิทยาศาสตร์กายภาพและพลังงานใหม่",
    "projectNameEn": "Direct Admission Project (KKU)",
    "quotaSeats": 40,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "22000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ตรวจสอบข้อมูลตามประกาศทางการของมหาวิทยาลัยแล้ว"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/KKU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยขอนแก่น (มข.)",
      "url": "https://course.mytcas.com/universities/KKU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-kku-4-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-kku-4-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-kku-4-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา KKU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/KKU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-kku-4-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร KKU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/KKU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-kku-7-port",
    "branchId": "br-kku-7",
    "programId": "prog-kku-exp-7",
    "facultyId": "kku-fac-business_econ-7",
    "universityId": "kku",
    "round": "TCAS2_QUOTA",
    "tcasProgramCode": "20080308101801A",
    "projectNameTh": "โครงการโควตาภาคตะวันออกเฉียงเหนือ NETSAT (การจัดการโลจิสติกส์ มข.)",
    "projectNameEn": "Direct Admission Project (KKU)",
    "quotaSeats": 55,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "26500 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ข้อมูลเบื้องต้นจาก myTCAS รอประกาศทางการฉบับเต็ม"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/KKU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยขอนแก่น (มข.)",
      "url": "https://course.mytcas.com/universities/KKU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "unverified"
    },
    "requirements": [
      {
        "id": "req-proj-kku-7-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-kku-7-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-kku-7-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา KKU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/KKU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      },
      {
        "id": "ev-proj-kku-7-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร KKU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/KKU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      }
    ]
  },
  {
    "id": "proj-psu-2-port",
    "branchId": "br-psu-2",
    "programId": "prog-psu-exp-2",
    "facultyId": "psu-fac-humanities_social-2",
    "universityId": "psu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "20030303101801A",
    "projectNameTh": "โครงการรับตรงด้วย Portfolio ด้านการท่องเที่ยวและการบริการสากล (ม.อ.)",
    "projectNameEn": "Direct Admission Project (PSU)",
    "quotaSeats": 30,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "19000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ข้อมูลเบื้องต้นจาก myTCAS รอประกาศทางการฉบับเต็ม"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/PSU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยสงขลานครินทร์ (ม.อ.)",
      "url": "https://course.mytcas.com/universities/PSU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "unverified"
    },
    "requirements": [
      {
        "id": "req-proj-psu-2-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-psu-2-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-psu-2-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา PSU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/PSU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      },
      {
        "id": "ev-proj-psu-2-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร PSU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/PSU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      }
    ]
  },
  {
    "id": "proj-psu-5-port",
    "branchId": "br-psu-5",
    "programId": "prog-psu-exp-5",
    "facultyId": "psu-fac-agriculture_environment-5",
    "universityId": "psu",
    "round": "TCAS2_QUOTA",
    "tcasProgramCode": "20060306101801A",
    "projectNameTh": "โครงการโควตา 14 จังหวัดภาคใต้ สาขาเทคโนโลยีและนวัตกรรมอาหาร (ม.อ.)",
    "projectNameEn": "Direct Admission Project (PSU)",
    "quotaSeats": 45,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "23500 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ตรวจสอบข้อมูลตามประกาศทางการของมหาวิทยาลัยแล้ว"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/PSU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยสงขลานครินทร์ (ม.อ.)",
      "url": "https://course.mytcas.com/universities/PSU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-psu-5-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-psu-5-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-psu-5-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา PSU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/PSU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-psu-5-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร PSU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/PSU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-psu-8-port",
    "branchId": "br-psu-8",
    "programId": "prog-psu-exp-8",
    "facultyId": "psu-fac-communication_arts-8",
    "universityId": "psu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "20090309101801A",
    "projectNameTh": "โครงการดาวรุ่งมุ่ง ม.อ. ด้านสื่อดิจิทัลและคอนเทนต์สร้างสรรค์",
    "projectNameEn": "Direct Admission Project (PSU)",
    "quotaSeats": 20,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "28000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ตรวจสอบข้อมูลตามประกาศทางการของมหาวิทยาลัยแล้ว"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/PSU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยสงขลานครินทร์ (ม.อ.)",
      "url": "https://course.mytcas.com/universities/PSU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-psu-8-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-psu-8-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-psu-8-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา PSU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/PSU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-psu-8-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร PSU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/PSU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-swu-2-port",
    "branchId": "br-swu-2",
    "programId": "prog-swu-exp-2",
    "facultyId": "swu-fac-humanities_social-2",
    "universityId": "swu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "20030303101801A",
    "projectNameTh": "โครงการเด็กดีมีที่เรียน มศว ด้านการบริการและการท่องเที่ยวระดับนานาชาติ",
    "projectNameEn": "Direct Admission Project (SWU)",
    "quotaSeats": 30,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "19000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ตรวจสอบข้อมูลตามประกาศทางการของมหาวิทยาลัยแล้ว"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/SWU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยศรีนครินทรวิโรฒ (มศว)",
      "url": "https://course.mytcas.com/universities/SWU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-swu-2-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-swu-2-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-swu-2-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา SWU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/SWU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-swu-2-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร SWU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/SWU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-swu-5-port",
    "branchId": "br-swu-5",
    "programId": "prog-swu-exp-5",
    "facultyId": "swu-fac-agriculture_environment-5",
    "universityId": "swu",
    "round": "TCAS2_QUOTA",
    "tcasProgramCode": "20060306101801A",
    "projectNameTh": "โครงการโควตาโรงเรียนเครือข่ายสาธิตและภูมิภาค (นวัตกรรมอาหาร มศว)",
    "projectNameEn": "Direct Admission Project (SWU)",
    "quotaSeats": 45,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "23500 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ตรวจสอบข้อมูลตามประกาศทางการของมหาวิทยาลัยแล้ว"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/SWU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยศรีนครินทรวิโรฒ (มศว)",
      "url": "https://course.mytcas.com/universities/SWU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-swu-5-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-swu-5-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-swu-5-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา SWU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/SWU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-swu-5-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร SWU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/SWU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-swu-8-port",
    "branchId": "br-swu-8",
    "programId": "prog-swu-exp-8",
    "facultyId": "swu-fac-communication_arts-8",
    "universityId": "swu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "20090309101801A",
    "projectNameTh": "โครงการผู้มีความสามารถพิเศษด้านนวัตกรรมสื่อสารสังคมและคอนเทนต์ดิจิทัล มศว",
    "projectNameEn": "Direct Admission Project (SWU)",
    "quotaSeats": 20,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "28000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ข้อมูลเบื้องต้นจาก myTCAS รอประกาศทางการฉบับเต็ม"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/SWU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยศรีนครินทรวิโรฒ (มศว)",
      "url": "https://course.mytcas.com/universities/SWU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "unverified"
    },
    "requirements": [
      {
        "id": "req-proj-swu-8-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-swu-8-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-swu-8-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา SWU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/SWU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      },
      {
        "id": "ev-proj-swu-8-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร SWU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/SWU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      }
    ]
  },
  {
    "id": "proj-nu-1-port",
    "branchId": "br-nu-1",
    "programId": "prog-nu-exp-1",
    "facultyId": "nu-fac-health_medicine-1",
    "universityId": "nu",
    "round": "TCAS2_QUOTA",
    "tcasProgramCode": "20020202101801A",
    "projectNameTh": "โครงการโควตา 9 จังหวัดภาคเหนือตอนล่าง สาขาวิทยาศาสตร์การกีฬา (มน.)",
    "projectNameEn": "Direct Admission Project (NU)",
    "quotaSeats": 25,
    "studyTrack": "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
    "gpaxMin": 3.25,
    "tuitionFee": "17500 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3.25",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ตรวจสอบข้อมูลตามประกาศทางการของมหาวิทยาลัยแล้ว"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/NU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยนเรศวร (มน.)",
      "url": "https://course.mytcas.com/universities/NU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-nu-1-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "3.25",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-nu-1-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-nu-1-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา NU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/NU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-nu-1-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร NU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/NU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-nu-4-port",
    "branchId": "br-nu-4",
    "programId": "prog-nu-exp-4",
    "facultyId": "nu-fac-science_computing-4",
    "universityId": "nu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "20050205101801A",
    "projectNameTh": "โครงการเรียนดี ม.นเรศวร ด้านฟิสิกส์ประยุกต์และพลังงานสะอาด",
    "projectNameEn": "Direct Admission Project (NU)",
    "quotaSeats": 40,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "22000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ตรวจสอบข้อมูลตามประกาศทางการของมหาวิทยาลัยแล้ว"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/NU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยนเรศวร (มน.)",
      "url": "https://course.mytcas.com/universities/NU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-nu-4-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-nu-4-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-nu-4-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา NU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/NU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-nu-4-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร NU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/NU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-nu-7-port",
    "branchId": "br-nu-7",
    "programId": "prog-nu-exp-7",
    "facultyId": "nu-fac-business_econ-7",
    "universityId": "nu",
    "round": "TCAS2_QUOTA",
    "tcasProgramCode": "20080208101801A",
    "projectNameTh": "โครงการโควตาส่งเสริมนักบริหารโลจิสติกส์ภาคเหนือตอนล่าง (มน.)",
    "projectNameEn": "Direct Admission Project (NU)",
    "quotaSeats": 55,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "26500 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ข้อมูลเบื้องต้นจาก myTCAS รอประกาศทางการฉบับเต็ม"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/NU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยนเรศวร (มน.)",
      "url": "https://course.mytcas.com/universities/NU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "unverified"
    },
    "requirements": [
      {
        "id": "req-proj-nu-7-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-nu-7-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-nu-7-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา NU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/NU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      },
      {
        "id": "ev-proj-nu-7-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร NU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/NU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      }
    ]
  },
  {
    "id": "proj-mfu-2-port",
    "branchId": "br-mfu-2",
    "programId": "prog-mfu-exp-2",
    "facultyId": "mfu-fac-humanities_social-2",
    "universityId": "mfu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "20030303101801A",
    "projectNameTh": "โครงการรับตรงทั่วประเทศและนานาชาติ MFU (Hospitality & Tourism)",
    "projectNameEn": "Direct Admission Project (MFU)",
    "quotaSeats": 30,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "19000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ข้อมูลเบื้องต้นจาก myTCAS รอประกาศทางการฉบับเต็ม"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/MFU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยแม่ฟ้าหลวง (มฟล.)",
      "url": "https://course.mytcas.com/universities/MFU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "unverified"
    },
    "requirements": [
      {
        "id": "req-proj-mfu-2-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-mfu-2-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-mfu-2-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา MFU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/MFU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      },
      {
        "id": "ev-proj-mfu-2-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร MFU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/MFU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      }
    ]
  },
  {
    "id": "proj-mfu-5-port",
    "branchId": "br-mfu-5",
    "programId": "prog-mfu-exp-5",
    "facultyId": "mfu-fac-agriculture_environment-5",
    "universityId": "mfu",
    "round": "TCAS2_QUOTA",
    "tcasProgramCode": "20060306101801A",
    "projectNameTh": "โครงการโควตา 17 จังหวัดภาคเหนือ (เทคโนโลยีอาหาร มฟล.)",
    "projectNameEn": "Direct Admission Project (MFU)",
    "quotaSeats": 45,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "23500 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ตรวจสอบข้อมูลตามประกาศทางการของมหาวิทยาลัยแล้ว"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/MFU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยแม่ฟ้าหลวง (มฟล.)",
      "url": "https://course.mytcas.com/universities/MFU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-mfu-5-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-mfu-5-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-mfu-5-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา MFU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/MFU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-mfu-5-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร MFU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/MFU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-mfu-8-port",
    "branchId": "br-mfu-8",
    "programId": "prog-mfu-exp-8",
    "facultyId": "mfu-fac-communication_arts-8",
    "universityId": "mfu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "20090309101801A",
    "projectNameTh": "โครงการผู้มีความสามารถพิเศษด้านการสื่อสารดิจิทัลและภาษา (มฟล.)",
    "projectNameEn": "Direct Admission Project (MFU)",
    "quotaSeats": 20,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "28000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ตรวจสอบข้อมูลตามประกาศทางการของมหาวิทยาลัยแล้ว"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/MFU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยแม่ฟ้าหลวง (มฟล.)",
      "url": "https://course.mytcas.com/universities/MFU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-mfu-8-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-mfu-8-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-mfu-8-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา MFU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/MFU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-mfu-8-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร MFU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/MFU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-buu-1-port",
    "branchId": "br-buu-1",
    "programId": "prog-buu-exp-1",
    "facultyId": "buu-fac-health_medicine-1",
    "universityId": "buu",
    "round": "TCAS2_QUOTA",
    "tcasProgramCode": "20020302101801A",
    "projectNameTh": "โครงการโควตา 12 จังหวัดภาคตะวันออก สาขาวิทยาศาสตร์การกีฬา ม.บูรพา",
    "projectNameEn": "Direct Admission Project (BUU)",
    "quotaSeats": 25,
    "studyTrack": "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
    "gpaxMin": 3.25,
    "tuitionFee": "17500 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 3.25",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ข้อมูลเบื้องต้นจาก myTCAS รอประกาศทางการฉบับเต็ม"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/BUU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยบูรพา (มบ.)",
      "url": "https://course.mytcas.com/universities/BUU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "unverified"
    },
    "requirements": [
      {
        "id": "req-proj-buu-1-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "3.25",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-buu-1-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-buu-1-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา BUU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/BUU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      },
      {
        "id": "ev-proj-buu-1-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร BUU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/BUU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      }
    ]
  },
  {
    "id": "proj-buu-4-port",
    "branchId": "br-buu-4",
    "programId": "prog-buu-exp-4",
    "facultyId": "buu-fac-science_computing-4",
    "universityId": "buu",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "20050305101801A",
    "projectNameTh": "โครงการเรียนดี ม.บูรพา ด้านพลังงานสะอาดและวิทยาศาสตร์วัสดุ",
    "projectNameEn": "Direct Admission Project (BUU)",
    "quotaSeats": 40,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "22000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ตรวจสอบข้อมูลตามประกาศทางการของมหาวิทยาลัยแล้ว"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/BUU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยบูรพา (มบ.)",
      "url": "https://course.mytcas.com/universities/BUU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-buu-4-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-buu-4-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-buu-4-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา BUU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/BUU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-buu-4-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร BUU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/BUU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-buu-7-port",
    "branchId": "br-buu-7",
    "programId": "prog-buu-exp-7",
    "facultyId": "buu-fac-business_econ-7",
    "universityId": "buu",
    "round": "TCAS2_QUOTA",
    "tcasProgramCode": "20080308101801A",
    "projectNameTh": "โครงการโควตานักโลจิสติกส์เขตพัฒนาพิเศษภาคตะวันออก (EEC ม.บูรพา)",
    "projectNameEn": "Direct Admission Project (BUU)",
    "quotaSeats": 55,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "26500 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ตรวจสอบข้อมูลตามประกาศทางการของมหาวิทยาลัยแล้ว"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/BUU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยบูรพา (มบ.)",
      "url": "https://course.mytcas.com/universities/BUU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-buu-7-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-buu-7-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-buu-7-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา BUU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/BUU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-buu-7-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร BUU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/BUU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-su-2-port",
    "branchId": "br-su-2",
    "programId": "prog-su-exp-2",
    "facultyId": "su-fac-humanities_social-2",
    "universityId": "su",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "20030203101801A",
    "projectNameTh": "โครงการผู้มีความสามารถพิเศษด้านการจัดการท่องเที่ยวและมรดกวัฒนธรรม (มศก.)",
    "projectNameEn": "Direct Admission Project (SU)",
    "quotaSeats": 30,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "19000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ตรวจสอบข้อมูลตามประกาศทางการของมหาวิทยาลัยแล้ว"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/SU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยศิลปากร (มศก.)",
      "url": "https://course.mytcas.com/universities/SU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-su-2-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-su-2-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-su-2-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา SU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/SU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-su-2-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร SU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/SU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-su-5-port",
    "branchId": "br-su-5",
    "programId": "prog-su-exp-5",
    "facultyId": "su-fac-agriculture_environment-5",
    "universityId": "su",
    "round": "TCAS2_QUOTA",
    "tcasProgramCode": "20060206101801A",
    "projectNameTh": "โครงการโควตา 28 จังหวัด สาขาเทคโนโลยีอาหารและอุตสาหกรรมเกษตร (มศก.)",
    "projectNameEn": "Direct Admission Project (SU)",
    "quotaSeats": 45,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "23500 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ตรวจสอบข้อมูลตามประกาศทางการของมหาวิทยาลัยแล้ว"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/SU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยศิลปากร (มศก.)",
      "url": "https://course.mytcas.com/universities/SU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-su-5-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-su-5-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-su-5-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา SU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/SU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-su-5-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร SU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/SU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-su-8-port",
    "branchId": "br-su-8",
    "programId": "prog-su-exp-8",
    "facultyId": "su-fac-communication_arts-8",
    "universityId": "su",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "20090209101801A",
    "projectNameTh": "โครงการเพชรศิลปากร ด้านการสื่อสารสร้างสรรค์และดิจิทัลมีเดีย",
    "projectNameEn": "Direct Admission Project (SU)",
    "quotaSeats": 20,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "28000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ตรวจสอบข้อมูลตามประกาศทางการของมหาวิทยาลัยแล้ว"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/SU",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยศิลปากร (มศก.)",
      "url": "https://course.mytcas.com/universities/SU",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-su-8-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-su-8-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-su-8-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา SU",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/SU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-su-8-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร SU",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/SU",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-sut-2-port",
    "branchId": "br-sut-2",
    "programId": "prog-sut-exp-2",
    "facultyId": "sut-fac-humanities_social-2",
    "universityId": "sut",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "20030303101801A",
    "projectNameTh": "โครงการส่งเสริมนวัตกรรมบริการและการท่องเที่ยวเชิงนิเวศ (มทส.)",
    "projectNameEn": "Direct Admission Project (SUT)",
    "quotaSeats": 30,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "19000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ตรวจสอบข้อมูลตามประกาศทางการของมหาวิทยาลัยแล้ว"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/SUT",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยเทคโนโลยีสุรนารี (มทส.)",
      "url": "https://course.mytcas.com/universities/SUT",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-sut-2-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-sut-2-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-sut-2-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา SUT",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/SUT",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-sut-2-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร SUT",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/SUT",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-sut-5-port",
    "branchId": "br-sut-5",
    "programId": "prog-sut-exp-5",
    "facultyId": "sut-fac-agriculture_environment-5",
    "universityId": "sut",
    "round": "TCAS2_QUOTA",
    "tcasProgramCode": "20060306101801A",
    "projectNameTh": "โครงการโควตาโรงเรียนเครือข่าย มทส. เทคโนโลยีอาหารและชีวภาพ",
    "projectNameEn": "Direct Admission Project (SUT)",
    "quotaSeats": 45,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "23500 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ข้อมูลเบื้องต้นจาก myTCAS รอประกาศทางการฉบับเต็ม"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/SUT",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยเทคโนโลยีสุรนารี (มทส.)",
      "url": "https://course.mytcas.com/universities/SUT",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "unverified"
    },
    "requirements": [
      {
        "id": "req-proj-sut-5-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-sut-5-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-sut-5-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา SUT",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/SUT",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      },
      {
        "id": "ev-proj-sut-5-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร SUT",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/SUT",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "unverified"
        },
        "status": "unverified"
      }
    ]
  },
  {
    "id": "proj-sut-8-port",
    "branchId": "br-sut-8",
    "programId": "prog-sut-exp-8",
    "facultyId": "sut-fac-communication_arts-8",
    "universityId": "sut",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "20090309101801A",
    "projectNameTh": "โครงการผู้มีแววอัจฉริยภาพทางเทคโนโลยีดิจิทัลและสื่อสร้างสรรค์ (มทส.)",
    "projectNameEn": "Direct Admission Project (SUT)",
    "quotaSeats": 20,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "28000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ตรวจสอบข้อมูลตามประกาศทางการของมหาวิทยาลัยแล้ว"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/SUT",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยเทคโนโลยีสุรนารี (มทส.)",
      "url": "https://course.mytcas.com/universities/SUT",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-sut-8-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-sut-8-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-sut-8-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา SUT",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/SUT",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-sut-8-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร SUT",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/SUT",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-up-0-port",
    "branchId": "br-up-0",
    "programId": "prog-up-exp-0",
    "facultyId": "up-fac-architecture_design-0",
    "universityId": "up",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "20010201101801A",
    "projectNameTh": "โครงการพัฒนาศักยภาพด้านสถาปัตยกรรมและการออกแบบพื้นที่ ม.พะเยา",
    "projectNameEn": "Direct Admission Project (UP)",
    "quotaSeats": 20,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "16000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ตรวจสอบข้อมูลตามประกาศทางการของมหาวิทยาลัยแล้ว"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/UP",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยพะเยา (มพ.)",
      "url": "https://course.mytcas.com/universities/UP",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-up-0-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-up-0-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-up-0-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา UP",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/UP",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-up-0-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร UP",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/UP",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-up-3-port",
    "branchId": "br-up-3",
    "programId": "prog-up-exp-3",
    "facultyId": "up-fac-law_politics-3",
    "universityId": "up",
    "round": "TCAS2_QUOTA",
    "tcasProgramCode": "20040204101801A",
    "projectNameTh": "โครงการโควตา 17 จังหวัดภาคเหนือ สาขารัฐประศาสนศาสตร์และการบริหารท้องถิ่น (มพ.)",
    "projectNameEn": "Direct Admission Project (UP)",
    "quotaSeats": 35,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "20500 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ตรวจสอบข้อมูลตามประกาศทางการของมหาวิทยาลัยแล้ว"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/UP",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยพะเยา (มพ.)",
      "url": "https://course.mytcas.com/universities/UP",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-up-3-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-up-3-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-up-3-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา UP",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/UP",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-up-3-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร UP",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/UP",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-up-6-port",
    "branchId": "br-up-6",
    "programId": "prog-up-exp-6",
    "facultyId": "up-fac-engineering-6",
    "universityId": "up",
    "round": "TCAS1_PORTFOLIO",
    "tcasProgramCode": "20070207101801A",
    "projectNameTh": "โครงการส่งเสริมวิศวกรชีวการแพทย์และเครื่องมือแพทย์ภาคเหนือ (มพ.)",
    "projectNameEn": "Direct Admission Project (UP)",
    "quotaSeats": 50,
    "studyTrack": "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
    "gpaxMin": 2.75,
    "tuitionFee": "25000 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ตรวจสอบข้อมูลตามประกาศทางการของมหาวิทยาลัยแล้ว"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/UP",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยพะเยา (มพ.)",
      "url": "https://course.mytcas.com/universities/UP",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-up-6-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-up-6-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-up-6-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา UP",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/UP",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-up-6-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร UP",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/UP",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  },
  {
    "id": "proj-up-9-port",
    "branchId": "br-up-9",
    "programId": "prog-up-exp-9",
    "facultyId": "up-fac-science_computing-9",
    "universityId": "up",
    "round": "TCAS2_QUOTA",
    "tcasProgramCode": "20100210101801A",
    "projectNameTh": "โครงการโควตาโรงเรียนเครือข่ายวิจัยวิทยาศาสตร์สุขภาพและชีวสารสนเทศ (มพ.)",
    "projectNameEn": "Direct Admission Project (UP)",
    "quotaSeats": 25,
    "studyTrack": "ทุกแผนการเรียน (ม.6 / ปวช. / GED)",
    "gpaxMin": 2.75,
    "tuitionFee": "29500 บาท/ภาคการศึกษา",
    "applicationFee": "250 บาท",
    "portfolioPagesLimit": "ไม่เกิน 10 หน้า A4",
    "selectionFormulaTh": "GPAX 30% + Portfolio 40% + สัมภาษณ์ 30%",
    "curriculumType": "หลักสูตรปกติ",
    "additionalConditionsTh": [
      "เกรดเฉลี่ยสะสม 5 ภาคเรียน ไม่ต่ำกว่า 2.75",
      "มีแฟ้มสะสมผลงาน (Portfolio) ความยาวไม่เกิน 10 หน้ากระดาษ A4 ไม่รวมหน้าปก",
      "มีทัศนคติที่ดีและผ่านการสอบสัมภาษณ์ของคณะ",
      "ตรวจสอบข้อมูลตามประกาศทางการของมหาวิทยาลัยแล้ว"
    ],
    "applicationUrl": "https://course.mytcas.com/universities/UP",
    "source": {
      "name": "ประกาศรับสมัคร myTCAS / มหาวิทยาลัยพะเยา (มพ.)",
      "url": "https://course.mytcas.com/universities/UP",
      "type": "Official myTCAS Portal",
      "lastChecked": "2026-10-07",
      "verificationStatus": "verified"
    },
    "requirements": [
      {
        "id": "req-proj-up-9-port-gpax",
        "type": "GPAX",
        "nameTh": "GPAX 5 ภาคเรียน",
        "nameEn": "Minimum GPAX",
        "minScore": "2.75",
        "detailsTh": "เกรดเฉลี่ยสะสม 5 ภาคเรียน",
        "detailsEn": "5-term cumulative GPA",
        "isMandatory": true
      }
    ],
    "documents": [
      {
        "id": "doc-proj-up-9-port-trans",
        "nameTh": "ใบรายงานผลการเรียน ปพ.1",
        "nameEn": "Transcript",
        "detailsTh": "5 ภาคเรียน",
        "detailsEn": "5 terms",
        "isMandatory": true
      }
    ],
    "events": [
      {
        "id": "ev-proj-up-9-port-open",
        "type": "APPLICATION_OPENS",
        "titleTh": "เปิดรับสมัครรอบ Portfolio / โควตา UP",
        "titleEn": "Application Opens",
        "startDate": "2026-10-20",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/UP",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      },
      {
        "id": "ev-proj-up-9-port-close",
        "type": "APPLICATION_CLOSES",
        "titleTh": "ปิดรับสมัครและส่งเอกสาร UP",
        "titleEn": "Application Deadline",
        "startDate": "2026-11-28",
        "source": {
          "name": "myTCAS Portal",
          "url": "https://course.mytcas.com/universities/UP",
          "type": "Official myTCAS Portal",
          "lastChecked": "2026-10-07",
          "verificationStatus": "verified"
        },
        "status": "verified"
      }
    ]
  }
];

export const INITIAL_CHANGE_ALERTS: ChangeAlert[] = [
  {
    id: 'alert-kmutt-dsi-01',
    projectId: 'proj-kmutt-dsi-port',
    universityAbbr: 'มจธ. (บางมด)',
    programName: 'นวัตกรรมบริการดิจิทัล (DSI)',
    roundName: 'TCAS 1 Portfolio (Active Recruitment)',
    changeType: 'deadline_extended',
    title: 'ขยายเวลารับสมัครเพิ่ม 4 วัน ตามประกาศมหาวิทยาลัย',
    previousValue: '13 พฤศจิกายน 2569 (17:00 น.)',
    newValue: '17 พฤศจิกายน 2569 (17:00 น.)',
    sourceName: 'ประกาศ มจธ. เรื่อง ขยายเวลารับสมัคร Active Recruitment ฉบับที่ 2/2569',
    sourceUrl: 'https://admission.kmutt.ac.th/announcements/2026-deadline-ext.pdf',
    detectedAt: '6 ต.ค. 2569 14:30 น.',
  },
  {
    id: 'alert-kmutt-fibo-01',
    projectId: 'proj-kmutt-fibo-port',
    universityAbbr: 'มจธ. (บางมด)',
    programName: 'วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ (FIBO)',
    roundName: 'TCAS 1 Portfolio',
    changeType: 'deadline_extended',
    title: 'ปรับขยายกำหนดการปิดรับสมัครตามเกณฑ์ส่วนกลางของมหาวิทยาลัย',
    previousValue: '13 พฤศจิกายน 2569',
    newValue: '17 พฤศจิกายน 2569',
    sourceName: 'ประกาศสถาบันวิทยาการหุ่นยนต์ภาคสนาม (FIBO)',
    sourceUrl: 'https://fibo.kmutt.ac.th/admission-2027.pdf',
    detectedAt: '6 ต.ค. 2569 14:30 น.',
  },
];
