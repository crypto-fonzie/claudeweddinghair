# Polished &amp; Pinned — Design System

**Polished &amp; Pinned — Bridal Hair by Noelle.** Mobile bridal hair across the Greater Toronto Area. Hair only, no makeup. Owner-operator; travels to the bride on the wedding morning. One wedding a day, never two.

**The concept: "The Morning Of."** The business doesn't sell the ceremony, it sells the four unhurried hours before it — the getting-ready room, window light, robes, cold coffee, someone's mum already crying. Everyone else in the category competes on a grid of finished styles; this brand competes on a morning that runs on time.

**Promise line:** *We're there before anyone else is.*

**Register:** quiet and premium in look, warm and human in voice. Editorial, not decorative. Craftsperson, not wedding vendor.

**Three message pillars,** answering the three fears every bride carries, in this order:

- **Early** — she arrives ahead of call time; the timeline is written and shared weeks ahead.
- **Yours** — the bride still looks like herself, not transformed.
- **Holds** — pinned properly, checked before we leave, with a touch-up kit left behind.

**Audiences.** Primary: brides 28–38, professional, strong aesthetic point of view, quietly anxious about the morning running late. Her mother is the influencer and often the payer. The bridal party is where the margin is. Venues and planners are a separate audience entirely — they buy reliability, not aesthetics, and they are the referral engine.

## Surfaces in this system

| Surface | Status | Where |
|---|---|---|
| Marketing website | Rebuilt, 4 screens | `ui_kits/website/` |
| Partner deck (venues & planners) | Rebuilt from the supplied `.pptx`, 8 slide types | `ui_kits/partner-deck/` |
| Instagram template set | **Not built** — described in the brief as a future deliverable; no artwork supplied | — |
| Quote document, business card, brand guidelines | **Not built** — described as future deliverables | — |

## Sources

Everything here is derived from material supplied by the user. Nothing was invented from category convention.

- **Local folder `weddinghair/`** (attached read-only via File System Access API):
  - `claude-design-brief.md` — the condensed brand brief: colour table, type scale, logo spec, layout rules, photography, voice, the never-list.
  - `brand-concept-spec.html` — 15-section concept spec: the idea, what's actually sold, audiences, mission and values, positioning, messaging spine, offer architecture, naming, voice, the journey, content system, guardrails.
  - `typography-spec.md` — the full typography rationale, scale, licensing and implementation notes.
  - `logo-construction.html` — lockup construction, tracking, clear space, minimum sizes, avatar treatment, misuse.
  - `partner-deck.pptx` — a finished 10-slide partner deck. Parsed for exact geometry, type sizes and copy; the working copy sits at `scraps/partner-deck.pptx`.
  - `logos/` — `pin-brass.svg`, `pin-small.svg`, `pin-brass.png`, `pin-reversed.png`.
- **Uploaded files:** the same four pin assets, at `uploads/`.
- Verbatim copies of the four written sources live in `reference/` so this system stands alone.

No Figma file, no codebase, and no photography were supplied.

---

# Content fundamentals

**Voice in one line:** she is the calmest person in a nervous room. Write like that.

**Person.** Second person, always — "your hair", "you'll", "we'll". Never "the bride", never "our clients". First-person plural for the business ("we'll be there by seven"), even though it is one person; it reads as an operation rather than a favour.

**Sentence shape.** Plain words, short sentences, full stops. Statements, not slogans. Two short sentences beat one long one, and headlines often *are* two: "You don't have a hair problem. You have a timeline problem." · "Hair only. On location. Across the GTA." · "What you get. What we ask."

**Specific over emotive.** "We're set up before your call time" does more emotional work than any adjective. Numbers, times and place names are the warmth: *6 weeks out · morning, −30 min · ninety minutes · one wedding a day.*

**Say the awkward thing first.** Price bands, travel limits, what won't work on fine hair, the early-start surcharge. Candour is the differentiator in a category built on flattery. Form hints are where this goes: "A range, not a commitment." · "There is no price list — every morning is different, so we talk first."

**Unhurried.** No exclamation marks anywhere. No urgency, no scarcity copy, no countdowns, no "book now" — scarcity is communicated by the calendar, not the copy. Buttons read *Start an enquiry*, *Ask about a date*, *See recent work*.

