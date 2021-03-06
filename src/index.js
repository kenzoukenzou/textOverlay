import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

ReactDOM.render(
  <div className="container">
    <App />
  </div>,
  document.getElementById("root")
);

serviceWorker.unregister();
