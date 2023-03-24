// handling forms using real dom class based 
import React, { Component } from 'react'

export default class App extends Component {

//  componentDidMount(){
//     let button  = document.querySelector('button')
//     button.addEventListener('click',(e)=>{
//         e.preventDefault()
//         let username = document.getElementById('username').value
//         let password = document.getElementById('password').value
//         console.log({username,password})
//     })
//  }
 handleSubmit(e){
    e.preventDefault()
    let username = document.getElementById('username').value  
    let password = document.getElementById('password').value
    console.log({username,password})

 }
  render() {
    return (
      <div>
        <form action="">
          <h1>FORMS JUST USING JS ,CLASS BASED</h1>
            <label htmlFor="">Username :</label>
            <input type="text" id="username" />
            <br />
            <label htmlFor="password" >Password :</label>
            <input type="password" id="password"/>
            <br />
            {/* <button onClick={(e)=>{
                e.preventDefault()
                let username = document.getElementById('username').value
                let password = document.getElementById('password').value
                console.log({username,password})

            }}>SUBMIT</button> */}
            {/* <button>SUBMIT</button> */}
            <button onclick={this.handleSubmit}>SUBMIT</button>
        </form>
      </div>
    )
  }
}

// 3 ways to handle an event 
// 1) inline handler

    /* <button onClick={(e)=>{
                e.preventDefault()
                let username = document.getElementById('username').value
                let password = document.getElementById('password').value
                console.log({username,password})

            }}>SUBMIT</button> */

// 2) function handler

// <button onClick={this.handleSubmit}>SUBMIT</button>
// handleSubmit(e){
//     e.preventDefault()
//     let username = document.getElementById('username').value  
//     let password = document.getElementById('password').value
//     console.log({username,password})

//  }
// 3) in componnent Did mount 
/* <button>SUBMIT</button> */
//  componentDidMount(){
//     let button  = document.querySelector('button')
//     button.addEventListener('click',(e)=>{
//         e.preventDefault()
//         let username = document.getElementById('username').value
//         let password = document.getElementById('password').value
//         console.log({username,password})
//     })
//  }