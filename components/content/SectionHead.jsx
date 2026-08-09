import React from "react";
import { Eyebrow } from "../core/Eyebrow.jsx";

/** Eyebrow above, Instrument Serif headline below. The opening of every section and slide. */
export function SectionHead({ eyebrow, headline, lede, tone = "light", align = "left", size = "var(--size-headline)", style, ...rest }) {
  const inverse = tone === "inverse";
  return (
    <header style={{ textAlign: align, ...style }} {...rest}>
      {eyebrow ? <Eyebrow tone={inverse ? "brass" : "tortoise"} style={{ marginBottom: "var(--space-5)" }}>{eyebrow}</Eyebrow> : null}
      {headline ? (
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: "var(--weight-regular)",
            fontSize: size,
            lineHeight: "var(--leading-headline)",
            letterSpacing: "var(--tracking-headline)",
            color: inverse ? "var(--text-on-inverse)" : "var(--text-display)",
            margin: 0,
            maxWidth: "18ch",
            marginLeft: align === "center" ? "auto" : undefined,
            marginRight: align === "center" ? "auto" : undefined,
            textWrap: "pretty"
          }}
        >
          {headline}
        </h2>
      ) : null}
      {lede ? (
        <p
          style={{
            marginTop: "var(--space-5)",
            marginBottom: 0,
            fontSize: "var(--size-lede)",
            lineHeight: "var(--leading-lede)",
            color: inverse ? "var(--text-secondary-on-inverse)" : "var(--text-body)",
            maxWidth: "var(--measure)"
          }}
        >
          {lede}
        </p>
      ) : null}
    </header>
  );
}
