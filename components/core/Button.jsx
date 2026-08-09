import React from "react";

const BASE = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  fontFamily: "var(--font-body)",
  fontWeight: "var(--weight-medium)",
  textTransform: "uppercase",
  letterSpacing: "var(--tracking-button)",
  lineHeight: 1,
  borderRadius: "var(--radius)",
  border: "1px solid transparent",
  cursor: "pointer",
  textDecoration: "none",
  transition: "background-color var(--motion-hover-duration) var(--motion-hover-ease), color var(--motion-hover-duration) var(--motion-hover-ease), border-color var(--motion-hover-duration) var(--motion-hover-ease)"
};

const SIZES = {
  md: { fontSize: "12px", padding: "var(--button-padding-y) var(--button-padding-x)" },
  sm: { fontSize: "11px", padding: "var(--button-padding-y-sm) var(--button-padding-x-sm)" }
};

const VARIANTS = {
  primary: {
    rest: { background: "var(--action-fill)", color: "var(--action-text)", borderColor: "var(--action-fill)" },
    hover: { background: "var(--action-fill-hover)", borderColor: "var(--action-fill-hover)" }
  },
  secondary: {
    rest: { background: "transparent", color: "var(--ink)", borderColor: "var(--action-outline)" },
    hover: { background: "var(--ink)", color: "var(--morning)" }
  },
  inverse: {
    rest: { background: "var(--morning)", color: "var(--ink)", borderColor: "var(--morning)" },
    hover: { background: "var(--tulle)", borderColor: "var(--tulle)" }
  },
  quiet: {
    rest: { background: "transparent", color: "var(--tortoise)", borderColor: "transparent", padding: 0, borderBottom: "1px solid var(--tortoise-18)" },
    hover: { color: "var(--ink)", borderBottomColor: "var(--brass)" }
  }
};

/** Solid Ink fill, square, uppercase Karla Medium. Secondary is a 1px Ink outline. */
export function Button({ variant = "primary", size = "md", href, disabled = false, type = "button", children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const composed = {
    ...BASE,
    ...SIZES[size],
    ...v.rest,
    ...(hover && !disabled ? v.hover : null),
    ...(disabled ? { opacity: 0.35, cursor: "not-allowed" } : null),
    ...style
  };
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={disabled ? undefined : href}
      type={href ? undefined : type}
      disabled={href ? undefined : disabled}
      aria-disabled={disabled || undefined}
      style={composed}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
