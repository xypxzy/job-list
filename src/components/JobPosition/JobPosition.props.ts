import { DetailedHTMLProps, HTMLAttributes } from "react";

// @ts-ignore
export interface JobPositionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    IBadges {
  company: string;
  contract: string;
  featured: boolean;
  id: number;
  location: string;
  logo: string;
  new: boolean;
  postedAt: string;
  position: string;
  handleAddFilter: (s: string) => void;
}

export interface IBadges {
  languages: string[];
  level: string;
  role: string;
  tools: string[];
}
