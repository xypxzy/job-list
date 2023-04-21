import { useSelector, useDispatch } from "react-redux";

import styles from "./JobList.module.css";
import { JobPosition } from "../JobPosition/JobPosition.tsx";
import { JobPositionProps } from "../JobPosition/JobPosition.props.ts";

import { selectVisiblePositions } from "../../store/positions/positionSelector.ts";
import { addFilter } from "../../store/filters/filterAction.ts";
import { filterSelector, IState } from "../../store/filters/filterSelector.ts";

export function JobList() {
  const dispatch = useDispatch();
  const currentFilters = useSelector(filterSelector);
  const positions = useSelector((state: IState) =>
    selectVisiblePositions(state, currentFilters)
  );

  const handleAddFilter = (filter: string) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className={styles.jobList}>
      {positions.map((item: JobPositionProps) => (
        <JobPosition
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  );
}
