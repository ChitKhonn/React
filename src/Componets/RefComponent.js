import React, { Component } from 'react'

export class RefComponent extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
      this.cbRef = null
      this.setRef = element => {
        this.cbRef = element
        console.log(`cbRef element is ${this.cbRef}`)
      }
    }

    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }
    handleClick = () => {alert(this.inputRef.current.value)
        alert(this.inputRef.current.value)
    }

  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef} ></input>
        <input type='text' ref={this.setRef} ></input>
        <button onClick={this.handleClick} >Click</button>
      </div>
    )
  }
}

export default RefComponent