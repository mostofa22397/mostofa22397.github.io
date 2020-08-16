import React, { Component } from "react";
class Tuto16 extends Component {
  doThisFromClass() {
    alert("The button is Clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.doThisFromClass}>Click me</button>
        <h1>
          Gender: {this.props.gender} and Birth: {this.props.birth}
        </h1>
      </div>
    );
  }
}
export default Tuto16;
