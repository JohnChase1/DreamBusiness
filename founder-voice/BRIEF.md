# BRIEF — Founder Voice (code name)

Status: DRAFT v1, under discussion with the founder. Current phase: concept and mockup only. No production code, no AI engine, no backend yet.

## What it is

A content generation tool for founders. The user establishes a Voice Profile once (how they and their brand sound), then feeds the tool raw inputs: a brain dump, a pasted article, or a rough idea. The tool returns draft social media posts written in that voice and tailored to each selected platform's format and conventions. The founder edits, approves, and posts manually. The tool never posts on the user's behalf in v1.

## Who uses it

Entrepreneurs and solopreneurs who do not have time to maintain a social media presence and do not want generic AI copy. Within Dream Business, it is positioned as a post-launch tool: the thing clients use after launching their business (natural fit after Build, and a reason to stay in the ecosystem). Reference competitors: Creator Buddy, Jasper, Copy.ai, Writesonic, Copymatic, Anyword. Our differentiation: voice fidelity first, platform tailoring second, volume features last.

## Product experience decisions (agreed 2026-08-28)

- Draft tabs mirror input selection: the drafts screen shows exactly one tab per platform selected on the input screen (mockup now demonstrates this live).
- History: keep everything automatically per profile: all inputs (brain dumps, articles, ideas), all drafts, the user's edits, and posted versions. This history feeds the voice-learning flywheel. Browser storage first; a move to accounts triggers the GDPR review.
- Saving: autosave everything; no manual save button. The one deliberate action is "Mark as posted", which records the final version and trains the flywheel.
- Reply helper: yes, for X and LinkedIn comments, paste-based (paste a post, receive reply drafts in the founder's voice). Supported by the X playbook (replies weigh 10x a like in published code) and the LinkedIn playbook (substantive comments are a documented reach channel). No platform APIs.
- X profile analyzer: deferred. Automatic profile reading requires the paid X API or terms-violating scraping. Offered instead: paste-based analysis (paste any account's posts, receive a sourced read of what works). Revisit only if the tool earns enough to justify API costs.

## Product role decisions (agreed 2026-08-24)

- Home: inside Dream Business as a post-launch client tool, not a standalone brand and not a free funnel tool.
- Platforms in v1: LinkedIn, Instagram, X (Twitter), Facebook.
- Visuals in v1: template-based. The founder uploads their own licensed photos once; the tool composes on-brand visuals (quote cards, carousel slides) in the browser from templates plus those photos. No AI image generation in v1 (candidate for a later phase).
- Output shape: one input produces 1 to 3 draft variants per selected platform. Batch or calendar generation is a phase 2 candidate.

## The three layers

1. **Voice Profile.** Built from a short questionnaire (tone, audience, goals, topics, taboos) plus pasted samples of the founder's real writing. Stored as a structured profile that every generation quotes. This is the core asset of the product.
2. **Transformation engine.** Input (brain dump, article, idea) plus Voice Profile plus a per-platform playbook produces draft posts. Playbooks encode format rules, length norms, hook conventions, and platform behavior. Playbooks are named deliverables: one markdown file per platform in `playbooks/`, where every rule carries a claim, a source (publisher, URL, date), and a confidence tier: Tier A platform code, Tier B official platform statement, Tier C labeled third-party research or general convention. Playbooks are dated and refreshed on a recurring review, since platform ranking changes over time. Compliance rule: platform guidance must come from documented public sources or be labeled as general convention. No invented algorithm claims or fabricated research (UWG exposure).
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
2. **Working prototype.** Real generation behind the mockup flow via Vercel /api/ route. Voice Profile kept in the browser (localStorage), nothing stored server-side. Consumes the platform playbooks (delivered ahead of this phase, in `playbooks/`) as generation context, and surfaces the relevant sourced rule to the user as the reason behind each format choice.
3. **Voice flywheel (agreed 2026-08-28, priority 1 after phase 2).** The tool learns from every edit: it compares each draft to what the user kept and marked as posted, and updates the Voice Profile accordingly ("always cuts adjectives", "never opens with a question"). Requires the autosaved history above; starts entirely in browser storage.
4. **Voice and compliance lint (agreed 2026-08-28, priority 2).** Every draft is checked before display: against the Voice Profile (banned words, patterns the founder never uses, generic-AI tells), against the playbooks (officially demoted patterns such as engagement bait), and for claim safety (flags any factual claim the founder did not supply; UWG logic productized). Result shown as a calm per-draft check, not a score.
5. **Carousel composer (agreed 2026-08-28, priority 3).** Extends the visual composer: composes full multi-slide carousels (LinkedIn document PDF, Instagram carousel PNGs) from the draft's key points plus the founder's photos and brand colors, in the browser, with export. Justified by playbook research: carousels are the highest-engagement underused format on both platforms.
6. **Reply helper (agreed 2026-08-28).** Paste a post or comment thread from X or LinkedIn, receive reply drafts in the founder's voice. Paste-based only, no platform APIs. Can ship alongside or after the flywheel.
7. **Decisions before build-out:** pricing and packaging, real product name, when profiles move from browser storage to accounts (triggers GDPR work), AI image generation yes or no, batch and ideation features.

## Open questions for the founder

- Pricing: included with Build tier, separate subscription, or one-time purchase.
- Real name (Founder Voice is a code name).
- Idea engine: recommendation on file is to start with a recycler (re-angle past posts after their algorithmic life ends) before net-new ideation; not yet decided.
