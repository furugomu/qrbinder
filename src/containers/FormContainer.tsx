import { connect } from "react-redux";
import { State, Action } from "../reducer";
import Form from "../components/Form";
import { Dispatch } from "redux";
import { Form as FormType } from "../reducers/form";
import { Item } from "../reducers/items";

const FormContainer = connect(
  ({ form }: State) => ({ form }),
  (dispatch: Dispatch<Action>) => ({
    onChange: (form: FormType) =>
      dispatch({ type: "form/update", payload: form }),
    // TODO: バリデッションヌ
    onSubmit: (form: FormType) => {
      dispatch({ type: "items/add", payload: form as Item });
      dispatch({ type: "form/clear" });
    }
  })
)(Form);

export default FormContainer;
