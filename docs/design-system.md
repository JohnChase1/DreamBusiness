# Dream Business — Design System (for builds)

Practical component rules for apps and pages. brand.md defines the identity; this file defines the implementation.

## CSS custom properties (use these, not hard-coded values)

```css
:root {
  --db-navy: #0B2242;
  --db-gold: #C9A66B;
  --db-white: #FFFFFF;
  --db-sand: #F6F3EE;
  --db-gray: #AAB2BD;

  --font-heading: 'Montserrat', sans-serif;
  --font-accent: 'Playfair Display', serif;
  --font-body: 'DM Sans', 'Lato', sans-serif;

  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 48px;
  --space-xl: 96px;

  --radius-sm: 6px;
  --radius-md: 10px;
  --maxwidth-content: 720px;
  --maxwidth-wide: 1080px;
}
```

## Buttons

- Primary CTA: Gold background (`--db-gold`), Navy text, Montserrat SemiBold, 14–16px, padding 14px 28px, radius `--radius-sm`. Hover: darken gold ~8%, no shadow growth.
- Secondary: transparent with 1.5px Navy border, Navy text. On Navy backgrounds: White border/text.
- One primary CTA per screen. Buttons use verbs ("Get the guide", "Start the Diagnostic"), never "Submit" or "Click here".
- No exclamation marks in button labels.

## Forms

- Labels above inputs, DM Sans 13px, Navy.
- Inputs: White background, 1.5px Cool Gray border, radius `--radius-sm`, 16px text (prevents iOS zoom). Focus: Navy border, no glow.
- Error states: plain text below the field in a muted red (#B0443C), stated factually ("Enter a valid email address"), never playful.
- Email capture always states what happens next in one line ("You will receive a confirmation email").
- Multi-step forms show progress as "Step 2 of 5" in Cool Gray, not a gamified progress bar.

## Cards and sections

- Cards: White or Sand background, no shadow or at most `0 1px 3px rgba(11,34,66,0.08)`, radius `--radius-md`, 24px padding.
- Section rhythm on pages: alternate Navy and White/Sand full-width sections.
- Pull quotes: Playfair Display Italic on Sand, or with a 2px Gold left border.
- Dividers: 1px Gold or Navy rules, or whitespace. Never decorative flourishes.

## Data display (calculators, reports, results)

- Numbers get Montserrat SemiBold; explanatory text stays DM Sans.
- Charts: Navy as primary series, Gold as the highlight series, Cool Gray for context/benchmark series. Flat colors, no gradients, white or sand plot background, minimal gridlines.
- Every number states its assumption in a caption. We never show a projection without its basis.
- Verdicts and results are stated calmly. No confetti, no celebratory animation, no score-shaming.

## Motion

- Transitions: 150–250ms ease, opacity and small translate only.
- No parallax, no scroll-jacking, no auto-playing carousels, no attention-seeking animation.
- Loading states: a plain sentence ("Preparing your profile") over spinners where possible.

## Responsive rules

- Mobile-first. Design at 375px width, then expand.
- Content max-width 720px for reading, 1080px for layouts.
- Touch targets minimum 44px.
- Test every build at 375px, 768px, and 1280px before declaring done.

## Accessibility

- Navy on White/Sand and White on Navy both pass WCAG AA; keep body text in those pairs.
- Gold text only on Navy, only at 18px+ or SemiBold, and never for body copy.
- Cool Gray never for primary body copy.
- All interactive elements keyboard-reachable; forms with proper labels; images with alt text.

## Tone in UI copy

- Calm, precise, respectful of the reader's intelligence. Second person is fine ("Your profile", "Your numbers").
- Empty states and errors are factual and helpful, never cute.
- Follows all voice rules in business.md, including the em-dash ban.
