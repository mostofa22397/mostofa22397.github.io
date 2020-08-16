import React, { Component } from "react";

class Tuto25 extends Component {
  constructor() {
    super();
    this.state = {
      name: "Mohammad",
      age: "23",
    };
  }
  render() {
    return (
      <div>
        <h1>My name is {this.state.name}</h1>
        <h1>My age is {this.state.age}</h1>
      </div>
    );
  }
}
export default Tuto25;
