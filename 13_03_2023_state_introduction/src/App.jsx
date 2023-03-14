import React from "react";
import { Component } from "react";

class App extends Component{
  //using constructor
  // constructor(){
  //   super();
  //   this.state = {
  //     courseName :'ReactJs',
  //     courseDuration:'2 months'
  //   }
  // }
  // render(){
  //   return<>
  //     <h1>{this.state.courseName}</h1>
  //     <h2>{this.state.courseDuration}</h2>
  //   </>
  // }

  //directly using state object belonging to App component
  state={
    message:"hello world!!!"
  }

  render(){
    console.log(this)
    return <h1>{this.state.message}</h1>
  }
}
export default App