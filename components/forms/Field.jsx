import React from "react";

/** Label, optional hint, the control, and an optional error. Labels sit above, left aligned, always. */
export function Field({ label, hint, error, htmlFor, required = false, children, style, ...rest }) {
  const auto = React.useId();
  const base = htmlFor || auto;
  const hintId = hint ? base + "-hint" : null;
  const errorId = error ? base + "-error" : null;
  const labelId = base + "-label";
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  const control = React.isValidElement(children)
    ? React.cloneElement(children, {
        "aria-describedby": [children.props["aria-describedby"], describedBy].filter(Boolean).join(" ") || undefined,
        ...(error ? { "aria-invalid": true } : null),
        // A group (radiogroup, checkbox set) cannot be targeted by htmlFor, so
        // point it at the label instead.
        ...(!htmlFor && label ? { "aria-labelledby": children.props["aria-labelledby"] || labelId } : null)
      })
    : children;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", ...style }} {...rest}>
      {label ? (
        <label
          id={labelId}
          htmlFor={htmlFor}
          style={{ fontFamily: "var(--font-body)", fontWeight: "var(--weight-medium)", fontSize: "var(--size-label)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--text-label)" }}
        >
          {label}
          {required ? <span aria-hidden="true" style={{ color: "var(--brass)", marginLeft: "0.4em" }}>·</span> : null}
        </label>
      ) : null}
      {hint ? (
        <p id={hintId} style={{ margin: 0, fontSize: "var(--size-caption)", lineHeight: "var(--leading-caption)", color: "var(--text-secondary)", fontWeight: "var(--weight-regular)", maxWidth: "var(--measure)" }}>{hint}</p>
      ) : null}
      {control}
      {error ? (
        <p id={errorId} style={{ margin: 0, fontSize: "var(--size-caption)", lineHeight: "var(--leading-caption)", color: "var(--brass)", fontWeight: "var(--weight-medium)" }}>{error}</p>
      ) : null}
    </div>
  );
}
