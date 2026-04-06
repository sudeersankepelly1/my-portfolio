export const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const COLORS = {
  accent: '#06b6d4',
  violet: '#8b5cf6',
  background: '#030014',
  surface: '#0a0a1a',
};

export const SKILL_CATEGORY_CONFIG = {
  core: { label: '.NET & Core', color: '#06b6d4', radius: 140, speed: 35 },
  frontend: { label: 'Frontend', color: '#8b5cf6', radius: 200, speed: 45 },
  backend: { label: 'Backend & Data', color: '#22d3ee', radius: 260, speed: 55 },
  cloud: { label: 'Cloud & DevOps', color: '#a78bfa', radius: 320, speed: 65 },
  tools: { label: 'Tools & Practices', color: '#67e8f9', radius: 380, speed: 75 },
} as const;

export const STATS = [
  { label: 'Years Experience', value: 13, suffix: '+' },
  { label: 'Major Projects', value: 10, suffix: '+' },
  { label: 'Companies', value: 5, suffix: '' },
  { label: 'Sectors', value: 3, suffix: '' },
];
