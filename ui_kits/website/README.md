# Website — UI kit

The public site for Polished & Pinned. Four screens, click-through, composed entirely from the design system's components.

| File | Screen |
|---|---|
| `index.html` | Entry. Holds the router state and mounts each screen. |
| `Chrome.jsx` | `Page` (header + footer), `Section` (width, padding, hairline), `PinBullets` (the pin used as a list marker). |
| `Home.jsx` | Hero with the promise line · recent work three-up · what the morning includes · the consultation → trial → morning ladder · service areas · closing enquiry block. |
| `Work.jsx` | Portfolio grid, six slots across the four shot types, plus three testimonials. |
| `Morning.jsx` | What the morning is, the three pillars reversed on Ink, what's inside and outside the box. |
| `Enquire.jsx` | The enquiry form — name, email, date, location, party size, budget band, free text. Submits to a confirmation state. |

## Rules this kit is enforcing

- **No prices anywhere.** The budget band is a range the bride picks, not a number we publish. Enquiries go to a consultation.
- Photography is not supplied, so every image is a `PhotoFrame` stating which of the four shot types belongs in the slot. Drop real images in via `src` and nothing else changes.
- One fade-and-rise on the hero, staggered 80ms. Nothing else on the site animates.
- Section rhythm is `--section-y` (64–84px) with a 1px Tortoise-18% hairline between sections; content caps at 1080px.

## Not built

An Instagram template set (six 1080×1080 cards) is described in the brand brief as a future deliverable. No existing artwork was supplied, so it is not recreated here.
