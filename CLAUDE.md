# CLAUDE.md — Dream Business Tools

This folder contains apps and tools built for Dream Business, a productized consulting brand. Read this file's rules before writing any code. For deeper context, read the referenced docs before starting UI or copy work.

## What Dream Business is

Business matchmaking for employed professionals aged 30–55. We help people identify and launch the right business without disrupting a stable life they value. Tagline: "The Infrastructure of Freedom." Markets: Germany, Austria, UK, Romania, US. All customer-facing material is in English.

The brand operates faceless (no founder name, face, or personal story on any surface) due to an employment constraint. Never generate content implying a named founder, personal testimony, or first-person memoir.

## Before building anything

1. **UI or design work** → read `docs/brand.md` first. It is authoritative on colors, type, layout, and visual rules.
2. **Any customer-facing copy** → read `docs/business.md` (positioning, audience, offers) and follow the voice rules summarized there. When in doubt, plainer wins.
3. **Components, spacing, interactive patterns** → read `docs/design-system.md`.

## Hard rules (never violate)

- **No fabricated anything.** No invented metrics, testimonials, client stories, or research claims. German competition law exposure is real. Placeholder data must be visibly labeled as placeholder.
- **No em dashes in customer-facing copy.** Use commas, colons, or separate sentences.
- **Gold (#C9A66B) is never a background color.** Accent only: CTAs, highlights, thin rules.
- **No gradients on primary backgrounds, no drop shadows on text/logo, no bevels or skeuomorphic effects.**
- **Faceless constraint:** no founder imagery, names, or autobiography anywhere.
- **Scope discipline:** build exactly what the brief asks. Do not add features, pages, channels, or integrations beyond the brief. If something seems missing, ask instead of adding.

## Tech defaults

- Prefer single-file, dependency-light builds unless the brief says otherwise. React (single-file JSX) or plain HTML/CSS/JS for front-ends.
- Mobile-first. Most traffic arrives from Instagram and Meta ads on phones.
- No login systems, databases, or backends unless explicitly requested. Existing pattern for AI features: API calls proxied through a Vercel `/api/` route, never client-side keys.
- Existing stack to integrate with, not replace: Webflow (sites), MailerLite (email/landing pages), MailerSend (transactional), Stripe (payments, tax-inclusive), Cloudflare (DNS), GA4 + Meta pixel (analytics), Make (automation), Vercel (calculators).
- Live properties: dreambusiness.xyz, guide.dreambusiness.xyz, business-fit.dreambusiness.xyz, revenue-calculator.dreambusiness.xyz.

## Working style

- Explain what you are about to do and why before doing it, in plain language. The founder is not a developer.
- When a task involves choices with trade-offs, present the options and a recommendation; do not silently pick.
- Give click-by-click instructions with explicit pass/fail checks for anything the founder must do manually (DNS, dashboard settings, deployments).
- Visual work must be verified: render or screenshot the result before declaring it done.

## Per-app briefs

Each app lives in its own subfolder with a `BRIEF.md` (what it does, who uses it, success criteria). Read the brief before touching that app. This file covers the how; briefs cover the what.
