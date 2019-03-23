import React, { Component } from "react";
import { InputSwitch } from "primereact/inputswitch";

class C23 extends Component {
  constructor() {
    super();
    this.state = {
      checked1: false,
      checked2: true
    };
  }
  render() {
    return (
      <div>
        <h2>Gate C23</h2>
        <p>Printer: </p>
        <p>Phone:</p>
        <p>Mic</p>
        <p>Printer Paper out</p>
        <p>Missing: </p>
        <p>Jet Bridge Door:</p>
        <p>Stapler</p>
        <p>Fuel Slips</p>
        <p>Keyboard</p>
        <p>Mouse</p>
      </div>
    );
  }
}

export default C23;
