import React from "react";
import FormContainer from "../containers/FormContainer";
import AppProvider from "../containers/AppProvider";
import QrCodeReaderContainer from "../containers/QrCodeReaderContainer";
import ItemListContainer from "../containers/ItemListContainer";

const App = () => (
  <AppProvider>
    <div>
      <p>こんにちは</p>
      <QrCodeReaderContainer />
      <FormContainer />
      <ItemListContainer />
    </div>
  </AppProvider>
);
export default App;
