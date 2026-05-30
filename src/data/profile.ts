export interface ProfileStat {
  value: string;
  label: string;
}

export interface SkillGroup {
  title: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface EducationItem {
  institution: string;
  qualification: string;
  period: string;
  details: string[];
}

export const profile = {
  name: 'Osvaldino Jovete',
  initials: 'OJ',
  location: 'Cape Town, South Africa',
  email: 'your@email.com',
  linkedin: 'https://www.linkedin.com/in/osvaldino-jovete-563564288/',
  github: '#',
  headline: 'Data analytics thinker building sharp frontend products from operational reality.',
  subheadline:
    'I connect KPI monitoring, workflow logic, and frontend craft to build tools that make performance easier to understand and act on.',
};

export const stats: ProfileStat[] = [
  { value: '83%', label: 'CodeSpace average' },
  { value: '98%', label: 'attendance record' },
  { value: '2025', label: 'analytics pivot year' },
  { value: '6', label: 'case-study slots' },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend Delivery',
    description: 'Turning structured ideas into polished interfaces.',
    skills: ['React', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'Git & GitHub'],
  },
  {
    title: 'Data & Operations',
    description: 'Reading the floor through numbers, patterns, and exceptions.',
    skills: ['Microsoft Excel', 'Google Sheets', 'Data Analysis', 'KPI Monitoring', 'SLA Tracking', 'Process Optimization', 'Workflow Management'],
  },
  {
    title: 'Current Growth Track',
    description: 'The next layer: analytics engineering and intelligent products.',
    skills: ['Python', 'SQL', 'Power BI', 'Machine Learning', 'AI Integration', 'Dashboard UX'],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Performance Analyst (SME / SPOC)',
    company: 'EXL',
    period: 'November 2025 – Present',
    bullets: [
      'SLA monitoring and operational quality support',
      'Workflow analysis and process optimization',
      'SOP creation and documentation',
      'Coaching, feedback, and escalation handling',
      'Quality risk management',
    ],
  },
  {
    role: 'Executive Advisor',
    company: 'EXL',
    period: 'July 2025 – Present',
    bullets: ['Customer email support and written communication', 'Accuracy and operational compliance', 'High-volume query resolution'],
  },
  {
    role: 'Recruitment Advisor',
    company: 'A24 Group',
    period: 'April 2024 – August 2024',
    bullets: ['Candidate screening and database management', 'Stakeholder communication', 'Remote recruitment operations for the UK market'],
  },
  {
    role: 'Shop Floor Assistant / Cashier',
    company: 'Clicks',
    period: 'September 2024 – May 2025',
    bullets: ['Customer service and retail operations'],
  },
];

export const education: EducationItem[] = [
  {
    institution: 'CodeSpace Academy',
    qualification: 'Software Development Certificate',
    period: 'January 2023 – December 2023',
    details: [
      'Overall Average: 83%',
      'Attendance: 98%',
      'Programming Fundamentals: 98%',
      'Intro to Web: 91%',
      'Interactive Web Apps: 77%',
      'Dynamic Web Apps: 66%',
    ],
  },
  {
    institution: 'Queenspark High School',
    qualification: 'National Senior Certificate',
    period: 'Completed 2022',
    details: ['Completed'],
  },
];
