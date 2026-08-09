import React from "react";

export interface BlockProps {
  /** tulle (default card/section block) · morning · ink (reversed panel) · raised (panel inside an Ink field) · outline (1px hairline, no fill). */
  surface?: "tulle" | "morning" | "ink" | "raised" | "outline";
  /** CSS padding. Default var(--card-padding) = 28px. */
  padding?: string | number;
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Block(props: BlockProps): JSX.Element;
