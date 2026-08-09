# Partner deck — slide types

Recreated from `partner-deck.pptx` (supplied in `weddinghair/`). Ten slides in the original; eight distinct **types**, which is what is rebuilt here. Positions are converted 1:1 from the source file — the deck is 12192000×6858000 EMU, which is exactly 1280×720 px, so every coordinate maps directly.

| File | Source slide | Type |
|---|---|---|
| `cover.html` | 1 | Ink cover — pin, left-aligned stacked wordmark, audience line bottom-right |
| `statement.html` | 2 | Headline + body, Tulle side panel carrying the one-line argument |
| `pillars.html` | 4 | Early · Yours · Holds, as raised (#2E2721) panels on Ink |
| `timeline.html` | 5 | Five brass-ruled rows: marker, serif title, description |
| `two-column.html` | 6 | What you get / what we ask, pin bullets, Tulle field under the left column |
| `photo-grid.html` | 8 | Three square image slots with shot-type briefs |
| `testimonials.html` | 9 | Three italic quotes with plain credits |
| `closing.html` | 10 | The promise line, brass rule, contact block |

`Slides.jsx` holds all eight plus the shared `Frame`, `SlideEyebrow` and `SlideHeadline`. `index.html` stacks the set.

## Conventions carried from the original

- Left margin 82px (777240 EMU) on every slide; eyebrow at y=82, headline at y=125.
- Running footer: "Polished & Pinned" in Karla 12px Tortoise at 0.22em, page number in Instrument Serif Brass at the right margin. Covers and the closing slide have no footer.
- Slides 3 and 7 in the original (Who we are, Service area) reuse the statement and two-column geometry with different content, so they are not separate types.
- Photography was never in the source file — the original ships photo briefs in Tulle boxes, and so does this.
