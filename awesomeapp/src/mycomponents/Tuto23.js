import React, { Component } from "react";

class Tuto23 extends Component {
  constructor() {
    super();
    this.state = {
      name: "Ahammed",
      Age: "34",
      Salary: "23000",
    };
  }
  render() {
    return <h1>My name is {this.state.name}</h1>;
  }
}
export default Tuto23;
