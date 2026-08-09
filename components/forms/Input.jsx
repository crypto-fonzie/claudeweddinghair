import React from "react";

const CONTROL = {
  width: "100%",
  fontFamily: "var(--font-body)",
  fontWeight: "var(--weight-light)",
  fontSize: "var(--size-body)",
  lineHeight: 1.5,
  color: "var(--text-body)",
  background: "transparent",
  border: "1px solid var(--tortoise-18)",
  borderRadius: "var(--radius)",
  padding: "var(--input-padding-y) var(--input-padding-x)",
  transition: "border-color var(--motion-hover-duration) var(--motion-hover-ease)",
  appearance: "none"
};

/** A single-line text input. Square, hairline border, no fill. */
export function Input({ multiline = false, rows = 5, invalid = false, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const s = {
    ...CONTROL,
    borderColor: invalid ? "var(--tortoise)" : focus ? "var(--ink)" : "var(--tortoise-18)",
    ...(multiline ? { resize: "vertical", minHeight: `${rows * 24}px`, lineHeight: "var(--leading-body)" } : null),
    ...style
  };
  const Tag = multiline ? "textarea" : "input";
  return <Tag rows={multiline ? rows : undefined} style={s} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} aria-invalid={invalid || undefined} {...rest} />;
}
