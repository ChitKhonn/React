import React, { Component } from 'react'
import InputRef from './InputRef'

export class ParentRef extends Component {
    constructor(props) {
      super(props)
      this.parentRef = React.createRef()
    }

    handleParent = () => {
        this.parentRef.current.handleInput()
    }
  render() {
    return (
      <div>
        <InputRef ref={this.parentRef}/>
        <button onClick={this.handleParent}>Click</button>
      </div>
    )
  }
}

export default ParentRef