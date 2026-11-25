export interface Engagement {
  client: string;
  period: string;
  points: string[];
}

export interface Role {
  title: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  points?: string[];
  engagements?: Engagement[];
  tags?: string[];
}

export const experience: Role[] = [
  {
    title: 'Lead Product Engineer',
    company: 'Hello Yellow',
    period: 'Oct 2025 — Present',
    location: 'San Francisco, CA · Remote',
    summary:
      'Own the complete development operation for a San Francisco startup serving roughly 500 users, reporting directly to the CEO. Took on design and backend ownership as the team streamlined.',
    points: [
      'Built a programmatic SEO system that scaled from zero to 300+ Google-indexed event pages in 2–4 weeks, with 150+ pages drawing impressions in a single week.',
      'Lifted daily search impressions from near zero to 2,000–3,200 and average position to 10–12 within three months, as organic sign-ups climbed.',
      'Deliver one cohesive product across a web app and Chrome extensions, owning full-stack implementation and maintenance.',
      'Engineer the server-side and AI infrastructure powering core product features, from backend services to LLM integrations.',
      'Scope features with the CEO, write technical proposals for leadership approval, and demo releases to stakeholders and clients.',
    ],
    tags: ['TypeScript', 'React', 'Node.js', 'GCP', 'Firebase', 'Gemini', 'Claude', 'Technical SEO'],
  },
  {
    title: 'Founder & Senior Full-Stack Developer',
    company: 'Déjà Vu Design',
    period: '2018 — 2026',
    location: 'Remote',
    summary:
      'Eight years of remote contract work, embedding with distributed agency and product teams to build complex React and TypeScript applications.',
    engagements: [
      {
        client: 'HYD',
        period: '2021 — 2022',
        points: [
          'Advanced a large, complex e-commerce redesign for The School of Life alongside HYD’s London-based developers, project managers and QA.',
        ],
      },
      {
        client: 'ApproveMe',
        period: '2020 — 2021',
        points: [
          'Led development of a fully responsive mobile signing app for a digital document platform.',
          'Converted Figma designs into a reusable component library documented in Storybook.',
          'Architected Redux state around ApproveMe’s custom user-data API to keep the app in sync with live account data.',
        ],
      },
      {
        client: 'Double Top',
        period: '2019 — 2020',
        points: [
          'Elevated a feature-rich insurance website and quotation flow built on insurance-estimation APIs.',
          'Extended a React application with UI and business logic, packaged as a WordPress plugin on the REST API.',
        ],
      },
      {
        client: 'twoboys & Machine.Earth',
        period: '2018 — 2019',
        points: [
          'Turned a Soho design agency’s concepts into fully functional websites that preserved every design detail.',
          'Built a touch-screen React and Electron app showcasing Airbus aircraft at the company’s annual Geneva exhibition.',
        ],
      },
    ],
    tags: ['TypeScript', 'React', 'Redux', 'Styled Components', 'Storybook', 'Electron', 'Express'],
  },
  {
    title: 'Senior Frontend Developer',
    company: 'Shelter UK',
    period: '2017 — 2018',
    location: 'London, UK',
    summary:
      'Led frontend development for the UK housing and homelessness charity, guiding a team of three developers.',
    points: [
      'Managed developers and coordinated workload to deliver consistent, high-quality releases.',
      'Authored detailed specifications that fed directly into Scrum planning.',
      'Reviewed code and guided technical decisions across the frontend.',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Redwire Design, Staffcare, Prism Media & more',
    period: '2014 — 2017',
    location: 'London, UK',
    summary:
      'Built a versatile foundation across London agencies, an in-house team and freelance clients — delivering 50–100 websites, web apps, email campaigns and marketing projects.',
    points: [
      'Introduced scalable, maintainable CSS architecture at Staffcare.',
      'Created a children’s stencil-design app for a chocolate-making box set with a complex HTML5 Canvas interface.',
      'Built custom WordPress themes, PHP (Yii) apps, microsites and email campaigns for clients across many industries.',
    ],
  },
];

export const education = [
  {
    qualification: 'Joint Honours Degree, Web Development & Media Technology (2:1)',
    institution: 'Kingston University',
    year: '2014',
  },
  {
    qualification: 'BTEC Diploma & Certificate, Business Studies & Finance',
    institution: 'South East Essex College',
    year: '2008',
  },
];
