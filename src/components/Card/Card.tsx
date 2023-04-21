import { CardProps } from "./Card.props.ts";
import styles from "./Card.module.css";
import cn from "classnames";

export function Card({
  className,
  isFeatured,
  children,
  ...props
}: CardProps): JSX.Element {
  return (
    <div
      className={cn(className, styles.card, {
        [styles.cardFeatured]: isFeatured,
      })}
      {...props}
    >
      {children}
    </div>
  );
}
