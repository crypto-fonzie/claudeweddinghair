const DS = window.PolishedAmpPinnedDesignSystem_6a1c01;
const { SiteHeader, SiteFooter, Eyebrow, Rule } = DS;

const NAV = [
  { id: "work", label: "Work" },
  { id: "morning", label: "The morning" },
  { id: "enquire", label: "Enquire" }
];

function Section({ tone = "light", pad = "var(--section-y)", rule = true, children, style }) {
  return (
    <section style={{ background: tone === "ink" ? "var(--surface-inverse)" : tone === "tulle" ? "var(--surface-block)" : "var(--surface-page)", padding: `${pad} var(--page-gutter)`, borderBottom: rule && tone === "light" ? "1px solid var(--line-hairline)" : "none", ...style }}>
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}>{children}</div>
    </section>
  );
}

function PinBullets({ items, columns = 1 }) {
  return (
    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: "14px 44px" }}>
      {items.map((t) => (
        <li key={t} style={{ display: "grid", gridTemplateColumns: "18px 1fr", gap: "10px", alignItems: "start", fontSize: "var(--size-body)", lineHeight: "var(--leading-body)" }}>
          <img src="../../assets/pin-brass.svg" alt="" width="9" height="18" style={{ marginTop: "4px" }} />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

function Page({ current, go, children }) {
  return (
    <div style={{ minHeight: "100%", background: "var(--surface-page)" }}>
      <SiteHeader
        current={current}
        links={NAV}
        onNavigate={go}
      />
      {children}
      <SiteFooter columns={[{ title: "Where we go", items: ["Toronto", "Mississauga & west", "Vaughan & north", "Durham & east"] }]} />
    </div>
  );
}

Object.assign(window, { Section, PinBullets, Page, NAV });
