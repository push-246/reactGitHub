//uncontrolled forms 
//using createRefs() in class based component
import React, { Component, createRef } from 'react'

export default class App extends Component {
    constructor(){
        super()
        this.a = 10;
        this.userRef = createRef();
        console.log(this)
    } 
    a = 20;//this will become a property to the current object
    //to access the an objects property u need to access it using oject.propertyName object.methodName
    //here the object is this .this points to the currentt instance of class 
    passRef = createRef(); //this will become a propert to the current object
    handleSubmit =(e)=>{ //this will become a method to the current object
        e.preventDefault();
        console.log(this.userRef.current.value ,this.passRef.current.value) 
    }
    render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit} >
            <input type="text" ref={this.userRef} placeholder="username"/>
            <br />
            <input type="password" ref={this.passRef} placeholder="password"/>
            <br />
            <button>SUBMIT</button>
        </form>
      </div>
    )
  }
}
