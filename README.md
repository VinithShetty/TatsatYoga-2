# Tat Sat Yoga

Website for **Tat Sat Yoga** — live online yoga classes with Mohini Rai, a 300-hour certified teacher. Built to rank for online-yoga searches and turn visitors into free-trial bookings over WhatsApp.

**Stack:** Next.js 16 (App Router, static export) · React 19 · TypeScript · Tailwind CSS 4

## Quick start

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server with hot reload |
| `npm run build` | Production build into `out/` — plain static HTML |
| `npm start` | Serve the built `out/` folder locally |
| `npm run lint` | ESLint |

## Editing content

Almost everything a non-developer would want to change lives in one file: **[`src/lib/site-config.ts`](src/lib/site-config.ts)**.

| To change… | Edit |
| --- | --- |
| WhatsApp number, teacher name, tagline | `siteConfig` |
| Class formats, durations and **prices** | `classFormats` |
| Yoga styles on the Practice page | `styles` |
| "Who should practise yoga" cards | `audiences` |
| Header and footer links | `primaryNav`, `footerNav` |

Page copy lives in `src/app/<route>/page.tsx`. Colours and fonts are design tokens in [`src/app/globals.css`](src/app/globals.css).

## Deploying to Vercel

1. Push this repo to GitHub.
2. At [vercel.com/new](https://vercel.com/new), import the repository.
3. Accept the defaults — Vercel detects Next.js. No build settings or environment variables are required.

Every push to `main` then redeploys automatically, and every pull request gets its own preview URL.

### Custom domain

When `tatsatyoga.in` is pointed at Vercel, add it under **Project → Settings → Domains**. The site picks up the new domain on its next build — share previews, the sitemap and structured data all follow it automatically.

### Environment variables

None are required on Vercel.

| Variable | When you need it |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Only when building for a host **other than** Vercel. Set it to the URL the site will be served from (e.g. `https://example.netlify.app`), or WhatsApp and social previews will point at the wrong domain. |

## Hosting elsewhere

`npm run build` emits a fully static site in `out/` with no server required, so it runs on GitHub Pages, Netlify, Cloudflare Pages or any static host. Set `NEXT_PUBLIC_SITE_URL` when building (see above).

## Project structure

```
src/
  app/                 One folder per route (about, classes, pricing, …)
    classes/[slug]/    The three format pages, generated from classFormats
    icon.svg           Favicon
    apple-icon.png     iOS home-screen icon
    opengraph-image.png  Share preview for WhatsApp and social
    sitemap.ts         Generated sitemap.xml
    robots.ts          Generated robots.txt
  components/          Nav, footer, buttons, logo
  lib/site-config.ts   Content and settings — start here
```

## Still to do

- **Photography** — three photos are in `public/images/`, compressed to WebP and cropped to 4:5. More would let the class pages each have their own.
- **About page** — expanded content from Mohini.
- **Privacy policy and terms** — placeholder pages, excluded from search. Needs real text before any bookings or payments are taken online.
- **Reviews** — the page is an honest empty state until real, approved reviews exist.
