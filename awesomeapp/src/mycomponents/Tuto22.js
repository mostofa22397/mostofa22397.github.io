import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const dothis = (a) => {
  alert(a);
};
const Tuto22 = (props) => {
  return (
    <button
      className="btn btn-danger m-5"
      onClick={dothis.bind(this, "What the hell")}
    >
      Click Me
    </button>
  );
};
export default Tuto22;
