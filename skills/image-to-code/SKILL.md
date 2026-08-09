---
name: image-to-code
description: Convert design images into implementation-friendly website code by analyzing visual references first. Landing pages, marketing sites, premium redesigns where visual accuracy matters.
source: https://github.com/Leonxlnx/taste-skill (skills/image-to-code-skill)
---

# Image to Code

A working order for visually important frontend tasks: **the image is the source of truth, the code is the translation layer.**

## Install note — read first

The upstream pipeline has three stages: generate reference images → analyse them → implement. **Stage 1 is not available here** (no image generation), so the skill runs in two-stage mode:

- **When the user supplies an image** — a screenshot, a comp, a photo of a sketch — stages 2 and 3 apply in full and this skill is genuinely useful. That is the common case.
- **When no image exists** — do not fake stage 1 by hand-drawing SVG or building a div mockup to "analyse". Either ask the user for a reference, or drop this skill and design directly in code.

**Standing exception:** when real source code exists (a repo, a design system, a component library), build from the code, not from a picture of it. This skill is for when the image is all there is.

## Defaults

- `ANALYSIS_PRECISION: 10`
- `IMPLEMENTATION_CLARITY: 9`
- `VISUAL_DENSITY: 3`

Overridable conversationally.

## When to use

Landing pages, marketing sites, startup sites, product pages, premium redesigns — anywhere visual accuracy is the point.

**Skip for:** backend work, design-system refactors that already have specs, and projects where rough functional UI is sufficient.

## Stage 1 — References (upstream only)

Generate one large image per requested section: six sections, six images, so type, spacing, and button detail stay analysable. Never crop an earlier board or reuse it for a detail view; a new view means a fresh standalone generation.

Not available in this environment. Ask the user for references instead.

## Stage 2 — Analyse before implementing

Do not glance at the image. Treat it as a design specification. The goal is to understand **exactly why the reference looks strong** before writing a line of code.

Extract and write down:

- **Layout structure** — grid, column counts, alignment, asymmetry, where the whitespace sits
- **Type scale** — display size relative to body, weights, tracking, line-height, the pairing
- **Colour relationships** — the base, the single accent, where the accent is allowed to appear, how neutrals are tinted
- **Spacing rhythm** — section padding, gaps between related and unrelated elements
- **Component detail** — corner radii, border weights, shadow treatment, button proportion and padding
- **Hierarchy** — what the eye hits first, second, third, and what makes that ordering work
- **Motion intent** — what the composition implies should move, if anything

Only after this analysis should implementation start.

## Stage 3 — Implement copy-oriented

Implement faithfully to the analysis. **Do not drift into a different design direction during implementation** — the most common failure is starting from the reference and quietly reverting to defaults by section four.

Avoid the generic AI pitfalls the skill exists to prevent: card spam, weak typography, compressed unreadable text, three-equal-column feature rows, and filler sections the reference does not contain.

If something in the reference cannot be reproduced faithfully (a font you don't have, an effect the stack won't support), say so explicitly and propose the nearest honest substitute. Do not silently approximate.

## In this project

Polished & Pinned has resolved tokens, palette, and type. When a reference image conflicts with them, the design system wins — flag the conflict rather than importing the reference's colours or fonts. Use this skill for **layout, hierarchy, spacing, and composition** transfer, not visual identity transfer.
