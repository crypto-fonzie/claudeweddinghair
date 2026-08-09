import React from "react";

/** Karla Medium 10px uppercase at 0.22em — the utility style that stands in for a third typeface. */
export function Eyebrow({ tone = "tortoise", as: Tag = "p", children, style, ...rest }) {
  const color = { tortoise: "var(--text-label)", brass: "var(--brass)", paper: "var(--tulle)" }[tone] || tone;
  return (
    <Tag
      style={{
        fontFamily: "var(--font-body)",
        fontWeight: "var(--weight-medium)",
        fontSize: "var(--size-label)",
        lineHeight: "var(--leading-label)",
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color,
        margin: 0,
        ...style
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
