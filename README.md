# ljsherlock.com Career Website

Personal career site for Lewis Sherlock, built with [Astro](https://astro.build), TypeScript and Tailwind CSS, deployed on Vercel.

## Commands

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + static build to dist/
npm run preview  # serve the production build
```

## Updating content

All copy lives in `src/data/` — edit these instead of the components:

- `profile.ts` — name, role, tagline, about, links, headline stats
- `experience.ts` — roles, client engagements, education
- `projects.ts` — selected work cards (add `url` to make a card link out)
- `skills.ts` — skill groups

Replace `public/Lewis_Sherlock_CV.pdf` to update the downloadable CV, and `src/assets/headshot.jpg` for the portrait (also used as the link-preview image).
