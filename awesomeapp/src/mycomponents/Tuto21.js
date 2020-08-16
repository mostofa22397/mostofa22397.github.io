import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const doThis = (a) => {
  alert(a);
};

const Tuto21 = () => {
  return (
    <button
      className="btn btn-primary m-5"
      onClick={doThis.bind(this, "What the Hell")}
    >
      Click Me
    </button>
  );
};
export default Tuto21;
