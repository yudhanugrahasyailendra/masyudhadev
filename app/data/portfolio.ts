export type MenuId = 'profile' | 'career' | 'projects' | 'skills' | 'cv' | 'contact';

export interface MenuItem {
  id: MenuId;
  label: string;
  kicker: string;
  hint: string;
}

export interface CareerItem {
  period: string;
  club: string;
  role: string;
  type: string;
}

export interface ProjectItem {
  no: string;
  name: string;
  desc: string;
  stack: string;
  url: string;
}

export interface SkillGroup {
  pos: string;
  name: string;
  items: string[];
}

export interface ContactItem {
  label: string;
  value: string;
  url: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'profile',
    label: 'KICK OFF',
    kicker: 'PROFIL PEMAIN',
    hint: 'Kenalan dulu dengan Yudha — fullstack developer yang siap turun ke lapangan untuk proyek web kamu.',
  },
  {
    id: 'career',
    label: 'MASTER LEAGUE',
    kicker: 'KARIER',
    hint: 'Riwayat karier dari Staff Programmer hingga Fullstack Developer — empat klub, satu misi.',
  },
  {
    id: 'projects',
    label: 'LEAGUE',
    kicker: '11 PROYEK',
    hint: 'Klasemen proyek: dari sistem kepegawaian pemerintah kota hingga billing terminal peti kemas.',
  },
  {
    id: 'skills',
    label: 'TRAINING',
    kicker: 'TECH STACK',
    hint: 'Sesi latihan: React, Next.js, TypeScript, Laravel, Java, SQL, dan lainnya.',
  },
  {
    id: 'cv',
    label: 'EDIT',
    kicker: 'CURRICULUM VITAE',
    hint: 'Lihat data pemain lengkap — unduh CV terbaru.',
  },
  {
    id: 'contact',
    label: 'OPTIONS',
    kicker: 'KONTAK',
    hint: 'Mau ajak kerja sama? Kirim email atau sapa lewat GitHub, LinkedIn, dan Instagram.',
  },
];

export const CAREER_ITEMS: CareerItem[] = [
  {
    period: 'DES 2024 — KINI',
    club: 'ENIGMA Technology',
    role: 'Fullstack Developer',
    type: 'FREELANCE',
  },
  {
    period: 'JAN — MAR 2026',
    club: 'Pallaka Techno',
    role: 'Fullstack Developer',
    type: 'FULLTIME',
  },
  {
    period: 'JUN — NOV 2025',
    club: 'PT. DES Teknologi Informasi',
    role: 'Presales Engineer',
    type: 'FULLTIME',
  },
  {
    period: 'JUL 2022 — JUL 2024',
    club: 'PT. Global Intelegensi Indonesia',
    role: 'Staff Programmer',
    type: 'FULLTIME',
  },
];

const RAW_PROJECTS: Array<[string, string, string, string]> = [
  [
    'Kostra (Kost Rapi)',
    'Aplikasi manajemen kos: onboarding penyewa, tagihan bulanan otomatis, ketersediaan kamar, laporan keuangan.',
    'Vue.js · Inertia.js · Laravel · MySQL',
    'https://www.mydevitconsultant.com/',
  ],
  [
    'My DEV IT Consultant',
    'Software house & konsultan IT di Makassar untuk aplikasi web kustom dan transformasi digital.',
    'React.js · Next.js · TypeScript · TailwindCSS · Supabase',
    'https://www.mydevitconsultant.com/',
  ],
  [
    'ENIGMA Technology',
    'Website company profile software house dan konsultan IT di Makassar.',
    'React.js · Next.js · TypeScript · TailwindCSS',
    'https://enigma-technology-companyprofile.vercel.app/',
  ],
  [
    'Wisata Alam Malino',
    'Platform wisata interaktif dengan panduan destinasi alam Malino.',
    'Bootstrap · JavaScript · PHP · MySQL',
    'https://wisataalammalino.com/',
  ],
  [
    'SIMPEG Kota Makassar',
    'Sistem informasi kepegawaian Pemkot Makassar untuk data ASN.',
    'Laravel · PostgreSQL',
    'https://peg.bkpsdmd.makassarkota.go.id/',
  ],
  [
    'BKPSDMD Kota Makassar',
    'Portal resmi BKPSDMD Makassar: berita, layanan publik, dan informasi terbaru.',
    'React.js · Next.js · TypeScript · TailwindCSS',
    'https://bkpsdmd.makassarkota.go.id/',
  ],
  [
    'Digital Arsip Kota Makassar',
    'Sistem manajemen dokumen untuk menyimpan dan mengarsipkan dokumen resmi pemerintah.',
    'JavaScript · Laravel · PostgreSQL',
    'https://dms.bkpsdmd.makassarkota.go.id/',
  ],
  [
    'My Cargo KKT',
    'Aplikasi logistik dan pelacakan kargo untuk Kaltim Kariangau Terminal.',
    'JavaScript · Java · Oracle SQL',
    'https://impt.kariangauterminal.co.id/',
  ],
  [
    '1-Eagle Billing',
    'Sistem billing & invoicing enterprise untuk transaksi terminal peti kemas.',
    'TailwindCSS · React.js · Next.js · TypeScript · Java · Oracle SQL',
    'https://dev-1eagle-bnct.primus.co.id/',
  ],
  [
    'SMPN 1 Tinggimoncong',
    'Portal akademik: profil sekolah, informasi siswa, dan pengumuman.',
    'WordPress · PHP · MySQL',
    'https://www.smpn1tinggimoncong.sch.id/',
  ],
  [
    'Madrasah Aliyah Bindu',
    'Portal akademik: profil sekolah, informasi siswa, dan pengumuman.',
    'WordPress · PHP · MySQL',
    'https://madrasahaliyahbindu.sch.id/',
  ],
];

export const PROJECTS: ProjectItem[] = RAW_PROJECTS.map((project, index) => ({
  no: String(index + 1).padStart(2, '0'),
  name: project[0],
  desc: project[1],
  stack: project[2],
  url: project[3],
}));

export const SKILL_GROUPS: SkillGroup[] = [
  {
    pos: 'FW',
    name: 'FRONTEND',
    items: ['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'HTML5', 'CSS3'],
  },
  {
    pos: 'MF',
    name: 'UI KIT',
    items: ['TailwindCSS', 'Material UI', 'Materio UI', 'Bootstrap'],
  },
  {
    pos: 'DF',
    name: 'BACKEND',
    items: ['Laravel', 'Java', 'RESTful API', 'SQL'],
  },
  {
    pos: 'GK',
    name: 'CMS',
    items: ['WordPress'],
  },
];

export const CONTACTS: ContactItem[] = [
  {
    label: 'EMAIL',
    value: 'yudha048@gmail.com',
    url: 'mailto:yudha048@gmail.com',
  },
  {
    label: 'GITHUB',
    value: 'yudhanugrahasyailendra',
    url: 'https://github.com/yudhanugrahasyailendra/',
  },
  {
    label: 'LINKEDIN',
    value: 'yudhanugrahasyailendra',
    url: 'https://www.linkedin.com/in/yudhanugrahasyailendra/',
  },
  {
    label: 'INSTAGRAM',
    value: '@yudhanugrahasyailendra',
    url: 'https://www.instagram.com/yudhanugrahasyailendra/',
  },
];

export const CV_URL =
  'https://drive.google.com/file/d/1phBOYQbu8_jbmMFR-giNxnQF5fugOY8j/view?usp=sharing';
