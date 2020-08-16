import React, { Component } from "react";
class Tuto15 extends Component {
  dothisFromClass() {
    alert("Clicked me");
  }
  render() {
    return (
      <div>
        <button onClick={this.dothisFromClass}>Click me </button>
        <h1>
          College Name: {this.props.college} and Department:{" "}
          {this.props.department}{" "}
        </h1>
      </div>
    );
  }
}
export default Tuto15;
