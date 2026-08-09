import React from "react";

/** One of the three message pillars: Early · Yours · Holds. */
export function Pillar({ word, fear, children, tone = "light", style, ...rest }) {
  const inverse = tone === "inverse";
  return (
    <div style={{ background: inverse ? "var(--surface-inverse-raised)" : "var(--surface-page)", padding: "28px 24px", ...style }} {...rest}>
      <p style={{ fontFamily: "var(--font-display)", fontSize: "34px", lineHeight: 1.1, margin: "0 0 6px", color: inverse ? "var(--brass)" : "var(--text-secondary)" }}>{word}</p>
      {fear ? (
        <p style={{ fontFamily: "var(--font-body)", fontWeight: "var(--weight-medium)", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--brass)", margin: "0 0 14px" }}>{fear}</p>
      ) : null}
      <p style={{ fontSize: "var(--size-body-sm)", lineHeight: "var(--leading-body-sm)", margin: 0, color: inverse ? "var(--text-secondary-on-inverse)" : "var(--text-body)" }}>{children}</p>
    </div>
  );
}
