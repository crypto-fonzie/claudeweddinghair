/* @ds-bundle: {"format":4,"namespace":"PolishedAmpPinnedDesignSystem_6a1c01","components":[{"name":"Lockup","sourcePath":"components/brand/Lockup.jsx"},{"name":"PinMark","sourcePath":"components/brand/PinMark.jsx"},{"name":"PhotoFrame","sourcePath":"components/content/PhotoFrame.jsx"},{"name":"Pillar","sourcePath":"components/content/Pillar.jsx"},{"name":"SectionHead","sourcePath":"components/content/SectionHead.jsx"},{"name":"StepRow","sourcePath":"components/content/StepRow.jsx"},{"name":"Testimonial","sourcePath":"components/content/Testimonial.jsx"},{"name":"Block","sourcePath":"components/core/Block.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"PullQuote","sourcePath":"components/core/PullQuote.jsx"},{"name":"Rule","sourcePath":"components/core/Rule.jsx"},{"name":"ChoiceGroup","sourcePath":"components/forms/ChoiceGroup.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"}],"sourceHashes":{"components/brand/Lockup.jsx":"7db9a5726cab","components/brand/PinMark.jsx":"abee860db39c","components/content/PhotoFrame.jsx":"6986452b8f14","components/content/Pillar.jsx":"2a628cb6bf2d","components/content/SectionHead.jsx":"fa70b447a886","components/content/StepRow.jsx":"6806eba2495f","components/content/Testimonial.jsx":"0403037af91d","components/core/Block.jsx":"8739a37f2e57","components/core/Button.jsx":"2d370f91fb8a","components/core/Eyebrow.jsx":"a32070cd5dcb","components/core/PullQuote.jsx":"1266fca12bc8","components/core/Rule.jsx":"cf08fe161771","components/forms/ChoiceGroup.jsx":"0c70ae2cdd51","components/forms/Field.jsx":"3fcced8018a0","components/forms/Input.jsx":"d351de1d83cb","components/forms/Select.jsx":"0325d7b3db6a","components/navigation/SiteFooter.jsx":"628ad620f3f3","components/navigation/SiteHeader.jsx":"5023f32f412c","ui_kits/partner-deck/Slides.jsx":"ebd5d57ba24d","ui_kits/website/Chrome.jsx":"7204ce3534be","ui_kits/website/Enquire.jsx":"f3d6881451f6","ui_kits/website/Home.jsx":"fb4b7ac9601f","ui_kits/website/Morning.jsx":"884aa3a67a80","ui_kits/website/Work.jsx":"094670787ca9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PolishedAmpPinnedDesignSystem_6a1c01 = window.PolishedAmpPinnedDesignSystem_6a1c01 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/PinMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PATH = "M13 70 L13 31 A7 7 0 0 1 27 31 C27 40 22 43 27 50 C32 57 24 60 27 68";

/** The brass hairpin. One fine line: straight prong, U-bend, wavy prong. */
function PinMark({
  height = 40,
  tone = "brass",
  weight,
  title,
  style,
  ...rest
}) {
  const stroke = {
    brass: "var(--brass)",
    ink: "var(--ink)",
    tortoise: "var(--tortoise)",
    paper: "var(--morning)"
  }[tone] || tone;
  const w = weight || (height >= 60 ? "var(--pin-stroke)" : "var(--pin-stroke-small)");
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 40 78",
    height: height,
    width: height * 40 / 78,
    fill: "none",
    role: title ? "img" : "presentation",
    "aria-hidden": title ? undefined : true,
    style: {
      display: "block",
      flex: "none",
      ...style
    }
  }, rest), title ? /*#__PURE__*/React.createElement("title", null, title) : null, /*#__PURE__*/React.createElement("path", {
    d: PATH,
    stroke: stroke,
    strokeWidth: w,
    strokeLinecap: "round"
  }));
}
Object.assign(__ds_scope, { PinMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PinMark.jsx", error: String((e && e.message) || e) }); }

// components/brand/Lockup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  light: {
    name: "var(--ink)",
    amp: "var(--brass)",
    desc: "var(--tortoise)",
    pin: "brass"
  },
  inverse: {
    name: "var(--morning)",
    amp: "var(--brass)",
    desc: "var(--tulle)",
    pin: "brass"
  },
  photo: {
    name: "#FFFFFF",
    amp: "var(--brass-pale)",
    desc: "rgba(255,255,255,.88)",
    pin: "paper"
  }
};

