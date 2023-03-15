import React, { Component } from 'react'
import './global.css'
export default class App extends Component {
  constructor(){
    super();
    this.state={
      count:0 
    }
  }
  handleIncrement = ()=>{
    this.setState({count:this.state.count+1})
  }

  handleReset = function(){
     this.setState({count:0})
  }
  render() {
    return (
      <div className='container'>
      <div className='top'>
          <section>
          <button className='decrement' onClick={()=>{
            this.setState({count:this.state.count-1})
          }}>-</button>
        </section>
        <section>
          <h1>{this.state.count}</h1>
        </section>
        <section>
          <button className='increment' onClick={this.handleIncrement}>+</button>
        </section>
      </div>
        <div className='bottom'>
          <button className='reset' onClick={this.handleReset.bind(this)}>Reset</button>
        </div>
      </div>
    )
  }
}
