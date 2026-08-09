import React from "react";

/** A native select, styled square with a brass caret. */
export function Select({ options = [], placeholder, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <div style={{ position: "relative", ...style }}>
      <select
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          width: "100%",
          fontFamily: "var(--font-body)",
          fontWeight: "var(--weight-light)",
          fontSize: "var(--size-body)",
          color: "var(--text-body)",
          background: "transparent",
          border: `1px solid ${focus ? "var(--ink)" : "var(--tortoise-18)"}`,
          borderRadius: "var(--radius)",
          padding: "var(--input-padding-y) 38px var(--input-padding-y) var(--input-padding-x)",
          appearance: "none",
          transition: "border-color var(--motion-hover-duration) var(--motion-hover-ease)"
        }}
        {...rest}
      >
        {placeholder ? <option value="">{placeholder}</option> : null}
        {options.map((o) => {
          const value = typeof o === "string" ? o : o.value;
          const label = typeof o === "string" ? o : o.label;
          return <option key={value} value={value}>{label}</option>;
        })}
      </select>
      <span aria-hidden="true" style={{ position: "absolute", right: "14px", top: "50%", width: "7px", height: "7px", borderRight: "1px solid var(--brass)", borderBottom: "1px solid var(--brass)", transform: "translateY(-70%) rotate(45deg)", pointerEvents: "none" }} />
    </div>
  );
}
