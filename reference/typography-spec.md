# Typography Specification
### The Morning Of — Bridal Hair

Two typefaces. No more. The restraint is doing as much brand work as the choices themselves — a two-font system executed consistently reads as considered and expensive, while a four-font system reads as a small business that bought a template.

---

## The short version

| Role | Typeface | Where it's used |
|---|---|---|
| **Primary / Display** | **Instrument Serif** | The wordmark, headlines, pull quotes, the promise line |
| **Secondary / Body** | **Karla** | Everything else — body copy, buttons, labels, captions, forms, pricing |

Both are free, open-source, and licensed for commercial and logo use. Neither is the obvious default for this category, which is the point.

---

## Primary — Instrument Serif

**Why it fits the brand.** The positioning is "quiet and premium." In type, premium almost always comes from *contrast* — the difference between the thick and thin strokes of a letter. Instrument Serif has a lot of it, which is why it reads as expensive at large sizes without any decoration. But its shapes stay fairly narrow and upright rather than swelling into something ornamental, so it stops short of the fussiness that the category usually falls into.

It also has a genuinely lovely italic, which matters more than it sounds: the brand voice is warm and personal, and an italic pull quote does that emotional work in a way an upright headline can't.

**What it's for**

- The wordmark
- Page headlines and section titles
- The promise line and pull quotes (often italic)
- Large numbers and prices, where they're being presented rather than listed

**What it's *not* for**

- Body copy of any length. High contrast is what makes it beautiful at 48px and unreadable at 15px — the thin strokes disappear.
- Anything under about 18px
- Buttons, form labels, navigation, or captions
- All-caps settings without added letterspacing (it tightens up badly)

**Available styles.** Regular and Italic only. That's the one real limitation, and it's worth naming because it drives the whole system: with no bold and no light, Instrument Serif cannot build hierarchy by itself. Hierarchy comes from *size* and from switching to Karla — never from faking a bold.

---

## Secondary — Karla

**Why it fits the brand.** Karla is a humanist grotesque with slightly irregular letterforms — the *a*, the *g*, the *R* all have a little character rather than the machined neutrality of Inter or Helvetica. That irregularity is what makes it feel warm and human, which is exactly the voice: plain-spoken, calm, a real person rather than a brochure.

It's also doing a specific job against Instrument Serif. Pair a high-contrast serif with a *neutral* sans and the result is cold and corporate. Pair it with something with a bit of warmth and the whole system relaxes. Karla is the counterweight.

Practically: it's slightly narrow, which means it sets beautifully in the letterspaced uppercase labels used throughout the identity, and it holds up in small sizes on a phone — where most of this brand will actually be read.

**What it's for**

- All body copy
- Descriptors under the wordmark
- Labels, eyebrows, and captions (uppercase, letterspaced)
- Buttons, navigation, forms, pricing tables
- Anything functional or anything small

**Available styles.** Use Light (300), Regular (400) and Medium (500). Ignore Bold and above — heavy weights break the quiet register. If something needs more emphasis than Medium, the answer is to make it bigger or move it to Instrument Serif, not heavier.

---

## The third role — which is not a third font

There's a distinct "utility" style used for eyebrows, labels, image captions and section markers. It looks like a third typeface but isn't:

