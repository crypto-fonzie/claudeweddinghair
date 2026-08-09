import React from "react";

/** Square radio or checkbox tiles — used for the budget band and party size. */
export function ChoiceGroup({ name, options = [], value, defaultValue, multiple = false, columns = 2, onChange, style, ...rest }) {
  const [internal, setInternal] = React.useState(defaultValue ?? (multiple ? [] : ""));
  const current = value !== undefined ? value : internal;
  const isOn = (v) => (multiple ? Array.isArray(current) && current.includes(v) : current === v);

  const pick = (v) => {
    const next = multiple ? (isOn(v) ? current.filter((x) => x !== v) : [...(current || []), v]) : v;
    if (value === undefined) setInternal(next);
    if (onChange) onChange(next);
  };

  return (
    <div role={multiple ? "group" : "radiogroup"} style={{ display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: "1px", background: "var(--tortoise-18)", border: "1px solid var(--tortoise-18)", ...style }} {...rest}>
      {options.map((o) => {
        const v = typeof o === "string" ? o : o.value;
        const label = typeof o === "string" ? o : o.label;
        const note = typeof o === "string" ? null : o.note;
        const on = isOn(v);
        return (
          <label
            key={v}
            className="pp-choice"
            style={{
              background: on ? "var(--ink)" : "var(--surface-page)",
              color: on ? "var(--text-on-inverse)" : "var(--text-body)",
              padding: "16px 18px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              transition: "background-color var(--motion-hover-duration) var(--motion-hover-ease), color var(--motion-hover-duration) var(--motion-hover-ease)"
            }}
          >
            <input
              type={multiple ? "checkbox" : "radio"}
              name={name}
              value={v}
              checked={on}
              onChange={() => pick(v)}
              style={{ position: "absolute", opacity: 0, width: 1, height: 1 }}
            />
            <span style={{ fontSize: "var(--size-body)", fontWeight: "var(--weight-light)" }}>{label}</span>
            {note ? <span style={{ fontSize: "var(--size-caption)", color: on ? "var(--tulle)" : "var(--text-secondary)", fontWeight: "var(--weight-regular)" }}>{note}</span> : null}
          </label>
        );
      })}
    </div>
  );
}
