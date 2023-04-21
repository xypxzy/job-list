import { JobPositionProps } from "../../components/JobPosition/JobPosition.props.ts";

export interface IState {
  filters: string[];
  positions: JobPositionProps[];
}

export const filterSelector = (state: IState) => state.filters;
