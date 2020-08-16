import React from "react";
function Tuto14(props) {
  function doThis() {
    alert("Button is clicked");
  }
  return (
    <div>
      <button onClick={doThis}>Click Me</button>
      <h1>
        Bank name:{props.bank_name} and Branch name:{props.brach_name}
      </h1>
    </div>
  );
}
export default Tuto14;
