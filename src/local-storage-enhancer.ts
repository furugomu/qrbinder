import { StoreEnhancer } from "redux";

/**
 * 最初に localStorage から取ってきて
 * dispatch 毎に localStorage に保存する
 * @usage
 * createStore(reducer, localStorageEnhancer('unko'))
 * createStore(reducer, compose(applyMiddleware(...), localStorageEnhancer('unko')))
 */
const localStorageEnhancer = (key: string): StoreEnhancer => {
  return next => (reducer, preloadedState) => {
    const savedState: {} = JSON.parse(localStorage.getItem(key) || "{}");
    const state = { ...savedState, ...(preloadedState as {}) };
    const store = next(reducer, state);
    store.subscribe(() => {
      localStorage.setItem(key, JSON.stringify(store.getState()));
    });
    return store;
  };
};
export default localStorageEnhancer;
