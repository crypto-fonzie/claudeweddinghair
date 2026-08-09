The card / section panel — a square area of Tulle sitting on the Morning page. This is the system's only device for separating content spatially.

```jsx
<Block surface="tulle">
  <Eyebrow>What you get</Eyebrow>
  <p>A named contact — Noelle, directly.</p>
</Block>
```

- No radius, no shadow, no gradient, no border unless `surface="outline"`.
- Grids of blocks are separated by a 2px gap over a hairline background, or by 14px of Morning. Both appear in the partner deck.
- `raised` (#2E2721) is the only way to show a panel inside an Ink field; it is barely lighter on purpose.
