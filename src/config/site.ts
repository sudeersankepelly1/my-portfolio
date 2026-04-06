import { SiteConfig, AboutSection, Project, Experience, Skill } from '@/lib/types';

export const siteConfig: SiteConfig = {
  name: 'Sudeer Kumar Sankepelly',
  title: 'Senior Software Engineer | Full Stack .NET Developer',
  description: 'Building scalable enterprise applications with .NET, Angular, and Azure. 13 years of experience delivering compliant, high-performance solutions for government and enterprise clients.',
  email: 'sudeer04085@gmail.com',
  phone: '+1 (470) 918 1313',
  linkedin: 'linkedin.com/in/sudeer-kumar-sankepelly-546086145',
  location: 'Atlanta, GA',
};

export const aboutSection: AboutSection = {
  headline: 'I build systems that work at scale.',
  subheadline: 'Senior Full Stack Engineer specializing in enterprise .NET applications, cloud infrastructure, and legacy modernization.',
  paragraphs: [
    'Over the past 13 years, I\u2019ve worked across government, retail, and consulting sectors\u2014solving problems that range from federal compliance systems to high-volume e-commerce platforms.',
    'My approach is straightforward: understand the constraints, architect for longevity, and deliver solutions that teams can maintain. I\u2019ve led migrations from legacy ASP.NET to modern .NET Core stacks, built CI/CD pipelines that reduced deployment time by hours, and designed APIs that handle millions of transactions.',
    'Currently, I\u2019m building education compliance software for the Georgia Department of Education, where precision and reliability matter more than anything else.',
  ],
  yearsOfExperience: 13,
};

export const projects: Project[] = [
  {
    id: 'iep',
    title: 'IEP - Individual Education Program',
    role: 'Senior .NET Developer',
    organization: 'Georgia Department of Education',
    period: 'June 2023 \u2013 Present',
    challenge: 'Teachers needed a compliant, reliable system to manage special education paperwork and IEPs that meet federal requirements\u2014while handling sensitive student data across multiple districts.',
    solution: 'Led development of a comprehensive IEP management platform using .NET Core and Angular 15, implementing auto-approval workflows, role-based access controls, and integration with existing SST systems.',
    impact: [
      'Reduced manual approval processing time through intelligent workflow automation',
      'Ensured federal compliance for special education documentation across districts',
      'Built performance-optimized APIs serving real-time data to multiple stakeholders',
    ],
    technologies: ['Angular 15', '.NET Core', 'Web API', 'MS SQL Server 2019', 'Azure Services', 'SSIS', 'IronPDF'],
    featured: true,
  },
  {
    id: 'focalpointk12',
    title: 'FocalPointK12 HRMS',
    role: 'Senior Software Engineer / Team Lead',
    organization: 'Sapphirus System LLC',
    period: 'Sep 2022 \u2013 June 2023',
    challenge: 'An HR and payroll platform built on legacy technology needed modernization while continuing to serve active users\u2014without disrupting daily operations.',
    solution: 'Led team to migrate from ASP.NET MVC to Angular 14 with .NET Core APIs, implemented Azure CI/CD pipelines, and redesigned the architecture for scalability.',
    impact: [
      'Successfully migrated legacy system to modern stack without production downtime',
      'Established automated deployment pipelines reducing release cycles',
      'Mentored team on Angular best practices and modern development workflows',
    ],
    technologies: ['Angular 14', '.NET Core', 'Azure DevOps', 'SharePoint', 'WCF', 'SQL Server 2012'],
    featured: true,
  },
  {
    id: 'centralpim',
    title: 'Central PIM - Product Information Management',
    role: 'Full Stack Developer',
    organization: 'JD Sports Fashion',
    period: 'Dec 2017 \u2013 Aug 2021',
    challenge: 'E-commerce platform needed a flexible PIM system to handle product data across multiple brands (fascias) with complex attributes, bulk operations, and real-time search.',
    solution: 'Built a fully customized Angular 8 SPA with .NET Core APIs, integrated Elasticsearch for advanced search, and designed bulk operation workflows for product management teams.',
    impact: [
      'Enabled product teams to manage thousands of SKUs across multiple brands efficiently',
      'Implemented Elasticsearch delivering sub-second search across millions of records',
      'Reduced product onboarding time through streamlined bulk operations',
    ],
    technologies: ['Angular 8', '.NET Core', 'Entity Framework', 'Elasticsearch', 'Kibana', 'AWS'],
    featured: true,
  },
  {
    id: 'ecms',
    title: 'ECMS/ABMS - Employee Clearance Management',
    role: 'Consultant / Team Lead',
    organization: 'Capgemini',
    period: 'Aug 2021 \u2013 Sep 2022',
    challenge: 'Capgemini needed an internal platform to manage employee resignations and clearance workflows across departments with automated notifications and compliance tracking.',
    solution: 'Designed and built an ASP.NET MVC platform with Web API 2.0, implementing multi-stage approval workflows, automated email notifications, and scheduled batch jobs.',
    impact: [
      'Streamlined resignation clearance process across multiple departments',
      'Automated compliance tracking reducing HR administrative overhead',
      'Delivered scheduled jobs and real-time notifications improving process visibility',
    ],
    technologies: ['ASP.NET MVC 5', 'Web API 2.0', 'MS SQL Server', 'SSIS', 'Windows Services'],
    featured: false,
  },
];

