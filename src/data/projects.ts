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
    title: 'AI contact-enrichment agent',
    context: 'Hello Yellow',
    summary:
      'An event-marketing agent that turns an attendee list into one job per contact, enriches each through Apollo and LLMs, scores it against an ICP with a confidence level, and streams every tool call to a live UI. Runs on per-user Cloud Tasks queues feeding Cloud Run workers, with retries built in.',
    outcome: 'Idea to production in under two weeks; 50,000+ contacts processed.',
    tags: ['Python', 'GPT-5', 'Gemini', 'Cloud Run', 'Cloud Tasks', 'Firestore'],
  },
  {
    title: 'Programmatic SEO engine',
    context: 'Hello Yellow',
    summary:
      'Built a system that generates search-optimised event pages at scale, plus an activation path that opens sign-in on each event and drops new accounts into a live analysis of it.',
    outcome: '0 → 300+ indexed pages in 2–4 weeks; 2,000–3,200 daily impressions within 2–3 months.',
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
