The brass hairpin mark — the only brand element that is ever allowed to appear on its own; use it as an avatar, a favicon, a section marker, or the leading element of the horizontal lockup.

```jsx
<PinMark height={70} tone="brass" title="Polished & Pinned" />
```

- `height` drives the stroke weight automatically: fine (2.6) at 60px and above, heavy (4.5) below it. Two drawings, one shape — this is what stops a hairline mark vanishing on a phone.
- Minimum size is 20px. Below the name-only lockup minimum (76px wide), drop to the pin.
- `tone="paper"` on Ink panels, `tone="brass"` on Morning or Tulle, `tone="ink"` only when brass would be too warm against a photograph.
- Never rotate it, never mirror it, never pair it with a second drawn object.
