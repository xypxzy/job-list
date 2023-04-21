import { combineReducers } from "redux";
import { positionReducer } from "./positions/positionReducer.ts";
import { filterReducer } from "./filters/filterReducer.ts";

export const rootReducer = combineReducers({
  positions: positionReducer,
  filters: filterReducer,
});
