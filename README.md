# Prajakta Thopte — Portfolio

A single-page portfolio for **Prajakta Thopte**, a Data Analyst and Business Analytics
professional working with Power BI, SQL, Python, and Excel.

The site presents three things: a short positioning statement, the toolkit, and the
areas of focus. It is a static front end — no backend, no database, no API keys, and
no runtime dependencies beyond React itself.

## Table of contents

- [Content policy](#content-policy)
- [Tech stack](#tech-stack)
- [Requirements](#requirements)
- [Getting started](#getting-started)
- [Scripts](#scripts)
- [Linting and type checking](#linting-and-type-checking)
- [Environment variables](#environment-variables)
- [Project structure](#project-structure)
- [Deployment](#deployment)
- [Developer](#developer)

## Content policy

Everything shown on the page is limited to what is already documented in this
repository. The site deliberately makes **no claims** about employers,
certifications, project outcomes, or performance metrics — the "Analysis record"
table in the hero describes the analysis process, not results.

Add real case studies, education, work history, certifications, and contact details
only once they are verified and approved by the portfolio owner.

## Tech stack

| Layer | Choice |
| --- | --- |
| UI | React 19 |
| Language | TypeScript (strict) |
| Build tool | Vite 8 |
| Styling | Hand-authored CSS in `src/styles.css` (no CSS framework) |
| Linting | oxlint |

All layout and theming lives in `src/styles.css`, built on CSS custom properties under
`:root`. There is no utility-class framework in the build, so the shipped CSS contains
only the styles this page actually uses.

## Requirements

- **Node.js `^20.19.0` or `>=22.12.0`** (required by Vite 8)
- npm (the lockfile is `package-lock.json`, so npm is the expected client)

## Getting started

```bash
npm install
npm run dev
```

Vite prints a local URL (by default `http://localhost:5173`) — open it in a browser.
The dev server supports hot module replacement.

To check the production build locally:

```bash
npm run build
npm run preview
```

`npm run build` writes static assets to `dist/`. `npm run preview` serves that folder
so you can verify the real, minified output before deploying.

## Scripts

| Script | Runs | Purpose |
| --- | --- | --- |
| `npm run dev` | `vite` | Start the dev server with HMR |
| `npm run build` | `tsc -b --noEmit && vite build` | Type check, then emit the production bundle to `dist/` |
| `npm run preview` | `vite preview` | Serve the contents of `dist/` locally |
| `npm run lint` | `oxlint` | Lint with the rules in `.oxlintrc.json` |
| `npm run typecheck` | `tsc -b --noEmit` | Type check only — no output, no bundling |

## Linting and type checking

```bash
npm run lint
npm run typecheck
```

Both are expected to exit cleanly. `typecheck` uses `tsc -b` because the project is
split into TypeScript project references (`tsconfig.app.json` for `src/`,
`tsconfig.node.json` for `vite.config.ts`); each referenced config already sets
`noEmit`, so this checks types without writing files. Strict mode is enabled in both.

## Environment variables

The application requires **no environment variables**. See [.env.example](.env.example)
for the documented template.

`.gitignore` excludes `.env` and `.env.*` while explicitly allowing `.env.example`, so
the template is tracked and real secrets are not. If a server-side API is added later,
keep those credentials in your hosting provider's environment settings rather than in
the repository, and expose browser-safe values only through Vite's `VITE_` prefix.

## Project structure

```
.
├── index.html                 # HTML shell: metadata, Open Graph, font preconnect
├── public/
│   └── favicon.svg            # SVG favicon
├── src/
│   ├── main.tsx               # React entry point
│   ├── App.tsx                # Page composition
│   ├── styles.css             # Design tokens + all component styles
│   ├── components/
│   │   ├── Hero.tsx           # Hero copy + "Analysis record" specimen table
│   │   ├── Section.tsx        # Shared numbered section shell
│   │   ├── SiteHeader.tsx     # Sticky masthead + in-page navigation
│   │   └── SiteFooter.tsx     # Footer
│   ├── data/
│   │   └── content.ts         # All page copy and section metadata
│   └── hooks/
│       ├── useActiveSection.ts    # Scroll spy driving `aria-current`
│       └── useRevealOnScroll.ts   # IntersectionObserver scroll reveal
├── .env.example
├── .oxlintrc.json
├── vercel.json
├── tsconfig.json              # Project references root
├── tsconfig.app.json          # App code (strict)
├── tsconfig.node.json         # Build config (strict)
└── vite.config.ts
```

Editing page copy? Everything lives in `src/data/content.ts` — the components read
from it, so text changes do not require touching JSX.

## Deployment

The project is a static SPA and deploys to any static host. Vercel is the current
target:

1. Import the repository into Vercel.
2. Accept the detected framework preset (**Vite**). Build command `npm run build`,
   output directory `dist`.
3. No environment variables are needed.
4. [vercel.json](vercel.json) rewrites all unmatched paths to `/index.html` so in-page
   anchors and direct URL access resolve correctly.

Before going live, confirm the portfolio owner approves the content and add the real
production domain — only then add canonical URL, `og:url`, sitemap, and `robots`
metadata, since those must not point at a placeholder domain.

## Developer

Mohd Kamran Siddiquee — https://github.com/skamran0786
