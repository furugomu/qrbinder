import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../reducer";
import localStorageEnhancer from "../local-storage-enhancer";

const store = createStore(rootReducer, localStorageEnhancer("state"));
(window as any).store = store;
store.subscribe(() => console.log("update:", store.getState()));

interface Props {
  children: any;
}
const AppProvider = ({ children }: Props) => (
  <Provider store={store}>{children}</Provider>
);

export default AppProvider;
