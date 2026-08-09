import React from "react";

export interface PullQuoteProps {
  /** Small uppercase credit under the quote. Omit for a standalone statement. */
  attribution?: React.ReactNode;
  /** block = Tulle field with a Brass keyline (default) · plain = type only · inverse = on an Ink panel. */
  tone?: "block" | "plain" | "inverse";
  /** Type size. Default var(--size-quote) = 25px; range 22–27. */
  size?: string | number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function PullQuote(props: PullQuoteProps): JSX.Element;
