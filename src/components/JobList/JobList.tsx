import data from "../../mock/data.json";
import styles from "./JobList.module.css";
import { JobPosition } from "../JobPosition/JobPosition.tsx";
import { JobPositionProps } from "../JobPosition/JobPosition.props.ts";

export function JobList() {
  return (
    <div className={styles.jobList}>
      {data.map((item: JobPositionProps) => (
        <JobPosition key={item.id} {...item} />
      ))}
    </div>
  );
}
