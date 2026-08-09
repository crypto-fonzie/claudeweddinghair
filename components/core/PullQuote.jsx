import React from "react";

/** Instrument Serif italic on a Tulle field with a 2px Brass keyline. */
export function PullQuote({ attribution, tone = "block", size = "var(--size-quote)", children, style, ...rest }) {
  const block = tone === "block";
  return (
    <figure
      style={{
        margin: 0,
        background: block ? "var(--surface-block)" : "transparent",
        borderLeft: block ? "var(--border-quote)" : "none",
        padding: block ? "30px 34px" : 0,
        ...style
      }}
      {...rest}
    >
      <blockquote
        style={{
          margin: 0,
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: size,
          lineHeight: "var(--leading-quote)",
          letterSpacing: "var(--tracking-quote)",
          color: tone === "inverse" ? "var(--text-on-inverse)" : "var(--text-secondary)",
          maxWidth: "var(--measure-display)"
        }}
      >
        {children}
      </blockquote>
      {attribution ? (
        <figcaption
          style={{
            marginTop: "16px",
            fontFamily: "var(--font-body)",
            fontWeight: "var(--weight-regular)",
            fontSize: "11px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: tone === "inverse" ? "var(--tulle)" : "var(--text-label)"
          }}
        >
          {attribution}
        </figcaption>
      ) : null}
    </figure>
  );
}
