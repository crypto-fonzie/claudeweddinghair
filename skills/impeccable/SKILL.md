---
name: impeccable
description: Use when the user wants to design, redesign, shape, critique, audit, polish, clarify, distill, harden, optimize, adapt, animate, colorize, extract, or otherwise improve a frontend interface. Covers websites, landing pages, dashboards, product UI, app shells, components, forms, settings, onboarding, and empty states. Handles UX review, visual hierarchy, information architecture, cognitive load, accessibility, performance, responsive behavior, theming, anti-patterns, typography, fonts, spacing, layout, alignment, color, motion, micro-interactions, UX copy, error states, edge cases, i18n, and reusable design systems or tokens. Not for backend-only or non-UI tasks.
source: https://github.com/pbakaus/impeccable (skill/SKILL.src.md, Apache 2.0)
---

Designs and iterates production-grade frontend interfaces. Real working code, committed design choices, exceptional craft.

## Install note — what does not run here

Upstream this skill is a CLI plus 23 command reference files. In this environment there is no shell, so:

- **`node scripts/context.mjs`, `context-signals.mjs`, `detect.mjs`, `palette.mjs`, `pin.mjs` cannot run.** Never claim to have run the detector or a palette roll.
- **The 23 `reference/<command>.md` files are not installed** — only this root file was reachable. Commands below are therefore a vocabulary for scoping a request, not loadable procedures. If the user says "audit the header", treat it as a scoped instruction and apply the rules in this file plus the project's own guidelines.
- **No `PRODUCT.md` / `DESIGN.md` init flow.** This project's equivalents already exist and are richer: `readme.md`, `guidelines/*.card.html`, `tokens/`, and the source brief in the attached `weddinghair` folder.

### Setup, adapted

1. Read the project's existing design system, conventions and components before designing. At minimum `styles.css`, `tokens/`, and one representative component. Don't reinvent; use what's there.
2. Pick the register. **Marketing, landing page, campaign, long-form, portfolio → brand register** (design IS the product). **App UI, admin, dashboard, tool → product register** (design SERVES the product). The Polished & Pinned website is the brand register; the enquiry form is the product register inside it.
3. **Skip the palette step.** It applies only to brand-new projects with no committed colors. This project has committed brand colors, and identity-preservation wins.

## Design guidance

Produce ready-to-ship, production-grade code, not prototypes or starting points. Take no shortcuts unless the user asks (when in doubt, ask). Don't stop until arriving at a complete implementation: beautiful, responsive, fast, precise, bug-free, on brand. Every page, section or component crafted is battle-tested using the tools available.

### Color

- **Verify contrast.** Body text ≥4.5:1 against its background; large text (≥18px, or bold ≥14px) ≥3:1. Placeholder text needs the same 4.5:1, not the muted-gray default. The most common failure is muted gray body text on a tinted near-white. If contrast is even close, bump the body color toward the ink end of the ramp; light gray "for elegance" is the single biggest reason AI designs feel hard to read.
- Gray text on a colored background looks washed out. Use a darker shade of the background's own hue, or a transparency of the text color.

### Typography

- Cap body line length at 65–75ch.
- Hierarchy through scale + weight contrast (≥1.25 ratio between steps). Avoid flat scales.
- Cap font-family count at 3 (display + body + optional mono). More reads as indecision.
- Don't pair fonts that are similar but not identical (two geometric sans, two humanist sans). Pair on a contrast axis (serif + sans, geometric + humanist) or use one family in multiple weights.
- No all-caps body copy. Reserve uppercase for short labels (≤4 words), sparing section eyebrows, and badges.
- **Hero / display heading ceiling: `clamp()` max ≤ 6rem (~96px).** Above that the page is shouting, not designing. 8–11rem reads as comically loud.
- **Display letter-spacing floor: ≥ −0.04em.** Tighter and letters touch — cramped, not "designed". −0.02 to −0.03em is plenty for tight grotesque display.
- `text-wrap: balance` on h1–h3; `text-wrap: pretty` on long prose.

### Layout

