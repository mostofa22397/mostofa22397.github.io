import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { queryAllByAttribute } from "@testing-library/react";
function Tuto19(props) {
  function doThis(a) {
    alert(a);
  }
  return (
    <button
      className="btn btn-primary m-5"
      onClick={doThis.bind(this, "Hello, I am from Bangladesh")}
    >
      Test bootstrap Button
    </button>
  );
}
export default Tuto19;
