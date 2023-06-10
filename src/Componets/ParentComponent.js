import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         text:"Greet"
      }

      this.clickEvent = this.clickEvent.bind(this)
    }
    clickEvent(){
        alert(`Hello ${this.state.text}`)
      }
  render() {
    return (
      <div>
        <ChildComponent handler={this.clickEvent}/>
      </div>
    )
  }
}

export default ParentComponent