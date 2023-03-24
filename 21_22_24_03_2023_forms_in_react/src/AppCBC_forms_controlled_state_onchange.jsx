//controlled forms using onchange ,state object
import React, { Component } from 'react'

export default class App extends Component {
    constructor(){
        super()
        this.state = {
            username:"",
            password:""
        }
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        console.log(this.refs)
    }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
            <input type="text" onChange={(e)=>{this.setState({username: e.target.value})}}/>
            <br />
            <input type="password" onChange={(e)=>{this.setState({password:e.target.value}) }} />
            <br />
            <button>SUUBMIT</button>
        </form>
      </div>
    )
  }
}
