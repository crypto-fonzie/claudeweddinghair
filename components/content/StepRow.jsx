import React from "react";

/** A row in a sequence — the hair timeline, the enquiry ladder, the nine touchpoints. */
export function StepRow({ when, title, children, tone = "light", divider = true, style, ...rest }) {
  const inverse = tone === "inverse";
  return (
    <div
      className="pp-stack"
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(140px, 180px) minmax(160px, 220px) 1fr",
        gap: "var(--space-5)",
        alignItems: "start",
        padding: "18px 0",
        borderBottom: divider ? "1px solid var(--line-accent)" : "none",
        ...style
      }}
      {...rest}
    >
      <span style={{ fontFamily: "var(--font-body)", fontWeight: "var(--weight-medium)", fontSize: "10px", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--brass)", paddingTop: "6px" }}>{when}</span>
      <span style={{ fontFamily: "var(--font-display)", fontSize: "20px", lineHeight: 1.15, color: inverse ? "var(--text-on-inverse)" : "var(--text-secondary)" }}>{title}</span>
      <p style={{ margin: 0, fontSize: "var(--size-body-sm)", lineHeight: "var(--leading-body-sm)", color: inverse ? "var(--text-secondary-on-inverse)" : "var(--text-body)", maxWidth: "var(--measure)" }}>{children}</p>
    </div>
  );
}
