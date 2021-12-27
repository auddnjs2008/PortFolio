import React from "react";
import ReactDOM from "react-dom";
import { Global } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import App from "@layouts/App";
import style from "@components/GlobalStyles";

ReactDOM.render(
  <BrowserRouter>
    <Global styles={style} />
    <App></App>
  </BrowserRouter>,
  document.querySelector("#root")
);
