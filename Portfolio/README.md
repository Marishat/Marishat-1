# Marishat Tasmim — Portfolio 🌸

A Next.js (App Router) portfolio built on her own pastel palette:
`#99CDD8 · #DAEBE3 · #FDE8D3 · #F3C3B2 · #CFD6C4 · #657166`

## Folder structure

```
app/
  layout.tsx        → root layout, imports globals.css, SEO metadata
  page.tsx          → just assembles the components (nice and slim)
  globals.css       → all styling (palette, animations, responsive rules)

components/
  Navbar.tsx        → sticky nav + mobile menu          (client)
  Hero.tsx          → headline + capsule portrait        (client)
  SectionHeader.tsx → reusable eyebrow + heading
  About.tsx         → intro + education card
  Experience.tsx    → Intellier internship
  Projects.tsx      → project cards (data-driven)
  Research.tsx      → published paper spotlight
  Skills.tsx        → grouped skill pills (data-driven)
  References.tsx    → reference cards (data-driven)
  Contact.tsx       → contact section shell
  ContactForm.tsx   → working email form via FormSubmit  (client)
  Footer.tsx        → footer with palette chips
  ScrollReveal.tsx  → scroll-in animation observer       (client)

lib/
  data.ts           → ALL content lives here: projects, skills,
                      education, references, links, palette.
                      Edit this file to update the site — you
                      almost never need to touch the components.
```

## Setup

1. Copy `app/`, `components/`, and `lib/` into your Next.js project
   (they replace/merge with your existing `app` folder).
2. Add to `/public`:
   - `profile.jpg` → her photo (fills the hero capsule automatically)
   - `cv.pdf`      → her CV (the "Download CV" buttons serve this)
3. If your `tsconfig.json` doesn't already have the `@/` alias
   (create-next-app adds it by default), make sure it contains:
   ```json
   "paths": { "@/*": ["./*"] }
   ```
4. Run `npm run dev`.

## Email form (one-time activation)

The contact form posts to **formsubmit.co** and delivers messages to
`marishat098@gmail.com` — no backend or API key needed.

⚠️ The **first** submission triggers a confirmation email from
FormSubmit to that Gmail inbox. Click the link once, and every
message after that arrives automatically. Tip: submit a test
message yourself right after deploying to trigger it.
