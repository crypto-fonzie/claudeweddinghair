A grid of square tiles standing in for radios and checkboxes — the budget band, the party size, the shortlist of services. Selection is a solid Ink fill, which is the same language as the primary button.

```jsx
<ChoiceGroup
  name="budget"
  columns={4}
  options={[
    { value: "a", label: "Under $800" },
    { value: "b", label: "$800 – $1,400" },
    { value: "c", label: "$1,400 – $2,200" },
    { value: "d", label: "Still working it out", note: "Perfectly fine" }
  ]}
/>
```

- Tiles sit on a 1px hairline grid — the gap is the rule, not a border on each tile.
- No tick marks, no dots, no icons. Fill is the affordance.
- `multiple` turns it into checkboxes with identical styling.
