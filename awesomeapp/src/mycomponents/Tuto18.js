import React, { Component } from "react";

class Tuto18 extends Component {
  doThisFromClass(a) {
    alert(a);
  }
  render() {
    return (
      <div>
        <button
          onClick={this.doThisFromClass.bind(
            this,
            "Hello ,I am from Bangladesh."
          )}
        >
          On Click
        </button>
        <h1>
          Name:{this.props.name} and Age: {this.props.age}
        </h1>
      </div>
    );
  }
}
export default Tuto18;
