import React from "react";

export interface ChoiceOption { value: string; label: string; note?: string; }

export interface ChoiceGroupProps {
  name?: string;
  /** Plain strings or {value,label,note} — the note is a second Tortoise line inside the tile. */
  options?: Array<string | ChoiceOption>;
  /** Controlled value: a string, or a string[] when multiple. */
  value?: string | string[];
  defaultValue?: string | string[];
  /** Checkbox behaviour instead of radio. */
  multiple?: boolean;
  /** Tiles per row. Default 2; use 4 for the budget bands on desktop. */
  columns?: number;
  onChange?: (value: string | string[]) => void;
  style?: React.CSSProperties;
}

export declare function ChoiceGroup(props: ChoiceGroupProps): JSX.Element;
