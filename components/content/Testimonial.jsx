import React from "react";

/** A bride's words, set in Instrument Serif italic with a plain Karla credit. */
export function Testimonial({ credit, tone = "light", size = "18px", children, style, ...rest }) {
  const inverse = tone === "inverse";
  return (
    <figure style={{ margin: 0, ...style }} {...rest}>
      <blockquote
        style={{
          margin: 0,
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: size,
          lineHeight: "var(--leading-quote)",
          color: inverse ? "var(--text-secondary-on-inverse)" : "var(--text-secondary)"
        }}
      >
        {children}
      </blockquote>
      {credit ? (
        <figcaption style={{ marginTop: "var(--space-5)", fontSize: "12px", letterSpacing: "0.02em", fontWeight: "var(--weight-regular)", color: inverse ? "var(--tulle)" : "var(--text-body)" }}>
          {credit}
        </figcaption>
      ) : null}
    </figure>
  );
}
