# Dream Business — Brand Guide (for builds)

Source: Brand Manifesto (canonical). This file is authoritative for all visual work.

## Colors

| Color | HEX | Role |
|---|---|---|
| Deep Navy | `#0B2242` | Primary. Hero backgrounds, footers, navigation, section anchors, headings on light backgrounds. |
| Warm Gold | `#C9A66B` | Accent ONLY. CTAs, key highlights, pull-quote accents, thin rules. **Never a background or dominant block.** |
| White | `#FFFFFF` | Content backgrounds. Pairs with Navy for legibility. |
| Soft Sand | `#F6F3EE` | Secondary background for content-heavy sections, testimonials, quotes. Paper-like warmth. |
| Cool Gray | `#AAB2BD` | Supporting text, captions, metadata, dividers, secondary UI. Never primary body copy. |

Application principles:
- Navy anchors the page: heroes, footers, key conversion sections.
- White and Sand carry content: long-form text, descriptions, resources.
- Gold is a signal, not a surface. When gold appears, it should mean something.
- Rhythm through contrast: alternate dark (navy) and light (white/sand) sections for an editorial pace.

## Typography

| Typeface | Role | Usage |
|---|---|---|
| Montserrat | Primary | Bold/SemiBold. All headings H1–H3, navigation, button labels, UI elements. |
| Playfair Display | Secondary | Regular/Italic. Tagline, pull quotes, emotionally charged sub-headlines, hero sub-copy. Use sparingly. |
| DM Sans | Body | Regular. All body copy, descriptions, captions, form labels. (Lato acceptable fallback.) |

Size hierarchy (digital):
- H1: Montserrat Bold, 40–56px. Hero only. Cinematic scale is intentional.
- H2: Montserrat SemiBold, 28–36px.
- H3: Montserrat SemiBold, 20–24px.
- Pull quote: Playfair Display Italic, 20–24px, with gold left border or on Sand background.
- Body: DM Sans Regular, 14–16px minimum, line-height 1.6.
- Captions/labels: DM Sans Regular, 11–13px.

Google Fonts import for web builds:
```
https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Playfair+Display:ital@0;1&family=DM+Sans:wght@400;500&display=swap
```

## Layout principles

- Generous whitespace is a design decision, not empty space.
- Grid discipline: everything aligns to an underlying grid. No arbitrary positioning.
- One primary focal point per screen. Never compete for attention with elements of equal weight.
- Design keywords: Geometric · Minimalist · Structured · Elegant · Premium · Intentional.

## Iconography

- Style: linear/outline, 1.5–2px stroke, rounded corners, 24px grid, never below 16px.
- Library: Phosphor Icons or Feather Icons (lucide-react is the Feather-compatible React choice).
- Navy on light backgrounds; White or Gold on Navy; Cool Gray for inactive states.
- Icons always carry a text label in navigation/UI. One meaning per icon.

## Surface treatments

Allowed:
- Flat, solid backgrounds.
- Very low-opacity noise (3–5%) on Navy backgrounds, sparingly.
- Thin 1–2px Gold or Navy rule lines as dividers, structural not ornamental.

Forbidden:
- Gradients on primary backgrounds.
- Drop shadows on text or logo.
- Bevels, embossing, skeuomorphism.
- Pattern/watermark overlays competing with content.

## Photography (when images are used)

- People in purposeful, reflective, working moments. Real, not stock-perfect. Diverse ages and backgrounds.
- Calm ordered spaces, natural warm light, slightly warm color temperature.
- Mood: quiet confidence, hopeful and grounded. Not high-energy, not celebratory.
- Avoid: handshake stock photos, wealth signaling (supercars, jets), cold/teal filters, dark moody imagery, recognizable brands/devices.

## Tagline usage

"The Infrastructure of Freedom" appears only where positioning is being communicated: hero sections, brand introductions, first-encounter materials. Never as a repeated sign-off. Placed deliberately so it lands with full weight.
