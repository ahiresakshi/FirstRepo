import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

import Netflix from "./Netflix";

function Index() {
  return <Netflix />;
}
ReactDOM.render(<Index />, document.getElementById("root"));
