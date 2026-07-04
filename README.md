# Shubhankar Pandey — Portfolio

A premium, dark-first personal portfolio for an AI/ML engineer, built with
Next.js 15, React 19, TypeScript, Tailwind CSS, and Framer Motion.

## Design concept

The interface borrows the vocabulary of the projects it showcases: detection
models that draw a bounding box and return a confidence score. Section
eyebrows read like classifier output (`CLASS: PROJECTS · CONF: 0.98`), and
the hero opens with a single scan-line sweep across a coordinate grid rather
than generic floating particles. See the design system notes in the original
planning conversation for the full rationale (palette, type, animation plan).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before you deploy

1. **Add your resume PDF** — place it at `public/resume.pdf`. The nav and
   hero both link to `/resume.pdf` for download.
2. **Update metadata** — `app/layout.tsx` sets `metadataBase` to a
   placeholder domain (`https://shubhankarpandey.dev`). Change this to your
   real domain once you have one, and update the matching URL in
   `app/sitemap.ts` and `app/robots.ts`.
3. **Wire up the contact form** — `components/contact/ContactForm.tsx`
   currently just flips local state on submit. Connect it to a service like
   Resend, Formspree, or a simple API route before going live.
4. **Optional: GitHub/LeetCode stats** — if you want live GitHub
   contribution graphs or LeetCode stats, add a small API route under
   `app/api/` that fetches and caches those from the public GitHub API /
   LeetCode's unofficial API, then render it as a new component in
   `components/`. Left out of this build since it needs your API keys /
   rate-limit handling to be production-safe.

## Project structure

```
app/
  layout.tsx        — fonts, SEO metadata
  page.tsx           — assembles all sections
  globals.css        — design tokens, base styles
  robots.ts          — robots.txt
  sitemap.ts         — sitemap.xml
components/
  nav/               — Nav, CommandPalette (⌘K)
  hero/              — Hero, ScanGrid (signature scan animation), StatStrip
  about/             — About
  skills/            — Skills, SkillCluster
  projects/          — Projects, ProjectCard, ProjectDetail
  research/          — Research, PublicationCard
  timeline/          — Timeline, TimelineNode (education + milestones)
  certifications/    — Certifications, CertBadge
  achievements/      — Achievements, AchievementCard
  contact/           — Contact, ContactForm
  ui/                — Section, Reveal (shared primitives)
  Footer.tsx
data/                — all resume content as typed data (edit here to update copy)
```

## Content

All copy is sourced directly from the resume — no invented projects,
metrics, or employers. To update content, edit the files in `data/` rather
than the components; the components just render whatever is in `data/`.

## Deploying to Vercel

```bash
npm install -g vercel
vercel
```

Or connect the GitHub repo directly at [vercel.com/new](https://vercel.com/new)
— Vercel auto-detects Next.js and needs no additional configuration.

## Performance & accessibility

- Fonts loaded via `next/font` (self-hosted, no layout shift)
- Images should use `next/image` if you add project screenshots
- All interactive elements have visible focus states and respect
  `prefers-reduced-motion`
- Semantic headings and ARIA labels on the command palette and project
  detail modal
