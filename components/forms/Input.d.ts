import React from "react";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Renders a textarea instead. Use for "anything else we should know". */
  multiline?: boolean;
  /** Rows when multiline. Default 5. */
  rows?: number;
  /** Border shifts to Tortoise. There is no red in this palette. */
  invalid?: boolean;
  style?: React.CSSProperties;
}

export declare function Input(props: InputProps): JSX.Element;