/** The Polished & Pinned lockup — stacked, horizontal, or name only. */
function Lockup({
  variant = "stacked",
  tone = "light",
  size = 44,
  descriptor = true,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.light;
  const display = {
    fontFamily: "var(--font-display)",
    fontWeight: "var(--weight-regular)",
    lineHeight: 1
  };
  const desc = /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-regular)",
      color: t.desc,
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-descriptor)"
    }
  }, "Bridal Hair"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brass)",
      margin: "0 .6em"
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      letterSpacing: ".01em",
      fontSize: "1.35em"
    }
  }, "by Noelle"));
  if (variant === "horizontal") {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: `${size * 0.5}px`,
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement(__ds_scope.PinMark, {
      height: size * 1.6,
      tone: t.pin
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...display,
        display: "block",
        textTransform: "uppercase",
        letterSpacing: ".26em",
        textIndent: ".26em",
        fontSize: size,
        color: t.name
      }
    }, "Polished ", /*#__PURE__*/React.createElement("i", {
      style: {
        fontStyle: "italic",
        color: t.amp,
        textTransform: "none",
        letterSpacing: 0
      }
    }, "&"), " Pinned"), descriptor ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        marginTop: size * 0.39,
        fontSize: size * 0.35
      }
    }, desc) : null));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-block",
      textAlign: "center",
      ...display,
      textTransform: "uppercase",
      fontSize: size,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      letterSpacing: "var(--tracking-wordmark)",
      textIndent: "var(--tracking-wordmark)",
      color: t.name
    }
  }, "Polished"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontStyle: "italic",
      textTransform: "none",
      color: t.amp,
      letterSpacing: 0,
      textIndent: 0,
      fontSize: size * 0.77,
      margin: ".14em 0"
    }
  }, "&"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      letterSpacing: "var(--tracking-wordmark-wide)",
      textIndent: "var(--tracking-wordmark-wide)",
      color: t.name
    }
  }, "Pinned"), variant === "stacked" && descriptor ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: size * 0.36,
      textTransform: "none",
      fontSize: size * 0.23
    }
  }, desc) : null);
}
Object.assign(__ds_scope, { Lockup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Lockup.jsx", error: String((e && e.message) || e) }); }

// components/content/PhotoFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SHOTS = {
  "back-of-head": "Back of the head — the actual product, sharp, plain background",
  hands: "Hands working — mid-pin, mid-twist; motion blur is fine",
  room: "The room — robes, curtains, mirrors, the mess; no faces needed",
  party: "The party — bridesmaids and family, done and waiting"
};

/** A square-cornered image slot. With no src it states which of the four shot types belongs here. */
function PhotoFrame({
  src,
  alt = "",
  shot = "back-of-head",
  note,
  ratio = "3 / 4",
  caption,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      background: "var(--surface-block)",
      borderRadius: "var(--radius)",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px"
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-regular)",
      fontSize: "11px",
      lineHeight: 1.5,
      letterSpacing: "0.02em",
      color: "var(--text-secondary)",
      textAlign: "left",
      maxWidth: "30ch"
    }
  }, "PHOTO: ", note || SHOTS[shot])), caption ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: "var(--space-3)",
      fontSize: "var(--size-caption)",
      lineHeight: "var(--leading-caption)",
      letterSpacing: "var(--tracking-caption)",
      color: "var(--text-secondary)",
      fontWeight: "var(--weight-regular)"
    }
  }, caption) : null);
}
Object.assign(__ds_scope, { PhotoFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PhotoFrame.jsx", error: String((e && e.message) || e) }); }

// components/content/Pillar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** One of the three message pillars: Early · Yours · Holds. */
function Pillar({
  word,
  fear,
  children,
  tone = "light",
  style,
  ...rest
}) {
  const inverse = tone === "inverse";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: inverse ? "var(--surface-inverse-raised)" : "var(--surface-page)",
      padding: "28px 24px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "34px",
      lineHeight: 1.1,
      margin: "0 0 6px",
      color: inverse ? "var(--brass)" : "var(--text-secondary)"
    }
  }, word), fear ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-medium)",
      fontSize: "11px",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--brass)",
      margin: "0 0 14px"
    }
  }, fear) : null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-body-sm)",
      lineHeight: "var(--leading-body-sm)",
      margin: 0,
      color: inverse ? "var(--text-secondary-on-inverse)" : "var(--text-body)"
    }
  }, children));
}
Object.assign(__ds_scope, { Pillar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Pillar.jsx", error: String((e && e.message) || e) }); }

// components/content/StepRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A row in a sequence — the hair timeline, the enquiry ladder, the nine touchpoints. */
function StepRow({
  when,
  title,
  children,
  tone = "light",
  divider = true,
  style,
  ...rest
}) {
  const inverse = tone === "inverse";
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "pp-stack",
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(140px, 180px) minmax(160px, 220px) 1fr",
      gap: "var(--space-5)",
      alignItems: "start",
      padding: "18px 0",
      borderBottom: divider ? "1px solid var(--line-accent)" : "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-medium)",
      fontSize: "10px",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--brass)",
      paddingTop: "6px"
    }
  }, when), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "20px",
      lineHeight: 1.15,
      color: inverse ? "var(--text-on-inverse)" : "var(--text-secondary)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--size-body-sm)",
      lineHeight: "var(--leading-body-sm)",
      color: inverse ? "var(--text-secondary-on-inverse)" : "var(--text-body)",
      maxWidth: "var(--measure)"
    }
  }, children));
}
Object.assign(__ds_scope, { StepRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StepRow.jsx", error: String((e && e.message) || e) }); }

// components/content/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A bride's words, set in Instrument Serif italic with a plain Karla credit. */
function Testimonial({
  credit,
  tone = "light",
  size = "18px",
  children,
  style,
  ...rest
}) {
  const inverse = tone === "inverse";
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontSize: size,
      lineHeight: "var(--leading-quote)",
      color: inverse ? "var(--text-secondary-on-inverse)" : "var(--text-secondary)"
    }
  }, children), credit ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: "var(--space-5)",
      fontSize: "12px",
      letterSpacing: "0.02em",
      fontWeight: "var(--weight-regular)",
      color: inverse ? "var(--tulle)" : "var(--text-body)"
    }
  }, credit) : null);
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/core/Block.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SURFACES = {
  tulle: {
    background: "var(--surface-block)",
    color: "var(--text-body)"
  },
  morning: {
    background: "var(--surface-page)",
    color: "var(--text-body)"
  },
  ink: {
    background: "var(--surface-inverse)",
    color: "var(--text-on-inverse)"
  },
  raised: {
    background: "var(--surface-inverse-raised)",
    color: "var(--text-on-inverse)"
  },
  outline: {
    background: "transparent",
    color: "var(--text-body)",
    border: "var(--border-hairline)"
  }
};

/** A square block of colour. Depth comes from Tulle against Morning — never from a shadow. */
function Block({
  surface = "tulle",
  padding = "var(--card-padding)",
  as: Tag = "div",
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      borderRadius: "var(--radius)",
      boxShadow: "none",
      padding,
      ...SURFACES[surface],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Block });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Block.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  md: {
    fontSize: "12px",
    padding: "var(--button-padding-y) var(--button-padding-x)"
  },
  sm: {
    fontSize: "11px",
    padding: "var(--button-padding-y-sm) var(--button-padding-x-sm)"
  }
};
const VARIANTS = {
  primary: {
    rest: {
      background: "var(--action-fill)",
      color: "var(--action-text)",
      borderColor: "var(--action-fill)"
    },
    hover: {
      background: "var(--action-fill-hover)",
      borderColor: "var(--action-fill-hover)"
    }
  },
  secondary: {
    rest: {
      background: "transparent",
      color: "var(--ink)",
      borderColor: "var(--action-outline)"
    },
    hover: {
      background: "var(--ink)",
      color: "var(--morning)"
    }
  },
  inverse: {
    rest: {
      background: "var(--morning)",
      color: "var(--ink)",
      borderColor: "var(--morning)"
    },
    hover: {
      background: "var(--tulle)",
      borderColor: "var(--tulle)"
    }
  },
  quiet: {
    rest: {
      background: "transparent",
      color: "var(--tortoise)",
      borderColor: "transparent",
      padding: 0,
      borderBottom: "1px solid var(--tortoise-18)"
    },
    hover: {
      color: "var(--ink)",
      borderBottomColor: "var(--brass)"
    }
  }
};

