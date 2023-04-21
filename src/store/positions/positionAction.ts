import { IBadges } from "../../components/JobPosition/JobPosition.props.ts";

export const ADD_POSITIONS = "ADD_POSITIONS";
export interface IPositionAction {
  type: "ADD_POSITIONS";
  positions: IBadges[];
}
export const addPosition = (positions: IBadges) => ({
  type: ADD_POSITIONS,
  positions,
});
