export interface Project {
  id: string;
  title: string;
  role: string;
  organization: string;
  period: string;
  challenge: string;
  solution: string;
  impact: string[];
  technologies: string[];
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description?: string;
}

export interface Skill {
  name: string;
  category: 'core' | 'frontend' | 'backend' | 'cloud' | 'tools';
  proficiency: 'expert' | 'advanced' | 'proficient';
  proficiencyPercent: number;
}

export interface SkillCategory {
  key: string;
  label: string;
  color: string;
  orbitDuration: string;
  radius: number;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  linkedin: string;
  location: string;
}

export interface AboutSection {
  headline: string;
  subheadline: string;
  paragraphs: string[];
  yearsOfExperience: number;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}