**Casing.** Sentence case for headlines and body. UPPERCASE only in the utility label style (Karla Medium 10px, 0.22em) and in the wordmark. Never Title Case A Headline Like This.

**Punctuation.** Curly quotes and apostrophes. Em dash with spaces around it — like this — but only where the clause after it corrects or sharpens the one before it ("in advance — not decided in the room"). It is not a separator, and never decoration: captions, attributions, titles and metadata take the middot `·`, set in Brass. One em dash per paragraph, never two in a sentence. Ellipsis sparingly.

**Emoji: never.** Not on the site, not in the deck, not in captions. No emoji, no decorative unicode, no `✨`.

**Banned words.** bespoke · luxury · couture · transform · pamper · dream · magical · elevate · journey. Every one of them appears on a thousand competitor sites.

**Sounds right:**

> "We're set up before your call time. The timeline goes out six weeks ahead."
> "You're finished before the photographer needs you, not while she's waiting."
> "We don't pay for referrals. A recommendation that was bought isn't worth having."

**Sounds wrong:**

> "Let us transform you into the bride of your dreams! ✨"
> "Bespoke luxury bridal styling — book now, dates going fast."

**Audience switching.** Bride-facing copy leads with **Yours** and talks about how she'll feel. Partner-facing copy leads with **Early** and talks about the schedule, the day-sheet, and never overrunning the slot. Same voice, different first paragraph.

**Pricing.** Never published on a public-facing page. Enquiries go to a consultation; the form asks for a budget *band*, and the copy explains why there's no list.

---

# Visual foundations

## Colour

Six colours, warm neutrals only. **No pink, ever** — honey, not blush. Ink is a warm near-black brown, never `#000`.

| Name | Hex | Use |
|---|---|---|
| Morning | `#EFEDE7` | Base background. Nearly every surface. |
| Tulle | `#DEDAD1` | Cards, section blocks, hover fields. |
| Brass | `#B98B4A` | The pin, hairline rules, markers, the ampersand. **Never body text.** |
| Tortoise | `#6E4A2C` | Subheads, labels, captions, secondary copy. |
| Ink | `#241E19` | Body text, and reversed/dark panels. |
| Sage | `#9DA391` | Rare. One accent per page, maximum. |

Two derived values earn their place: `#2E2721` (a barely-raised panel inside an Ink field, from the deck's pillar slide) and `#E4C089` (a paler Brass used **only** for the ampersand over photography, so it doesn't disappear into a dark image). Everything else is transparency: Tortoise at 18% is the section rule, at 9% a list divider.

There is no red. Error states are a Tortoise border and a plain sentence.

## Type

Two typefaces, no third, ever. **Instrument Serif** (Regular + Italic) for display; **Karla** (300/400/500) for everything else. Both SIL OFL.

Instrument Serif has no bold, and that limitation drives the whole system: hierarchy comes from **size** and from **switching family**, never from a synthetic bold. Karla never goes above Medium — if something needs more emphasis, make it bigger or move it to the serif.

| Style | Face | Size / line height | Tracking |
|---|---|---|---|
| Hero | Instrument Serif | 64–92 / 0.96 | −0.015em |
| Headline | Instrument Serif | 38–44 / 1.1 | −0.012em |
| Subhead | Instrument Serif | 28–32 / 1.15 | −0.01em |
| Pull quote | Instrument Serif *Italic* | 22–27 / 1.35 | 0 |
| Lede | Karla Light | 17–18 / 1.6 | 0 |
| Body | Karla Light | 15 / 1.65 | 0 |
| Body small | Karla Light | 13.5 / 1.55 | 0 |
| Caption | Karla Regular | 12 / 1.5 | 0.01em |
| Label / eyebrow | Karla Medium | 10 / 1.4 · UPPERCASE | 0.22em |
| Wordmark | Instrument Serif | 25+ · UPPERCASE | 0.30em / 0.60em |

**Tracking moves opposite to size.** Large display goes slightly negative; small uppercase goes strongly positive. Getting this right is most of what separates professional type from amateur here.

Measure is 60–70 characters, hard. **Never justify** — ragged right always. Body copy and lists are always left-aligned; only display type and logo lockups centre.

The "third role" — eyebrows, captions, section markers — is a *style*, not a face: Karla Medium 10px uppercase 0.22em in Tortoise. Any time a third typeface feels necessary, this is the answer.

## Layout

