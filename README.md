# Youth Creatifers Studio — Next.js Refactor

Refactored from a monolithic static HTML file into a modular Next.js 14 (App Router) app.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

```
app/
  layout.tsx       Root layout, metadata, global font wiring
  page.tsx          Composes all sections
  globals.css       Fonts, .frosted-nav, custom scrollbar, smooth scroll
components/
  Navbar.tsx        "use client" — sticky scroll elevation + smooth anchor scroll
  Hero.tsx          Hero section with atmospheric grid texture
  Spotlight.tsx     Asymmetric image showcase (next/image)
  Services.tsx      4 core competency cards, data-driven
  Vision.tsx        Vision/about split layout (next/image)
  Contact.tsx       "use client" — controlled form with React state
  Footer.tsx        Footer links + copyright
tailwind.config.ts  Full design-token system (colors, radii, spacing, type scale)
```

## Notes on the refactor

- **Design tokens**: every custom color, border-radius override (sharp 0px edges,
  full pill radius, and the 8px form-input exception), spacing scale, and font
  size/weight from the original inline `tailwind.config` script now lives in
  `tailwind.config.ts`.
- **Images**: both `<img>` tags were converted to `next/image` with `fill` +
  `sizes`, and the source domain (`lh3.googleusercontent.com`) is whitelisted in
  `next.config.js` via `images.remotePatterns`.
- **Client interactivity**: the scroll-based nav elevation effect and the smooth
  anchor scrolling (previously vanilla `addEventListener` scripts) are now
  implemented with `useState`/`useEffect` inside `Navbar.tsx`, scoped with
  `"use client"`. The contact form uses controlled inputs (`useState`) instead
  of a native `<form action="#">`.
- **Fonts**: Inter and Material Symbols Outlined are imported once in
  `globals.css` rather than as `<link>` tags scattered in the document head.
- **Tailwind Forms plugin**: the original CDN script loaded
  `?plugins=forms`; this is now the `@tailwindcss/forms` package registered in
  `tailwind.config.ts`.

## Wiring up the contact form

`Contact.tsx` currently logs the submitted values to the console and shows a
confirmation message. Replace the `handleSubmit` body with a call to an API
route (e.g. `app/api/contact/route.ts`) or a third-party form service to
actually deliver inquiries.
