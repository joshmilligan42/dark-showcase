# Vantum Robotics — Autonomy for the Real World

Portfolio demonstration website: a cinematic, motion-rich product site for a fictional robotics company, built to showcase dark-theme art direction, animation, and premium frontend execution.

**Vantum is a fictional brand.** Photography via Unsplash — see [public/images/credits.txt](public/images/credits.txt).

## Stack

- Next.js 16 (App Router, static prerender) + TypeScript
- Tailwind CSS v4 (design tokens + marquee keyframes in `app/globals.css` via `@theme`)
- Framer Motion (hero parallax, count-up stats, slide-in reveals)
- Space Grotesk + Inter via `next/font`
- lucide-react icons

## Highlights

- Full-viewport hero with scroll-linked parallax (`useScroll` + `useTransform`)
- Animated count-up stats bar triggered on scroll into view
- Infinite CSS marquee of capabilities (pure CSS keyframes, `motion-reduce` aware)
- Four platform cards with hover zoom + spec chips; alternating feature rows with directional reveals
- Horizontally scrollable spec table on small screens
- Fully responsive 375px → 1440px+, zero horizontal overflow (verified via Playwright at 375/768/1440, including mid-animation stress test)

## Run

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build (static)
```

## Deploy

Push to GitHub, import the repo at [vercel.com/new](https://vercel.com/new) — zero config. After the first deploy, update `metadataBase` in `app/layout.tsx` to the live URL.