/** Solid Ink fill, square, uppercase Karla Medium. Secondary is a 1px Ink outline. */
function Button({
  variant = "primary",
  size = "md",
  href,
  disabled = false,
  type = "button",
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const composed = {
    ...BASE,
    ...SIZES[size],
    ...v.rest,
    ...(hover && !disabled ? v.hover : null),
    ...(disabled ? {
      opacity: 0.35,
      cursor: "not-allowed"
    } : null),
    ...style
  };
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: disabled ? undefined : href,
    type: href ? undefined : type,
    disabled: href ? undefined : disabled,
    "aria-disabled": disabled || undefined,
    style: composed,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Karla Medium 10px uppercase at 0.22em — the utility style that stands in for a third typeface. */
function Eyebrow({
  tone = "tortoise",
  as: Tag = "p",
  children,
  style,
  ...rest
}) {
  const color = {
    tortoise: "var(--text-label)",
    brass: "var(--brass)",
    paper: "var(--tulle)"
  }[tone] || tone;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-medium)",
      fontSize: "var(--size-label)",
      lineHeight: "var(--leading-label)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color,
      margin: 0,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHead.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Eyebrow above, Instrument Serif headline below. The opening of every section and slide. */
function SectionHead({
  eyebrow,
  headline,
  lede,
  tone = "light",
  align = "left",
  size = "var(--size-headline)",
  style,
  ...rest
}) {
  const inverse = tone === "inverse";
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: inverse ? "brass" : "tortoise",
    style: {
      marginBottom: "var(--space-5)"
    }
  }, eyebrow) : null, headline ? /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-regular)",
      fontSize: size,
      lineHeight: "var(--leading-headline)",
      letterSpacing: "var(--tracking-headline)",
      color: inverse ? "var(--text-on-inverse)" : "var(--text-display)",
      margin: 0,
      maxWidth: "18ch",
      marginLeft: align === "center" ? "auto" : undefined,
      marginRight: align === "center" ? "auto" : undefined,
      textWrap: "pretty"
    }
  }, headline) : null, lede ? /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-5)",
      marginBottom: 0,
      fontSize: "var(--size-lede)",
      lineHeight: "var(--leading-lede)",
      color: inverse ? "var(--text-secondary-on-inverse)" : "var(--text-body)",
      maxWidth: "var(--measure)"
    }
  }, lede) : null);
}
Object.assign(__ds_scope, { SectionHead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHead.jsx", error: String((e && e.message) || e) }); }

// components/core/PullQuote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Instrument Serif italic on a Tulle field with a 2px Brass keyline. */
function PullQuote({
  attribution,
  tone = "block",
  size = "var(--size-quote)",
  children,
  style,
  ...rest
}) {
  const block = tone === "block";
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      background: block ? "var(--surface-block)" : "transparent",
      borderLeft: block ? "var(--border-quote)" : "none",
      padding: block ? "30px 34px" : 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontSize: size,
      lineHeight: "var(--leading-quote)",
      letterSpacing: "var(--tracking-quote)",
      color: tone === "inverse" ? "var(--text-on-inverse)" : "var(--text-secondary)",
      maxWidth: "var(--measure-display)"
    }
  }, children), attribution ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: "16px",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-regular)",
      fontSize: "11px",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: tone === "inverse" ? "var(--tulle)" : "var(--text-label)"
    }
  }, attribution) : null);
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/core/Rule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The 1px hairline that divides sections. Tortoise at 18%, or Brass where it marks a row. */
function Rule({
  tone = "hairline",
  inset = 0,
  style,
  ...rest
}) {
  const color = {
    hairline: "var(--line-hairline)",
    faint: "var(--line-faint)",
    brass: "var(--line-accent)",
    ink: "var(--line-strong)"
  }[tone] || tone;
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: 0,
      borderTop: `1px solid ${color}`,
      margin: 0,
      marginLeft: inset,
      marginRight: inset,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rule.jsx", error: String((e && e.message) || e) }); }

// components/forms/ChoiceGroup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square radio or checkbox tiles — used for the budget band and party size. */
function ChoiceGroup({
  name,
  options = [],
  value,
  defaultValue,
  multiple = false,
  columns = 2,
  onChange,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (multiple ? [] : ""));
  const current = value !== undefined ? value : internal;
  const isOn = v => multiple ? Array.isArray(current) && current.includes(v) : current === v;
  const pick = v => {
    const next = multiple ? isOn(v) ? current.filter(x => x !== v) : [...(current || []), v] : v;
    if (value === undefined) setInternal(next);
    if (onChange) onChange(next);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: multiple ? "group" : "radiogroup",
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: "1px",
      background: "var(--tortoise-18)",
      border: "1px solid var(--tortoise-18)",
      ...style
    }
  }, rest), options.map(o => {
    const v = typeof o === "string" ? o : o.value;
    const label = typeof o === "string" ? o : o.label;
    const note = typeof o === "string" ? null : o.note;
    const on = isOn(v);
    return /*#__PURE__*/React.createElement("label", {
      key: v,
      className: "pp-choice",
      style: {
        background: on ? "var(--ink)" : "var(--surface-page)",
        color: on ? "var(--text-on-inverse)" : "var(--text-body)",
        padding: "16px 18px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        transition: "background-color var(--motion-hover-duration) var(--motion-hover-ease), color var(--motion-hover-duration) var(--motion-hover-ease)"
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: multiple ? "checkbox" : "radio",
      name: name,
      value: v,
      checked: on,
      onChange: () => pick(v),
      style: {
        position: "absolute",
        opacity: 0,
        width: 1,
        height: 1
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--size-body)",
        fontWeight: "var(--weight-light)"
      }
    }, label), note ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--size-caption)",
        color: on ? "var(--tulle)" : "var(--text-secondary)",
        fontWeight: "var(--weight-regular)"
      }
    }, note) : null);
  }));
}
Object.assign(__ds_scope, { ChoiceGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ChoiceGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Label, optional hint, the control, and an optional error. Labels sit above, left aligned, always. */
function Field({
  label,
  hint,
  error,
  htmlFor,
  required = false,
  children,
  style,
  ...rest
}) {
  const auto = React.useId();
  const base = htmlFor || auto;
  const hintId = hint ? base + "-hint" : null;
  const errorId = error ? base + "-error" : null;
  const labelId = base + "-label";
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;
  const control = React.isValidElement(children) ? React.cloneElement(children, {
    "aria-describedby": [children.props["aria-describedby"], describedBy].filter(Boolean).join(" ") || undefined,
    ...(error ? {
      "aria-invalid": true
    } : null),
    // A group (radiogroup, checkbox set) cannot be targeted by htmlFor, so
    // point it at the label instead.
    ...(!htmlFor && label ? {
      "aria-labelledby": children.props["aria-labelledby"] || labelId
    } : null)
  }) : children;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("label", {
    id: labelId,
    htmlFor: htmlFor,
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-medium)",
      fontSize: "var(--size-label)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-label)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: "var(--brass)",
      marginLeft: "0.4em"
    }
  }, "\xB7") : null) : null, hint ? /*#__PURE__*/React.createElement("p", {
    id: hintId,
    style: {
      margin: 0,
      fontSize: "var(--size-caption)",
      lineHeight: "var(--leading-caption)",
      color: "var(--text-secondary)",
      fontWeight: "var(--weight-regular)",
      maxWidth: "var(--measure)"
    }
  }, hint) : null, control, error ? /*#__PURE__*/React.createElement("p", {
    id: errorId,
    style: {
      margin: 0,
      fontSize: "var(--size-caption)",
      lineHeight: "var(--leading-caption)",
      color: "var(--brass)",
      fontWeight: "var(--weight-medium)"
    }
  }, error) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CONTROL = {
  width: "100%",
  fontFamily: "var(--font-body)",
  fontWeight: "var(--weight-light)",
  fontSize: "var(--size-body)",
  lineHeight: 1.5,
  color: "var(--text-body)",
  background: "transparent",
  border: "1px solid var(--tortoise-18)",
  borderRadius: "var(--radius)",
  padding: "var(--input-padding-y) var(--input-padding-x)",
  transition: "border-color var(--motion-hover-duration) var(--motion-hover-ease)",
  appearance: "none"
};

/** A single-line text input. Square, hairline border, no fill. */
function Input({
  multiline = false,
  rows = 5,
  invalid = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const s = {
    ...CONTROL,
    borderColor: invalid ? "var(--tortoise)" : focus ? "var(--ink)" : "var(--tortoise-18)",
    ...(multiline ? {
      resize: "vertical",
      minHeight: `${rows * 24}px`,
      lineHeight: "var(--leading-body)"
    } : null),
    ...style
  };
  const Tag = multiline ? "textarea" : "input";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    rows: multiline ? rows : undefined,
    style: s,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    "aria-invalid": invalid || undefined
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A native select, styled square with a brass caret. */
function Select({
  options = [],
  placeholder,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
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
    }
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => {
    const value = typeof o === "string" ? o : o.value;
    const label = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: "14px",
      top: "50%",
      width: "7px",
      height: "7px",
      borderRight: "1px solid var(--brass)",
      borderBottom: "1px solid var(--brass)",
      transform: "translateY(-70%) rotate(45deg)",
      pointerEvents: "none"
    }
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The site footer — stacked lockup on Ink, contact line, service note. */
function SiteFooter({
  email = "hello@polishedandpinned.ca",
  handle = "@polishedandpinnedbridal",
  site = "polishedandpinned.ca",
  note = "Happy to walk a venue, meet the team, or be on standby for a date you're holding.",
  columns = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: "var(--surface-inverse)",
      color: "var(--text-on-inverse)",
      padding: "var(--space-9) var(--page-gutter) var(--space-7)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: columns.length ? "1fr auto" : "1fr",
      gap: "var(--space-9)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Lockup, {
    variant: "stacked",
    tone: "inverse",
    size: 26,
    style: {
      textAlign: "left",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-7)",
      marginBottom: 0,
      fontSize: "var(--size-body-sm)",
      letterSpacing: "0.02em",
      color: "var(--tulle)"
    }
  }, email, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brass)",
      margin: "0 .8em"
    }
  }, "\xB7"), handle, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brass)",
      margin: "0 .8em"
    }
  }, "\xB7"), site), note ? /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-3)",
      marginBottom: 0,
      fontSize: "var(--size-body-sm)",
      color: "var(--sage)"
    }
  }, note) : null), columns.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-9)"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-medium)",
      fontSize: "var(--size-label)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--brass)"
    }
  }, c.title), c.items.map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontSize: "var(--size-body-sm)",
      color: "var(--tulle)"
    }
  }, i))))) : null));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The site header — horizontal lockup left, plain Karla links right. */
