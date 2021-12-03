import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import "bootstrap3/dist/css/bootstrap.css";
import "bootstrap3/dist/css/bootstrap-theme.css";
import "semantic-ui-css/semantic.min.css";
import "./assets/css/fontAwesome.css";
import "./App.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

registerServiceWorker();
