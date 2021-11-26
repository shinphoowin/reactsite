import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import "bootstrap3/dist/css/bootstrap.css";
import "bootstrap3/dist/css/bootstrap-theme.css";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

registerServiceWorker();