export const experience: Experience[] = [
  {
    id: 'gde',
    company: 'Georgia Department of Education',
    role: 'Senior Software Engineer',
    period: 'June 2023 \u2013 Present',
    location: 'Atlanta, GA',
  },
  {
    id: 'sapphirus',
    company: 'Sapphirus System LLC',
    role: 'Senior Software Engineer / Team Lead',
    period: 'Sep 2022 \u2013 June 2023',
    location: 'Hyderabad, India (Remote)',
  },
  {
    id: 'capgemini',
    company: 'Capgemini',
    role: 'Consultant',
    period: 'Aug 2021 \u2013 Sep 2022',
    location: 'Hyderabad, India',
  },
  {
    id: 'jdsports',
    company: 'JD Sports Fashion',
    role: 'Full Stack .NET/Angular Developer',
    period: 'Dec 2017 \u2013 Aug 2021',
    location: 'Hyderabad, India',
  },
  {
    id: 'hofincons',
    company: 'Hofincons International',
    role: '.NET Developer',
    period: 'Sep 2015 \u2013 Dec 2017',
    location: 'Hyderabad, India',
  },
];

export const skills: Skill[] = [
  // Core
  { name: 'C#', category: 'core', proficiency: 'expert', proficiencyPercent: 95 },
  { name: '.NET Core', category: 'core', proficiency: 'expert', proficiencyPercent: 95 },
  { name: 'ASP.NET MVC', category: 'core', proficiency: 'expert', proficiencyPercent: 95 },
  { name: 'Web API', category: 'core', proficiency: 'expert', proficiencyPercent: 95 },

  // Frontend
  { name: 'Angular (8-15)', category: 'frontend', proficiency: 'expert', proficiencyPercent: 92 },
  { name: 'TypeScript', category: 'frontend', proficiency: 'advanced', proficiencyPercent: 85 },
  { name: 'JavaScript', category: 'frontend', proficiency: 'advanced', proficiencyPercent: 85 },
  { name: 'RxJS', category: 'frontend', proficiency: 'advanced', proficiencyPercent: 80 },
  { name: 'HTML/CSS', category: 'frontend', proficiency: 'expert', proficiencyPercent: 92 },
  { name: 'Bootstrap', category: 'frontend', proficiency: 'proficient', proficiencyPercent: 70 },

  // Backend & Data
  { name: 'MS SQL Server', category: 'backend', proficiency: 'expert', proficiencyPercent: 95 },
  { name: 'Entity Framework', category: 'backend', proficiency: 'expert', proficiencyPercent: 92 },
  { name: 'Dapper', category: 'backend', proficiency: 'advanced', proficiencyPercent: 80 },
  { name: 'LINQ', category: 'backend', proficiency: 'expert', proficiencyPercent: 95 },
  { name: 'ADO.NET', category: 'backend', proficiency: 'expert', proficiencyPercent: 90 },

  // Cloud & DevOps
  { name: 'Azure Services', category: 'cloud', proficiency: 'advanced', proficiencyPercent: 80 },
  { name: 'Azure DevOps', category: 'cloud', proficiency: 'advanced', proficiencyPercent: 82 },
  { name: 'CI/CD Pipelines', category: 'cloud', proficiency: 'advanced', proficiencyPercent: 80 },

  // Tools & Practices
  { name: 'Git/TFS', category: 'tools', proficiency: 'expert', proficiencyPercent: 92 },
  { name: 'REST API Design', category: 'tools', proficiency: 'expert', proficiencyPercent: 95 },
  { name: 'Agile/Scrum', category: 'tools', proficiency: 'expert', proficiencyPercent: 90 },
  { name: 'Unit Testing', category: 'tools', proficiency: 'advanced', proficiencyPercent: 80 },
];
