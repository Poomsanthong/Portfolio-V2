import type { SkillCategory } from "../types";

// Extracted from Skills.tsx
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Core Technologies",
    iconId: "code",
    skills: [
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "React", level: 92 },
      { name: "HTML5", level: 98 },
      { name: "CSS3", level: 95 },
    ],
  },
  {
    category: "Styling & Design",
    iconId: "palette",
    skills: [
      { name: "Tailwind CSS", level: 93 },
      { name: "Responsive Design", level: 96 },
      { name: "CSS Animations", level: 88 },
      { name: "Mobile-First", level: 94 },
    ],
  },
  {
    category: "Tools & Deployment",
    iconId: "rocket",
    skills: [
      { name: "GitHub", level: 90 },
      { name: "Vercel", level: 88 },
      { name: "Git Version Control", level: 92 },
      { name: "NPM", level: 85 },
    ],
  },
];

export const ADDITIONAL_SKILLS: string[] = [
  "React Hooks",
  "Component Architecture",
  "State Management",
  "Using APIs",
  "Performance Optimization",
  "Cross-Browser Compatibility",
  "Accessibility ",
  "SEO Best Practices",
  "Figma to Code",
  "Webpack/Vite",
];
