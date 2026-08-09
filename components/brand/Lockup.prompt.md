The name lockup — use `stacked` anywhere with room to breathe (deck covers, site header, signage) and `horizontal` where the stack is too tall (nav bar, email signature, quote-document header).

```jsx
<Lockup variant="stacked" tone="light" size={44} />
<Lockup variant="horizontal" tone="inverse" size={23} />
```

- The two lines carry different tracking (0.30em / 0.60em) on purpose so they finish at the same width. Never equalise them.
- The ampersand is Instrument Serif *italic* in Brass, at ~0.77× the wordmark size. It is the pivot the whole lockup is built around.
- Minimums: full lockup 130px wide (`size` ≈ 26), name only 76px (`size` ≈ 15). Below that use `PinMark` instead.
- Clear space is 1× the cap height of "POLISHED" on all four sides. Nothing enters it.
- `tone="photo"` only over the quiet part of a frame — never across a face or across detailed hair.
- Never recolour, rotate, stretch, shadow, or reset the lockup in another face.
