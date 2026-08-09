---
name: design-taste-frontend
description: Anti-slop frontend skill for landing pages, portfolios, and redesigns. Read the brief, infer the right design direction, ship interfaces that do not look templated. Real design systems when applicable, audit-first on redesigns, strict pre-flight check.
source: https://github.com/Leonxlnx/taste-skill (skills/taste-skill, v2 experimental)
note: Condensed from the 85KB original. Operative rules preserved; appendices of install commands and canonical doc links dropped.
---

# Taste Skill — Anti-Slop Frontend

> Landing pages, portfolios, redesigns. Not dashboards, not data tables, not multi-step product UI.
> Every rule is **contextual**. None fires automatically. Read the brief first, then pull only what fits.

## Applying this in Polished & Pinned

This skill is written for greenfield React/Next/Tailwind builds. This project is a design system authored in plain HTML and Design Components, with a resolved palette, type pairing, and 121 tokens. So:

- **Sections 0, 4.7, 4.9, 9, 14 apply directly** — brief inference, layout discipline, content density, the AI-tells list, and the pre-flight check are stack-agnostic and useful.
- **Sections 2, 3, 5 do not** — no npm, no Next.js, no Motion, no GSAP here. Ignore the stack directives and code skeletons.
- **Sections 4.1 and 4.2 are overridden** by `guidelines/type-*.card.html` and `guidelines/colors-*.card.html`. Never re-pick fonts or accents.

## 0. Brief inference — read the room first

