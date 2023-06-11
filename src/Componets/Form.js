import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      skill: "",
    };
  }
  handleChangeName = event =>{
    this.setState({
        name:event.target.value
    })
  }
  handleChangeAge = event =>{
    this.setState({
        age:event.target.value
    })
  }
  handleChangeSkill = event =>{
    this.setState({
        skill:event.target.value
    })
  }
  handleSumbit =event => {
    alert(`Name ${this.state.name} Age ${this.state.age} Skill ${this.state.skill}`)
    event.preventDefault()
  }

  render() {
    return (
     
        <form onSubmit={this.handleSumbit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChangeName}
            ></input>
          </div>
          <div>
            <label>Age</label>
            <input
              type="text"
              value={this.state.age}
              onChange={this.handleChangeAge}
            ></input>
          </div>
          <div>
            <select value={this.state.skill} onChange={this.handleChangeSkill}>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
                <option value="react">React</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
     
    );
  }
}

export default Form;