function SiteHeader({
  links = [],
  action,
  current,
  tone = "light",
  onNavigate,
  style,
  ...rest
}) {
  const inverse = tone === "inverse";
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-7)",
      padding: "var(--space-6) var(--page-gutter)",
      borderBottom: `1px solid ${inverse ? "rgba(239,237,231,.16)" : "var(--line-hairline)"}`,
      background: inverse ? "var(--surface-inverse)" : "var(--surface-page)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate("home");
      }
    },
    style: {
      border: 0,
      textDecoration: "none",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Lockup, {
    variant: "horizontal",
    tone: inverse ? "inverse" : "light",
    size: 17
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-7)"
    }
  }, links.map(l => {
    const active = current === l.id;
    return /*#__PURE__*/React.createElement("a", {
      key: l.id,
      href: l.href || "#",
      onClick: e => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate(l.id);
        }
      },
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: "var(--weight-medium)",
        fontSize: "10px",
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color: active ? inverse ? "var(--morning)" : "var(--ink)" : inverse ? "var(--tulle)" : "var(--text-secondary)",
        borderBottom: `1px solid ${active ? "var(--brass)" : "transparent"}`,
        paddingBottom: "4px",
        textDecoration: "none"
      }
    }, l.label);
  }), action));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/partner-deck/Slides.jsx
try { (() => {
/* Partner deck slide types, recreated 1:1 from partner-deck.pptx (12192000×6858000 EMU → 1280×720 px). */
const DSS = window.PolishedAmpPinnedDesignSystem_6a1c01;
const M = 82; /* 777240 EMU left/top margin */

function Frame({
  tone = "light",
  page,
  footer = true,
  children
}) {
  const ink = tone === "ink";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "1280px",
      height: "720px",
      overflow: "hidden",
      background: ink ? "var(--surface-inverse)" : "var(--surface-page)",
      color: ink ? "var(--text-on-inverse)" : "var(--text-body)",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-light)"
    }
  }, children, footer ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: M,
      top: 660,
      fontSize: "12px",
      letterSpacing: "0.22em",
      color: "var(--tortoise)",
      fontWeight: "var(--weight-regular)"
    }
  }, "Polished & Pinned"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: M,
      top: 656,
      fontFamily: "var(--font-display)",
      fontSize: "15px",
      color: "var(--brass)"
    }
  }, page)) : null);
}
function SlideEyebrow({
  tone = "light",
  children
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      position: "absolute",
      left: M,
      top: M,
      margin: 0,
      fontSize: "13px",
      letterSpacing: "0.3em",
      textTransform: "uppercase",
      fontWeight: "var(--weight-medium)",
      color: tone === "ink" ? "var(--brass)" : "var(--tortoise)"
    }
  }, children);
}
function SlideHeadline({
  tone = "light",
  size = 51,
  width = 810,
  children
}) {
  return /*#__PURE__*/React.createElement("h1", {
    style: {
      position: "absolute",
      left: M,
      top: 125,
      margin: 0,
      width,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-regular)",
      fontSize: `${size}px`,
      lineHeight: 1.1,
      letterSpacing: "-0.012em",
      color: tone === "ink" ? "var(--text-on-inverse)" : "var(--text-display)"
    }
  }, children);
}

/* 01 — Cover. Ink, pin above a left-aligned stacked wordmark. */
function CoverSlide() {
  return /*#__PURE__*/React.createElement(Frame, {
    tone: "ink",
    footer: false
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/pin-brass.svg",
    alt: "",
    height: "182",
    style: {
      position: "absolute",
      left: M,
      top: 144
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: M,
      top: 328,
      fontFamily: "var(--font-display)",
      fontSize: "72px",
      lineHeight: 1,
      letterSpacing: "0.222em",
      color: "var(--morning)",
      textTransform: "uppercase"
    }
  }, "Polished"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: M,
      top: 420,
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontSize: "53px",
      lineHeight: 1,
      color: "var(--brass)"
    }
  }, "&"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: M,
      top: 490,
      fontFamily: "var(--font-display)",
      fontSize: "72px",
      lineHeight: 1,
      letterSpacing: "0.444em",
      color: "var(--morning)",
      textTransform: "uppercase"
    }
  }, "Pinned"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: M,
      top: 588,
      fontSize: "14.5px",
      letterSpacing: "0.28em",
      color: "var(--tulle)",
      fontWeight: "var(--weight-regular)"
    }
  }, "BRIDAL HAIR\xA0 \xB7\xA0 BY NOELLE"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: M,
      top: 585,
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontSize: "20px",
      color: "var(--brass)"
    }
  }, "Partnership \xB7 Venues & Planners"));
}

/* 02 — Statement with a Tulle side panel. */
function StatementSlide() {
  return /*#__PURE__*/React.createElement(Frame, {
    page: "2"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 797,
      top: 130,
      width: 398,
      height: 422,
      background: "var(--surface-block)"
    }
  }), /*#__PURE__*/React.createElement(SlideEyebrow, null, "Why we\u2019re writing"), /*#__PURE__*/React.createElement(SlideHeadline, {
    size: 48,
    width: 790
  }, "You don\u2019t have a hair problem.", /*#__PURE__*/React.createElement("br", null), "You have a timeline problem."), /*#__PURE__*/React.createElement("p", {
    style: {
      position: "absolute",
      left: M,
      top: 322,
      width: 624,
      margin: 0,
      fontSize: "18px",
      lineHeight: 1.6
    }
  }, "Every planner and venue coordinator in the GTA has had the same morning. The hair runs long. Photographs get pushed. The ceremony starts late. And the person who has to manage the room, the client and the schedule is you \u2014 not the stylist who created it."), /*#__PURE__*/React.createElement("p", {
    style: {
      position: "absolute",
      left: M,
      top: 494,
      width: 624,
      margin: 0,
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontSize: "29px",
      lineHeight: 1.3,
      color: "var(--tortoise)"
    }
  }, "We built this business around that one problem."), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/pin-brass.svg",
    alt: "",
    height: "96",
    style: {
      position: "absolute",
      left: 840,
      top: 178
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      position: "absolute",
      left: 840,
      top: 298,
      width: 317,
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "27px",
      lineHeight: 1.25,
      color: "var(--ink)"
    }
  }, "The morning is the only part of a wedding day that has no slack in it."), /*#__PURE__*/React.createElement("p", {
    style: {
      position: "absolute",
      left: 840,
      top: 456,
      width: 317,
      margin: 0,
      fontSize: "16px",
      lineHeight: 1.5,
      color: "var(--tortoise)"
    }
  }, "Everything after it inherits the delay."));
}

