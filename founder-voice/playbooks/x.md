# Playbook — X (Twitter)

Compiled: 2026-08-28. Review by: 2026-11-28 (X updates its published algorithm continuously; re-verify against the repo).

Evidence tiers used in this file:
- **Tier A**: X's actual open-sourced algorithm code. The current code is at github.com/xai-org/x-algorithm (published 2026-01-20, updates through 2026-08-14), verified by direct fetch of the source files. The older github.com/twitter/the-algorithm (2023) is historical.
- **Tier B**: official statements by X or its executives.
- **Tier C**: labeled third-party research or general convention. Never presented as fact.

Rules for the engine: every rule below may inform draft structure. When the tool explains a choice to the user, it cites the rule's source and tier. Nothing in this file may be quoted to users as a performance promise.

## How ranking works (context for the engine)

The For You feed scores each post as a weighted sum of a transformer model's predicted probabilities that this specific viewer will take each of ~20 actions (reply, share, like, dwell, mute...). Weights multiply predicted probabilities per viewer, not raw engagement counts. Source: xai-org/x-algorithm README and home-mixer/scorers/ranking_scorer.rs, 2026. Tier A.

## Rules

### R1. Write posts worth sending to someone
Copy-link shares carry the single largest positive weight (20.0), DM shares and replies 5.0, versus 0.5 for a like. Practical, reference-grade content that a reader would forward scores highest; likes are the weakest positive signal.
Source: xai-org/x-algorithm, home-mixer/params/param.rs, Aug 2026 state. Tier A.

### R2. Build for replies and quotes, not applause
Replies and quote-posts weigh 5.0, ten times a like. Drafts should invite a response: a question, a defensible position, a framework people want to add to.
Source: same file. Tier A.

### R3. The first line must stop the scroll
Scrolling past without stopping ("not dwelled") carries an explicit negative weight, so a weak opener is an active penalty, not a missed chance. Lead with the sharpest sentence.
Source: same file. Tier A.

### R4. Never annoy: mutes and reports are catastrophic
Mute author -58.8, report -234.0, "not interested" -43.2. One predicted mute outweighs roughly 118 likes. No bait, no rage-farming, no spam patterns.
Source: same file. Tier A.

### R5. Never post a bare link
There is no explicit link penalty (officially denied by Musk, 2025-04-25), but "open link" carries almost no weight (0.2) while the system maximizes time on X. Write the full value natively (summary, takeaway, numbers), attach the link for those who want more.
Source: Musk statement x.com/elonmusk/status/1915806794393457034 (Tier B), corroborated by param.rs weights (Tier A).

### R6. Space posts out; volume cannibalizes itself
Within one feed load, each additional post from the same author is decayed by 0.5 down to a floor of 0.25. Distinct posts hours apart beat rapid-fire posting.
Source: param.rs (AuthorDiversityDecay). Tier A.

### R7. Original posts are the reach vehicle
Replies and retweets are rescored at 0.75 even to your own followers; out-of-network posts also carry the 0.75 factor. The engine should always produce standalone original posts as the primary format.
Source: param.rs (OonWeightFactor). Tier A.

### R8. A post's algorithmic life is 48 hours
The pipeline filters out posts older than 48 hours. Evergreen ideas should be rewritten and reposted later as new posts, which the tool's "start another post" flow supports.
Source: home-mixer/params/config.rs (MAX_POST_AGE). Tier A.

### R9. Small accounts get a real on-ramp
An explicit new-author boost lifts posts from under-exposed authors, primarily among their own followers. Consistency in front of existing followers is the documented path to initial reach.
Source: xai-org/x-algorithm README (New-Author Boost) and param.rs. Tier A.

### R10. Mutual follows now matter mechanically
Since July 2026, original posts from mutually-followed authors get a boosted reply weight (currently 15x factor on the reply term; changed twice in July 2026, so volatile). Advice surfaced to users: engage genuinely with peers and followers so follows become mutual.
Source: xai-org/x-algorithm docs/BIDIRECTIONAL_BOOST_CHANGE.md and param.rs (Tier A); announcement by X head of product Nikita Bier, July 2026 (Tier B).

### R11. Write for a reader, not for keywords
The 2025-2026 ranker (Phoenix, Grok-lineage) semantically reads post content. Clear, substantive plain language gets matched to interested readers; hashtag stuffing and keyword tricks target a system that no longer exists.
Source: xai-org/x-algorithm (Tier A); Musk statements May-Oct 2025 on the Grok-based rewrite (Tier B; his "all heuristics deleted" claim is not fully reflected in the shipped code).

### R12. Avoid negativity as a strategy
X's stated objective is "unregretted user-seconds" with less negativity and more informational or entertaining content (Musk, 2025-01-03). For founder content: teach something concrete or tell a useful story.
Source: x.com/elonmusk/status/1875355425601999255. Tier B.

## Engagement mechanics the engine should not act on

- Engagement pods and "like my post" coordination: explicitly ineffective; engagement on posts reached by direct navigation has no ranking impact (code comments, Aug 2026, Tier A).
- Posts containing a viewer's muted keywords are filtered wholesale; avoid spammy promo phrasing (README, Tier A).

## Not publicly verifiable (never state as fact in the product)

- Best time of day to post: no such mechanism in the published code.
- A specific Premium reach multiplier: reply prioritization by tier is documented (X Help Center, Tier B), a feed multiplier is not.
- Hashtag counts or penalties: absent from both open-sourced codebases.
- "Editing kills reach": undocumented.
- Optimal post length: no length weight exists in the published code.

## Change log

- 2026-08-28: initial compilation against xai-org/x-algorithm (Aug 2026 state). Historical 2023 weights (reply 13.5, author-engagement 75.0) recorded as superseded; do not use.
