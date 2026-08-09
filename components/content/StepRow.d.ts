import React from "react";

export interface StepRowProps {
  /** The time marker — "6 WEEKS OUT", "MORNING, −30 MIN". Brass, uppercase, letterspaced. */
  when: React.ReactNode;
  /** Two or three words in Instrument Serif — "Timeline built", "On site". */
  title: React.ReactNode;
  /** What happens, one or two plain sentences. */
  children?: React.ReactNode;
  tone?: "light" | "inverse";
  /** Brass rule below the row. Turn off on the last row of a set. */
  divider?: boolean;
  style?: React.CSSProperties;
}

export declare function StepRow(props: StepRowProps): JSX.Element;
