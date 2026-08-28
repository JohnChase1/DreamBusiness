# Founder Voice app (phase 2 prototype)

The working prototype: the three-screen flow backed by a real generation engine. The front end is one HTML file; the engine is one Vercel serverless function that calls the Claude API. The user's Voice Profile, brand kit, settings, and full history live in their own browser (localStorage). Nothing is stored on a server.

## Files

- `index.html` - the whole app: voice setup with brand kit and engine settings, input screen, drafts screen with editing, copy, Mark as posted, Instagram quote card (4:5 and 1:1) with PNG download, history screen, tap-based info boxes, and first-run explainers.
- `api/generate.js` - the engine. Receives profile plus input, calls the Claude API with a cache-friendly prompt (stable engine rules and playbook extracts first, user content last), returns JSON drafts with per-draft "why" citations. Supports the compare mode (both engines in one request).
- `package.json`, `vercel.json` - dependency and function timeout configuration.

The playbook extracts inside `api/generate.js` are distilled from `../playbooks/*.md`. When the playbooks get their quarterly refresh, update both together.

## Deploying to Vercel (click by click)

You will do this once. Later updates deploy automatically when changes land on GitHub.

1. Go to https://vercel.com and log in.
2. Click **Add New**, then **Project**.
3. Under "Import Git Repository", choose **DreamBusiness**. If it is not listed, click **Adjust GitHub App Permissions** and grant Vercel access to the repository, then return here.
4. On the configure screen, set **Root Directory** to `founder-voice/app` (click Edit next to Root Directory). Leave Framework Preset as **Other**. Do not change build settings.
5. Open the **Environment Variables** section on that same screen. Add one variable: Name `ANTHROPIC_API_KEY`, Value: your Anthropic API key. You create the key at https://console.anthropic.com under API Keys; copy it once and paste it here. Never put this key anywhere else.
6. Click **Deploy** and wait for the confetti-free success screen.
7. Pass check: open the deployment URL Vercel shows you. You should see the Founder Voice app. Fill in a short voice profile, type a two-line brain dump, select LinkedIn only, and click Generate drafts. Within about 30 to 60 seconds you should see two LinkedIn drafts with a "Why this sounds like you" note under each.
8. Fail check: if you see "Server key is missing or invalid", the environment variable name or value is wrong. In Vercel, open the project, go to Settings, then Environment Variables, fix `ANTHROPIC_API_KEY`, then go to Deployments and click Redeploy on the latest deployment.

Optional domain: in the Vercel project, Settings, then Domains, add `founder-voice.dreambusiness.xyz`, and add the CNAME record Vercel shows you in Cloudflare (DNS, Add record, type CNAME, name `founder-voice`, target as shown, proxy off/DNS only). Pass check: the subdomain loads the app within a few minutes.

## Footer links to verify

The footer links to `dreambusiness.xyz/impressum` and `dreambusiness.xyz/privacy`. Verify both paths exist on the live site and match the main site's legal pages; if the real paths differ, edit them at the bottom of `index.html`. This is required before sharing the app with anyone (Impressum duty).

## Costs and models

- Default engine: `claude-opus-5` ("Precision"). Alternative: `claude-sonnet-5` ("Fast"). The user can switch in Engine settings; Compare mode runs both for the same input, which is the agreed taste test.
- A single run is a few cents; compare mode roughly doubles it. The stable prompt prefix is cached, which discounts repeated input tokens.
- Policy-declined requests fall back server-side to another model automatically (the `fallbacks` parameter), so users get drafts instead of an error where possible.

## What is deliberately not here yet

Per the brief's phases: the voice flywheel, the compliance lint, the carousel composer, the reply helper, and Article Studio come next; visuals never use AI generation; there is no auto-posting and no server-side storage of user content.
