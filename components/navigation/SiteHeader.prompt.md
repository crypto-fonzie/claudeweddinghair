The site header: horizontal lockup on the left, four uppercase links on the right, a 1px hairline beneath. Nothing else.

```jsx
<SiteHeader
  current="work"
  links={[{id:"work",label:"Work"},{id:"morning",label:"The morning"},{id:"areas",label:"Areas"},{id:"enquire",label:"Enquire"}]}
  action={<Button size="sm" variant="secondary">Enquire</Button>}
/>
```

- The active link carries a brass underline. Hover darkens; nothing moves.
- Never sticky with a blur. If it must stick, it sticks with a solid Morning fill.
- Four links maximum — the site has six sections and the nav is not a table of contents.
