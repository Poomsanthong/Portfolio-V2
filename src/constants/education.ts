import type { EducationEntry, CertificationEntry } from "../types";

// Extracted from Education.tsx
export const EDUCATION: EducationEntry[] = [
  {
    degree: "Web Development / Web Design ",
    institution: "Ice Malta",
    location: "Zebbuge, Malta",
    period: "2023 - 2025",
    description:
      "Comprehensive training in web development, UI/UX design, responsive design principles, database fundamentals, and modern development workflows.",
    achievements: [
      "Built multiple front-end projects",
      "Completed hands-on industry-focused coursework",
      "Collaborated on team development projects",
      "Certified in web technologies (HTML, CSS, JavaScript, React)",
    ],
    courses: [
      "HTML, CSS & Responsive Web Design",
      "JavaScript & Modern Front-End Development",
      "React Fundamentals",
      "UI/UX Design Principles",
      "Web Project Workflow & Version Control (Git)",
      "Database Basics & APIs",
      "Deployment & Hosting (Vercel / Netlify)",
    ],
  },
  {
    degree: "Information Technology",
    institution: "Giovanni Curmi Higher Secondary School",
    location: "Naxxar, Malta",
    period: "2020 - 2022",
    description:
      "Studied core IT concepts including networking, software fundamentals, hardware systems, and digital literacy.",
    achievements: [
      "Completed coursework in IT fundamentals",
      "Hands-on experience with system setups and troubleshooting",
      "Collaborated on IT-related group projects",
    ],
    courses: [
      "IT Fundamentals",
      "Networking",
      "Computer Hardware",
      "Basic Programming",
      "Database Basics",
    ],
  },
];

export const CERTIFICATIONS: CertificationEntry[] = [
  { name: "Adobe Professional Certificate", issuer: "Ice Malta", date: "2025" },
  {
    name: " Front-End Developer Certification",
    issuer: "Ice Malta",
    date: "2025",
  },
  { name: " Java Coding Participant", issuer: "Ice Malta", date: "2022" },
];
