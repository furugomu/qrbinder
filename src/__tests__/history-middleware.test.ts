import "jest";
import assert from "assert";
import { createStore, applyMiddleware, Store } from "redux";
import rootReducer, { State, Action } from "../reducer";
import historyMiddleware from "../history-middleware";

describe("history-middleware 初期化時", () => {
  test("location.hash を dispatch する", () => {
    location.hash = "#/new";
    const store = createMyStore();
    assert(store.getState().route === "/new");
  });
});

describe("history-middleware", () => {
  let store: ReturnType<typeof createMyStore>;
  beforeEach(() => {
    store = createMyStore();
    location.hash = "#unko";
  });

  test("dispatch したら location.hash を変える", () => {
    store.dispatch({ type: "route/set", payload: "/new" });
    assert(location.hash === "#/new");
  });

  // jsdom だと window.onpopstate がないのでテストできない
  // test("location.hash が変わったら dispatch する", () => {
  //   history.pushState(null, document.title, "#/new");
  //   assert(store.getState().route === "/new");
  // });
});

const createMyStore = (): Store<State, Action> =>
  createStore(rootReducer, applyMiddleware(historyMiddleware));
