import { JobPositionProps } from "../../components/JobPosition/JobPosition.props.ts";

export const ADD_POSITIONS = "ADD_POSITIONS";
export interface IPositionAction {
  type: "ADD_POSITIONS";
  positions: JobPositionProps[];
}
export const addPosition = (
  positions: JobPositionProps[]
): IPositionAction => ({
  type: ADD_POSITIONS,
  positions,
});
