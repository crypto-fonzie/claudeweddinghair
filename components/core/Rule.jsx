import React from "react";

/** The 1px hairline that divides sections. Tortoise at 18%, or Brass where it marks a row. */
export function Rule({ tone = "hairline", inset = 0, style, ...rest }) {
  const color = { hairline: "var(--line-hairline)", faint: "var(--line-faint)", brass: "var(--line-accent)", ink: "var(--line-strong)" }[tone] || tone;
  return <hr style={{ border: 0, borderTop: `1px solid ${color}`, margin: 0, marginLeft: inset, marginRight: inset, ...style }} {...rest} />;
}
