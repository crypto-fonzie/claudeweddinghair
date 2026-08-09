# Polished & Pinned — Design Brief
**Paste everything between the rules into Claude Design at the start of a session. Then use one of the prompts at the bottom.**

---

## BRAND CONTEXT

**Polished & Pinned** — mobile bridal hair, GTA (Toronto and surrounding). Hair only, no makeup. Owner-operator: Noelle. Travels to the bride on the wedding morning.

**Concept: "The Morning Of."** We don't sell the ceremony — we sell the four unhurried hours before it. The getting-ready room: window light, robes, cold coffee, someone's mum already crying.

**Promise line:** *We're there before anyone else is.*

**Register:** quiet and premium in look, warm and human in voice. Editorial, not decorative. Craftsperson, not wedding vendor.

**Three message pillars,** answering the three fears every bride has:
- **Early** — she arrives ahead of call time, timeline written weeks ahead
- **Yours** — the bride still looks like herself, not transformed
- **Holds** — built for a fourteen-hour day, photographed at 11pm

**Audience:** brides 28–38, professional, strong aesthetic point of view, anxious about the morning running late. Secondary: venues and wedding planners.

---

## COLOUR

| Name | Hex | Use |
|---|---|---|
| Morning | `#EFEDE7` | Base background. Nearly every surface. |
| Tulle | `#DEDAD1` | Cards, section blocks, hover states. |
| Brass | `#B98B4A` | The pin, hairline rules, small accents. **Never body text.** |
| Tortoise | `#6E4A2C` | Subheads, labels, captions, secondary copy. |
| Ink | `#241E19` | Body text, and reversed/dark panels. |
| Sage | `#9DA391` | Rare. One accent per page maximum. |

Warm greys, not cream. Honey, not blush. **No pink, ever.** Ink is a warm near-black brown, never pure `#000`.

---

## TYPE

**Display — Instrument Serif** (Google Fonts, Regular + Italic only)
Wordmark, headlines, pull quotes, large numbers. Never below 18px. Has no bold — build hierarchy with size or by switching to Karla, never with synthetic bold.

**Body — Karla** (Google Fonts, weights 300/400/500 only)
All body copy, labels, buttons, forms, captions, pricing. Never above Medium (500).

```
Hero        Instrument Serif  64–92px / 0.96  tracking −0.015em
Headline    Instrument Serif  38–44px / 1.1   tracking −0.012em
Subhead     Instrument Serif  28–32px / 1.15
Pull quote  Instrument Serif Italic  22–27px / 1.35   colour Tortoise
Lede        Karla Light  17–18px / 1.6
Body        Karla Light  15px / 1.65
Caption     Karla Regular  12px / 1.5   colour Tortoise
Label       Karla Medium  10px / UPPERCASE / tracking 0.22em / Tortoise
```

Tracking moves opposite to size: large display goes slightly negative, small uppercase goes strongly positive. Text measure 60–70 characters. **Never justify — ragged right always.**

---

## LOGO

**Primary lockup, stacked and centred:**
```
   POLISHED        ← Instrument Serif, uppercase, tracking 0.30em
       &           ← Instrument Serif ITALIC, Brass, ~0.75× size
    PINNED         ← Instrument Serif, uppercase, tracking 0.60em
  ────────────
BRIDAL HAIR · by Noelle
```
The two words carry **different tracking** (0.30em / 0.60em) so the lines finish at the same width — set identically they look lopsided. The descriptor mixes Karla uppercase ("BRIDAL HAIR", tracking 0.28em) with Instrument Serif italic ("by Noelle"), separated by a Brass middot.

**Horizontal lockup:** pin on the left, name and descriptor stacked to the right.

**The mark — a brass hairpin.** One fine line: straight prong, U-bend, wavy prong.
```svg
<svg viewBox="0 0 40 78" fill="none">
  <path d="M13 70 L13 31 A7 7 0 0 1 27 31 C27 40 22 43 27 50 C32 57 24 60 27 68"
        stroke="#B98B4A" stroke-width="2.6" stroke-linecap="round"/>
</svg>
```
Use stroke-width 2.6 above 60px, 4.5 below it. The pin alone is the avatar and favicon.

**Clear space:** 1× cap height of "POLISHED" on all four sides.
**Minimums:** full lockup 130px wide · name only 76px · pin only 20px.