- Vary spacing for rhythm.
- **Cards are the lazy answer.** Use them only when truly the best affordance. Nested cards are always wrong.
- Flexbox for 1D, Grid for 2D. Don't default to Grid when `flex-wrap` would be simpler.
- Responsive grids without breakpoints: `repeat(auto-fit, minmax(280px, 1fr))`.
- Build a semantic z-index scale (dropdown → sticky → modal-backdrop → modal → toast → tooltip). Never 999 or 9999.

### Motion

- Motion is intentional and part of the build, not an afterthought.
- Don't animate CSS layout properties unless truly needed.
- Ease out with exponential curves (ease-out-quart / quint / expo). No bounce, no elastic.
- Reduced motion is not optional. Every animation needs a `prefers-reduced-motion: reduce` alternative — typically a crossfade or instant transition.
- **Staggering items within one list is legitimate.** The tell is the uniform reflex — one identical entrance applied to every section — not motion itself. Each reveal should fit what it reveals. Suppressing the reflex is never a reason to ship a page with no motion at all.
- **Reveal animations must enhance an already-visible default.** Don't gate content visibility on a class-triggered transition; transitions pause on hidden tabs and headless renderers, so the reveal never fires and the section ships blank.
- Premium motion materials are not just transform/opacity. Blur, backdrop-filter, clip-path, mask, and shadow/glow are part of the palette when they materially improve the effect and stay smooth.

### Interaction

- Dropdowns with `position: absolute` inside an `overflow: hidden`/`auto` container get clipped. Use native `<dialog>` / the popover API, `position: fixed`, or a portal.

### Copy

- Every word earns its place. No restated headings, no intros that repeat the title.
- **No em dashes.** Use commas, colons, semicolons, periods, or parentheses. Also not `--`.
- **No aphoristic-cadence body copy as a default voice.** Don't fall into "serious statement, then punchy short negation" as the page's recurring rhythm. If three or more copy blocks land on a short rebuttal-shaped sentence, rewrite. Specific, not aphoristic.
- **No marketing buzzwords**: streamline, empower, supercharge, leverage, unleash, transform, seamless, world-class, enterprise-grade, next-generation, cutting-edge, game-changer, mission-critical. Pick a specific noun and a verb describing what the product literally does.
- Button labels: verb + object. "Save changes" beats "OK"; "Delete project" beats "Yes".
- Link text needs standalone meaning. "View pricing plans" beats "Click here".

## New projects only (no prior work exists)

Not applicable to this project — recorded for completeness.

- Use OKLCH.
- **The cream / sand / beige body bg is the saturated AI default of 2026.** The whole warm-neutral band (OKLCH L 0.84–0.97, C < 0.06, hue 40–100) reads as cream/sand/paper/parchment regardless of what you call it. Token names like `--paper`, `--cream`, `--sand`, `--bone`, `--linen`, `--parchment`, `--ivory` are tells in themselves. Don't translate "warm, traditional" or "editorial-restraint" into a near-white warm-tinted bg. Pick instead: a saturated brand color as the body; a true off-white at chroma 0; or a darker mid-tone tinted neutral that is clearly the brand's own. Warmth is carried by accent, typography and imagery, not by body bg.
- Tinted neutrals: add 0.005–0.015 chroma toward the brand's hue. Don't default-tint warm or cool "because the brand feels that way".
- Dark vs light is never a default. Before choosing, write one sentence of physical scene: who uses this, where, under what ambient light, in what mood. If the sentence doesn't force the answer, add detail until it does.
- Pick a **color strategy** before picking colors: **Restrained** (tinted neutrals + one accent ≤10%), **Committed** (one saturated color carries 30–60% of the surface), **Full palette** (3–4 named roles), **Drenched** (the surface IS the color).

## Absolute bans

Match-and-refuse. If you're about to write any of these, rewrite the element with different structure.

