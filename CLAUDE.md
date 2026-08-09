# Project instructions

## Installed skills

Seven skills live in `skills/`. Read the relevant one before starting work it covers.

### Motion and polish

**`emil-design-eng`** — Emil Kowalski's design-engineering and animation philosophy (github.com/emilkowalski/skills). Read before writing or reviewing any motion, transition, or interaction code, and before reviewing UI polish.

### Review and QA

**`web-design-guidelines`** — Vercel's Web Interface Guidelines (github.com/vercel-labs/agent-skills, MIT). ~110 checkable rules across accessibility, focus, forms, animation, typography, images, performance, navigation, touch, dark mode, i18n, plus a flag-these anti-pattern list. Outputs `file:line` findings.

**`ui-ux-pro-max`** — UI/UX quality control (github.com/nextlevelbuilder/ui-ux-pro-max-skill, MIT): priority-ordered categories, design dials, pre-delivery checklist.

### Design direction

**`design-taste-frontend`** — Taste Skill v2, anti-slop frontend rules (github.com/Leonxlnx/taste-skill). Brief inference, three dials (variance / motion / density), layout discipline, content density, a long list of AI tells, and a strict pre-flight check. Condensed from the 85KB original; stack sections (Next.js, Tailwind, Motion, GSAP) dropped as inapplicable.

**`brandkit`** — Brand-identity art direction (github.com/Leonxlnx/taste-skill): board composition, logo concept methods, visual modes, colour discipline, anti-generic rules.

**`image-to-code`** — Image-first workflow (github.com/Leonxlnx/taste-skill): analyse a reference deeply as a design spec, then implement faithfully without drifting.

**`extract-design-system`** — Reverse-engineer tokens from a public website (github.com/arvindrk/extract-design-system).

### Response style

**`caveman`** — Terse caveman-speak replies (github.com/JuliusBrussee/caveman, MIT). **Off unless the user asks for it** ("caveman" / `/caveman <level>`; "normal mode" to stop) — the upstream session hook that auto-enables it does not exist here. Compresses chat replies only: never website copy, never project files, never anything inside a code fence. Built from the repo README's behavioural spec; the skill file itself was not fetchable.

**`impeccable`** — Flagship anti-generic frontend skill (github.com/pbakaus/impeccable, Apache 2.0). Colour/type/layout/motion/copy rules, a long absolute-bans list, and the two-altitude AI slop test. Root skill only: the 23 `reference/<command>.md` files were not reachable, and its CLI (`context.mjs`, `detect.mjs`, `palette.mjs`) cannot run here. Its cream-background ban and total em-dash ban both collide with this project's committed identity — the brand cards and `readme.md` win. See the Conflicts section at the foot of the skill file.

## Partial installs — what does not work here

No shell, no npm, no Python, no browser automation, no image generation. Several skills are installed as their reasoning layer only:

- **`ui-ux-pro-max`** is upstream a Python CLI over CSV databases. Never run `search.py` or `uipro`. Never present a recommendation as a database lookup.
- **`extract-design-system`** is upstream a Playwright CLI. Never run `npx extract-design-system` or `npx playwright`. Reading a page's CSS by hand is partial — say so.
- **`brandkit`** produces a generated image. Use it to write the image brief, or to lay out a brand board in HTML. Never claim to have generated brand imagery; hand-drawn marks are sketches.
- **`image-to-code`** loses its generate-references stage. It works fully when the user supplies the image.
- **`web-design-guidelines`** upstream re-fetches rules from `vercel-labs/web-interface-guidelines/main/command.md` before each review; they are inlined as of install.

## Scope

**Work on the website only.** That means `templates/website/` and `ui_kits/website/`, plus the shared foundations they depend on (`styles.css`, `tokens/`, `guidelines/`, `assets/`, `components/`).

**Do not work on the partner deck.** `templates/partner-deck/` and `ui_kits/partner-deck/` are out of scope: no reviews, no fixes, no copy sweeps, and do not raise findings about them. Touch them only if the user explicitly asks. If a change to a shared foundation would affect the deck, make the change and say so in one line, but do not go and update the deck.

