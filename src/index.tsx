import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";

import App from "./modules/app/App";
import { store } from "./logic/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
