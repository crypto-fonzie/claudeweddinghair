import React from "react";

export interface FieldProps {
  /** Uppercase Karla Medium label. Sits above the control, never beside it. */
  label?: React.ReactNode;
  /** Plain-language help, 12px Tortoise. Say the awkward thing here. */
  hint?: React.ReactNode;
  htmlFor?: string;
  /** Marks the field with a small brass middot rather than an asterisk. */
  required?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Field(props: FieldProps): JSX.Element;
