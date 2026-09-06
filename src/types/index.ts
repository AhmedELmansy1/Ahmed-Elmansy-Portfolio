export type Language = 'en' | 'ar';
export type Theme = 'dark' | 'light';

export interface Project {
  id: string;
  title: string;
  titleAr: string;
  category: string;
  categoryAr: string;
  description: string;
  descriptionAr: string;
  featured?: boolean;
  technologies: string[];
  features: {
    en: string[];
    ar: string[];
  };
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  importantNote?: {
    en: string;
    ar: string;
  };
}

export interface SkillCategory {
  id: string;
  title: string;
  titleAr: string;
  iconName: string;
  skills: {
    name: string;
    highlight?: boolean;
    level?: string;
    icon?: string;
  }[];
}

export interface Service {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  iconName: string;
}

export interface Certification {
  id: string;
  title: string;
  titleAr: string;
  issuer: string;
  date: string;
  dateAr: string;
  badge?: string;
}

export interface Education {
  id: string;
  degree: string;
  degreeAr: string;
  university: string;
  universityAr: string;
  specialization: string;
  specializationAr: string;
  grade: string;
  gradeAr: string;
  project: string;
  projectAr: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  roleAr: string;
  type: string;
  typeAr: string;
  period: string;
  periodAr: string;
  description: string;
  descriptionAr: string;
  highlights: {
    en: string[];
    ar: string[];
  };
  technologies: string[];
}

export interface PricingPlan {
  id: string;
  serviceName: string;
  serviceNameAr: string;
  priceUsd: string;
  priceEgp: string;
  description: string;
  descriptionAr: string;
  features: {
    en: string[];
    ar: string[];
  };
  popular?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
