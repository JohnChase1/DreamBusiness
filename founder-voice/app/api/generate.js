// Founder Voice generation engine. Runs as a Vercel serverless function.
// The Anthropic API key lives in the ANTHROPIC_API_KEY environment variable
// on Vercel, never in the browser.

import Anthropic from "@anthropic-ai/sdk";

const ALLOWED_MODELS = ["claude-opus-5", "claude-sonnet-5"];
const DEFAULT_MODEL = "claude-opus-5";
const MAX_INPUT_CHARS = 20000;
const MAX_PROFILE_CHARS = 12000;

// Distilled from founder-voice/playbooks/*.md (2026-08-28 compilation).
// Each rule carries its source and tier so drafts can cite them. The full
// sourced playbooks in the repo are the canonical reference; refresh both
// together at the quarterly playbook review.
const PLAYBOOKS = {
  linkedin: `LINKEDIN RULES (sources: LinkedIn engineering blog, official Help docs, on-record executive interviews; see playbooks/linkedin.md):
- Dwell time is a documented ranking signal. Write posts people read to the end; the first two lines must earn the scroll-stop. [Tier B, LinkedIn engineering blog 2020 and Oct 2024]
- The feed prioritizes knowledge and advice grounded in the author's demonstrable expertise. Stay in the founder's provable lane. [Tier B, LinkedIn PM and Editor-in-Chief interviews, June 2023]
- One clear topic per post, stated early; the 2026 feed matches on meaning, not keywords or hashtags. [Tier B, news.linkedin.com March 2026]
- Never ask for likes or reactions; engagement bait is officially not promoted. Close with one genuine question a professional would answer in a sentence or more. [Tier B, LinkedIn blog May 2022]
- Evergreen framing compounds: suggested posts resurface valuable knowledge posts for months. Prefer timeless phrasing. [Tier B, LinkedIn Feb 2024]
- Links are allowed but the post must deliver its value standalone. [Tier B, official statement 2025]`,
  instagram: `INSTAGRAM RULES (sources: Instagram blog, Adam Mosseri statements, Meta system cards; see playbooks/instagram.md):
- The three top-line signals are watch time, likes per reach, and sends per reach. The sharpest edit test: who would send this to which friend. [Tier B, Mosseri January 2025]
- Write for genuine send-ability; never ask for shares. Engagement bait risks recommendation ineligibility. [Tier B, Mosseri 2024]
- Captions invite one specific easy interaction: one save-worthy takeaway or one genuine question. [Tier B, Instagram Ranking Explained 2023]
- Hook in the first line. Original content only. A few descriptive hashtags at most; hashtags are categorization, not reach. [Tier B, Mosseri AMA; creators.instagram.com]
- No exaggerated or unverifiable claims: they break recommendation eligibility and German competition law alike. [Tier B, help.instagram.com]`,
  x: `X RULES (sources: X's open-sourced algorithm code at github.com/xai-org/x-algorithm, Aug 2026 state; see playbooks/x.md):
- Copy-link shares carry the largest positive weight (20.0); replies and quotes 5.0; a like only 0.5. Write reference-grade posts worth sending, and invite replies with a question or defensible position. [Tier A, published code]
- The first line must stop the scroll: scrolling past without dwelling is an explicit negative. [Tier A, published code]
- Never annoy: a predicted mute costs about 118 likes' worth of weight. No bait, no rage framing. [Tier A, published code]
- Never post a bare link: deliver the value natively, attach the link for those who want more. [Tier B, official statement April 2025, corroborated by code]
- Clear substantive plain language; the ranker reads meaning. No hashtag stuffing. [Tier A/B, 2026 code and statements]
- A post's algorithmic life is 48 hours; each post must stand alone. [Tier A, published code]`,
  facebook: `FACEBOOK RULES (sources: Meta Transparency Center, Meta Newsroom; see playbooks/facebook.md):
- Person-to-person conversation outranks broadcasts. Every post needs a genuine reason for a specific reader to comment. [Tier B, Meta 2018, reaffirmed 2025-2026]
- Never use bait phrasing ("Like if", "Tag a friend"): detected and demoted, with account-level penalties for repeat offenders. [Tier B, Meta 2017, restated 2025]
- Native-first: posts with external links are 2-3 percent of what people actually see. The post must deliver its value without the link. [Tier B, Widely Viewed Content Reports]
- Original perspective is formally rewarded in ranking since March 2026; opinion and analysis count as perspective. [Tier B, Meta Newsroom March 2026]
- Short relevant captions, zero to three hashtags; caption spam limits distribution to followers only. [Tier B, Meta April 2025]`,
};

