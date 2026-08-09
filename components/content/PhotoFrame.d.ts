import React from "react";

export interface PhotoFrameProps {
  /** Image URL. Leave empty to render the shot-type brief instead — that is how the partner deck ships. */
  src?: string;
  alt?: string;
  /** Which of the four repeating shot types belongs here. */
  shot?: "back-of-head" | "hands" | "room" | "party";
  /** Override the placeholder brief with a specific direction. */
  note?: string;
  /** CSS aspect-ratio. "3 / 4" portrait (default), "1 / 1" for the grid, "16 / 9" for a hero band. */
  ratio?: string;
  /** Karla Regular 12px caption below the frame, Tortoise. */
  caption?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function PhotoFrame(props: PhotoFrameProps): JSX.Element;
