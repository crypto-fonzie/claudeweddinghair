import React from "react";

export interface PillarProps {
  /** The pillar word — Early, Yours, or Holds. Instrument Serif, 34px. */
  word: React.ReactNode;
  /** The bride's fear it answers, e.g. "Will she actually show up?". Optional on partner-facing material. */
  fear?: React.ReactNode;
  /** The answer, 2–3 short sentences. */
  children?: React.ReactNode;
  tone?: "light" | "inverse";
  style?: React.CSSProperties;
}

export declare function Pillar(props: PillarProps): JSX.Element;
