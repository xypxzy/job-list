import { ADD_POSITIONS, IPositionAction } from "./positionAction.ts";

export const positionReducer = (
  state: IPositionAction[] = [],
  action: IPositionAction
) => {
  switch (action.type) {
    case ADD_POSITIONS: {
      return action.positions;
    }
    default: {
      return state;
    }
  }
};