- **Side-stripe borders.** `border-left`/`border-right` greater than 1px as a colored accent on cards, list items, callouts, alerts. Never intentional.
- **Gradient text.** `background-clip: text` on a gradient. Use a single solid color; emphasis via weight or size.
- **Glassmorphism as default.** Rare and purposeful, or nothing.
- **The hero-metric template.** Big number, small label, supporting stats, gradient accent.
- **Identical card grids.** Same-sized cards with icon + heading + text, repeated endlessly.
- **Tiny uppercase tracked eyebrow above every section.** It appears on 55–95% of generations regardless of brief, which is the definition of a tell. One named kicker as a deliberate brand system is voice; an eyebrow on every section is AI grammar.
- **Numbered section markers as default scaffolding (01 / 02 / 03).** Numbers earn their place when the section actually IS a sequence and the order carries information. One deliberate numbered sequence on one page is voice; numbered eyebrows across the site is AI grammar.
- **Text that overflows its container.** Test heading copy at every breakpoint; if it overflows, reduce the clamp max or rewrite the copy. The viewport is part of the design.
- **`border: 1px solid X` + `box-shadow: 0 Npx Mpx …` with M ≥ 16px on the same element.** The ghost-card pattern. Pick one: a single solid border, or a defined shadow at ≤8px blur. Never both as decoration.
- **`border-radius: 32px+` on cards / sections / inputs.** Cards top out at 12–16px; full-pill is fine for tags and buttons.
- **Hand-drawn / sketchy SVG illustrations.** `loose-sketch`, `doodle`, `wavy` class names; `feTurbulence`/`feDisplacementMap` paper-grain filters; crude 5–30 path scenes. Reads as amateurish, not whimsical. If you can't render the scene with real assets, ship no illustration.
- **`repeating-linear-gradient()` stripe backgrounds.**
- **"X theater" / "actually X" / "not just X, it's Y" copy.** Choose a specific noun, not a meta-criticism phrase.

## The AI slop test

If someone could look at this interface and say "AI made that" without doubt, it has failed.

**Category-reflex check**, at two altitudes:

- **First-order:** if someone could guess the theme + palette from the category alone, it's the first training-data reflex.
- **Second-order:** if someone could guess the aesthetic family from category-plus-anti-references ("AI workflow tool that's not SaaS-cream → editorial-typographic"), it's the trap one tier deeper. Rework until neither answer is obvious.

## Commands (vocabulary, not loadable references)

**Build** — `craft` (shape then build end-to-end), `shape` (plan UX/UI before code), `init`, `document`, `extract` (pull reusable tokens/components into the system).
**Evaluate** — `critique` (UX review with heuristic scoring), `audit` (a11y, perf, responsive).
**Refine** — `polish`, `bolder`, `quieter`, `distill`, `harden` (errors, i18n, edge cases), `onboard`.
**Enhance** — `animate`, `colorize`, `typeset`, `layout`, `delight`, `overdrive`.
**Fix** — `clarify` (UX copy, labels, error messages), `adapt` (devices, screen sizes), `optimize`.
**Iterate** — `live` (browser variant mode; unavailable here).

If the first word of a request matches one, scope the work to that intent. If the intent clearly maps to one ("fix the spacing" → layout, "the colors feel flat" → colorize), proceed as if invoked. If two could fit, ask once.

## Conflicts with this project — read before applying

Impeccable is written for greenfield work and is deliberately opinionated. Several rules collide with Polished & Pinned's committed identity. **The brand cards win** (see `CLAUDE.md` precedence).

- **The cream/beige ban** targets `#EFEDE7` "Morning" and the token name `--morning` almost exactly. This palette is committed, documented, and derived from a real brief. Do not re-derive it.
- **The em-dash ban** is absolute upstream. `readme.md` permits the em dash where the following clause corrects the one before it, and assigns the middot to separators. The readme wins.
- **The eyebrow ban** is stricter than design-taste-frontend's one-per-three-sections. Where both apply, take the stricter reading only if the brand permits; Polished & Pinned uses eyebrows as a deliberate system element.
- **"Cards are the lazy answer"** agrees with the brand's own restraint rules. Apply freely.
- **Motion**: Impeccable says a page with no motion is a failure; the brand motion card specifies exactly one fade-and-rise on load and nothing else. The brand card wins, but a page missing that one animation is failing both.
