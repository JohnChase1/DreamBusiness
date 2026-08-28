# Playbook — Instagram

Compiled: 2026-08-28. Review by: 2026-11-28.

Evidence tiers used in this file:
- **Tier A**: public platform code. Does not exist for Instagram; nothing in this file claims it.
- **Tier B**: official Instagram or Meta sources: the Instagram blog, Adam Mosseri's public statements, Meta transparency system cards, Meta Newsroom, official creator guidance. Where a Mosseri statement was verified through reputable trade press quoting him directly, that is noted.
- **Tier C**: labeled third-party research with disclosed methodology. Never presented as fact.

Rules for the engine: rules inform draft structure and format choice; user-facing explanations cite source and tier. Nothing here may be stated to users as a performance promise.

## How ranking works (context for the engine)

There is no single Instagram algorithm: Feed, Stories, Reels, Explore, and Search each rank differently (Instagram blog, "Instagram Ranking Explained", 2023-05-31; "Shedding More Light on How Instagram Works", 2021-06-08. Tier B). Since 2024-2025 the officially named top-line signals are watch time, likes per reach, and sends per reach, with likes mattering more for reaching followers and sends more for reaching non-followers (Mosseri video, January 2025, via Social Media Today. Tier B).

## Rules

### R1. Judge every draft by three questions
Will people read or watch to the end (watch time), will followers like it (relevance), and would someone send it to a specific friend (sends per reach)? "Who would send this to whom" is the sharpest edit test for growth-oriented posts.
Source: Mosseri, January 2025, via socialmediatoday.com/news/instagram-shares-algorithm-insights-2025/738034/. Tier B.

### R2. Write for genuine send-ability, never ask for sends
Mosseri: make content people want to send to a friend, "don't force it as a creator". Engagement-bait phrasing also risks recommendation ineligibility (R7). The engine should target usefulness for a nameable person ("the friend thinking of quitting") and never generate "share this!" calls to action.
Source: Mosseri statements 2024, via socialmediatoday.com (post-share-rates articles, early and July 2024). Tier B.

### R3. Captions invite one specific, easy interaction
Feed ranks on predicted likelihood to comment, like, save, and tap the profile. End with one save-worthy takeaway or one genuine question, not generic engagement prompts.
Source: "Instagram Ranking Explained" (2023); Meta AI system cards, transparency.meta.com/features/explaining-ranking/. Tier B.

### R4. Choose format by goal: reels for reach, carousels for depth
Official signal logic plus research: Reels rank heavily on completion and reshares (Tier B, system cards); Buffer's analysis of 4M+ posts found reels earn roughly a third more reach while carousels lead engagement rate (Tier C research, data through late 2024). Engine default: discovery goal produces a reel script plus caption; authority or depth goal produces a carousel plus caption.
Sources: transparency.meta.com system cards (Tier B); buffer.com/resources/instagram-reach-engagement-analysis/ (Tier C, labeled research).

### R5. Hook in the first line and first three seconds
Official creator guidance: make the first 3 seconds of a reel engaging; keep reels short; reels over 3 minutes are ineligible for recommendation. Watch time is judged relative to similar content, so short-and-completed beats long-and-abandoned.
Source: creators.instagram.com/blog/tips-for-improving-your-reach. Tier B.

### R6. Original content only; never repost
Original content gets more distribution (2022); accounts reposting others' content 10+ times in 30 days lose recommendation eligibility, and duplicate reposts are replaced by the original in recommendations (April 2024). No visible third-party watermarks.
Sources: techcrunch.com/2022/04/20/instagram-ranking-system-recommend-original-content/; socialmediatoday.com/news/instagram-algorithm-prioritize-original-emerging-creators/714777/; creators.instagram.com/original-content-guidelines. Tier B.

### R7. Stay recommendation-eligible
Allowed content can still be excluded from recommendation to non-followers: engagement bait, exaggerated or unverifiable claims, sensitive categories. This aligns with Dream Business's own no-fabrication rule. Users experiencing a reach drop should check Settings > Account Status rather than assume a shadowban.
Source: help.instagram.com recommendation pages (313829416281232, 653964212890722). Tier B.

### R8. Hashtags are for categorization, not reach
Mosseri has repeatedly said hashtags help Instagram understand a post but are not a distribution lever; search ranks on caption text and keywords. Engine behavior: a few descriptive hashtags at most, effort goes into the hook and send-ability. Descriptive keywords in the caption body matter more.
Sources: Mosseri AMA via blog.hootsuite.com/social-media-updates/instagram/hashtags-dont-affect-reach/; about.instagram.com/blog/announcements/break-down-how-instagram-search-works. Tier B.

### R9. Every post gets its own audition; follower count is not the gate
Since April 2024, recommendations show content from all accounts to a small predicted-interested audience first, then expand with engagement. Each post must be self-contained for a cold viewer. Good news for small and faceless brand accounts.
Source: April 2024 update via socialmediatoday.com/news/instagram-algorithm-prioritize-original-emerging-creators/714777/. Tier B.

### R10. Stories are for retention, not discovery
Stories rank by viewing history, engagement history, and closeness; they reach existing followers. Use them for conversational touchpoints (polls, questions, replies), not for growth.
Source: "Instagram Ranking Explained" (2023). Tier B.

### R11. Use Trial Reels to test hooks safely
Since December 2024, Trial Reels show a reel to non-followers only, with metrics after about 24 hours and an option to publish for everyone. The official way to A/B test hooks and topics without spamming followers.
Source: about.fb.com/news/2024/12/trial-reels-try-content-non-followers-first-see-what-perfoms-best/. Tier B.

### R12. Speak in "views" and per-reach ratios
Since April 2025, views is the single primary metric across formats (plays and impressions deprecated). Tool language matches Insights: views, likes per reach, sends per reach.
Source: developers.facebook.com Graph API v22.0 changelog and Insights docs. Tier B.

## Pointer for users

Instagram's own Best Practices hub (professional dashboard, launched October 2024) is the authoritative in-app source and should be linked in the product over any third-party "algorithm hack" content. Source: about.fb.com/news/2024/10/best-practices-education-hub-creators-instagram/. Tier B.

## Not publicly verifiable (never state as fact in the product)

- Any numeric weight ratio such as "sends are 3-5x likes": appears only in growth blogs.
- Universal best posting times as an algorithmic factor: recency is real, golden hours are heuristics (Tier C at best).
- "Shadowbanning" as a hidden system: recommendation ineligibility is the documented mechanism and is checkable in Account Status.
- "Carousels get second-chance impressions": widely repeated, no verifiable official statement found.
- Required posting frequency, caption length limits, first-line keyword ranking (outside Search), penalties for external links or scheduling tools: all undocumented.
- Numeric "distribution phases" with audience sizes: Instagram describes testing-and-expanding only qualitatively; circulating numbers are invented.

## Change log

- 2026-08-28: initial compilation. Note: Meta-owned domains were not directly fetchable from the build environment; URLs verified via domain-restricted search index with matching page content. Re-verify primary URLs on next review.
