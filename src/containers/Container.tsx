// 雑なもの
import React, { ReactChildren } from "react";
import { State, Action } from "../reducer";
import { Dispatch } from "redux";
import { connect } from "react-redux";

interface Props {
  state: State;
  dispatch: Dispatch<Action>;
  children?(props: { state: State; dispatch: Dispatch<Action> }): ReactChildren;
}
const Container = ({ state, dispatch, children }: Props) => (
  <>{children!({ state, dispatch })}</>
);

export default connect(
  (state: State) => ({ state }),
  (dispatch: Dispatch<Action>) => ({ dispatch })
)(Container);
