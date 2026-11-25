export interface Project {
  title: string;
  context: string;
  summary: string;
  outcome: string;
  tags: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    title: 'Programmatic SEO engine',
    context: 'Hello Yellow · 2025',
    summary:
      'Designed and built a system that generates search-optimised event pages at scale, from data model to rendering and indexing.',
    outcome: '0 → 300+ indexed pages in weeks, 2,000+ daily impressions in three months.',
    tags: ['TypeScript', 'Node.js', 'Technical SEO', 'GCP'],
  },
  {
    title: 'Mobile document signing app',
    context: 'ApproveMe · 2020',
    summary:
      'Led development of a responsive signing experience backed by a Storybook component library and Redux state synced to a custom API.',
    outcome: 'Launched a fully responsive mobile app with a reusable, documented UI system.',
    tags: ['React', 'TypeScript', 'Redux', 'Storybook'],
  },
  {
    title: 'Airbus interactive exhibit',
    context: 'Machine.Earth · 2019',
    summary:
      'Touch-screen desktop app bringing aircraft brochures to life, displayed beside each aircraft at Airbus’s annual Geneva exhibition.',
    outcome: 'Shipped to a live, high-profile trade show environment.',
    tags: ['React', 'Electron', 'Touch UI'],
  },
];
