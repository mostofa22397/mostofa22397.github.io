import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./mycomponents/Hello.js";
import World from "./mycomponents/World";
import Tuto from "./mycomponents/Tuto";
import Tuto1 from "./mycomponents/Tuto1";
import Tuto2 from "./mycomponents/Tuto2";
import Tuto3 from "./mycomponents/Tuto3";
import Tuto4 from "./mycomponents/Tuto4";
import Tuto5 from "./mycomponents/Tuto5";
import Tuto6 from "./mycomponents/Tuto6";
import Tuto7 from "./mycomponents/Tuto7";
import Tuto8 from "./mycomponents/Tuto8";
import Tuto9 from "./mycomponents/Tuto9";
import Tuto10 from "./mycomponents/Tuto10";

function App() {
  return (
    <div className="App">
      <Hello></Hello>
      <World></World>
      <Tuto></Tuto>
      <Tuto1></Tuto1>
      <Tuto2></Tuto2>
      <Tuto3></Tuto3>
      <Tuto4></Tuto4>
      <Tuto5></Tuto5>
      <Tuto6></Tuto6>
      <Tuto7></Tuto7>
      <Tuto8 name="Ahammed" age="24"></Tuto8>
      <Tuto8 name="Mohammed" age="24"></Tuto8>
      <Tuto8 name="Rifat" age="24"></Tuto8>
      <Tuto8 name="Mostofa" age="24"></Tuto8>
      <Tuto9 occupation="Government Employee" salary="22000"></Tuto9>
      <Tuto9 occupation="Government Employee" salary="23000"></Tuto9>
      <Tuto9 occupation="Government Employee" salary="24000"></Tuto9>
      <Tuto10 education="BBA Hon's" height="5 foot"></Tuto10>
      <Tuto10 education="BBA Hon's" height="5 foot"></Tuto10>
      <Tuto10 education="BBA Hon's " height="5 foot"></Tuto10>
    </div>
  );
}

export default App;
