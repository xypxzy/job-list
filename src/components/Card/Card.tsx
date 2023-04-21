import {CardProps} from './Card.props.ts';
import styles from './Card.module.css'
import cn from "classnames";


export function Card({className,isFearuted, children ,...props} :CardProps) : JSX.Element {
    return (
        <div className={cn(className, {
            [styles.cardFeatured] : isFearuted
        })} {...props}>
            {children}
        </div>
    );
};