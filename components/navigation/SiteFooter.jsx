import React from "react";
import { Lockup } from "../brand/Lockup.jsx";

/** The site footer — stacked lockup on Ink, contact line, service note. */
export function SiteFooter({ email = "hello@polishedandpinned.ca", handle = "@polishedandpinnedbridal", site = "polishedandpinned.ca", note = "Happy to walk a venue, meet the team, or be on standby for a date you're holding.", columns = [], style, ...rest }) {
  return (
    <footer style={{ background: "var(--surface-inverse)", color: "var(--text-on-inverse)", padding: "var(--space-9) var(--page-gutter) var(--space-7)", ...style }} {...rest}>
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gridTemplateColumns: columns.length ? "1fr auto" : "1fr", gap: "var(--space-9)", alignItems: "start" }}>
        <div>
          <Lockup variant="stacked" tone="inverse" size={26} style={{ textAlign: "left", display: "block" }} />
          <p style={{ marginTop: "var(--space-7)", marginBottom: 0, fontSize: "var(--size-body-sm)", letterSpacing: "0.02em", color: "var(--tulle)" }}>
            {email}<span style={{ color: "var(--brass)", margin: "0 .8em" }}>·</span>{handle}<span style={{ color: "var(--brass)", margin: "0 .8em" }}>·</span>{site}
          </p>
          {note ? <p style={{ marginTop: "var(--space-3)", marginBottom: 0, fontSize: "var(--size-body-sm)", color: "var(--sage)" }}>{note}</p> : null}
        </div>
        {columns.length ? (
          <div style={{ display: "flex", gap: "var(--space-9)" }}>
            {columns.map((c) => (
              <div key={c.title} style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                <span style={{ fontFamily: "var(--font-body)", fontWeight: "var(--weight-medium)", fontSize: "var(--size-label)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--brass)" }}>{c.title}</span>
                {c.items.map((i) => (
                  <span key={i} style={{ fontSize: "var(--size-body-sm)", color: "var(--tulle)" }}>{i}</span>
                ))}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </footer>
  );
}
