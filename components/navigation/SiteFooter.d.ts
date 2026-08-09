import React from "react";

export interface FooterColumn { title: string; items: string[]; }

export interface SiteFooterProps {
  email?: string;
  /** Instagram handle — the handle matters more than the domain in this category. */
  handle?: string;
  site?: string;
  /** One Sage line. Sage appears once per page, maximum. */
  note?: string;
  /** Optional link columns to the right of the lockup. */
  columns?: FooterColumn[];
  style?: React.CSSProperties;
}

export declare function SiteFooter(props: SiteFooterProps): JSX.Element;
