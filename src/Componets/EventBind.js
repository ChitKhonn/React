import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
  }
  EventHandler = () => {
    this.setState({
        message:"Good Bye"
    })
  }
  render() {
    return <div>
        <div> {this.state.message} </div>
        <button onClick={this.EventHandler}>Click Me!</button>
    </div>;
  }
}
export default EventBind;
