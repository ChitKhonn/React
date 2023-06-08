import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increament() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  increamentFive(){
    this.increament()
    this.increament()
    this.increament()
    this.increament()
    this.increament()
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count} </div>
        <button onClick={() => this.increamentFive()} >Increament</button>
      </div>
    );
  }
}

export default Counter;
