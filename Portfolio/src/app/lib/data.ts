/* ============================================================
   Central data for the portfolio.
   Edit content here — no need to touch the components.
   ============================================================ */

export const P = {
  sky: "#99CDD8",
  mint: "#DAEBE3",
  cream: "#FDE8D3",
  blush: "#F3C3B2",
  sage: "#CFD6C4",
  forest: "#657166",
  ink: "#4A5450",
} as const;

export const PALETTE = [P.sky, P.mint, P.cream, P.blush, P.sage, P.forest];

export const EMAIL = "marishat098@gmail.com";
export const PHONE = "01643847860";
export const LOCATION = "Uttara, Dhaka, Bangladesh";
export const LINKEDIN = "https://www.linkedin.com/in/marishat-tasmim/";
export const GITHUB = "https://github.com/Marishat";
export const CV_PATH = "/cv.pdf";
export const CV_DOWNLOAD_NAME = "Marishat_Tasmim_CV.pdf";

export const NAV = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export type Project = {
  title: string;
  tag: string;
  color: string;
  points: string[];
  link: string | null;
};

export const PROJECTS: Project[] = [
  {
    title: "Land & Real Estate Digitalization + Fraud Prevention",
    tag: "SRE · Blockchain",
    color: P.sky,
    points: [
      "Led requirement analysis and validation for blockchain-based land registration.",
      "Designed and executed test cases ensuring secure data handling and accurate system behaviour.",
    ],
    link: "https://github.com/Marishat/SRE-Integrated-Land-and-Real-Estate-Digitalization-and-Fraud-Prevention-System-",
  },
  {
    title: "Travel Agency Management System",
    tag: "Web · Black-box Testing",
    color: P.blush,
    points: [
      "Conducted black-box testing for booking features and database integration.",
      "Ensured consistency between UI design and backend functionality.",
    ],
    link: "https://github.com/Marishat/WebTech",
  },
  {
    title: "Hotel Amin International",
    tag: "Manual QA",
    color: P.sage,
    points: [
      "Tested booking, billing and housekeeping modules with manual test scenarios.",
      "Reported bugs and collaborated with backend developers on resolution and retesting.",
    ],
    link: null,
  },
];

export type SkillGroup = {
  group: string;
  color: string;
  items: string[];
};

export const SKILLS: SkillGroup[] = [
  {
    group: "Testing",
    color: P.sky,
    items: ["Manual Testing", "Functional Testing", "Test Case Design", "Cross-Browser Testing"],
  },
  {
    group: "Research & AI",
    color: P.blush,
    items: ["Computer Vision", "Deep Learning", "Vision Transformers", "CNNs", "Explainable AI (LIME)"],
  },
  {
    group: "Languages & Web",
    color: P.cream,
    items: ["C++", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    group: "Databases",
    color: P.mint,
    items: ["SQL Server", "MySQL", "PostgreSQL"],
  },
  {
    group: "Design & Modeling",
    color: P.sage,
    items: ["Figma", "Canva", "Draw.io"],
  },
  {
    group: "Soft Skills",
    color: P.mint,
    items: ["Analytical Thinking", "Attention to Detail", "Communication", "Team Collaboration", "Time Management"],
  },
];

export const RESEARCH = {
  journal: "AIUB Journal of Science and Engineering (AJSE)",
  title:
    "From Resolution to Explanation: Real-ESRGAN and LIME Analysis of Vision Transformers and CNNs for Brain Tumor MRI Classification",
  summary:
    "This work enhances brain tumor MRI scans with Real-ESRGAN super-resolution, benchmarks Vision Transformers against CNNs for classification, and applies LIME so that model decisions become transparent and clinically explainable.",
  keywords: ["Real-ESRGAN", "LIME", "Vision Transformers", "CNNs", "Explainable AI", "Medical Imaging"],
  doi: "https://doi.org/10.53799/jaay3z78",
};

export const EDUCATION = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    school: "American International University–Bangladesh · 2022 – 2025",
    gpa: "CGPA 3.73 / 4.00",
  },
  {
    degree: "Higher Secondary Certificate",
    school: "Rajuk Uttara Model College · 2018 – 2020",
    gpa: "GPA 5.00 / 5.00",
  },
];

export const REFERENCES = [
  {
    name: "MD. Al-Amin",
    role: "Assistant Professor, Department of Computer Science, AIUB",
    email: "alamin@aiub.edu",
    phone: null as string | null,
  },
  {
    name: "Mir Monirul Islam",
    role: "Head of Operation (Sales & Technical), UNICHEM AG",
    email: "plabon@unichembd.com",
    phone: "01717903936",
  },
];