/* 04 — Three pillars, raised panels on Ink. */
function PillarsSlide() {
  const {
    Pillar
  } = DSS;
  const items = [["Early", "Arrival ahead of call time, every wedding. The hair timeline is written and shared with you weeks in advance — not decided in the room."], ["Yours", "The bride still looks like herself. No surprises in the mirror, no renegotiation at 8am while you&rsquo;re waiting."], ["Holds", "Pinned properly, checked before we leave, and a touch-up kit left with the bride for the rest of the day."]];
  return /*#__PURE__*/React.createElement(Frame, {
    tone: "ink",
    page: "4"
  }, /*#__PURE__*/React.createElement(SlideEyebrow, {
    tone: "ink"
  }, "What we promise"), /*#__PURE__*/React.createElement(SlideHeadline, {
    tone: "ink"
  }, "Three things, in this order."), items.map(([word, body], i) => /*#__PURE__*/React.createElement("div", {
    key: word,
    style: {
      position: "absolute",
      left: M + i * 371.5,
      top: 264,
      width: 336,
      height: 293,
      background: "var(--surface-inverse-raised)",
      padding: "29px 38px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 18px",
      fontFamily: "var(--font-display)",
      fontSize: "45px",
      lineHeight: 1,
      color: "var(--brass)"
    }
  }, word), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "16px",
      lineHeight: 1.55,
      color: "var(--tulle)"
    },
    dangerouslySetInnerHTML: {
      __html: body
    }
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      position: "absolute",
      left: M,
      top: 595,
      width: 1000,
      margin: 0,
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontSize: "23px",
      color: "var(--morning)"
    }
  }, "Early is the one that matters to you. The other two are why the bride booked us."));
}

/* 05 — The timeline, brass-ruled rows. */
function TimelineSlide() {
  const rows = [["6 weeks out", "Timeline built", "Hair running order written from your day-sheet and sent to you and the bride. Any conflict with photography or transport gets found here, not on the day."], ["The week of", "Confirmed", "Final party numbers, room access, parking and load-in confirmed in writing."], ["Morning, −30 min", "On site", "We arrive ahead of the agreed start. Set up is quiet and takes one corner of the room."], ["Morning", "Working", "Party first, bride second to last, so she&rsquo;s finished close to the photographs with time in hand. Veil fitted and tested before we leave."], ["Hand off", "Clear", "Room tidied, touch-up kit left with the bride, and we tell you we&rsquo;re done."]];
  return /*#__PURE__*/React.createElement(Frame, {
    page: "5"
  }, /*#__PURE__*/React.createElement(SlideEyebrow, null, "How a morning runs"), /*#__PURE__*/React.createElement(SlideHeadline, {
    width: 870
  }, "You get the schedule before we do."), rows.map(([when, title, body], i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: when
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: M,
      top: 253 + i * 83.5,
      fontSize: "12.5px",
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      fontWeight: "var(--weight-medium)",
      color: "var(--brass)"
    }
  }, when), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 273,
      top: 245 + i * 83.5,
      width: 220,
      fontFamily: "var(--font-display)",
      fontSize: "25px",
      lineHeight: 1.1,
      color: "var(--tortoise)"
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 499,
      top: 249 + i * 83.5,
      width: 672,
      fontSize: "15.5px",
      lineHeight: 1.5
    },
    dangerouslySetInnerHTML: {
      __html: body
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: M,
      top: 324 + i * 83.5,
      width: 1090,
      borderTop: "1px solid var(--brass)"
    }
  }))));
}

/* 06 — What you get / what we ask. */
function TwoColumnSlide() {
  const left = ["A named contact — Noelle, directly, not a booking inbox", "A reply to any enquiry within one working day", "A written commitment never to overrun the allotted slot"];
  const right = ["A recommendation when a bride asks about hair — a name, not a list", "An introduction to the couple, or a word to the planner beside you", "The day-sheet six weeks out, so the timeline is real", "And nothing else. No commission, no exclusivity, no fee"];
  const List = ({
    items
  }) => /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "grid",
      gap: "13px"
    }
  }, items.map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: "grid",
      gridTemplateColumns: "16px 1fr",
      gap: "12px",
      alignItems: "start",
      fontSize: "16px",
      lineHeight: 1.45
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/pin-brass.svg",
    alt: "",
    height: "16",
    style: {
      marginTop: "4px"
    }
  }), /*#__PURE__*/React.createElement("span", null, t))));
  return /*#__PURE__*/React.createElement(Frame, {
    page: "6"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: M,
      top: 245,
      width: 538,
      height: 341,
      background: "var(--surface-block)"
    }
  }), /*#__PURE__*/React.createElement(SlideEyebrow, null, "Working together"), /*#__PURE__*/React.createElement(SlideHeadline, null, "What you get. What we ask."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 125,
      top: 278,
      width: 456
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 24px",
      fontFamily: "var(--font-display)",
      fontSize: "31px"
    }
  }, "What you get"), /*#__PURE__*/React.createElement(List, {
    items: left
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 710,
      top: 278,
      width: 446
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 24px",
      fontFamily: "var(--font-display)",
      fontSize: "31px"
    }
  }, "What we ask"), /*#__PURE__*/React.createElement(List, {
    items: right
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      position: "absolute",
      left: M,
      top: 609,
      width: 1095,
      margin: 0,
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontSize: "23px",
      color: "var(--tortoise)"
    }
  }, "We don\u2019t pay for referrals. A recommendation that was bought isn\u2019t worth having \u2014 yours or ours."));
}

/* 08 — The work, three photo slots. */
function PhotoGridSlide() {
  const shots = ["back-of-head, sharp, plain background", "hands working, mid-pin", "the party — bridesmaids and family, done and waiting"];
  return /*#__PURE__*/React.createElement(Frame, {
    page: "8"
  }, /*#__PURE__*/React.createElement(SlideEyebrow, null, "The work"), /*#__PURE__*/React.createElement(SlideHeadline, {
    size: 46,
    width: 912
  }, "Photographed from behind, in the room, as we go."), shots.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "absolute",
      left: M + i * 369.6,
      top: 259,
      width: 346,
      height: 302,
      background: "var(--surface-block)",
      padding: "24px",
      display: "flex",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      lineHeight: 1.5,
      color: "var(--tortoise)",
      fontWeight: "var(--weight-regular)"
    }
  }, "PHOTO: ", s))), /*#__PURE__*/React.createElement("p", {
    style: {
      position: "absolute",
      left: M,
      top: 590,
      width: 1095,
      margin: 0,
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontSize: "24px",
      color: "var(--tortoise)"
    }
  }, "The back of the head is the product. That is what we photograph, in the light of the room we worked in."));
}

/* 09 — Three testimonials. */
function TestimonialsSlide() {
  const {
    Testimonial
  } = DSS;
  return /*#__PURE__*/React.createElement(Frame, {
    page: "9"
  }, /*#__PURE__*/React.createElement(SlideEyebrow, null, "What brides say"), /*#__PURE__*/React.createElement(SlideHeadline, null, "The word we\u2019re aiming for is calm."), [0, 1, 2].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "absolute",
      left: 115 + i * 371.5,
      top: 293,
      width: 269
    }
  }, /*#__PURE__*/React.createElement(Testimonial, {
    size: "20px",
    credit: "Bride, venue, year"
  }, "\u201C Testimonial \u2014 pull a quote that mentions timing, calm, or feeling like herself. \u201D"))), /*#__PURE__*/React.createElement("p", {
    style: {
      position: "absolute",
      left: M,
      top: 561,
      width: 1095,
      margin: 0,
      fontSize: "16px",
      color: "var(--tortoise)"
    }
  }, "Choose reviews that praise the morning, not the hairstyle. A planner is listening for reliability."));
}

