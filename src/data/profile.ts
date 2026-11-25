export const profile = {
  name: 'Lewis Sherlock',
  role: 'Senior Full-Stack Product Engineer',
  location: 'Bangkok, Thailand',
  availability: 'Fully remote · Open to global teams',
  yearsExperience: 12,
  email: 'lewis@ljsherlock.com',
  cvPath: '/Lewis_Sherlock_CV.pdf',
  siteUrl: 'https://ljsherlock.com',
  tagline:
    'I turn founder ideas into launch-ready web products, pairing hands-on frontend craft with server-side and AI infrastructure.',
  about: [
    'I’m a senior full-stack product engineer with 12 years of experience across startups, agencies and in-house teams. I partner directly with CEOs and stakeholders, translating business goals into technical proposals, design direction and shipped features.',
    'I ramp up quickly on new codebases, teams and industries, and bring a designer’s eye to engineering — turning Figma files into clean, reusable interfaces. Most recently I built a programmatic SEO system that took a startup from zero to 300+ Google-indexed pages and 2,000+ daily search impressions within three months.',
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/lewis-sherlock/',
    github: 'https://github.com/ljsherlock',
  },
} as const;

export const highlights = [
  { value: '12', label: 'Years shipping for the web' },
  { value: '300+', label: 'Pages indexed via programmatic SEO' },
  { value: '3,200', label: 'Peak daily search impressions' },
  { value: '50–100', label: 'Client sites and apps delivered' },
] as const;
