import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "../src/components/App";
import store from "../src/components/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
