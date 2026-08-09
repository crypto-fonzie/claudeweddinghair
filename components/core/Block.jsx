import React from "react";

const SURFACES = {
  tulle: { background: "var(--surface-block)", color: "var(--text-body)" },
  morning: { background: "var(--surface-page)", color: "var(--text-body)" },
  ink: { background: "var(--surface-inverse)", color: "var(--text-on-inverse)" },
  raised: { background: "var(--surface-inverse-raised)", color: "var(--text-on-inverse)" },
  outline: { background: "transparent", color: "var(--text-body)", border: "var(--border-hairline)" }
};

/** A square block of colour. Depth comes from Tulle against Morning — never from a shadow. */
export function Block({ surface = "tulle", padding = "var(--card-padding)", as: Tag = "div", children, style, ...rest }) {
  return (
    <Tag style={{ borderRadius: "var(--radius)", boxShadow: "none", padding, ...SURFACES[surface], ...style }} {...rest}>
      {children}
    </Tag>
  );
}
