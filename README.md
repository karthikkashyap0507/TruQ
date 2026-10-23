# TruQ Design Studio — website

Static website for TruQ Design Studio (architects and interior designers — USA, India, Dubai), built from the *TruQ Design Studio Website Design v2* Figma and the studio profile.

Built with [Astro](https://astro.build) (static HTML output), GSAP + ScrollTrigger for motion and Lenis for smooth scrolling. Fonts (Montserrat, Inter) are self-hosted.

## Run it

Requires Node 22.12+.

```bash
npm install
npm run dev       # local dev server at http://localhost:4321
npm run build     # production build into dist/
npm run preview   # serve the production build
```

## Deploy

### Vercel

1. In Vercel, **Add New → Project** and import this GitHub repository.
2. Leave the settings as detected — `vercel.json` already sets the Astro preset, `npm ci`, `npm run build` and the `dist` output folder.
3. (Optional) Under **Settings → Environment Variables**, add `PUBLIC_ENQUIRY_ENDPOINT` (see below) and redeploy.
4. Add the custom domain under **Settings → Domains**.

The site is fully static: no serverless functions, no adapter needed. Node 22.12+ is required (set in `package.json` → `engines`).

### Other hosts

`npm run build` produces a static `dist/` folder that can be uploaded to any static host (Netlify, Cloudflare Pages, S3, cPanel `public_html`).

## Project enquiry form

Every "Begin a project" button opens the enquiry modal.

- **Default:** with no endpoint configured, submitting opens the visitor's email app with a pre-filled message to `info@truq.studio`.
- **Recommended:** create a form endpoint (e.g. Formspree or Web3Forms), then set it at build time:

  ```bash
  # .env
  PUBLIC_ENQUIRY_ENDPOINT=https://formspree.io/f/xxxxxxx
  ```

  The form POSTs `name, phone, email, type, location, area, message` as `FormData`.

## Editing content

All content lives in `src/data/`:

| File | What it holds |
| --- | --- |
| `site.js` | Contact details, nav, stats, studio offices, marquee words |
| `projects.js` | The 12 projects (copy, meta, filters, home hero slides, featured carousel) |
| `services.js` | Six disciplines and their deliverables |
| `process.js` | Six process stages |
| `articles.js` | Journal essays |
| `press.js` | Accolades and magazine features |

### Project images

Each project's gallery is the folder `src/assets/projects/<slug>/`. Files are shown in name order; `01.jpg` is the hero image. To add photos, drop in `09.jpg`, `10.jpg`… and rebuild. Astro generates responsive WebP sizes automatically. Landscape images run full width; portrait images are paired.

To add a project: add an entry to `projects.js` and a matching image folder.

## Structure

```
src/
  components/   Header, Footer, cards, enquiry modal, marquee, map art…
  data/         Site content (see above)
  layouts/      Base (SEO, Open Graph, JSON-LD) and Legal
  lib/          Image/gallery helpers
  pages/        Routes — /, /works, /works/[slug], /studio, /services,
                /process, /journal, /journal/[slug], /contact, legal, 404, sitemap.xml
  scripts/      Motion and interactions (smooth scroll, reveals, carousel, filters, modal)
  styles/       global.css (tokens), components.css, pages.css
```

## Accessibility & resilience

- Respects `prefers-reduced-motion` (no smooth scroll or scroll animations).
- Works without JavaScript: all content is visible and enquiry buttons fall back to email.
- Keyboard support for the menu, modal (focus trap, Escape) and works carousel.

## Open items from the client

- Studio addresses for India, Dubai and USA (the contact page shows "Studio address to be added").
- High-resolution originals of the renders — most profile images are 600–1500px wide; the photographs from Drive are full resolution.
- Review of written copy: project descriptions beyond the profile text, the seven journal essays (adapted from the profile's manifesto pages), and the Privacy/Terms pages.