/* 10 — Closing. */
function ClosingSlide() {
  return /*#__PURE__*/React.createElement(Frame, {
    tone: "ink",
    footer: false
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/pin-brass.svg",
    alt: "",
    height: "144",
    style: {
      position: "absolute",
      left: M,
      top: 110
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      position: "absolute",
      left: M,
      top: 272,
      width: 816,
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-regular)",
      fontSize: "61px",
      lineHeight: 1.05,
      letterSpacing: "-0.015em",
      color: "var(--morning)"
    }
  }, "We\u2019re set up before", /*#__PURE__*/React.createElement("br", null), "your call time."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: M,
      top: 480,
      width: 403,
      borderTop: "1px solid var(--brass)"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      position: "absolute",
      left: M,
      top: 504,
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "27px",
      color: "var(--brass)"
    }
  }, "Noelle \xB7 Polished & Pinned"), /*#__PURE__*/React.createElement("p", {
    style: {
      position: "absolute",
      left: M,
      top: 557,
      margin: 0,
      fontSize: "15.5px",
      letterSpacing: "0.02em",
      color: "var(--tulle)"
    }
  }, "hello@polishedandpinned.ca\xA0\xA0 \xB7\xA0\xA0 @polishedandpinnedbridal\xA0\xA0 \xB7\xA0\xA0 polishedandpinned.ca"), /*#__PURE__*/React.createElement("p", {
    style: {
      position: "absolute",
      left: M,
      top: 610,
      margin: 0,
      fontSize: "15.5px",
      color: "var(--sage)"
    }
  }, "Happy to walk a venue, meet the team, or be on standby for a date you\u2019re holding."));
}
Object.assign(window, {
  Frame,
  CoverSlide,
  StatementSlide,
  PillarsSlide,
  TimelineSlide,
  TwoColumnSlide,
  PhotoGridSlide,
  TestimonialsSlide,
  ClosingSlide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/partner-deck/Slides.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const DS = window.PolishedAmpPinnedDesignSystem_6a1c01;
const {
  SiteHeader,
  SiteFooter,
  Eyebrow,
  Rule
} = DS;
const NAV = [{
  id: "work",
  label: "Work"
}, {
  id: "morning",
  label: "The morning"
}, {
  id: "enquire",
  label: "Enquire"
}];
function Section({
  tone = "light",
  pad = "var(--section-y)",
  rule = true,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: tone === "ink" ? "var(--surface-inverse)" : tone === "tulle" ? "var(--surface-block)" : "var(--surface-page)",
      padding: `${pad} var(--page-gutter)`,
      borderBottom: rule && tone === "light" ? "1px solid var(--line-hairline)" : "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, children));
}
function PinBullets({
  items,
  columns = 1
}) {
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "grid",
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: "14px 44px"
    }
  }, items.map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: "grid",
      gridTemplateColumns: "18px 1fr",
      gap: "10px",
      alignItems: "start",
      fontSize: "var(--size-body)",
      lineHeight: "var(--leading-body)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/pin-brass.svg",
    alt: "",
    width: "9",
    height: "18",
    style: {
      marginTop: "4px"
    }
  }), /*#__PURE__*/React.createElement("span", null, t))));
}
function Page({
  current,
  go,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100%",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    current: current,
    links: NAV,
    onNavigate: go
  }), children, /*#__PURE__*/React.createElement(SiteFooter, {
    columns: [{
      title: "Where we go",
      items: ["Toronto", "Mississauga & west", "Vaughan & north", "Durham & east"]
    }]
  }));
}
Object.assign(window, {
  Section,
  PinBullets,
  Page,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Enquire.jsx
try { (() => {
const DSe = window.PolishedAmpPinnedDesignSystem_6a1c01;
function Enquire({
  go
}) {
  const {
    SectionHead,
    Field,
    Input,
    Select,
    ChoiceGroup,
    Button,
    Block,
    PullQuote,
    Eyebrow
  } = DSe;
  const [sent, setSent] = React.useState(false);
  const [band, setBand] = React.useState("");
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    date: "",
    location: "",
    party: "",
    notes: ""
  });
  const set = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  const doneRef = React.useRef(null);
  React.useEffect(() => {
    if (sent && doneRef.current) doneRef.current.focus();
  }, [sent]);
  if (sent) {
    return /*#__PURE__*/React.createElement(window.Page, {
      current: "enquire",
      go: go
    }, /*#__PURE__*/React.createElement(window.Section, {
      rule: false,
      style: {
        paddingTop: "var(--space-10)",
        paddingBottom: "var(--space-10)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      role: "status",
      "aria-live": "polite"
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      style: {
        marginBottom: "var(--space-5)"
      }
    }, "Enquiry received"), /*#__PURE__*/React.createElement("h1", {
      className: "pp-headline",
      ref: doneRef,
      tabIndex: -1,
      style: {
        maxWidth: "16ch",
        outlineOffset: "4px"
      }
    }, "Thank you. You\u2019ll hear back within one working day."), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: "var(--space-6)",
        maxWidth: "52ch"
      }
    }, "We\u2019ll check ", form.date ? form.date : "your date", " against the calendar and come back with a real number and the shape of the morning \u2014 not a price list.")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "var(--space-7)",
        display: "flex",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => go("work")
    }, "See recent work"), /*#__PURE__*/React.createElement(Button, {
      variant: "quiet",
      onClick: () => {
        setSent(false);
      }
    }, "Send another"))));
  }
  return /*#__PURE__*/React.createElement(window.Page, {
    current: "enquire",
    go: go
  }, /*#__PURE__*/React.createElement(window.Section, null, /*#__PURE__*/React.createElement("div", {
    className: "pp-stack",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.25fr",
      gap: "var(--space-9)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Enquire",
    headline: "Tell us about the morning.",
    size: "34px"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, "There\u2019s no price list here on purpose. Every morning is a different length, a different party and a different drive, so a published number would be wrong for most of you."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-4)"
    }
  }, "Fill this in and we\u2019ll come back within one working day with a real figure and the shape of your morning."), /*#__PURE__*/React.createElement(Block, {
    padding: "24px 26px",
    style: {
      marginTop: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(PullQuote, {
    tone: "plain",
    size: "19px"
  }, "We\u2019re set up before your call time."))), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pp-stack",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Your name",
    htmlFor: "f-name",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    id: "f-name",
    name: "name",
    autoComplete: "name",
    value: form.name,
    onChange: set("name"),
    required: true
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    htmlFor: "f-email",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    id: "f-email",
    name: "email",
    type: "email",
    inputMode: "email",
    autoComplete: "email",
    spellCheck: false,
    placeholder: "you@example.com",
    value: form.email,
    onChange: set("email"),
    required: true
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Wedding date",
    htmlFor: "f-date",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    id: "f-date",
    name: "wedding-date",
    type: "date",
    autoComplete: "off",
    value: form.date,
    onChange: set("date"),
    required: true
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Party size",
    htmlFor: "f-party"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "f-party",
    name: "party-size",
    placeholder: "How many heads?",
    value: form.party,
    onChange: set("party"),
    options: ["Just me", "Two to four", "Five to eight", "More than eight"]
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Getting-ready location",
    htmlFor: "f-loc",
    hint: "A suite, a house, or the venue. An address or a neighbourhood is fine."
  }, /*#__PURE__*/React.createElement(Input, {
    id: "f-loc",
    name: "location",
    autoComplete: "street-address",
    value: form.location,
    onChange: set("location")
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Budget band",
    hint: "A range, not a commitment. It tells us which shape of morning to quote."
  }, /*#__PURE__*/React.createElement(ChoiceGroup, {
    name: "budget",
    columns: 4,
    value: band,
    onChange: setBand,
    options: [{
      value: "a",
      label: "Under $800"
    }, {
      value: "b",
      label: "$800 – $1,400"
    }, {
      value: "c",
      label: "$1,400 – $2,200"
    }, {
      value: "d",
      label: "Still working it out",
      note: "Perfectly fine"
    }]
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Anything else",
    htmlFor: "f-notes",
    hint: "Fine hair, an early start, a venue we should know about, a mother of the bride who\u2019d like her hair done too."
  }, /*#__PURE__*/React.createElement(Input, {
    id: "f-notes",
    name: "notes",
    multiline: true,
    rows: 4,
    value: form.notes,
    onChange: set("notes")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit"
  }, "Send the enquiry"), /*#__PURE__*/React.createElement("span", {
    className: "pp-caption"
  }, "We reply within one working day."))))));
}
Object.assign(window, {
  Enquire
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Enquire.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const DSh = window.PolishedAmpPinnedDesignSystem_6a1c01;
function Home({
  go
}) {
  const {
    Button,
    Eyebrow,
    SectionHead,
    PhotoFrame,
    StepRow,
    PullQuote,
    Rule
  } = DSh;
  return /*#__PURE__*/React.createElement(window.Page, {
    current: "home",
    go: go
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "var(--surface-block)",
      minHeight: "460px",
      display: "flex",
      alignItems: "center",
      padding: "var(--space-9) var(--page-gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pp-stack",
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      width: "100%",
      display: "grid",
      gridTemplateColumns: "1fr 0.8fr",
      gap: "var(--space-9)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "pp-hero pp-rise",
    style: {
      margin: 0,
      maxWidth: "18ch",
      textWrap: "balance"
    }
  }, "We\u2019re there before anyone else is."), /*#__PURE__*/React.createElement("p", {
    className: "pp-lede pp-rise",
    style: {
      marginTop: "var(--space-6)",
      maxWidth: "44ch",
      textWrap: "pretty",
      animationDelay: "80ms"
    }
  }, "Mobile bridal hair across the GTA. Hair only, on location, one wedding a day."), /*#__PURE__*/React.createElement("div", {
    className: "pp-rise",
    style: {
      marginTop: "var(--space-7)",
      display: "flex",
      gap: "var(--space-3)",
      animationDelay: "160ms"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go("enquire")
  }, "Start an enquiry"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go("work")
  }, "See recent work"))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/walking-out-back.jpg",
    alt: "Bride walking away across grass with the flower girl, braided low updo pinned at the nape",
    width: "750",
    height: "938",
    style: {
      display: "block",
      width: "100%",
      height: "auto",
      aspectRatio: "4 / 5",
      objectFit: "cover"
    }
  }))), /*#__PURE__*/React.createElement(window.Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "flex-end",
      gap: "var(--space-7)",
      marginBottom: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#work",
    onClick: e => {
      e.preventDefault();
      go("work");
    },
    style: {
      fontSize: "12px"
    }
  }, "All of it")), /*#__PURE__*/React.createElement("div", {
    className: "pp-stack",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--stack-gap)"
    }
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    src: "../../assets/photos/chignon-low-back.jpg",
    alt: "Low chignon pinned at the nape, seen from behind",
    ratio: "4 / 5",
    caption: "Low chignon, pinned at the nape \xB7 Kortright, June"
  }), /*#__PURE__*/React.createElement(PhotoFrame, {
    src: "../../assets/photos/hands-working-bw.jpg",
    alt: "Noelle sectioning a bride\u2019s hair mid-set",
    ratio: "4 / 5",
    caption: "Trial, natural light \xB7 Leslieville"
  }), /*#__PURE__*/React.createElement(PhotoFrame, {
    src: "../../assets/photos/party-done-waiting.jpg",
    alt: "Bride and her party finished and waiting in the getting-ready room",
    ratio: "4 / 5",
    caption: "The party, done and waiting \xB7 Niagara"
  }))), /*#__PURE__*/React.createElement(window.Section, null, /*#__PURE__*/React.createElement("div", {
    className: "pp-stack",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.15fr",
      gap: "var(--space-9)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "What the morning includes",
    headline: "A morning that runs on time.",
    size: "34px"
  }), /*#__PURE__*/React.createElement(window.PinBullets, {
    items: ["A trial, treated as a proper appointment rather than an audition", "A written hair timeline, shared with you and your planner", "Hair for you and your party, on that schedule", "Veil and accessory fitting, pinned and tested before we leave", "A touch-up kit left behind — pins, spray, a spare comb", "Care and prep instructions in the week before"]
  }))), /*#__PURE__*/React.createElement(window.Section, {
    tone: "tulle",
    rule: false
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "How it goes",
    headline: "Three steps, and you know the timing after the first one.",
    size: "34px",
    style: {
      marginBottom: "var(--space-7)"
    }
  }), /*#__PURE__*/React.createElement(StepRow, {
    when: "First",
    title: "The consultation"
  }, "A call or a coffee. We check the date, the location and the party size, and you get a real number before anything is booked."), /*#__PURE__*/React.createElement(StepRow, {
    when: "Then",
    title: "The trial"
  }, "Two hours, booked as its own appointment. We find the version of your reference photo that works on your hair, and photograph it from the back."), /*#__PURE__*/React.createElement(StepRow, {
    when: "The day",
    title: "The morning",
    divider: false
  }, "We arrive ahead of call time with the running order already written. Party first, you second to last, finished before the photographer needs you.")), /*#__PURE__*/React.createElement(window.Section, null, /*#__PURE__*/React.createElement("div", {
    className: "pp-stack",
    style: {
      display: "grid",
      gridTemplateColumns: ".75fr 1fr",
      gap: "var(--space-9)",
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    src: "../../assets/photos/rollers-in-the-room.jpg",
    alt: "Setting rollers through long dark hair before the pin-up",
    ratio: "4 / 5"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHead, {
    headline: "I\u2019m Noelle.",
    size: "44px",
    style: {
      marginBottom: "var(--space-6)"
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "pp-lede",
    style: {
      margin: "0 0 var(--space-5)",
      maxWidth: "56ch",
      textWrap: "pretty"
    }
  }, "I do the hair, and I do it myself. One wedding a day, hair only, in your room."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 var(--space-7)",
      maxWidth: "56ch",
      textWrap: "pretty"
    }
  }, "You\u2019ll have the running order six weeks out and I\u2019ll be set up before your call time. If something won\u2019t hold on your hair, you\u2019ll hear it at the trial rather than on the morning."), /*#__PURE__*/React.createElement("a", {
    href: "#morning",
    onClick: e => {
      e.preventDefault();
      go("morning");
    },
    style: {
      fontSize: "12px"
    }
  }, "How the morning works")))), /*#__PURE__*/React.createElement(window.Section, null, /*#__PURE__*/React.createElement(SectionHead, {
    headline: "Across the GTA.",
    size: "34px",
    style: {
      marginBottom: "var(--space-6)"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "50ch",
      fontFamily: "var(--font-display)",
      fontSize: "23px",
      lineHeight: 1.5,
      textWrap: "pretty",
      color: "var(--text-secondary)"
    }
  }, "Toronto and the inner suburbs: North York, Etobicoke, Scarborough, East York. West through Mississauga, Oakville, Burlington and Brampton. North to Vaughan, Markham, Richmond Hill, Aurora and Newmarket. East to Pickering, Ajax, Whitby and Oshawa. Niagara, Muskoka and Prince Edward County by arrangement."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-7) 0 0",
      maxWidth: "56ch",
      fontSize: "var(--size-body-sm)",
      lineHeight: "var(--leading-body-sm)",
      textWrap: "pretty"
    }
  }, "Travel is quoted per wedding. Beyond ninety minutes we stay the night before, so the arrival time holds whatever the traffic does.")), /*#__PURE__*/React.createElement(window.Section, {
    rule: false,
    style: {
      paddingBottom: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pp-stack",
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      gap: "var(--space-9)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(PullQuote, {
    attribution: "Noelle"
  }, "The timeline goes out six weeks ahead. You\u2019ll know the shape of the morning before we do."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: "var(--space-6)"
    }
  }, "There is no price list. Every morning is a different length, a different party and a different drive, so we talk first and give you a real number on the call."), /*#__PURE__*/React.createElement(Button, {
    onClick: () => go("enquire")
  }, "Start an enquiry")))));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Morning.jsx
