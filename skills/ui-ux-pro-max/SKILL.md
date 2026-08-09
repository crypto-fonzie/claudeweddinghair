---
name: ui-ux-pro-max
description: UI/UX design intelligence — priority-ordered rule categories, a design-decision workflow, and pre-delivery quality control. Use when designing, building, or reviewing UI: pages, components, color schemes, typography, layout, accessibility, animation, or data visualization.
source: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill (MIT)
---

# UI/UX Pro Max — Design Intelligence

## Install note — read this first

Upstream, this skill is a Python CLI (`scripts/search.py`) over CSV databases of 84 styles, 192 palettes, 74 font pairings, 192 product types, 98 UX guidelines, 104 icon entries, 16 GSAP presets, and 25 chart types. **Neither Python nor the CSVs exist in this environment.** Do not attempt to run `search.py`, `python3`, or any `uipro` command — there is no shell here.

What is installed is the reasoning layer: the priority table, the decision workflow, the anti-pattern list, and the delivery checklist. Everything below is usable as written.

**Do not fabricate database output.** Never present a style, palette, or font pairing as "the database recommends…" — there is no database to query. Recommend from judgment and say so.

## Precedence in this project

Polished & Pinned already has a resolved design system: 121 tokens, a fixed palette, a defined type pairing, brand rules, and a motion card. Steps 1–2 below (generate a design system, pick a style / palette / typography) are **already answered here — do not re-derive them.** Use `styles.css`, `tokens/`, and `guidelines/` as the source of truth.

What this skill contributes to this project is Step 3 onward: the accessibility, touch, performance, layout, forms, and navigation rules, plus the pre-delivery checklist. Where it conflicts with `guidelines/brand-*.card.html`, the brand cards win.

## When to apply

Tasks involving UI structure, visual design decisions, interaction patterns, or UX quality control: new pages, component work, reviewing UI for accessibility or consistency, navigation, animation, responsive behaviour.

Skip for backend logic, API/database design, non-visual performance, infrastructure — unless the task changes how something looks, feels, moves, or is interacted with.

## Rule categories by priority

Work 1 → 10. Higher priority is a harder gate.

| # | Category | Impact | Must have | Avoid |
| --- | --- | --- | --- | --- |
| 1 | Accessibility | CRITICAL | Contrast 4.5:1, alt text, keyboard nav, aria-labels | Removing focus rings, icon-only buttons without labels |
| 2 | Touch & interaction | CRITICAL | Min 44×44px targets, 8px+ spacing, loading feedback | Hover-only reliance, instant (0ms) state changes |
| 3 | Performance | HIGH | WebP/AVIF, lazy loading, reserve space (CLS < 0.1) | Layout thrashing, cumulative layout shift |
| 4 | Style selection | HIGH | Match product type, consistency, SVG icons | Mixing flat and skeuomorphic at random, emoji as icons |
| 5 | Layout & responsive | HIGH | Mobile-first breakpoints, viewport meta, no horizontal scroll | Fixed px container widths, disabling zoom |
| 6 | Typography & colour | MEDIUM | Base 16px, line-height 1.5, semantic tokens | Body text < 12px, grey-on-grey, raw hex in components |
| 7 | Animation | MEDIUM | 150–300ms, motion conveys meaning, spatial continuity | Decorative-only motion, animating width/height, no reduced-motion |
| 8 | Forms & feedback | MEDIUM | Visible labels, error near field, helper text, progressive disclosure | Placeholder-as-label, errors only at top |
| 9 | Navigation | HIGH | Predictable back, bottom nav ≤ 5, deep linking | Overloaded nav, broken back behaviour |
| 10 | Charts & data | LOW | Legends, tooltips, accessible colours | Colour alone conveying meaning |

## Workflow

**1. Analyse the request.** Extract product type, target audience and usage context, style keywords, and stack. Detect the stack from the project rather than assuming — a hardcoded default silently misroutes every recommendation. In this project the stack is plain HTML/CSS plus Design Components; there is no bundler.

**2. Establish the design system.** For a new project this is where you'd generate one. Here it exists — read `styles.css`, `tokens/`, and `guidelines/` instead. If a page-specific deviation is needed, document it rather than quietly diverging.

**3. Apply the category rules.** Walk the priority table for the surfaces you touched.

**4. Stack guidelines.** Match the idioms of the codebase you're in.

## Design dials

Three 1–10 sliders worth reasoning about explicitly even without the tool:

- **Variance** — 1–3 centred and minimal; 4–7 balanced; 8–10 bold and asymmetric.
- **Motion** — 1–3 subtle micro-interactions; 4–7 standard scroll and stagger; 8–10 complex choreography.
- **Density** — 1–3 spacious (24–96px scale); 4–7 standard (16–64px); 8–10 dense/dashboard (8–32px).

Dashboards run high density; marketing pages run low.

## Common problems

| Problem | Where to look |
| --- | --- |
| Dark mode contrast | Accessible colour pairs; check both modes at 4.5:1 |
| Animation feels unnatural | Easing, spring physics, exit faster than enter |
| Poor form UX | Inline validation, error clarity, focus management |
| Confusing navigation | Hierarchy, bottom-nav limit, back behaviour |
| Breaks on small screens | Mobile-first, breakpoint consistency |
| Jank | Virtualised lists, main-thread budget, debounce/throttle |

## Pre-delivery checklist

- [ ] No emoji as icons — use SVG
- [ ] `cursor: pointer` on every clickable element
- [ ] Hover states with smooth transitions (150–300ms)
- [ ] Text contrast 4.5:1 minimum, light and dark
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive at 375px, 768px, 1024px, 1440px
- [ ] Touch targets 44×44px minimum with 8px spacing
- [ ] Loading and error states designed, not just happy path
- [ ] Safe-area insets handled on native/mobile layouts

## Relationship to emil-design-eng

Both skills cover animation. `emil-design-eng` is the deeper and stricter of the two on motion — prefer it for easing curves, durations, interruptibility, and transform/opacity discipline. Use this skill's row 7 as a checklist, not as the specification.
