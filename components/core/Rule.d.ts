import React from "react";

export interface RuleProps {
  /** hairline = Tortoise 18% (default) · faint = Tortoise 9% for list dividers · brass = accent row rule · ink = full strength. */
  tone?: "hairline" | "faint" | "brass" | "ink" | string;
  /** Horizontal inset in px or a CSS length. */
  inset?: number | string;
  style?: React.CSSProperties;
}

export declare function Rule(props: RuleProps): JSX.Element;
