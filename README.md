# Meridian Estates

A modern, **awwwards-quality real estate marketplace** built as a production-grade frontend. Curated apartments, villas, penthouses, plots and commercial space across India — with editorial typography, asymmetric layouts, smooth scrolling, and scroll-reveal motion throughout.

> **Mock data only.** No backend, no database, no auth. All search, filtering, and form handling run client-side.

![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)

---

## ✨ Features

- **Editorial design** — oversized `clamp()` hero type, weight contrast (Poppins 700/400), asymmetric broken grids, generous whitespace.
- **Motion** — Framer Motion entrance & scroll-reveal animations, smooth page transitions, parallax hero, animated stat counters, a horizontal city marquee, and a lightweight custom cursor.
- **Smooth scrolling** via Lenis.
- **Client-side listings** — pure, testable filter/sort logic with state synced to URL query params, active filter chips, results count, and an empty state.
- **Property detail** — image gallery with lightbox, spec row, amenities, a styled static-map placeholder, agent card, and similar-property suggestions.
- **Contact form** with client-side validation, inline errors, and a simulated submit success state.
- **Blog** — index with a featured post + grid, and full post detail pages.
- **Accessible & responsive** — semantic HTML, keyboard focus states, alt text, mobile-first layouts, and full `prefers-reduced-motion` support (all heavy animation disables when requested).
- **Performance** — `next/image` everywhere with lazy loading and no layout shift; all 28 routes prerendered as static HTML.

## 🛠 Tech Stack

| Concern | Choice |
| --- | --- |
| Framework | [Next.js 15](https://nextjs.org/) (App Router) + TypeScript (strict, no `any`) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) with a custom theme (no default colors) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Smooth scroll | [Lenis](https://github.com/darkroomengineering/lenis) |
| Icons | [lucide-react](https://lucide.dev/) |
| Fonts | [Poppins](https://fonts.google.com/specimen/Poppins) via `next/font` (400/500/600/700) |

## 🎨 Design tokens

```
blue-900  #0F2A47   deep navy — primary surfaces, headers, footer
blue-700  #1B3A5B   hover / secondary navy
blue-500  #2E5C8A   accent blue — links, highlights
brown-700 #5C4433   dark earth — text accents, borders
brown-500 #8C6A4A   warm brown — CTAs, badges, dividers
brown-300 #C4A688   light tan — subtle backgrounds
cream     #FAF7F2   off-white — page background
ink       #1A1A1A   body text
```

## 🚀 Getting started

```bash
# install dependencies
npm install

# start the dev server (http://localhost:3000)
npm run dev

# production build (type-checks all routes)
npm run build
npm run start
```

> Images load from Unsplash placeholder URLs, so the app renders immediately with no local assets required.

## 📁 Project structure

```
app/
  layout.tsx              fonts, Lenis, page transitions, cursor, nav/footer
  page.tsx                home
  not-found.tsx           styled 404
  properties/page.tsx     listings (client-side filter/sort)
  properties/[id]/page.tsx  property detail
  about/page.tsx          company story + agents grid (#agents)
  contact/page.tsx        validated inquiry form
  blog/page.tsx           journal index
  blog/[slug]/page.tsx    post detail
components/
  ui/                     Button, Badge, Input/Select/Textarea primitives
  Navbar, Footer, Hero, PropertyCard, FilterBar, Marquee,
  StatCounter, AnimatedSection, SmoothScroll, PageTransition,
  CustomCursor, PropertyGallery, StaticMap, AgentCard,
  AgentsGrid, PropertiesView, ContactForm
data/
  properties.ts           14 typed properties
  agents.ts               5 agents
  posts.ts                6 blog posts
lib/
  filters.ts              pure filter/sort functions
  format.ts               INR / area / date formatting
  cn.ts, useCallbackRef.ts
types/
  index.ts                shared TypeScript types
```

## 🗺 Routes

| Route | Description |
| --- | --- |
| `/` | Home — hero, featured grid, stats, marquee, about preview, journal, CTA |
| `/properties` | Listings with filters, sort, chips, and URL-synced state |
| `/properties/[id]` | Property detail (`p-01` … `p-14`) |
| `/about` | Company story, values, stats, and team (`/about#agents`) |
| `/contact` | Validated inquiry form + contact details |
| `/blog` | Journal index |
| `/blog/[slug]` | Article detail |

## 📝 Notes

- All pricing uses INR with the lakh/crore convention (e.g. `₹1.25 Cr`, `₹45 L`).
- Data is entirely mocked for demonstration; there is no network layer.
- Built with care in Hyderabad. 🏙

---

_This project was scaffolded and built with [Claude Code](https://claude.com/claude-code)._
