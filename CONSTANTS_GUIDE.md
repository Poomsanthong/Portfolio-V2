# Portfolio Constants Structure

This guide explains how to use the centralized constants system in your portfolio.

## 📁 Folder Structure

```
src/
├── constants/
│   ├── index.ts          # Main export (import from here)
│   ├── personal.ts       # Personal info & contact
│   ├── socials.ts        # Social media links
│   ├── projects.ts       # Project portfolio
│   ├── experience.ts     # Work experience
│   ├── education.ts      # Education history
│   ├── skills.ts         # Technical skills
│   └── languages.ts      # Programming languages
└── types/
    └── index.ts          # TypeScript interfaces
```

## 🎯 How to Import

### Method 1: Import Everything from Main File (Recommended)

```typescript
import { PROJECTS, SKILLS, SOCIALS, PERSONAL_INFO } from "@/constants";
```

### Method 2: Import Specific Files

```typescript
import { PROJECTS } from "@/constants/projects";
import { SKILLS } from "@/constants/skills";
```

### Method 3: Import Types

```typescript
import type { Project, Skill, Experience } from "@/constants";
// or
import type { Project } from "@/types";
```

## 📝 Usage Examples

### In a Projects Component

```typescript
import { PROJECTS, FEATURED_PROJECTS } from "@/constants";

export const ProjectsSection = () => {
  return (
    <div>
      {FEATURED_PROJECTS.map((project) => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div>
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
```

### In a Skills Component

```typescript
import { SKILLS_BY_CATEGORY } from "@/constants";

export const SkillsSection = () => {
  return (
    <div>
      <h2>Frontend Skills</h2>
      {SKILLS_BY_CATEGORY.frontend.map((skill) => (
        <div key={skill.id}>
          <span>{skill.name}</span>
          <progress value={skill.level} max={100} />
        </div>
      ))}
    </div>
  );
};
```

### In a Footer Component

```typescript
import { SOCIALS } from "@/constants";
import { Github, Linkedin, Mail } from "lucide-react";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
};

export const Footer = () => {
  return (
    <footer>
      {SOCIALS.map((social) => {
        const Icon = iconMap[social.id as keyof typeof iconMap];
        return (
          <a key={social.id} href={social.url} aria-label={social.ariaLabel}>
            {Icon && <Icon />}
          </a>
        );
      })}
    </footer>
  );
};
```

### Using TypeScript Types

```typescript
import type { Project } from "@/constants";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </article>
  );
};
```

## 🔧 Path Aliases (tsconfig.json)

Add this to your `tsconfig.json` for cleaner imports:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/constants": ["./src/constants"],
      "@/types": ["./src/types"],
      "@/components": ["./src/components"]
    }
  }
}
```

Then import like:

```typescript
import { PROJECTS } from "@/constants";
```

## ✅ Benefits

1. **Single Source of Truth**: All data in one place
2. **Type Safety**: TypeScript interfaces ensure data consistency
3. **Easy Updates**: Change data without touching components
4. **Better Organization**: Separated by concern
5. **Reusability**: Use same data across multiple components
6. **Testing**: Mock data easily for unit tests

## 📦 Adding New Data

1. Create/update the type in `src/types/index.ts`
2. Create data file in `src/constants/`
3. Export from `src/constants/index.ts`
4. Import in your component

Example:

```typescript
// types/index.ts
export interface Award {
  id: string;
  title: string;
  year: string;
}

// constants/awards.ts
import type { Award } from "../types";

export const AWARDS: Award[] = [
  { id: "award-1", title: "Best Developer 2024", year: "2024" },
];

// constants/index.ts
export * from "./awards";

// component
import { AWARDS } from "@/constants";
```
