import React from "react";
function Tuto17(props) {
  function doThis(a) {
    alert(a);
  }
  return (
    <div>
      <button onClick={doThis.bind(this, "Hello, I am from parameter.")}>
        Click me
      </button>
      <h1>
        Name: {props.name} and Job: {props.job}
      </h1>
    </div>
  );
}
export default Tuto17;
