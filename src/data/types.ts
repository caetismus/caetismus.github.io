// =============================================================================
//  TYPE DEFINITIONS
//  All shared interfaces and enums for the portfolio.
// =============================================================================

export interface Project {
  id: string;
  title: string;
  /** Optional subtitle for long research titles */
  subtitle?: string;
  category: string;
  description: string;
  technologies: string[];
  /** When true, renders with an upcoming badge and toggle-able preview blur */
  isUpcoming?: boolean;
}

export interface SkillItem {
  name: string;
  category: string;
  /** Optional proficiency note, e.g. "Working Knowledge" */
  details?: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  location: string;
  year: string;
  highlights: string[];
  /** Path relative to public/ e.g. "assets/images/plm.png" */
  logo?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  duration: string;
  type: 'Internship' | 'Full-time' | 'Contract';
  /** Each string supports **bold** markdown syntax */
  description: string[];
  /** Path relative to public/ e.g. "assets/images/acen.png" */
  logo?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  /** Path relative to public/ e.g. "assets/images/prc.png" */
  logo?: string;
  /** External URL or path to file in public/assets/documents/ */
  link?: string;
  /** True if this is an industry standard certification to highlight */
  highlight?: boolean;
}

export interface ContactInfo {
  email: string;
  linkedinUrl: string;
  linkedinDisplay: string;
  githubUrl: string;
  githubDisplay: string;
}

export enum SectionId {
  HERO           = 'home',
  EXPERIENCE     = 'experience',
  PROJECTS       = 'projects',
  TECHSTACK      = 'skills',
  EDUCATION      = 'education',
  CERTIFICATIONS = 'certifications',
}
