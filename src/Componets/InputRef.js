import React, { Component } from 'react'

export class InputRef extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
    }

    handleInput(){
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}></input>
      </div>
    )
  }
}

export default InputRef