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
    'I’m a senior full-stack product engineer with 12 years of experience, most at home at startup speed. I partner directly with CEOs, turning priorities into technical proposals, design direction and shipped features — often as the only engineer on the team.',
    'Most recently at Hello Yellow I shipped 5+ products, mostly as sole engineer. The headline was a production AI agent pipeline that went from idea to production in under two weeks and processed 50,000+ contacts — enriching each one through LLMs, scoring it with a confidence level, and showing every step live in the UI.',
    'I ramp up quickly on new codebases, teams and industries, and bring a designer’s eye to engineering — turning Figma files into clean, reusable interfaces.',
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/lewis-sherlock/',
    github: 'https://github.com/ljsherlock',
  },
} as const;

export const highlights = [
  { value: '12', label: 'Years shipping for the web' },
  { value: '<2 wks', label: 'Idea to production for an AI agent' },
  { value: '50k+', label: 'Contacts processed by production AI agent pipeline' },
  { value: '50–100', label: 'Client sites and apps delivered' },
] as const;
