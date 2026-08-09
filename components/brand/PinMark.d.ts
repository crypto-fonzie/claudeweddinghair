import React from "react";

export interface PinMarkProps {
  /** Rendered height in px. Below 60 the heavier stroke is used automatically. Minimum 20. */
  height?: number;
  /** brass (default) · ink · tortoise · paper — or any CSS colour. */
  tone?: "brass" | "ink" | "tortoise" | "paper" | string;
  /** Override the stroke weight. Leave unset; the size threshold handles it. */
  weight?: number | string;
  /** Accessible title. Omit when the pin is decorative — it renders aria-hidden. */
  title?: string;
  style?: React.CSSProperties;
}

export declare function PinMark(props: PinMarkProps): JSX.Element;
