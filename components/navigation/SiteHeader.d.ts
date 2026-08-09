import React from "react";

export interface NavLink { id: string; label: string; href?: string; }

export interface SiteHeaderProps {
  /** Nav items, uppercase Karla Medium 10px. Four maximum. */
  links?: NavLink[];
  /** Optional trailing element — normally a small secondary Button. */
  action?: React.ReactNode;
  /** id of the active link; gets a brass underline. */
  current?: string;
  tone?: "light" | "inverse";
  onNavigate?: (id: string) => void;
  style?: React.CSSProperties;
}

export declare function SiteHeader(props: SiteHeaderProps): JSX.Element;
