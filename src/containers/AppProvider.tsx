import React from "react";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../reducer";
import localStorageEnhancer from "../local-storage-enhancer";
import historyMiddleware from "../history-middleware";

interface Props {
  children: any;
}
const AppProvider = ({ children }: Props) => (
  <Provider store={createAppStore()}>{children}</Provider>
);

export default AppProvider;

const createAppStore = () => {
  const enhancer = compose(
    applyMiddleware(historyMiddleware),
    localStorageEnhancer("state")
  );
  const store = createStore(rootReducer, enhancer);
  // ぬけみち
  (window as any).store = store;
  store.subscribe(() => console.log("update:", store.getState()));
  return store;
};
