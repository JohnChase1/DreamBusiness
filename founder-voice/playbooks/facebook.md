# Playbook — Facebook

Compiled: 2026-08-28. Review by: 2026-11-28.

Evidence tiers used in this file:
- **Tier A**: public platform code. Does not exist for Facebook; nothing here claims it.
- **Tier B**: official Meta sources: Transparency Center, Meta Newsroom, Business Help Center, Creators blog, AI system cards, and on-record statements by named Meta executives.
- **Tier C**: labeled third-party or peer-reviewed research. Never presented as fact.

Rules for the engine: rules inform draft structure; user-facing explanations cite source and tier. Nothing here may be stated to users as a performance promise.

## How ranking works (context for the engine)

Feed orders posts per viewer by a relevance score built from signals (who posted, content type, past interactions) and predictions of behavior: likelihood to comment, share, and find the post worth their time, partly survey-measured. Sources: transparency.meta.com/features/ranking-and-content/ and the Facebook Feed AI system card (2023, maintained). Tier B. Since 2018, person-to-person conversation is prioritized over passively consumed Page broadcasts ("meaningful social interactions", Meta Newsroom, January 2018), a direction doubled down on by the 2025 "OG Facebook" push. Tier B.

## Rules

### R1. Write to start a real conversation
Posts that spark back-and-forth discussion between people, including long comments and author replies, are explicitly favored; passive broadcast content from Pages is reduced. Every draft should contain a genuine reason for a specific reader to comment: a question, a debatable position, an ask for experiences.
Sources: about.fb.com/news/2018/01/news-feed-fyi-bringing-people-closer-together/ and .../2018/04/inside-feed-meaningful-interactions/. Tier B.

### R2. Never use bait phrasing
Engagement bait ("Like if...", "Tag a friend who...", vote-baiting) is detected by machine learning and demoted, with account-level penalties for repeat offenders. Restated in Meta's 2025-2026 creator guidance.
Sources: about.fb.com/news/2017/12/news-feed-fyi-fighting-engagement-bait-on-facebook/; facebook.com/business/help/259911614709806. Tier B.

### R3. Lint against Meta's published demotion list
Meta enumerates content that gets reduced distribution: clickbait and withholding headlines, engagement bait, links to ad-heavy or slow landing pages, unoriginal aggregation, sensationalized health claims. The engine should refuse or rewrite drafts matching these patterns. This aligns with Dream Business's own no-fabrication rule.
Source: transparency.meta.com/features/approach-to-ranking/types-of-content-we-demote/ (Content Distribution Guidelines, 2021, maintained). Tier B.

### R4. Native-first; links barely surface
Meta's own Widely Viewed Content Reports show posts with external links fell to roughly 2 to 3 percent of US Feed views by 2024-2025, mostly from Pages people already follow. No explicit link penalty is stated; the outcome data speaks instead. Engine behavior: deliver the value in the post itself; when a link is needed, the post must stand alone without it.
Source: transparency.meta.com/reports/widely-viewed-content-report/ (quarterly; recent percentages corroborated via trade coverage of the Q2 2025 report). Tier B.

### R5. Original perspective is the ranking asset
July 2025: duplicate and unoriginal content is detected and demoted with account-level penalties; March 2026: Meta formally updated ranking to reward original material showing the creator's own perspective, with meaningfully transformed commentary still eligible. For a faceless brand, opinion and analysis count as perspective; no personal identity required.
Sources: creators.facebook.com/blog/combating-unoriginal-content/ (July 2025); about.fb.com/news/2026/03/rewarding-original-creators-on-facebook/ (March 2026). Tier B.

### R6. Short, relevant captions; near-zero hashtags
April 2025 spam crackdown: long distracting captions, excessive hashtags, or captions unrelated to the content limit distribution to followers only and remove monetization eligibility. Hashtag stuffing is now an officially documented negative signal on Facebook. Engine: captions matched to the content, 0 to 3 hashtags at most.
Source: about.fb.com/news/2025/04/cracking-down-spammy-content-facebook/. Tier B.

### R7. Reach beyond followers exists, and is earned per post
A growing share of Feed is AI-recommended content from accounts the viewer does not follow (officially ~15 percent in 2022 with a stated plan to roughly double; expansion repeatedly confirmed since). Each post must be self-contained and valuable to a stranger, and comply with recommendation guidelines.
Sources: ai.meta.com/blog/ai-unconnected-content-recommendations-facebook-instagram/; Nick Clegg, about.fb.com/news/2023/06/how-ai-ranks-content-on-facebook-and-instagram/. Tier B.

### R8. Short video is the discovery channel
All uploaded video became Reels (June 2025) under a single AI recommendation engine ranked primarily on predicted watch behavior rather than follower relationships. Text and image posts remain the conversation formats (R1); video is where non-follower discovery concentrates. Hook in the first seconds.
Sources: about.fb.com/news/2025/06/making-it-easier-create-videos-facebook/; about.fb.com/news/2024/04/exploring-videos-on-facebook-just-got-easier/; CNBC on the unified model (March 2024). Tier B.

### R9. Choose the surface deliberately
For a faceless brand, a Page plus participation in relevant Groups is the documented play: Groups content reaches members' feeds by interaction likelihood, and group interactions are named meaningful-interaction signals. Professional-mode profiles get recommendation reach but conflict with the faceless constraint. The 2025 Friends tab gives friend content its own surface, which Pages do not get.
Sources: transparency.meta.com/features/explaining-ranking/ (system cards index, including Groups Feed); facebook.com/help/2978174759158711 (professional mode); about.fb.com/news/2025/03/bringing-magic-of-friends-back-to-facebook/. Tier B.

### R10. Fewer, stronger posts over volume
Posting frequency is not a documented positive signal anywhere in Meta's materials, while the ranking layer decides visibility winner-take-most (peer-reviewed evidence: the 2020 chronological-feed experiment, Science, July 2023, showed ranking actively concentrates attention). Invest in fewer, higher-interaction posts.
Sources: absence of any official frequency guidance (Tier B by omission); Guess et al., science.org/doi/10.1126/science.abp9364 (Tier C, peer-reviewed).

## Not publicly verifiable (never state as fact in the product)

- Exact engagement weights ("a share is worth X points"): historical leaked figures are journalism, not current disclosure.
- A blanket external-link penalty: only low-quality link destinations are documented demotions; the ~98 percent link-free viewership is an outcome measurement.
- Best times or days to post: recency is one signal among thousands; no official timing guidance.
- Hashtags increasing reach: the only official statement about hashtags is negative (April 2025).
- A "golden first 30/60 minutes": undocumented.
- Fixed organic reach caps ("Pages reach 2-6 percent of followers"): third-party averages, not a mechanism.
- Penalties for editing posts, posting often, or specific words ("giveaway", "link in comments"): none documented.
- "The algorithm rates your writing quality": ranking predicts audience behavior; prose quality matters only through reader behavior.
- Late-2025 reported migration of public-follower profiles to professional mode: reported only, not confirmed by Meta; do not assert.

## Change log

- 2026-08-28: initial compilation. Note: Meta-owned domains were not directly fetchable from the build environment; URLs verified via live search index with matching content. Re-verify primary URLs on next review.
