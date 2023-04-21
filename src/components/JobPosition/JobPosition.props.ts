import { DetailedHTMLProps, HTMLAttributes } from "react";

// @ts-ignore
export interface JobPositionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  company: string;
  contract: string;
  featured: boolean;
  id: number;
  languages: string[];
  level: string;
  location: string;
  logo: string;
  new: boolean;
  position: string;
  postedAt: string;
  role: string;
  tools: string[];
}
