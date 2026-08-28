# BRIEF — Founder Voice (code name)

Status: DRAFT v1, under discussion with the founder. Current phase: concept and mockup only. No production code, no AI engine, no backend yet.

## What it is

A content generation tool for founders. The user establishes a Voice Profile once (how they and their brand sound), then feeds the tool raw inputs: a brain dump, a pasted article, or a rough idea. The tool returns draft social media posts written in that voice and tailored to each selected platform's format and conventions. The founder edits, approves, and posts manually. The tool never posts on the user's behalf in v1.

## Who uses it

Entrepreneurs and solopreneurs who do not have time to maintain a social media presence and do not want generic AI copy. Within Dream Business, it is positioned as a post-launch tool: the thing clients use after launching their business (natural fit after Build, and a reason to stay in the ecosystem). Reference competitors: Creator Buddy, Jasper, Copy.ai, Writesonic, Copymatic, Anyword. Our differentiation: voice fidelity first, platform tailoring second, volume features last.

## Product role decisions (agreed 2026-08-24)

- Home: inside Dream Business as a post-launch client tool, not a standalone brand and not a free funnel tool.
- Platforms in v1: LinkedIn, Instagram, X (Twitter), Facebook.
- Visuals in v1: template-based. The founder uploads their own licensed photos once; the tool composes on-brand visuals (quote cards, carousel slides) in the browser from templates plus those photos. No AI image generation in v1 (candidate for a later phase).
- Output shape: one input produces 1 to 3 draft variants per selected platform. Batch or calendar generation is a phase 2 candidate.

## The three layers

1. **Voice Profile.** Built from a short questionnaire (tone, audience, goals, topics, taboos) plus pasted samples of the founder's real writing. Stored as a structured profile that every generation quotes. This is the core asset of the product.
2. **Transformation engine.** Input (brain dump, article, idea) plus Voice Profile plus a per-platform playbook produces draft posts. Playbooks encode format rules, length norms, hook conventions, and platform behavior. Compliance rule: platform guidance must come from documented public sources or be labeled as general convention. No invented algorithm claims or fabricated research (UWG exposure).
3. **Visual composer.** Browser-side templates (no server) that combine the founder's uploaded photos and brand colors with post text: quote cards, carousel title slides, story-format crops.

## Success criteria

- Concept phase (now): the founder can tap through the mockup on a phone and confirm the flow feels right: set up voice, paste a brain dump, receive per-platform drafts with an Instagram visual preview.
- v1 (later): a real user pastes a genuine brain dump and receives drafts they would post with only light edits, in under two minutes, on their phone.
- The voice test: output should be recognizably different for two different Voice Profiles given the same input.

## Constraints

- Follows repo-wide rules in CLAUDE.md, brand.md, business.md, design-system.md.
- All mockup data is sample data and is visibly labeled as such in the UI.
- Voice rules apply to all UI copy: no em dashes, no exclamation marks, no hype.
- Future engine: AI calls proxied through a Vercel /api/ route, never client-side keys. No accounts or databases unless explicitly decided later; GDPR review required before any storage of user text or photos.
- No auto-posting, no platform API integrations in v1.

## Phases

1. **Concept and mockup (this phase).** Static clickable HTML mockup, no real AI. Deliverable: `mockup.html` in this folder.
2. **Working prototype.** Real generation behind the mockup flow via Vercel /api/ route. Voice Profile kept in the browser (localStorage), nothing stored server-side.
3. **Visual composer.** Template rendering with user photo upload, export as PNG.
4. **Decisions before build-out:** pricing and packaging, real product name, whether profiles need accounts and storage (triggers GDPR work), AI image generation yes or no, batch and ideation features.

## Open questions for the founder

- Pricing: included with Build tier, separate subscription, or one-time purchase.
- Real name (Founder Voice is a code name).
- Should the tool also help ideate (suggest post ideas from the profile) in v1, or is transformation of existing input enough to start.
