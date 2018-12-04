import { combineReducers } from "redux";
import { reducer as form, Action as FormAction } from "./reducers/form";
import { reducer as items, Action as ItemsAction } from "./reducers/items";
import { reducer as route, Action as RouteAction } from "./reducers/route";

export type Action = FormAction | ItemsAction | RouteAction;

const rootReducer = combineReducers({ form, items, route });
export default rootReducer;
export type State = ReturnType<typeof rootReducer>;
