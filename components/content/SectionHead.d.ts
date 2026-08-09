import React from "react";

export interface SectionHeadProps {
  /** Small uppercase label. Always sits above the headline. */
  eyebrow?: React.ReactNode;
  /** Instrument Serif. Two short sentences beat one long one. */
  headline?: React.ReactNode;
  /** Optional Karla Light lede, 17–18px, left aligned, 60–70 characters. */
  lede?: React.ReactNode;
  tone?: "light" | "inverse";
  /** left (default). Centre display type only, and only on covers. */
  align?: "left" | "center";
  /** Headline size override. Default var(--size-headline). */
  size?: string | number;
  style?: React.CSSProperties;
}

export declare function SectionHead(props: SectionHeadProps): JSX.Element;