## The website has two implementations — keep them in step

The homepage exists twice, and nothing enforces agreement:

| Surface | Template (what consumers copy) | Kit (React reference) |
| --- | --- | --- |
| Homepage | `templates/website/Homepage.dc.html` | `ui_kits/website/Home.jsx` |
| Chrome | header/footer inline in the DC | `ui_kits/website/Chrome.jsx` |

**Any change to one MUST be applied to the other in the same turn.** Four verification failures in one session came from fixing only one copy. Before reporting a homepage fix as done, open both files and confirm.

These must match: hero headline and lede, measure (`18ch` on the h1), eyebrow set and count, section order, all body copy, photo captions, the service-area prose block, the pull quote, and the CTA labels. The DC additionally carries the Air / Hero treatment / Voice tweaks, which the kit has no equivalent for — that asymmetry is expected.

The other kit pages (`Work.jsx`, `Morning.jsx`, `Enquire.jsx`) have no template counterpart and stand alone.

## Shared foundations

`components/`, `tokens/`, and `styles.css` are used by both the website and the deck. Layout grids collapse via `.pp-stack` (straight to one column at 760px) and `.pp-stack-2` (two-column stage at 1024px first) from `tokens/base.css` — inline React styles cannot hold media queries. **Never put a three-item set on `.pp-stack-2`**; it orphans the third cell.

## Precedence

1. **`guidelines/brand-*.card.html`** — brand cards win on anything they cover: duration, easing personality, palette, type, copy voice, casing, punctuation, what Polished & Pinned animates at all.
2. **`emil-design-eng`** — motion technique: transform/opacity only, custom curves over built-ins, transitions over keyframes, origin-aware popovers, reduced-motion handling.
3. **`web-design-guidelines`** — mechanical correctness: aria, labels, focus-visible, semantic elements, image dimensions, `Intl.*`, anti-patterns. Its Content & Copy section (Title Case headings, Vercel voice) does NOT apply — brand voice card governs.
4. **`design-taste-frontend`** — composition and anti-slop judgement: layout families, hero discipline, eyebrow restraint, content density, the AI-tells list. Its typography and colour sections (4.1, 4.2) are overridden by the brand cards. Its total em-dash ban applies only if the brand voice card agrees.
5. **`impeccable`** — craft ceilings the others don't state: hero clamp ≤ 6rem, display tracking ≥ −0.04em, ghost-card and over-rounding bans, reveal-animations-must-enhance-a-visible-default. Its palette, em-dash and eyebrow rules are overridden here.
6. **`ui-ux-pro-max`** — delivery checklist and category priorities. Lowest precedence.

**`brandkit`, `image-to-code`, and `extract-design-system` sit outside this chain** — they are task-scoped, not standing guidance. **`caveman` sits outside it too** — it governs reply style, not design decisions, and never overrides the brand voice card.

## This project is already resolved

121 tokens, fixed palette, defined type pairing, existing logo and brand cards. **Do not re-derive style, colour, or typography from any skill.** Read `styles.css`, `tokens/`, and `guidelines/`. Several of these skills assume a greenfield brand (brandkit explicitly; extract-design-system implicitly) and will happily propose a competing identity if left unchecked.

## Not installed from vercel-labs/agent-skills

The repo has eight skills; seven don't apply and were skipped rather than added as dead weight: `vercel-optimize` and `vercel-deploy-claimable` (need the Vercel API and a shell), `react-best-practices` and `react-view-transitions` (no Next.js or router here), `react-native-guidelines` (no native target), `composition-patterns` (React library API design; the `ui_kits/*.jsx` here are thin), `writing-guidelines` (Vercel's docs handbook conflicts with the brand voice card).

Also available from taste-skill if wanted: `redesign-skill`, `gpt-tasteskill`, `soft-skill`, `minimalist-skill`, `brutalist-skill`, `output-skill`, `stitch-skill`, `imagegen-frontend-web`, `imagegen-frontend-mobile`.
