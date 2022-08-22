import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./pages/Router";
import "./index.css";
import { Provider } from "react-redux";
import reduxStore from "./utils/redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={reduxStore}>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </Provider>
);
