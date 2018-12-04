import { Middleware, Dispatch, MiddlewareAPI } from "redux";
import { State, Action } from "./reducer";

const historyMiddleware: Middleware = (
  store: MiddlewareAPI<Dispatch<Action>, State>
) => (next: Dispatch<Action>) => {
  // location から state へ
  const onPopState = () => {
    const current = store.getState().route;
    const newRoute = toRoute(location);
    if (current !== newRoute) {
      next({ type: "route/set", payload: newRoute });
    }
  };
  window.addEventListener("popstate", onPopState);
  // さいしょ
  onPopState();

  return (action: Action) => {
    // state から location へ
    if (action.type === "route/set") {
      const hash = "#" + action.payload;
      if (location.hash !== hash) {
        location.hash = hash;
      }
    }
    return next(action);
  };
};

export default historyMiddleware;

const toRoute = (location: Location) => {
  const path = location.hash.substring(1);
  return path === "" ? "/" : path;
};
