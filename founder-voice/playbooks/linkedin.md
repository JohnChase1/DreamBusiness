# Playbook — LinkedIn

Compiled: 2026-08-28. Review by: 2026-11-28.

Evidence tiers used in this file:
- **Tier A**: public platform code. Does not exist for LinkedIn; nothing here claims it.
- **Tier B**: official LinkedIn sources: engineering blog, official blog, Help documentation, published LinkedIn research papers, and on-record statements by named LinkedIn executives.
- **Tier C**: labeled third-party research with disclosed methodology. Never presented as fact.

Rules for the engine: rules inform draft structure; user-facing explanations cite source and tier. Nothing here may be stated to users as a performance promise.

## How ranking works (context for the engine)

LinkedIn ranks the feed on signals about the viewer's identity, the content (topic, age, reactions, and whether it shares knowledge or professional advice), and member activity (LinkedIn Help, doc a1339724. Tier B). Dwell time, how long a post is actually on screen and read, is a documented core signal (engineering blog 2020, reaffirmed October 2024; "Long Dwell" prediction in the LiRank paper, 2024. Tier B). In March 2026 LinkedIn rebuilt the feed on LLM-based retrieval and a transformer ranker that matches content on meaning rather than keywords (news.linkedin.com/2026/ImprovingTheFeed. Tier B).

## Rules

### R1. Write for read-through, not reactions
Dwell time is an explicit ranking signal in two forms: time on screen while scrolling and time after clicking. A post read to the end for 30 seconds signals more value than one liked in 2. Every paragraph must earn the next; cut filler.
Sources: linkedin.com/blog/engineering/feed/understanding-feed-dwell-time (2020); .../leveraging-dwell-time-to-improve-member-experiences-on-the-linkedin-feed (Oct 2024); LiRank paper, arxiv.org/abs/2402.06859. Tier B.

### R2. Post knowledge and advice from your provable lane
Since June 2023 the feed prioritizes "knowledge and advice grounded in expertise" from people qualified to give it. LinkedIn's Editor-in-Chief has said virality is treated internally as a warning sign, not a win. Write about problems the founder has actually solved, for the audience their profile says they serve.
Source: on-record interviews with Alice Xiong (Director of Product Management) and Dan Roth (Editor-in-Chief), entrepreneur.com/science-technology/linkedin-changed-its-algorithms-heres-how-your-posts/454728 (June 2023). Tier B.

### R3. One clear topic per post, stated early
Ranking assesses what the post is about and matches it to relevant readers; the 2026 semantic ranker strengthens this. Plainly naming topic, audience, and takeaway beats keyword or hashtag tricks. Ambiguous multi-topic posts are harder to match.
Sources: LinkedIn Help a1339724; news.linkedin.com/2026/ImprovingTheFeed. Tier B.

### R4. Never write engagement bait
Posts that ask for likes or reactions are officially not promoted (May 2022), and gratuitous polls are shown less. "Comment YES for the PDF" mechanics sit close to this documented line. Ask genuine questions a professional would answer in a sentence or more.
Source: blog.linkedin.com/2022/may/5/keeping-your-feed-relevant-and-productive. Tier B.

### R5. Design the close to start a conversation, then reply
The feed jointly optimizes viewers' likelihood to participate in conversations and deliberately spreads engagement to smaller creators. Substantive comments from relevant people, and the author replying, are treated as high-value. Engine output: end with one specific question; surfaced advice: reply substantively to every comment soon after posting.
Sources: engineering.linkedin.com/blog/2018/10/linkedin-feed-with-creator-side-optimization; community-focused feed optimization post (2019); 2023 Roth interview. Tier B.

### R6. Prefer evergreen framing; it now compounds
"Suggested posts" (2024) resurface valuable evergreen knowledge posts for months or years. Timeless phrasing ("when you evaluate a business idea") outlasts dated phrasing ("this week I").
Sources: Tim Jurka (LinkedIn Senior Director of Engineering), linkedin.com/pulse/how-linkedin-focused-surfacing-right-content-worlds-tim-jurka-bvzhc (Feb 2024); entrepreneur.com coverage (2024). Tier B.

### R7. Links are allowed; the post must stand alone
LinkedIn officially denied an intentional external-link penalty (Senior Director of PM, 2025), while third-party measurement of 900k+ posts found link posts reach roughly a quarter fewer people (Tier C, causation not isolated). Engine behavior: deliver the value natively, attach the link, and suggest users test placement against their own analytics. No hard rules stated.
Sources: official statement via 2025 reporting (Tier B); tryordinal.com link study (Tier C, labeled research).

### R8. Small accounts are structurally supported
Creator-side optimization deliberately allocates feedback to less-established creators, and follower-first distribution plus topical out-of-network matching means reach beyond your network comes from consistent topical relevance, not tricks.
Sources: engineering blog (2018, 2019); 2023 official statements. Tier B.

### R9. Cadence: a sustainable weekly floor
The only official cadence guidance is for Company Pages: weekly posting is associated with a roughly 2x engagement lift (LinkedIn's own best-practices page). There is no official frequency rule for personal profiles; the engine should default to advising 1 to 3 quality posts per week over bursts.
Source: business.linkedin.com/marketing-solutions/linkedin-pages/best-practices. Tier B (Pages only; extension to profiles is inference and must be labeled as such).

### R10. Consider native PDF carousels for frameworks
Research (Metricool, 673k posts, early 2025 vs early 2026, methodology disclosed) found document/carousel posts lead engagement and shares while being underused, and public interactions declining platform-wide in favor of clicks. Engine: offer a "carousel outline" variant for framework-type content, labeled as research-based.
Source: metricool.com/linkedin-trends-study/ (2026). Tier C, labeled research.

### R11. Set reach expectations honestly
Practitioner research (van der Blom Algorithm Insights Report 2025; 1.8M posts, methodology disclosed, not LinkedIn-endorsed) measured median views down about half year-over-year. The product must frame reach declines as a possible platform-wide baseline shift and direct users to compare against their own trailing baseline, never promise reach.
Source: van der Blom report announcement (2025). Tier C, labeled research; LinkedIn has disputed the precision of past editions.

## Not publicly verifiable (never state as fact in the product)

- Exact link-penalty percentages: officially denied as intentional; measurements vary and cannot isolate causation.
- The "golden hour" as a defined mechanic with thresholds: early engagement plausibly matters, no official window exists.
- Optimal posting times or days: no official guidance.
- Hashtag counts: never documented; profile hashtags were removed in 2024 and the 2026 semantic ranker de-emphasizes keyword tricks.
- "Editing kills reach" and "links must go in the first comment": no official basis.
- Character-count reach cliffs: truncation is UI behavior; reach numbers attached to lengths are practitioner data only.
- Precise dwell thresholds in seconds: confirmed signal, unpublished thresholds.
- Engagement pods: contradict documented engagement-bait suppression.

## Change log

- 2026-08-28: initial compilation. Note: linkedin.com and several publisher domains were not directly fetchable from the build environment; URLs verified via live search index with matching content. Re-verify primary URLs on next review, especially the March 2026 feed-rebuild announcement.
