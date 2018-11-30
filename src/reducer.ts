import { combineReducers } from "redux";
import { reducer as form, Action as FormAction } from "./reducers/form";
import { reducer as items, Action as ItemsAction } from "./reducers/items";

export type Action = FormAction | ItemsAction;

const rootReducer = combineReducers({ form, items });
export default rootReducer;
export type State = ReturnType<typeof rootReducer>;
