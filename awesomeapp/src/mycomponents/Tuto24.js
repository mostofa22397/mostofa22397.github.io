import React, { Component } from "react";

class Tuto24 extends Component {
  constructor() {
    super();
    this.state = {
      name: "Ahammed",
      age: "23",
      salary: "34000",
    };
  }
  render() {
    return (
      <din>
        <h1>My name is {this.state.name} </h1>
        <h1>My age is {this.state.age} </h1>
      </din>
    );
  }
}
export default Tuto24;