---

## LAYOUT & EXECUTION

The premium signal comes from restraint and precision, not ornament. Specifically:

- **Corner radius: 0.** Square everything — cards, images, buttons, inputs.
- **Rules:** 1px, `#6E4A2C` at 18% opacity. Used to divide sections.
- **No drop shadows, no gradients, no glows, no blur.** Depth comes from the Tulle fill against the Morning base.
- **Buttons:** Ink fill, Morning text, square, Karla Medium 12px uppercase, tracking 0.16em, generous padding. Secondary buttons are a 1px Ink outline on transparent.
- **Whitespace:** section padding 64–84px desktop. Max content width 1080px. Page margins never below 24px on mobile.
- **Alignment:** body copy and lists always left-aligned. Centre only display type and logo lockups.
- **Structure:** eyebrows/labels above headlines. Numbered markers only where content is genuinely a sequence.
- **Motion:** a single fade-and-rise on load (0.8s, translateY 10px, staggered 80ms). Nothing else. Always respect `prefers-reduced-motion`.

---

## PHOTOGRAPHY

Natural window light, warm low-contrast grading. Four repeating shot types:
1. **Back of the head** — the actual product, sharp, plain background
2. **Hands working** — mid-pin, mid-twist; motion blur is fine
3. **The room** — robes, curtains, mirrors, the mess; no faces needed
4. **Her, later** — the hair at 11pm, still holding, unretouched

Never: direct flash, heavy skin retouching, cool blue grading, stock photography, or a full-face portrait where the hair isn't clearly visible. Images are square-cornered and full-bleed or hard-cropped — never rounded, never with a border unless it's a 1px Brass hairline.

---

## VOICE

Plain words, short sentences, second person, unhurried. She is the calmest person in a nervous room. Say the awkward thing first — timings, travel limits, what won't work on fine hair.

**Sounds right:** "We'll be there early. We'll bring the coffee." · "You should look like yourself, on a very good day."

**Banned words:** bespoke · luxury · couture · transform · pamper · dream · magical · elevate · journey. Also: no exclamation marks, no urgency copy, no "book now."

---

## NEVER

- Script or calligraphic type, anywhere, for any reason
- Blush pink, or any pink
- Florals, wreaths, laurels, sprigs
- Scissors, combs drawn literally, mannequin heads, hair silhouettes
- Rounded corners, drop shadows, gradients
- A third typeface
- Stretching, rotating, recolouring or shadowing the logo
- Pricing on any public-facing page — enquiries go to a consultation

---
---

# STARTER PROMPTS

Paste the brief above first, then one of these.

**Website homepage**
> Design the homepage. Hero is a full-bleed back-of-head photograph with the promise line over the quiet part of the frame. Then, in order: recent work as a three-up grid; what the morning includes; the consultation → trial → the morning ladder as three steps; service areas across the GTA; enquiry form. No prices anywhere — the enquiry form asks for wedding date, getting-ready location, party size, and a budget band. Desktop and mobile.

**Enquiry form**
> Design the enquiry form as a standalone page. Fields: name, email, wedding date, getting-ready location, party size, budget band (four ranges), and a free-text box for anything else. Above it, copy explaining why there's no price list: every morning is different, so we talk first and give a real number on the call. Warm, not corporate.

**Instagram templates**
> Design a set of six square Instagram templates: a quote card, a before/after pair, a "The 8am" series card (a recurring post from that morning's getting-ready room), a testimonial card, an availability card, and a plain photo card with a small pin mark. All 1080×1080, all using the brand type and palette.

**Business card**
> Design a business card, both sides, 3.5×2in. Front: the stacked lockup on Ink. Back: the pin, contact details, and the promise line. Square corners. Suggest a stock and finish appropriate to a premium bridal service.

**Quote document**
> Design a one-page quote document template. It describes the shape of the bride's morning — arrival time, running order, who's done when — rather than listing line items. Header carries the horizontal lockup. Leave the number to the very bottom.

**Brand guidelines**
> Build a ten-page brand guidelines document from the brief: logo and clear space, misuse, palette with usage rules, the two typefaces and the scale, the four photography shot types with the never-list, voice do's and don'ts, and the three pillars. Keep it short enough to actually be read.
