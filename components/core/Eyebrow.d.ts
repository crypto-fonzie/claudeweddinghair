import React from "react";

export interface EyebrowProps {
  /** tortoise (default) · brass on Ink panels · paper over photography. */
  tone?: "tortoise" | "brass" | "paper" | string;
  /** Element to render. Default "p". */
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Eyebrow(props: EyebrowProps): JSX.Element;
