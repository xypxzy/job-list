import { BadgeProps } from "./Badge.props.ts";
import styles from "./Badge.module.css";
import cn from "classnames";
import removeIcon from "../../assets/icon-remove.svg";

export function Badge({
  variant,
  colorScheme,
  children,
  onClear,
  ...props
}: BadgeProps): JSX.Element {
  return (
    <div
      className={cn(styles.badge, {
        [styles.primary]: colorScheme == "primary",
        [styles.light]: colorScheme == "light",
        [styles.dark]: colorScheme == "dark",
        [styles.basic]: variant == "basic",
        [styles.clearable]: variant == "clearable",
        [styles.rounded]: variant == "rounded",
      })}
      {...props}
    >
      <span>{children}</span>
      {variant === "clearable" && (
        <div className={styles.badgeRemove} onClick={onClear}>
          <img src={removeIcon} alt="removeIcon" />
        </div>
      )}
    </div>
  );
}
