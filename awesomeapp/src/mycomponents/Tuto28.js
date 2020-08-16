import React, { Component } from "react";

class Tuto28 extends Component {
  constructor() {
    super();
    this.state = {
      name: "Ahammed",
      salary: "345000",
      address: "18/19, Gonoktuly,lane, Dhaka-1205",
    };
  }

  render() {
    return (
      <div>
        <h1>My name is ={this.state.name} </h1>
        <h1>My salary is ={this.state.salary}</h1>
        <h1>My address is = {this.state.address} </h1>
      </div>
    );
  }
}
export default Tuto28;
