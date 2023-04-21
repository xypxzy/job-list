import { useSelector, useDispatch } from "react-redux";
import { filterSelector } from "../../store/filters/filterSelector.ts";
import { removeFilter, clearFilter } from "../../store/filters/filterAction.ts";
import { Stack } from "../Stack/Stack.tsx";
import { Card } from "../Card/Card.tsx";
import { Badge } from "../Badge/Badge.tsx";

import { FilterPanelProps } from "./FilterPanel.props.ts";
import styles from "./FilterPanel.module.css";

export function FilterPanel({ ...props }: FilterPanelProps): JSX.Element {
  const currentFilters = useSelector(filterSelector);
  const dispatch = useDispatch();

  return (
    <>
      {currentFilters && (
        <Card className={styles.filterPanel}>
          <div className={styles.wrapper} {...props}>
            <div className={styles.stack}>
              <Stack>
                {currentFilters.map((filter) => (
                  <Badge
                    key={filter}
                    variant="clearable"
                    colorScheme="light"
                    onClear={() => dispatch(removeFilter(filter))}
                  >
                    {filter}
                  </Badge>
                ))}
              </Stack>
            </div>
            <button
              className={styles.button}
              onClick={() => dispatch(clearFilter())}
            >
              Clear
            </button>
          </div>
        </Card>
      )}
    </>
  );
}
