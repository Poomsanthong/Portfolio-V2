// TypeScript interfaces for portfolio data

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location?: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  achievements?: string[];
  technologies?: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location?: string;
  startDate: string;
  endDate: string | "Present";
  gpa?: string;
  achievements?: string[];
  courses?: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: "frontend" | "backend" | "database" | "tools" | "other";
  level?: number; // 1-5 or 1-100
  icon?: string;
}

export interface Language {
  id: string;
  name: string;
  proficiency: number; // Percentage 0-100
  icon?: string;
  color?: string;
}

export interface Social {
  id: string;
  name: string;
  url: string;
  icon?: string;
  ariaLabel?: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
  website?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  avatar?: string;
  resume?: string;
}

// UI-specific shapes used by current components
export interface ProjectCard {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
  status?: string;
}

export interface SkillCategory {
  category: string;
  iconId: "code" | "palette" | "rocket" | string;
  skills: Array<{ name: string; level: number }>;
}

export interface LanguageProficiency {
  name: string;
  level:
    | "Native"
    | "Fluent"
    | "Professional"
    | "Intermediate"
    | "Basic"
    | string;
  proficiency: number;
  description: string;
}

export interface ExperienceEntry {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  courses: string[];
}

export interface CertificationEntry {
  name: string;
  issuer: string;
  date: string;
}
