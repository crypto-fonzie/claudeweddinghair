import React from "react";

const PATH = "M13 70 L13 31 A7 7 0 0 1 27 31 C27 40 22 43 27 50 C32 57 24 60 27 68";

/** The brass hairpin. One fine line: straight prong, U-bend, wavy prong. */
export function PinMark({ height = 40, tone = "brass", weight, title, style, ...rest }) {
  const stroke = { brass: "var(--brass)", ink: "var(--ink)", tortoise: "var(--tortoise)", paper: "var(--morning)" }[tone] || tone;
  const w = weight || (height >= 60 ? "var(--pin-stroke)" : "var(--pin-stroke-small)");
  return (
    <svg
      viewBox="0 0 40 78"
      height={height}
      width={(height * 40) / 78}
      fill="none"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      style={{ display: "block", flex: "none", ...style }}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d={PATH} stroke={stroke} strokeWidth={w} strokeLinecap="round" />
    </svg>
  );
}