try { (() => {
const DSm = window.PolishedAmpPinnedDesignSystem_6a1c01;
function Morning({
  go
}) {
  const {
    SectionHead,
    Pillar,
    Block,
    PullQuote,
    Button,
    PhotoFrame,
    Eyebrow
  } = DSm;
  return /*#__PURE__*/React.createElement(window.Page, {
    current: "morning",
    go: go
  }, /*#__PURE__*/React.createElement(window.Section, null, /*#__PURE__*/React.createElement(SectionHead, {
    headline: "We take over the getting-ready room.",
    size: "40px",
    lede: "Not the ceremony \u2014 the four unhurried hours before it. The timeline, the running order, the veil, and the room handed back tidy."
  })), /*#__PURE__*/React.createElement(window.Section, {
    tone: "ink",
    rule: false
  }, /*#__PURE__*/React.createElement(SectionHead, {
    tone: "inverse",
    headline: "Three things, in this order.",
    size: "34px",
    style: {
      marginBottom: "var(--space-7)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "pp-stack",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "2px",
      background: "rgba(239,237,231,.14)",
      border: "1px solid rgba(239,237,231,.14)"
    }
  }, /*#__PURE__*/React.createElement(Pillar, {
    tone: "inverse",
    word: "Early",
    fear: "Will she actually show up?"
  }, "Arrival ahead of call time, every wedding. The timeline is written and shared weeks in advance \u2014 not decided in the room."), /*#__PURE__*/React.createElement(Pillar, {
    tone: "inverse",
    word: "Yours",
    fear: "Will I look like myself?"
  }, "The reference photo is a starting point, not a target. The trial exists to find the version that works on your hair."), /*#__PURE__*/React.createElement(Pillar, {
    tone: "inverse",
    word: "Holds",
    fear: "Will it fall out by dinner?"
  }, "Pinned properly, checked before we leave, and a touch-up kit left with you for the rest of the day."))), /*#__PURE__*/React.createElement(window.Section, null, /*#__PURE__*/React.createElement("div", {
    className: "pp-stack",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--stack-gap)"
    }
  }, /*#__PURE__*/React.createElement(Block, {
    padding: "34px 36px"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: "var(--space-5)"
    }
  }, "Inside the morning"), /*#__PURE__*/React.createElement(window.PinBullets, {
    items: ["A trial, booked as its own appointment", "A written hair timeline for the day", "Hair for you and your party, on that schedule", "Veil and accessory fitting, tested before we leave", "A touch-up kit left behind", "Care and prep instructions the week before"]
  })), /*#__PURE__*/React.createElement(Block, {
    surface: "outline",
    padding: "34px 36px"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: "var(--space-5)"
    }
  }, "Deliberately outside it"), /*#__PURE__*/React.createElement("p", null, "No makeup, no planning, no photography. The lane is narrow on purpose \u2014 a specialist who does one thing properly is easier to trust and easier to recommend."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-4)"
    }
  }, "Where you need makeup, you get a name from a list we\u2019d use ourselves."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-4)",
      color: "var(--text-secondary)"
    }
  }, "Never two weddings in a day. The promise to arrive early doesn\u2019t survive a double booking.")))), /*#__PURE__*/React.createElement(window.Section, {
    tone: "tulle",
    rule: false
  }, /*#__PURE__*/React.createElement("div", {
    className: "pp-stack",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-9)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(PullQuote, {
    tone: "plain",
    size: "27px"
  }, "The morning is the only part of a wedding day that has no slack in it. Everything after it inherits the delay."), /*#__PURE__*/React.createElement(PhotoFrame, {
    src: "../../assets/photos/braided-updo-path.jpg",
    alt: "Bride walking a field path, braided low updo seen from behind",
    ratio: "4 / 5"
  }))), /*#__PURE__*/React.createElement(window.Section, {
    rule: false,
    style: {
      paddingBottom: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-8)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "pp-subhead",
    style: {
      maxWidth: "22ch"
    }
  }, "Tell us the date and where you\u2019re getting ready."), /*#__PURE__*/React.createElement(Button, {
    onClick: () => go("enquire")
  }, "Start an enquiry"))));
}
Object.assign(window, {
  Morning
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Morning.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Work.jsx
try { (() => {
const DSw = window.PolishedAmpPinnedDesignSystem_6a1c01;
function Work({
  go
}) {
  const {
    SectionHead,
    PhotoFrame,
    Testimonial,
    Eyebrow,
    Button
  } = DSw;
  const shots = [["chignon-low-back.jpg", "Low chignon pinned at the nape, seen from behind", "Low chignon, pinned at the nape · Kortright Centre"], ["rollers-in-the-room.jpg", "Setting rollers through long dark hair before the pin-up", "Setting rollers, 7.40am · Distillery District"], ["hands-working-bw.jpg", "Noelle sectioning a bride’s hair mid-set", "Mid-set, before the pin-up · Oakville"], ["party-done-waiting.jpg", "Bride and her party finished and waiting in the getting-ready room", "The party, done and waiting · Niagara"], ["updo-high-profile.jpg", "High textured updo with a soft face-framing piece", "High textured updo · Prince Edward County"], ["half-up-comb.jpg", "Half-up waves with a crystal comb set at the crown", "Half-up waves, crystal comb · Muskoka"]];
  return /*#__PURE__*/React.createElement(window.Page, {
    current: "work",
    go: go
  }, /*#__PURE__*/React.createElement(window.Section, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "The work",
    headline: "Photographed from behind, in the room, as we go.",
    size: "40px",
    lede: "The back of the head is the product. That is what we photograph, in the light of the room we worked in.",
    style: {
      marginBottom: "var(--space-8)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "pp-stack-2",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--stack-gap)"
    }
  }, shots.map(([file, alt, caption], i) => /*#__PURE__*/React.createElement(PhotoFrame, {
    key: i,
    src: "../../assets/photos/" + file,
    alt: alt,
    ratio: "4 / 5",
    caption: caption
  })))), /*#__PURE__*/React.createElement(window.Section, {
    tone: "tulle",
    rule: false
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: "var(--space-7)"
    }
  }, "What brides say"), /*#__PURE__*/React.createElement("div", {
    className: "pp-stack",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Testimonial, {
    credit: "Bride, Kortright Centre, 2025"
  }, "She was set up before I\u2019d finished my coffee, and nothing that morning ran late."), /*#__PURE__*/React.createElement(Testimonial, {
    credit: "Bride, Distillery District, 2025"
  }, "I looked like me. That was the whole thing I was worried about and she just\u2026 knew."), /*#__PURE__*/React.createElement(Testimonial, {
    credit: "Planner, Oakville, 2024"
  }, "She sent me the running order six weeks out. I have never had that from a hair supplier."))), /*#__PURE__*/React.createElement(window.Section, {
    rule: false,
    style: {
      paddingBottom: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-8)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "pp-subhead",
    style: {
      maxWidth: "20ch"
    }
  }, "If your date is still open, tell us where you\u2019re getting ready."), /*#__PURE__*/React.createElement(Button, {
    onClick: () => go("enquire")
  }, "Start an enquiry"))));
}
Object.assign(window, {
  Work
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Work.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Lockup = __ds_scope.Lockup;

__ds_ns.PinMark = __ds_scope.PinMark;

__ds_ns.PhotoFrame = __ds_scope.PhotoFrame;

__ds_ns.Pillar = __ds_scope.Pillar;

__ds_ns.SectionHead = __ds_scope.SectionHead;

__ds_ns.StepRow = __ds_scope.StepRow;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.Block = __ds_scope.Block;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.ChoiceGroup = __ds_scope.ChoiceGroup;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
