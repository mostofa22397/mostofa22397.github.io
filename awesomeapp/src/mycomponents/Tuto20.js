import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const doThis = (a) => {
  alert(a);
};
const Tuto20 = () => {
  return (
    <button
      className="btn btn-primary m-5"
      onClick={doThis.bind(this, "What the hell")}
    >
      Hold Me
    </button>
  );
};
export default Tuto20;