Section padding 64–84px on desktop. Max content width 1080px. Page margins never below 24px on mobile. Eyebrows sit above headlines. Numbered or timed markers appear **only** where the content is genuinely a sequence.

Nothing is fixed or sticky. If a header must stick, it sticks with a solid Morning fill — never a translucent blur.

## Corners, borders, depth

**Corner radius is zero.** Cards, images, buttons, inputs, tiles, choice chips — square, all of it. The only circle in the system is the platform avatar crop, which is a mask rather than a brand decision.

**No drop shadows. No inner shadows. No gradients. No glows. No blur. No transparency effects.** Depth is a Tulle fill sitting on a Morning base, and that is the entire depth system. A card is a rectangle of Tulle with 28px of padding and no border. An outlined card is a 1px Tortoise-18% hairline with no fill. Grids of cards are separated either by 14px of Morning or by a 2px gap over a hairline background — both appear in the partner deck.

Rules are 1px, Tortoise at 18%, used to divide sections. Brass rules mark rows in a sequence or sit under a table head. Never a short decorative dash under a heading.

## Imagery

Natural window light, warm low-contrast grading. Four repeating shot types, in rotation:

1. **Back of the head** — the actual product, sharp, plain background.
2. **Hands working** — mid-pin, mid-twist; motion blur is fine.
3. **The room** — robes, curtains, mirrors, the mess; no faces needed.
4. **The party** — bridesmaids and family, done and waiting.

Never: direct flash, heavy skin retouching, cool blue grading, stock photography, or a full-face portrait where the hair isn't clearly visible. Images are square-cornered and full-bleed or hard-cropped — never rounded, never bordered unless it's a 1px Brass hairline. Never publish a set without a back-of-head shot in it.

**No photography was supplied.** Every image slot in this system renders a `PhotoFrame` stating which shot type belongs there — the same convention the original partner deck uses. Pass a `src` and the brief disappears.

## Motion and states

**One animation exists:** a fade-and-rise on load — 0.8s, translateY 10px, staggered 80ms. That's it. `prefers-reduced-motion` is always respected. No parallax, no scroll-triggered reveals, no counters, no marquees, no hover lift.

- **Hover:** a colour shift, nothing else. Primary button Ink → Tortoise. Links darken to Ink and their underline goes Brass. Nav links darken. Nothing moves, scales, or lifts.
- **Press:** the same colour change held. No shrink, no depress.
- **Focus:** a 1px Brass outline at 3px offset. Visible, quiet, never removed.
- **Selected:** a solid Ink fill with Morning text — the same language as the primary button. No ticks, no dots, no icons.
- **Transitions:** 0.25s on colour only.

## Buttons

Ink fill, Morning text, square, Karla Medium 12px uppercase at 0.16em, generous padding (15px / 34px). Secondary is a 1px Ink outline on transparent that fills Ink on hover. On Ink panels the button inverts to a Morning fill. A "quiet" variant is underlined text, Tortoise, for tertiary actions. One primary per view.

---

# Iconography

**There is no icon set, and that is deliberate.** The sources contain exactly one drawn mark — the brass hairpin — and the brand brief explicitly forbids illustrated marks: no scissors, no combs drawn literally, no mannequin heads, no hair silhouettes, no florals, wreaths, laurels or sprigs. Adding an icon library would undo the positioning.

What is used instead:

- **The pin** (`assets/pin-brass.svg`, `pin-small.svg`, plus `pin-paper.svg` and `pin-tortoise-small.svg` recoloured from the supplied file). One fine line: straight prong, U-bend, wavy prong. Stroke 2.6 above 60px, 4.5 below. It is the avatar, the favicon, the leading element of the horizontal lockup, and the bullet marker in feature lists. Minimum 20px. It is the **only** element allowed to appear alone.
- **The middot `·`**, set in Brass, as the separator in contact lines, descriptors and service lists. This is the closest thing to a second glyph in the system.
- **A CSS caret** on the select control — two 1px Brass borders rotated 45°, matching the hairline weight of everything else.
- **Numerals** in Instrument Serif Brass as section and slide markers.

**Never:** emoji, decorative unicode, an icon font, a CDN icon library (Lucide, Heroicons, Font Awesome or otherwise), or any second drawn object. If something needs a marker, it gets the pin, a numeral, or nothing.

