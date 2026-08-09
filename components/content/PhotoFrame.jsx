import React from "react";

const SHOTS = {
  "back-of-head": "Back of the head — the actual product, sharp, plain background",
  hands: "Hands working — mid-pin, mid-twist; motion blur is fine",
  room: "The room — robes, curtains, mirrors, the mess; no faces needed",
  party: "The party — bridesmaids and family, done and waiting"
};

/** A square-cornered image slot. With no src it states which of the four shot types belongs here. */
export function PhotoFrame({ src, alt = "", shot = "back-of-head", note, ratio = "3 / 4", caption, style, ...rest }) {
  return (
    <figure style={{ margin: 0, ...style }} {...rest}>
      <div style={{ aspectRatio: ratio, background: "var(--surface-block)", borderRadius: "var(--radius)", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
        {src ? (
          <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        ) : (
          <span style={{ fontFamily: "var(--font-body)", fontWeight: "var(--weight-regular)", fontSize: "11px", lineHeight: 1.5, letterSpacing: "0.02em", color: "var(--text-secondary)", textAlign: "left", maxWidth: "30ch" }}>
            PHOTO: {note || SHOTS[shot]}
          </span>
        )}
      </div>
      {caption ? (
        <figcaption style={{ marginTop: "var(--space-3)", fontSize: "var(--size-caption)", lineHeight: "var(--leading-caption)", letterSpacing: "var(--tracking-caption)", color: "var(--text-secondary)", fontWeight: "var(--weight-regular)" }}>{caption}</figcaption>
      ) : null}
    </figure>
  );
}