Read: **page kind** (landing, portfolio, redesign, editorial), **vibe words** the user used, **reference signals** (URLs, screenshots, named products), **audience** (the audience picks the aesthetic, not your taste), **existing brand assets**, and **quiet constraints** (accessibility-first, public-sector, regulated, kids' products — these override aesthetic preference).

**Before any code, state a one-line design read:** *"Reading this as: &lt;page kind&gt; for &lt;audience&gt;, with a &lt;vibe&gt; language, leaning toward &lt;system or aesthetic family&gt;."*

If the brief is genuinely ambiguous, ask **exactly one** question. Never a multi-question dump. If you can infer confidently, do not ask.

**Anti-default discipline.** Do not default to: AI-purple gradients, centered hero over dark mesh, three equal feature cards, glassmorphism on everything, infinite micro-animations, Inter + slate-900.

## 1. The three dials

- **`DESIGN_VARIANCE`** 1 = perfect symmetry, 10 = artsy chaos
- **`MOTION_INTENSITY`** 1 = static, 10 = cinematic physics
- **`VISUAL_DENSITY`** 1 = art gallery, 10 = cockpit

Baseline `8 / 6 / 4`. Override from the design read, conversationally.

| Signal | Variance | Motion | Density |
| --- | --- | --- | --- |
| minimalist / calm / editorial / Linear-style | 5–6 | 3–4 | 2–3 |
| premium consumer / Apple-y / luxury | 7–8 | 5–7 | 3–4 |
| playful / Awwwards / experimental / agency | 9–10 | 8–10 | 3–4 |
| landing page / portfolio (default) | 7–9 | 6–8 | 3–5 |
| trust-first / public-sector / a11y-critical | 3–4 | 2–3 | 4–5 |
| redesign — preserve | match | +1 | match |
| redesign — overhaul | +2 | +2 | match |

**Dial definitions.** Variance 1–3 symmetrical grid; 4–7 offsets, overlaps, varied aspect ratios; 8–10 masonry, fractional grids, massive empty zones — and for 4–10, asymmetric layouts must collapse to strict single column below 768px. Density 1–3 huge section gaps; 4–7 standard; 8–10 tight, no cards, hairlines between data, mono for all numbers.

## 4. Design directives

### 4.1 Typography

Display default: large, tight tracking, tight leading. Body: `max-w-[65ch]`, relaxed leading.

**Serif discipline (very discouraged as default).** "It feels creative / premium / editorial" is not a reason. The mental model "creative brief = serif" is the single most-tested AI tell. Serif is acceptable only when the brief names a serif, or the family is genuinely editorial / luxury / publication / heritage **and you can articulate why this specific serif fits this specific brand**. **Banned as defaults: Fraunces and Instrument Serif.** Otherwise default to sans display.

**Emphasis rule.** To emphasise a word in a headline, use italic or bold of the **same** font. Injecting a random serif word into a sans headline is amateur.

**Italic descender clearance.** Italic display words containing `y g j p q` clip at `leading-none`. Use `leading-[1.1]` minimum plus `pb-1` reserve.

Inter is discouraged as a default (acceptable when the brief asks for neutral / Linear-style, or for public-sector).

### 4.2 Colour

Max one accent. Saturation under 80% by default.

**The Lila rule.** AI purple/blue glow is discouraged as default. No automatic purple button glows, no random neon gradients. Neutral bases with a single high-contrast accent.

**Colour consistency lock.** One accent, whole page. A warm-grey site does not get a blue CTA in section 7.

**Premium-consumer palette ban.** For cookware / wellness / artisan / luxury / heritage / DTC briefs, the LLM default is warm beige-cream backgrounds + brass/clay/oxblood/ochre accents + espresso near-black text. Banned as the default reach — every premium-consumer site ever shipped uses it and the brand becomes invisible. Rotate instead: cold luxury (silver/chrome/smoke), forest (deep green/bone/amber), black and tan, cobalt + cream, terracotta + slate, olive + brick + paper, or monochrome plus one saturated pop. Do not ship the same warm-craft palette twice running.

### 4.3 Layout diversification

Centered hero is avoided when variance > 4 — use split screen, left content / right asset, asymmetric whitespace, or scroll-pinned. Exception: editorial / manifesto / launch briefs where the message is the design.

### 4.4 Materiality

Cards only when elevation communicates real hierarchy; otherwise group with `border-t`, `divide-y`, or negative space. Tint shadows to the background hue — no pure-black drop shadows on light. **Shape consistency lock:** one corner-radius scale per page, or a documented rule followed everywhere.

### 4.5 Interactive states

Always implement full cycles, not just the static success state: skeletal loaders matching final layout shape (not generic spinners), composed empty states that show how to populate, inline error states, and tactile `:active` feedback (`-translate-y-[1px]` or `scale-[0.98]`).

- **Button contrast check.** Verify CTA text against CTA background — WCAG AA, 4.5:1 body / 3:1 large. White-on-white, transparent-with-no-border, ghost buttons over photos with no scrim: all banned.
- **CTA wrap ban.** Button text fits one line at desktop. Three words max for primary CTAs, ideally one or two.
- **No duplicate CTA intent.** "Get in touch" + "Let's talk" + "Start a project" on one page = fail. One label per intent, used everywhere.
- **Form contrast check.** Inputs, placeholders, focus rings, helper and error text all pass AA against the section background.

### 4.6 Forms

Label above input, helper text present in markup, error below. Never placeholder-as-label.

### 4.7 Layout discipline — hard rules

- **Hero fits the initial viewport.** Headline max 2 lines desktop, subtext max 20 words and 3–4 lines, CTAs visible without scroll. A 4-line hero headline is a font-size error, not a copy-length error.
- **Hero top padding cap** `pt-24` at desktop. More and the content floats mid-viewport and reads as a bug.
- **Hero stack discipline — max 4 text elements:** eyebrow OR brand strip (or neither), headline, subtext, CTAs (1 primary + max 1 secondary). Banned in hero: tagline below CTAs, trust micro-strip, pricing teaser, feature bullets, avatar row. Those move to sections below.
- **"Used by" logo wall goes UNDER the hero**, never inside it.
- **Navigation on one line at desktop**, height ≤ 80px (default 64–72). Two-line nav is broken.
- **Bento grids need rhythm** and **exactly as many cells as you have content for.** An empty cell means you planned wrong.
- **Section-layout-repetition ban.** A layout family appears at most once per page. Eight sections need at least four different families.
- **Zigzag alternation cap.** Max 2 consecutive image+text split sections. The third is a fail.
- **Eyebrow restraint — the #1 violated rule.** An eyebrow is the small uppercase wide-tracking label above a section headline. Max **1 eyebrow per 3 sections**; hero counts as one. If section A has one, the next two cannot. Mechanical check: count `uppercase tracking` micro-labels; fail if count > ceil(sections / 3). What to do instead: drop it. The headline is enough.
- **Split-header ban.** "Left big headline + right small explainer paragraph" as a section header is banned as default. Stack vertically instead.
- **Bento background diversity.** At least 2–3 cells in any multi-cell grid need real visual variation. Six white-on-white text cards reads as AI default.
- **Mobile collapse declared explicitly** per section. No "Tailwind handles it" assumptions.

### 4.8 Images

Landing pages and portfolios are visual products. Priority: image-gen tool if available → real photography (`picsum.photos/seed/{descriptive-seed}/{w}/{h}`, or brand-provided) → clearly-labelled placeholder slots plus an explicit note to the user listing what's needed.

**Even minimalist sites need real images.** A pure-text page is not minimalism, it is incomplete work.

**Banned:** div-based fake screenshots (fake task lists, fake terminals, fake dashboards built from styled divs — the #1 LLM design tell), hand-rolled decorative SVG illustrations, plain text wordmarks for logo walls, broken Unsplash links. **Logo-only rule:** a logo wall is logos and nothing else — no category labels beneath them.

### 4.9 Content density

Default per section: headline ≤ 8 words, sub-paragraph ≤ 25 words, one visual or one CTA.

**No data-dump sections.** A 20-row table or 30-row award list on a marketing page is the wrong layout — use top 3–5 highlights plus a link, a marquee, or a different page.

**Long lists need a different component, not a longer list.** Beyond 5 items reach for 2-column grouped splits, card grids, tabs/accordion, scroll-snap pills, carousel, or marquee. A 10-row spec sheet with a hairline under every row is the worst default.

**Copy self-audit before ship.** Re-read every visible string. Flag and rewrite anything grammatically broken, with unclear referents, that sounds like AI hallucination (cute-but-wrong wordplay, forced metaphors), or that reads like an LLM trying to sound thoughtful. AI-generated cute copy is worse than boring copy.

**Fake-precise numbers are flagged.** `92%`, `4.1×`, `5.8 mm` either come from real data, are labelled as mock, or are banned. Don't fake engineering precision the brand doesn't claim.

**One copy register per page.**

### 4.10 Quotes

Max 3 lines of body. Attribution is name + role + optionally company, never name only. Real typographic quotes or none.

### 4.11 Page theme lock

One theme for the whole page. No light section sandwiched between dark ones. Section-level tints within the same family are fine; flipping to `bg-amber-50` mid-way through a near-black page is broken.

## 6. Guardrails

Animate only `transform` and `opacity`. Any motion above intensity 3 must honour `prefers-reduced-motion` — infinite loops, parallax, scroll-hijack, and magnetic physics collapse to static. Design both light and dark from the start; no pure `#000` or `#fff`. LCP < 2.5s, INP < 200ms, CLS < 0.1. Grain/noise filters only on fixed `pointer-events-none` pseudo-elements, never on scrolling containers. No z-index spam.

**Motion must be motivated.** Before adding any animation ask what it communicates — hierarchy, storytelling, feedback, or state transition. "It looked cool" is invalid. If you cannot articulate the reason in one sentence, drop it.

**Motion claimed = motion shown.** If the dial is above 4, the page actually moves. If you cannot ship working motion, drop the dial to 3 and ship a clean static page. Never half-build motion that breaks.

**Marquee max one per page.**

## 9. AI tells — forbidden patterns

**Visual:** no neon/outer glows, no pure black, no oversaturated accents, no excessive gradient text, no custom cursors.

**Layout:** mathematically clean spacing; **no three equal feature cards** — use 2-column zigzag, asymmetric grid, scroll-pinned, or horizontal scroll.

**Content ("Jane Doe" effect):** no generic names (John Doe, Sarah Chan), no generic avatars, no fake-perfect numbers (`99.99%`, `50%`), no startup-slop brand names (Acme, Nexus, SmartFlow, Cloudly), no filler verbs (Elevate, Seamless, Unleash, Next-Gen, Revolutionize).

**Production-test tells, banned outright:**

- Version labels in the hero (`V0.6`, `BETA`, `INVITE-ONLY PREVIEW`)
- "Brand · No. 01" sub-eyebrows
- Section-number eyebrows (`00 / INDEX`, `001 · Capabilities`, `06 · how it works`)
- `01 / 4` pagination on images or tiles
- Middle-dot (`·`) as default separator — max 1 per metadata line
- Decorative coloured status dots on nav items, list rows, badges (only for real semantic state)
- `<br>`-broken-and-italicised headlines as a default move
- Vertical rotated text ("INDEX OF WORK, 2018 - 2026")
- Crosshair / hairline grid lines as pure decoration
- Div-based fake product UI in the hero
- Fake version footers (`v0.6.2-rc.1`, `last sync 4s ago · main`)
- "Quietly in use at" / "Quietly trusted by" social proof headers
- "From the field" / "Field notes" / "Currently on the bench" poetic section labels
- Weather / locale / time strips (`LIS 14:23 · 18°C`) unless the brief is genuinely place-focused
- Micro-meta-sentences under eyebrows
- Generic step labels ("Stage 1 / Stage 2", "Phase 01")
- Pills or tags overlaid on images
- Photo-credit captions as decoration (`Field study no. 12 · Ines Caetano`)
- Version footers on marketing pages
- "Reservation 412 of 800" live-stock counters
- Decoration text strips at hero bottom (`BRAND. MOTION. SPATIAL.`)
- Floating top-right sub-text in section headings
- `border-t` + `border-b` on every row of a long list
- Scoring/progress bars with filled background tracks
- Scroll cues (`Scroll`, `↓ scroll`, `Scroll to explore`, animated mouse-wheel icons)

### The em-dash ban

**The em-dash (`—`) is completely banned.** No "limited use", no "fine in body copy". Banned in headlines, eyebrows, labels, pills, button text, captions, nav, body copy, quotes, and attribution. Also banned as an en-dash separator (`–`) — ranges use a hyphen. The only permitted dashes are the regular hyphen and the minus sign. A single visible `—` fails the pre-flight check.

*(Note for this project: `guidelines/brand-voice.card.html` governs punctuation in Polished & Pinned copy. If it permits em-dashes, it wins.)*

## 11. Redesign protocol

**Detect the mode first** — greenfield, redesign-preserve, or redesign-overhaul. Misclassifying is the biggest source of bad redesign output. If ambiguous, ask once.

**Audit before touching:** brand tokens, information architecture, content blocks, patterns to preserve, patterns to retire, the existing site's dial reading, and the SEO baseline (**SEO migration is the #1 redesign risk**).

**Preservation rules:** do not change IA, slugs, anchor IDs, or nav labels unless asked. Extract brand colours before applying the Lila rule — a brand that is already purple stays purple. Preserve copy voice. Honour existing accessibility wins. Respect analytics event names.

**Modernisation levers, in order:** typography refresh (biggest lift per unit of risk) → spacing and rhythm → colour recalibration → motion layer → hero recomposition → full block replacement (only when unsalvageable).

**Never change silently:** URL structure, primary nav labels, form field names or order, logo, legal/consent copy.

## 13. Out of scope

Dashboards, dense product UI, admin panels, data tables, multi-step wizards, code editors, native mobile, realtime collab UIs. If the brief is one of these, say so and point to the right tool.

## 14. Pre-flight check

Not optional. If a box cannot honestly be ticked, the output is not done.

- [ ] Design read declared
- [ ] Dial values explicit and reasoned, not silently baseline
- [ ] Redesign mode detected and audit performed, if applicable
- [ ] **Zero em-dashes anywhere visible**
- [ ] Page theme lock: one theme, no mid-page inversion
- [ ] Colour consistency lock: one accent across all sections
- [ ] Shape consistency lock: one radius system
- [ ] Button contrast: every CTA readable, AA
- [ ] No CTA label wraps at desktop
- [ ] Form contrast: inputs, placeholders, focus rings, labels all AA
- [ ] Serif discipline: not Fraunces, not Instrument Serif, not the same serif as last time
- [ ] Premium-consumer palette is not the beige+brass+espresso family
- [ ] Italic descenders have clearance
- [ ] Hero fits viewport: ≤ 2-line headline, ≤ 20-word subtext, CTA visible
- [ ] Hero top padding ≤ `pt-24`
- [ ] Hero has max 4 text elements
- [ ] Eyebrow count ≤ ceil(sections / 3)
- [ ] No split-header pattern
- [ ] No 3+ consecutive zigzag sections
- [ ] No duplicate CTA intent
- [ ] Logo wall is logos only, under the hero, real marks not text
- [ ] Bento cells have background diversity and exact cell count
- [ ] Copy self-audit done, no broken or hallucinated strings
- [ ] Every animation justifiable in one sentence
- [ ] Max one marquee
- [ ] Nav on one line, ≤ 80px
- [ ] At least 4 layout families across 8 sections
- [ ] Long lists use the right component
- [ ] Real images, no fake screenshots, no hand-rolled decorative SVG
- [ ] No overlaid pills, decorative photo credits, version footers, micro-meta sentences, hero-bottom text strips, floating corner sub-text, filled progress tracks, locale strips, scroll cues, version labels, section-number eyebrows, decorative dots, or double-bordered rows
- [ ] Content density sane
- [ ] Quotes ≤ 3 lines, attribution clean
- [ ] Motion claimed = motion shown
- [ ] Reduced motion honoured above intensity 3
- [ ] Dark mode tested in both modes
- [ ] Mobile collapse explicit
- [ ] Empty / loading / error states provided
- [ ] Cards omitted in favour of spacing where possible
- [ ] No AI tells from section 9
