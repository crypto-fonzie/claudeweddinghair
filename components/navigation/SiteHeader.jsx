import React from "react";
import { Lockup } from "../brand/Lockup.jsx";

/** The site header — horizontal lockup left, plain Karla links right. */
export function SiteHeader({ links = [], action, current, tone = "light", onNavigate, style, ...rest }) {
  const inverse = tone === "inverse";
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--space-7)",
        padding: "var(--space-6) var(--page-gutter)",
        borderBottom: `1px solid ${inverse ? "rgba(239,237,231,.16)" : "var(--line-hairline)"}`,
        background: inverse ? "var(--surface-inverse)" : "var(--surface-page)",
        ...style
      }}
      {...rest}
    >
      <a
        href="#top"
        onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate("home"); } }}
        style={{ border: 0, textDecoration: "none", display: "inline-flex" }}
      >
        <Lockup variant="horizontal" tone={inverse ? "inverse" : "light"} size={17} />
      </a>
      <nav style={{ display: "flex", alignItems: "center", gap: "var(--space-7)" }}>
        {links.map((l) => {
          const active = current === l.id;
          return (
            <a
              key={l.id}
              href={l.href || "#"}
              onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate(l.id); } }}
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: "var(--weight-medium)",
                fontSize: "10px",
                letterSpacing: "var(--tracking-label)",
                textTransform: "uppercase",
                color: active ? (inverse ? "var(--morning)" : "var(--ink)") : (inverse ? "var(--tulle)" : "var(--text-secondary)"),
                borderBottom: `1px solid ${active ? "var(--brass)" : "transparent"}`,
                paddingBottom: "4px",
                textDecoration: "none"
              }}
            >
              {l.label}
            </a>
          );
        })}
        {action}
      </nav>
    </header>
  );
}
