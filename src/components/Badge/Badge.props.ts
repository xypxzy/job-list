import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export  interface BadgeProps extends  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    variant : 'basic' | 'clearable' | 'rounded';
    colorScheme ?:  'light' | 'primary' | 'dark';
    children : ReactNode;
}