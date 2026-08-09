import React from "react";
import { PinMark } from "./PinMark.jsx";

const TONES = {
  light: { name: "var(--ink)", amp: "var(--brass)", desc: "var(--tortoise)", pin: "brass" },
  inverse: { name: "var(--morning)", amp: "var(--brass)", desc: "var(--tulle)", pin: "brass" },
  photo: { name: "#FFFFFF", amp: "var(--brass-pale)", desc: "rgba(255,255,255,.88)", pin: "paper" }
};

/** The Polished & Pinned lockup — stacked, horizontal, or name only. */
export function Lockup({ variant = "stacked", tone = "light", size = 44, descriptor = true, style, ...rest }) {
  const t = TONES[tone] || TONES.light;
  const display = { fontFamily: "var(--font-display)", fontWeight: "var(--weight-regular)", lineHeight: 1 };

  const desc = (
    <span style={{ fontFamily: "var(--font-body)", fontWeight: "var(--weight-regular)", color: t.desc, whiteSpace: "nowrap" }}>
      <span style={{ textTransform: "uppercase", letterSpacing: "var(--tracking-descriptor)" }}>Bridal Hair</span>
      <span style={{ color: "var(--brass)", margin: "0 .6em" }}>·</span>
      <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", letterSpacing: ".01em", fontSize: "1.35em" }}>by Noelle</span>
    </span>
  );

  if (variant === "horizontal") {
    return (
      <span style={{ display: "inline-flex", alignItems: "center", gap: `${size * 0.5}px`, ...style }} {...rest}>
        <PinMark height={size * 1.6} tone={t.pin} />
        <span style={{ textAlign: "left" }}>
          <span style={{ ...display, display: "block", textTransform: "uppercase", letterSpacing: ".26em", textIndent: ".26em", fontSize: size, color: t.name }}>
            Polished <i style={{ fontStyle: "italic", color: t.amp, textTransform: "none", letterSpacing: 0 }}>&amp;</i> Pinned
          </span>
          {descriptor ? <span style={{ display: "block", marginTop: size * 0.39, fontSize: size * 0.35 }}>{desc}</span> : null}
        </span>
      </span>
    );
  }

  return (
    <span style={{ display: "inline-block", textAlign: "center", ...display, textTransform: "uppercase", fontSize: size, ...style }} {...rest}>
      <span style={{ display: "block", letterSpacing: "var(--tracking-wordmark)", textIndent: "var(--tracking-wordmark)", color: t.name }}>Polished</span>
      <span style={{ display: "block", fontStyle: "italic", textTransform: "none", color: t.amp, letterSpacing: 0, textIndent: 0, fontSize: size * 0.77, margin: ".14em 0" }}>&amp;</span>
      <span style={{ display: "block", letterSpacing: "var(--tracking-wordmark-wide)", textIndent: "var(--tracking-wordmark-wide)", color: t.name }}>Pinned</span>
      {variant === "stacked" && descriptor ? (
        <span style={{ display: "block", marginTop: size * 0.36, textTransform: "none", fontSize: size * 0.23 }}>{desc}</span>
      ) : null}
    </span>
  );
}
