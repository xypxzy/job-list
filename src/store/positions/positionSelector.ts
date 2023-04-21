import { IPositionAction } from "./positionAction.ts";
import { IState } from "../filters/filterSelector.ts";
export const positionAllSelector = (state: IPositionAction) => state.positions;

export const selectVisiblePositions = (
  state: IState,
  filters: string[] = []
) => {
  if (filters.length === 0) {
    return state.positions;
  }

  return state.positions.filter((pos) => {
    let posFilter: string[];
    // @ts-ignore
    posFilter = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools);

    return filters.every((filter) => posFilter.includes(filter));
  });
};
