import React from "react";

export interface LockupProps {
  /** stacked (default, the primary) · horizontal (nav bars, letterhead, footers) · name (no descriptor). */
  variant?: "stacked" | "horizontal" | "name";
  /** light on Morning/Tulle · inverse on Ink · photo over imagery (paler brass ampersand, pure white name). */
  tone?: "light" | "inverse" | "photo";
  /** Size of the wordmark cap line in px. Everything else scales from it. Stacked minimum ≈ 26 (130px wide). */
  size?: number;
  /** Show "BRIDAL HAIR · by Noelle". Drop it first when space is tight. */
  descriptor?: boolean;
  style?: React.CSSProperties;
}

export declare function Lockup(props: LockupProps): JSX.Element;
