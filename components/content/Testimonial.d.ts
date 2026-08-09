import React from "react";

export interface TestimonialProps {
  /** "Bride, venue, year" — em-dashed automatically. */
  credit?: React.ReactNode;
  tone?: "light" | "inverse";
  /** Default 18px. Never below 15px — this is display type. */
  size?: string | number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Testimonial(props: TestimonialProps): JSX.Element;