// Stable engine instructions. This block plus the playbook rules form the
// cacheable prefix: identical bytes on every request, for every user, so
// prompt caching applies. Everything user-specific goes in the user message.
const ENGINE_SYSTEM = `You are the generation engine of Founder Voice, a content tool for founders. You turn a founder's raw input (a brain dump, a pasted article, or a rough idea) into platform-ready social media drafts written in that founder's own voice.

Non-negotiable rules:
- The voice profile provided in the user message is the authority on how the founder sounds. Match its tone, sentence rhythm, vocabulary, and taboos exactly. Never smooth their voice into generic AI copy.
- Use only facts, claims, numbers, and stories present in the founder's input or profile. Never invent statistics, clients, outcomes, or research. If the input makes a factual claim, keep it attributed as the founder stated it.
- Never promise outcomes, income, or success rates.
- No engagement bait on any platform. No hype, no exclamation marks unless the founder's own samples use them.
- Respect each platform's rules below. When a rule shapes a draft, you will cite that rule in the draft's "why" field, naming the source and tier in plain language.

Output format: respond with a single JSON object and nothing else, no markdown fences. Schema:
{
  "platforms": {
    "<platform-id>": {
      "formatNote": "one sentence on the format logic used, citing the rule source",
      "drafts": [
        { "text": "the post text, ready to publish", "why": "one or two sentences: why this sounds like the founder, and which platform rule shaped it, with source" }
      ]
    }
  }
}
Produce exactly 2 drafts per requested platform, meaningfully different in angle, not paraphrases. Include only the requested platforms, keyed exactly by the ids given.

${PLAYBOOKS.linkedin}

${PLAYBOOKS.instagram}

${PLAYBOOKS.x}

${PLAYBOOKS.facebook}`;

function buildUserMessage(profile, input, platforms, goal) {
  return `VOICE PROFILE
Business: ${profile.business || "(not provided)"}
Audience: ${profile.audience || "(not provided)"}
Tone words: ${profile.tone || "(not provided)"}
Never do: ${profile.taboos || "(not provided)"}
Writing samples (the strongest signal of voice):
${profile.samples || "(none provided; rely on the fields above and keep the register plain)"}

TASK
Input type: ${input.type}
Goal: ${goal}
Requested platforms: ${platforms.join(", ")}

FOUNDER'S INPUT
${input.text}`;
}

async function generateForModel(client, model, profile, input, platforms, goal) {
  const response = await client.beta.messages.create({
    model,
    max_tokens: 8000,
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
    system: [
      {
        type: "text",
        text: ENGINE_SYSTEM,
        cache_control: { type: "ephemeral" },
      },
    ],
    messages: [
      { role: "user", content: buildUserMessage(profile, input, platforms, goal) },
    ],
  });

  if (response.stop_reason === "refusal") {
    return { model, error: "The model declined this input. Rephrase and try again." };
  }

  let text = "";
  for (const block of response.content) {
    if (block.type === "text") text += block.text;
  }

  let parsed;
  try {
    parsed = JSON.parse(text.replace(/^```json\s*|```\s*$/g, ""));
  } catch {
    return { model, error: "The model returned an unexpected format. Try again.", raw: text.slice(0, 2000) };
  }

  return {
    model: response.model,
    platforms: parsed.platforms || {},
    usage: {
      input_tokens: response.usage.input_tokens,
      output_tokens: response.usage.output_tokens,
      cache_read_input_tokens: response.usage.cache_read_input_tokens || 0,
    },
  };
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Use POST." });
    return;
  }

  const { profile, input, platforms, goal, model, compare } = req.body || {};

  if (!input || typeof input.text !== "string" || !input.text.trim()) {
    res.status(400).json({ error: "Provide input text." });
    return;
  }
  if (input.text.length > MAX_INPUT_CHARS) {
    res.status(400).json({ error: `Input is too long (limit ${MAX_INPUT_CHARS} characters).` });
    return;
  }
  if (!Array.isArray(platforms) || platforms.length === 0 || !platforms.every((p) => PLAYBOOKS[p])) {
    res.status(400).json({ error: "Provide at least one valid platform." });
    return;
  }
  const safeProfile = profile && typeof profile === "object" ? profile : {};
  if (JSON.stringify(safeProfile).length > MAX_PROFILE_CHARS) {
    res.status(400).json({ error: "Voice profile is too long." });
    return;
  }
  const chosenModel = ALLOWED_MODELS.includes(model) ? model : DEFAULT_MODEL;
  const safeGoal = typeof goal === "string" ? goal.slice(0, 100) : "Build authority";

  const client = new Anthropic();

  try {
    const models = compare
      ? ALLOWED_MODELS
      : [chosenModel];
    const results = await Promise.all(
      models.map((m) => generateForModel(client, m, safeProfile, input, platforms, safeGoal)),
    );
    res.status(200).json({ results });
  } catch (error) {
    if (error instanceof Anthropic.AuthenticationError) {
      res.status(500).json({ error: "Server key is missing or invalid. Check ANTHROPIC_API_KEY on Vercel." });
    } else if (error instanceof Anthropic.RateLimitError) {
      res.status(429).json({ error: "The engine is busy. Wait a moment and try again." });
    } else if (error instanceof Anthropic.APIError) {
      res.status(502).json({ error: `Generation failed (${error.status}). Try again.` });
    } else {
      res.status(500).json({ error: "Unexpected server error. Try again." });
    }
  }
}
