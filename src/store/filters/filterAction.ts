export const ADD_FILTER = "ADD_FILTER";
export const REMOVE_FILTER = "REMOVE_FILTER";
export const CLEAR_FILTER = "CLEAR_FILTER";

export interface IFilterAction {
  type: "ADD_FILTER" | "REMOVE_FILTER" | "CLEAR_FILTER";
  filter: string;
}

export const addFilter = (filter: string): IFilterAction => ({
  type: ADD_FILTER,
  filter,
});
export const removeFilter = (filter: string): IFilterAction => ({
  type: REMOVE_FILTER,
  filter,
});
export const clearFilter = () => ({
  type: CLEAR_FILTER,
});
