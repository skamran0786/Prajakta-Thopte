# Prajakta Thopte Portfolio

A production-ready portfolio website for Prajakta Thopte, a Data Analyst and Business Analytics professional focused on Power BI, SQL, Python, Excel, and data-driven business decision support.

## Features

- Responsive portfolio layout for desktop, tablet, and mobile devices
- Custom navigation with anchor sections and mobile menu
- Skills, experience, education, certification, and project sections
- Project case-study pages with placeholder content for missing evidence
- Contact form with validation and a mailto fallback when a backend email service is not configured
- SEO metadata, favicon, robots.txt, and sitemap placeholder files
- React + TypeScript + Vite project architecture for maintainability

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide React

## Local development

1. Install dependencies:
   npm install
2. Start the development server:
   npm run dev
3. Open the local URL reported by Vite in the browser.

## Production build

1. Create a production build:
   npm run build
2. Preview the production build locally:
   npm run preview

## Deployment

This portfolio is ready to deploy to Vercel as a Vite single-page application. `vercel.json` rewrites direct navigation to client-side routes (such as `/projects/retail-analysis`) to the app entry point.

Vercel project settings:

- Root directory: the folder containing this `package.json` (the project root)
- Framework preset: Vite
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`

No environment variables are currently required. The contact form uses a `mailto:` fallback, and the app does not read `import.meta.env` values. Do not add secrets as `VITE_*` variables; Vite exposes those values in client-side bundles. If a server-side email integration is added later, configure its credentials as server-only Vercel environment variables.

After choosing the production domain, replace the `example.com` placeholder in `index.html`, `public/robots.txt`, and `public/sitemap.xml`.

## Contact form integration

The current form uses a `mailto:` fallback because no production email backend has been configured.

## Verification report

Completed functionality:

- Responsive portfolio sections and navigation
- Home, About, Skills, Projects, Experience, Education, Contact, and Footer content
- Project detail pages with placeholder evidence states
- Contact form validation and mailto fallback
- 404 page for unmatched routes
- Basic SEO metadata and favicon configuration
- Local build and lint checks executed

Unresolved issues and required owner actions:

- Project files, notebooks, dashboards, screenshots, and verified findings remain pending confirmation
- Exact education dates and certification details should be verified before public release
- Production domain and canonical URL should be chosen before deployment
- Real email service integration should be configured once a provider is selected

## Important note on project evidence

The portfolio intentionally preserves the résumé information and clearly labels missing project details as placeholders. This avoids making unsupported factual claims about dashboards, dataset sizes, rubric metrics, performance improvements, or financial impact.
