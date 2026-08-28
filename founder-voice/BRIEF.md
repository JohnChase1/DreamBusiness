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

## Instagram visual decisions (agreed 2026-08-28)

- Format controls on the Instagram drafts tab: ratio selector (1:1 and 4:5 in v1; 9:16 story crop later) and format (single image or carousel). Default ratio 4:5 (larger feed footprint, matches Instagram's crop direction).
- Carousel vs single is proposed automatically from the content (framework or list content becomes a carousel proposal, a single sharp statement becomes a quote card), with a one-tap override.
- Brand kit, set once in the Voice Profile setup: logo upload, photo uploads (already specified), brand colors by manual entry with a color picker, fonts chosen from a curated list of licensed-safe fonts (no font-file upload; the tool cannot verify font licenses). Later enhancement: auto-suggest colors from the uploaded logo.

## Cost architecture (agreed 2026-08-28; protects margins by design)

- Visuals are composed in the browser: zero marginal cost per visual. This is a core economic advantage over image-generating competitors and a standing reason to keep AI image generation out of scope.
- History and autosave live in browser storage: zero platform cost. The flywheel must distill history into a compact Voice Profile; raw history is never sent wholesale to the model. More history improves the profile, not the bill.
- Text generation is the only per-use cost. Reference estimate (2026-08 Anthropic rates, one run = profile + playbook rules + input in, 2 drafts x 4 platforms out, roughly 5k tokens in / 2.5k out): about $0.035 on Sonnet 5, about $0.09 on Opus 5. A heavy user at 100 runs/month costs single-digit dollars on either model.
- Prompt design must keep the stable parts (profile, playbook extracts) as a cacheable prefix; prompt caching cuts repeated input cost by up to 90 percent.
- The generation model is a one-line configuration, never hard-coded. Choice between models is a quality decision, settled by a side-by-side taste test in phase 2 (same input and profile, both models, founder judges voice fidelity).
- Pricing must include a fair-use cap per tier (for example 100 runs/month) so one extreme user cannot distort costs.

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
2. **Working prototype.** Real generation behind the mockup flow via Vercel /api/ route. Voice Profile kept in the browser (localStorage), nothing stored server-side. Consumes the platform playbooks (delivered ahead of this phase, in `playbooks/`) as generation context, and surfaces the relevant sourced rule to the user as the reason behind each format choice. Includes the model taste test (see Cost architecture) and implements the cacheable-prefix prompt layout from day one.
3. **Voice flywheel (agreed 2026-08-28, priority 1 after phase 2).** The tool learns from every edit: it compares each draft to what the user kept and marked as posted, and updates the Voice Profile accordingly ("always cuts adjectives", "never opens with a question"). Requires the autosaved history above; starts entirely in browser storage.
4. **Voice and compliance lint (agreed 2026-08-28, priority 2).** Every draft is checked before display: against the Voice Profile (banned words, patterns the founder never uses, generic-AI tells), against the playbooks (officially demoted patterns such as engagement bait), and for claim safety (flags any factual claim the founder did not supply; UWG logic productized). Result shown as a calm per-draft check, not a score.
5. **Carousel composer (agreed 2026-08-28, priority 3).** Extends the visual composer: composes full multi-slide carousels (LinkedIn document PDF, Instagram carousel PNGs) from the draft's key points plus the founder's photos and brand colors, in the browser, with export. Justified by playbook research: carousels are the highest-engagement underused format on both platforms.
6. **Reply helper (agreed 2026-08-28).** Paste a post or comment thread from X or LinkedIn, receive reply drafts in the founder's voice. Paste-based only, no platform APIs. Can ship alongside or after the flywheel.
7. **Article Studio (agreed 2026-08-28, V2, after the flywheel).** Long-form writing for LinkedIn articles and newsletters, X long-form posts, and Medium, as its own mode beside the quick post flow. Entry step: a one-time guided voice interview covering long-form dimensions (argument structure, length, openings), layered on the flywheel-matured profile; deliberately sequenced after the flywheel so articles land on the strongest version of each user's voice. Headline capability: the full chain, idea to article to the article atomized into social posts. Adds long-form playbook files per destination in the same sourced format. Commercial shape: an add-on to the base plan (reference figures to validate in the pricing session: base $24.99, add-on $4.99; alternative to evaluate: one Pro tier around $29.99 with articles included, since a single clear decision often converts better than two small ones). Cost note: an article is roughly $0.15 to $0.30 of generation at 2026-08 rates.
8. **Decisions before build-out:** pricing and packaging, real product name, when profiles move from browser storage to accounts (triggers GDPR work), AI image generation yes or no, batch and ideation features.

## Teaching layer (agreed 2026-08-28, part of phase 2 UI)

- Info icons with short explanation boxes throughout the UI. Tap-based, not hover: they open on tap and close on second tap or tap-outside, because the audience is on phones.
- First-run explainers: one calm sentence per section on first visit, collapsed afterward.
- Sourced-rule explanations: format choices expose the playbook rule behind them, with source and tier ("Drafts here end with a question. Replies count roughly ten times a like in X's published code."). The sourced playbooks double as marketing proof inside the product.
- Message map, not in-product marketing: a short list of phrases used identically in marketing and product copy (register: "Your voice, not a template", "You approve everything. Nothing posts itself."). No banners, upsells, or promotional tone inside the workflow; business.md voice rules apply.

## Considered and rejected

- **AI watermark scrambler / detection evasion (rejected 2026-08-28).** A feature to help content avoid AI labeling or detection will not be built, in any form. Reasons on record: EU AI Act transparency obligations make evasion tooling untenable for a German UG; deliberately defeating platform integrity systems violates the terms of every platform the tool targets, and platforms apply account-level distribution penalties; UWG treats helping customers deceive readers and platforms as an unfair commercial practice; and it would destroy the trust positioning the product is built on. The legitimate need behind the demand (content that does not read as generic AI) is served honestly by the voice flywheel and the lint's generic-AI-tells check, marketable as "sounds like you, not like AI, because it is built from you and you approve every word."

## Open questions for the founder

- Pricing: included with Build tier, separate subscription, or one-time purchase.
- Real name (Founder Voice is a code name).
- Idea engine: recommendation on file is to start with a recycler (re-angle past posts after their algorithmic life ends) before net-new ideation; not yet decided.