> **Karla Medium · 10px · UPPERCASE · 0.22em letterspacing · Tortoise (#6E4A2C)**

Keeping this as a *style* rather than a font is what stops the system sprawling. Any time a third typeface feels necessary, the answer is almost always this style instead.

---

## Type scale

Sizes are for web at desktop; scale down roughly 15–20% for mobile. Everything below assumes a measure of 60–70 characters per line — the single most impactful typographic decision on the site, and the one most often ignored.

| Style | Face | Size / Line height | Tracking |
|---|---|---|---|
| Hero | Instrument Serif Regular | 64–92px / 0.96 | −0.015em |
| Headline | Instrument Serif Regular | 38–44px / 1.1 | −0.012em |
| Subhead | Instrument Serif Regular | 28–32px / 1.15 | −0.01em |
| Pull quote | Instrument Serif Italic | 22–27px / 1.35 | 0 |
| Lede | Karla Light | 17–18px / 1.6 | 0 |
| Body | Karla Light | 15px / 1.65 | 0 |
| Body small | Karla Light | 13.5px / 1.55 | 0 |
| Caption | Karla Regular | 12px / 1.5 | 0.01em |
| Label / eyebrow | Karla Medium | 10px / 1.4 · UPPERCASE | 0.22em |
| Wordmark | Instrument Serif Regular | 25px+ · UPPERCASE | 0.30em |

**Note on letterspacing:** it moves in the opposite direction to size. Large display type wants slightly *negative* tracking to stop it feeling loose; small uppercase type wants a lot of *positive* tracking or it turns into a solid block. Getting this right is most of what separates professional-looking type from amateur.

---

## The wordmark is a special case

The logo is *set* in Instrument Serif but it is not *typed* in Instrument Serif. Once the name is final:

1. Set it at 0.30em tracking, uppercase.
2. Optically correct the spacing by hand — letterspacing applied evenly always leaves some pairs looking wrong, usually around **A**, **V**, **W**, **T** and **Y**.
3. **Convert it to outlines** and save that as the master logo file.

Step three matters. Once outlined, the wordmark is a fixed piece of artwork that renders identically everywhere — a sign-maker, an embroiderer, a printer, and a website will all produce exactly the same shapes, and it can't shift if the font updates. A logo that's still live text will eventually render wrong somewhere.

---

## Practical constraints — read this before committing

This is where brand systems usually break for small businesses. She will be making Instagram graphics on a phone or in Canva far more often than a designer will be opening Figma, and if the fonts aren't available in those places, the brand quietly stops existing.

**Before finalising, verify:**

- Both fonts are available in **Canva's** font list. Availability changes, so check rather than assume. If either is missing, both are open-licence and can be **uploaded** via Canva's Brand Kit on a paid plan — this is permitted by the licence and is the recommended fix.
- Both install on her laptop for anything made in Word, Pages, or Keynote.
- Both are added to the website as proper web fonts, not fetched by name.

**Rules that follow from this:**

- **Never set brand type inside the Instagram app.** Its built-in fonts are not ours, and a story typed in the app is off-brand by definition. Graphics get made in Canva and exported.
- **Email is the exception.** Custom fonts are unreliable in email clients, so email uses the fallback stack — Georgia for display, system sans for body. Don't fight it.
- **Printed pieces** should be supplied as PDFs with fonts embedded, or with type outlined. Never send a printer a live-text file and hope.

---

## Licensing

Both fonts are released under the **SIL Open Font License**. In plain terms:

- Free to use commercially, forever, with no fee
- Free to embed in a website
- **Free to use in a logo**, including a logo she trademarks
- Free to modify (relevant to the hand-spacing above)
- The one restriction: the font files themselves can't be sold on their own, which will never come up

No licence to buy, renew, or track. For a business at this stage this is a real advantage, not a compromise.

---

## Web implementation

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Karla:wght@300;400;500&display=swap" rel="stylesheet">
```

```css
:root {
  --display: "Instrument Serif", Georgia, "Times New Roman", serif;
  --body: "Karla", system-ui, -apple-system, "Segoe UI", sans-serif;
}
```

Use `font-display: swap` (included above) so text is readable while fonts load. For a site whose hero is a photograph with type over it, self-hosting the two font files is worth doing later — it removes a third-party request and stops the wordmark flashing in Georgia on first load.

---

## If the brand outgrows these

Nothing here needs replacing, and I'd argue against paying for type until there's revenue that justifies it. But if a licensed upgrade is ever wanted, these are the families the free choices are standing in for:

**Display:** Canela · Ogg · Editorial New
**Body:** Söhne · Graphik · Untitled Sans

Expect roughly £200–600 per family for combined web and desktop licensing. The honest assessment: at this stage the money does far more work spent on photography. The type is not the constraint.

---

## Never

- **Never a script or calligraphic face.** Not for the logo, not for headings, not for "just this one invitation graphic." It is the single clearest visual marker of the category we're positioning against.
- **Never a third typeface.** If something needs to look different, change size, weight, case, or colour first.
- **Never fake a style.** No synthetic bold, no artificial italic, no stretching or condensing to fit a space.
- **Never set body copy in Instrument Serif.** It will look elegant to whoever set it and be a chore for whoever reads it.
- **Never use Karla above Medium.** Heavy weights are loud, and the brand isn't.
- **Never justify text.** Ragged right, always — justification opens uneven gaps that undermine the whole quiet-and-precise impression.
- **Never let a line of body copy run past ~70 characters.**
