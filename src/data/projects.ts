export interface ProjectCaseStudy {
  index: string;
  name: string;
  category: string;
  status: 'Live' | 'In progress' | 'Planned' | 'Origin project';
  summary: string;
  problem: string;
  build: string;
  dataAngle: string;
  proof: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projects: ProjectCaseStudy[] = [
  {
    index: '01',
    name: 'Operations KPI Dashboard',
    category: 'Analytics Product',
    status: 'In progress',
    summary: 'A focused dashboard concept for turning daily operational numbers into clear performance decisions.',
    problem: 'Teams often see totals, but not the pattern behind missed performance.',
    build: 'A dashboard layout for SLA, quality, attendance, productivity, and exceptions.',
    dataAngle: 'KPI thresholds, daily trends, risk flags, and manager-ready performance narratives.',
    proof: 'Shows analytics thinking, business logic, dashboard UX, and frontend execution.',
    tags: ['React', 'TypeScript', 'Excel Logic', 'Dashboard UX'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    index: '02',
    name: 'Email Allocation Planner',
    category: 'Decision Tool',
    status: 'Planned',
    summary: 'A resource allocation tool for planning mailbox recovery work using volume, SLA age, and available capacity.',
    problem: 'Mailbox backlogs become hard to control when resources are assigned manually.',
    build: 'A planning interface that translates volumes and resource hours into bucket-level allocation.',
    dataAngle: 'New in, Day 1, Day 2, Out of SLA, emails per interval, and shift finish times.',
    proof: 'Connects operational constraints with practical analytics and usable tooling.',
    tags: ['Capacity Planning', 'Excel Model', 'React', 'Operations'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    index: '03',
    name: 'Agent Performance Scorecard',
    category: 'Analytics System',
    status: 'Planned',
    summary: 'A scorecard concept that combines productivity, quality, attendance, and coaching indicators.',
    problem: 'Agent performance can be judged too late when the data is not visible daily.',
    build: 'A scorecard interface that groups performance into coaching-ready signals.',
    dataAngle: 'Quality %, contacts handled, successful outcomes, AHT, absence, and workflow exceptions.',
    proof: 'Shows how I structure data for fair, repeatable performance conversations.',
    tags: ['Data Analysis', 'KPI Design', 'TypeScript', 'Scorecards'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    index: '04',
    name: 'AI Study Companion',
    category: 'Learning Tool',
    status: 'Planned',
    summary: 'A practice and revision interface designed to help learners build confidence through structured questions.',
    problem: 'Learners need guided practice that feels simple, not overwhelming.',
    build: 'An interactive quiz and revision flow with progress tracking and feedback states.',
    dataAngle: 'Attempt history, topic strength, completion status, and repeated weak areas.',
    proof: 'Shows product thinking, learning UX, and data-backed progression.',
    tags: ['Learning UX', 'JavaScript', 'Data Feedback', 'AI Ready'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    index: '05',
    name: 'Process Intelligence Log',
    category: 'Ops Intelligence',
    status: 'Planned',
    summary: 'A structured log for capturing process gaps, repeat failures, escalation themes, and improvement actions.',
    problem: 'Process issues repeat when insights stay trapped in chats and meetings.',
    build: 'A lightweight logging system for turning operational observations into trackable actions.',
    dataAngle: 'Issue frequency, owner, status, queue, root cause, action date, and impact area.',
    proof: 'Shows systems thinking and the ability to convert noise into decision data.',
    tags: ['SOPs', 'Root Cause', 'Workflow', 'Analytics'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    index: '06',
    name: 'Sloptify',
    category: 'Origin Project',
    status: 'Origin project',
    summary: 'My 2023 CodeSpace capstone project and first public deployment baseline.',
    problem: 'I needed to prove I could complete and ship a frontend project.',
    build: 'A music-themed frontend capstone built during my software development programme.',
    dataAngle: 'Useful as a before-and-after marker for growth into analytics products and React/TypeScript.',
    proof: 'Shows my early foundation and gives context to how my frontend skills have evolved.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
    liveUrl: 'https://sloptify.netlify.app/',
    githubUrl: '#',
  },
];
