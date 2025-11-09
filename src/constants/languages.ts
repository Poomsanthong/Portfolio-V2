import type { LanguageProficiency } from "../types";

// Extracted from Languages.tsx
export const LANGUAGES_PROFICIENCY: LanguageProficiency[] = [
  {
    name: "Thai",
    level: "Native",
    proficiency: 100,
    description: "Native speaker",
  },
  {
    name: "English",
    level: "Fluent",
    proficiency: 95,
    description: "Full professional proficiency",
  },
  {
    name: "Maltese",
    level: "Professional",
    proficiency: 80,
    description: "Conversational proficiency",
  },
  {
    name: "Dutch",
    level: "Basic",
    proficiency: 30,
    description: "Currently learning Dutch",
  },
];

export const PROFICIENCY_GUIDE: Array<{ level: string; description: string }> =
  [
    { level: "Native", description: "Mother tongue" },
    { level: "Fluent", description: "Full professional" },
    { level: "Professional", description: "Working proficiency" },
    { level: "Intermediate", description: "Conversational" },
    { level: "Basic", description: "Elementary" },
  ];
