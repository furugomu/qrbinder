import React from "react";
import FormContainer from "../containers/FormContainer";
import AppProvider from "../containers/AppProvider";
import QrCodeReaderContainer from "../containers/QrCodeReaderContainer";
import ItemListContainer from "../containers/ItemListContainer";
import RoutingContainer from "../containers/RoutingContainer";

const App = () => (
  <AppProvider>
    <div>
      <p>こんにちは</p>
      <QrCodeReaderContainer />
      <FormContainer />
      <ItemListContainer />
      <RoutingContainer />
    </div>
  </AppProvider>
);
export default App;
