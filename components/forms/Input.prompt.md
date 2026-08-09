The text input — square, a 1px Tortoise-18% hairline, no fill, no radius. Focus darkens the border to Ink; that is the whole interaction.

```jsx
<Input id="email" type="email" placeholder="you@example.com" />
<Input multiline rows={6} placeholder="Anything else we should know" />
```

- Never a filled input, never a rounded one, never a floating label.
- Error state is a Tortoise border plus a plain sentence underneath. No red, no icon.
- Placeholders repeat the format, not the label.
