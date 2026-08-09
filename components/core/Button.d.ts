import React from "react";

export interface ButtonProps {
  /** primary = Ink fill · secondary = 1px Ink outline · inverse = Morning fill on Ink panels · quiet = underlined text link. */
  variant?: "primary" | "secondary" | "inverse" | "quiet";
  /** md (default) · sm for footers and inline placements. */
  size?: "md" | "sm";
  /** Renders an <a> instead of a <button>. */
  href?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent) => void;
  /** Label text. Written as a plain instruction — never "Book now". */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Button(props: ButtonProps): JSX.Element;
