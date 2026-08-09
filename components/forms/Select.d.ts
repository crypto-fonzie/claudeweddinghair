import React from "react";

export interface SelectOption { value: string; label: string; }

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "style"> {
  /** Plain strings or {value,label} pairs. */
  options?: Array<string | SelectOption>;
  /** Empty first option. Phrase it as a question, not "Please select". */
  placeholder?: string;
  style?: React.CSSProperties;
}

export declare function Select(props: SelectProps): JSX.Element;
