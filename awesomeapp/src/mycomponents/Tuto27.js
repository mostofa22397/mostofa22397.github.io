import React, { Component } from "react";

class Tuto27 extends Component {
  constructor() {
    super();
    this.state = {
      name: "Ahammed",
      age: "24",
      salary: "230000",
    };
  }

  render() {
    return (
      <div>
        <h1>My name is ={this.state.name}</h1>
        <h1>My age is ={this.state.age} </h1>
        <h1>My salary is ={this.state.salary}</h1>
      </div>
    );
  }
}
export default Tuto27;
