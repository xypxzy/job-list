import { FilterPanelProps } from "./FilterPanel.props.ts";
import styles from "./FilterPanel.module.css";
import { Card } from "../Card/Card.tsx";
import { Stack } from "../Stack/Stack.tsx";
import { Badge } from "../Badge/Badge.tsx";

export function FilterPanel({ ...props }: FilterPanelProps): JSX.Element {
  return (
    <Card className={styles.filterPanel}>
      <div className={styles.wrapper} {...props}>
        <div className={styles.stack}>
          <Stack>
            <Badge variant="clearable" colorScheme="dark">
              Frontend
            </Badge>
          </Stack>
        </div>
        <button className={styles.button}>Clear</button>
      </div>
    </Card>
  );
}
