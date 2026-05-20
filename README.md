# Treehouse — Dynamic Link Tree

A modern link hub built from the same polished design system, now converted into a dynamic link tree for my most important destinations.

## Tech

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** — Material 3-inspired tokens and glassmorphic surfaces
- **motion** — subtle animated interaction patterns
- **next-themes** — light/dark theme persistence
- **lucide-react** — iconography

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build       # production build
npm start           # serve the production build
npm run lint        # ESLint
```

## Editing links

All link content lives in [`src/lib/data.ts`](src/lib/data.ts). Update the `links` array there to add, remove, or reorder destinations.

## Deploying

1. Push this folder to your GitHub repo.
2. Open https://vercel.com/new and import the repository.
3. No environment variables are required.

## Project structure

```
src/
├── app/
│   ├── layout.tsx            # fonts, theme provider, metadata
│   ├── page.tsx              # homepage layout for the link tree
│   ├── globals.css           # theme tokens and glass utilities
│   └── opengraph-image.tsx   # OG preview image
├── components/
│   ├── hero.tsx              # landing banner and primary CTA
│   ├── link-tree.tsx         # searchable link grid
│   ├── footer.tsx            # footer with site credit
│   ├── theme-toggle.tsx      # light/dark theme switcher
│   └── ui/
│       ├── md-button.tsx     # button component
│       └── ...
└── lib/
    └── data.ts               # link tree data source
```
