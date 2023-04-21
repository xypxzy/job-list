import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export  interface StackProps extends  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children : ReactNode;
}