**Logo files.** The pin was supplied as SVG and PNG. The *wordmark* was not supplied as artwork — the typography spec says the master should be set in Instrument Serif, optically corrected by hand, and converted to outlines. Until that master exists, `Lockup` sets it as live text at the specified tracking, which is close but not the final artwork.

---

# Files

## Foundations

- `styles.css` — the single entry point. `@import` lines only.
- `tokens/fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `borders.css` · `motion.css` · `base.css`
- `guidelines/*.card.html` — 20 specimen cards (Colors, Type, Spacing, Brand) rendered in the Design System tab.
- `assets/` — `pin-brass.svg`, `pin-small.svg`, `pin-paper.svg`, `pin-tortoise-small.svg`, `pin-brass.png`, `pin-reversed.png`.
- `reference/` — verbatim copies of the four supplied written sources.

## Components

**Brand** (`components/brand/`)
- **Lockup** — stacked, horizontal and name-only lockups, on light, Ink and photography.
- **PinMark** — the hairpin at either stroke weight, in any brand tone.

**Core** (`components/core/`)
- **Button** — primary, secondary, inverse, quiet; md and sm.
- **Eyebrow** — the uppercase utility label.
- **Rule** — the 1px hairline, in four weights of quiet.
- **Block** — the square Tulle/Ink/outlined panel.
- **PullQuote** — Instrument Serif italic on a Tulle field with a Brass keyline.

**Content** (`components/content/`)
- **SectionHead** — eyebrow, headline, lede.
- **Pillar** — one of Early / Yours / Holds.
- **StepRow** — a brass-ruled row in a genuine sequence.
- **Testimonial** — a bride's words with a plain credit.
- **PhotoFrame** — the square image slot, with the four shot-type briefs built in.

**Forms** (`components/forms/`)
- **Field** — label, hint and control.
- **Input** — single-line and multiline.
- **Select** — native select with a Brass caret.
- **ChoiceGroup** — square radio/checkbox tiles for the budget band and party size.

**Navigation** (`components/navigation/`)
- **SiteHeader** — horizontal lockup and uppercase links.
- **SiteFooter** — the stacked lockup reversed on Ink, contact line, Sage note.

Every component has a sibling `.d.ts` (props contract) and `.prompt.md` (what and when), and each directory carries one `@dsCard` HTML showing its states.

### Intentional additions

No component library was supplied, so the inventory above is authored from the brand's actual deliverables — the six website sections, the enquiry form, and the eight partner-deck slide types. Three entries exist because the *sources* demand them rather than because a design system usually has them: **PhotoFrame** (photography is the brand's primary asset and none was supplied), **Pillar** (Early/Yours/Holds is a fixed three-part structure, not a generic card), and **ChoiceGroup** (the budget band must show all four ranges at once, which a select can't do).

## UI kits

- `ui_kits/website/` — homepage, work, the morning, enquiry. Click-through. See its README.
- `ui_kits/partner-deck/` — eight slide types recreated 1:1 from the supplied `.pptx`. See its README.

## Templates

Starting folders a consuming project can copy. Each is a Design Component with a sibling `ds-base.js` that loads this system's CSS and bundle — point its `base` line at the bound `_ds/<folder>` tree and everything renders.

- `templates/partner-deck/PartnerDeck.dc.html` — the eight-slide venue &amp; planner deck at 1280×720.
- `templates/website/Homepage.dc.html` — the marketing homepage as a single flowing page.

## Other

- `SKILL.md` — makes this system usable as an Agent Skill.
- `thumbnail.html` — the project tile.
- `scraps/partner-deck.pptx` — working copy of the supplied deck.

---

# Known gaps

- **No font binaries.** Instrument Serif and Karla are loaded from Google Fonts in `tokens/fonts.css`. These are the correct faces, not substitutes — but self-hosted `woff2` files would remove a third-party request and stop the wordmark flashing in Georgia on first load. Drop them in `assets/fonts/` and swap the `@import` for local `@font-face` rules; the family names must not change.
- **No photography.** Every image is a shot-type brief.
- **No outlined wordmark.** The lockup is live text at the specified tracking; the master artwork needs hand-spacing and converting to outlines.
- **Prices are ratios, not figures.** The concept spec sets The Morning at 1.0× and derives everything else; the real anchor number was never supplied, and no price appears on any public-facing surface anyway.
