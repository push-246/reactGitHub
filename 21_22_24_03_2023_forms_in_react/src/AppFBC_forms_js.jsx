import React from 'react'

const App = () => {

 let handleClick = (e)=>{
    e.preventDefault();
                let username = document.getElementById('username').value
                let password = document.getElementById('password').value
                console.log({username,password})    
 }
  return (
    <div>
        <form action="">
            <h1>FORMS JUST USING JS ,FUNCTION BASED</h1>
            <label htmlFor="username">username :</label>
            <input type="text" id='username'/>
            <br />
            <label htmlFor="password">password :</label>
            <input type="password" id="password" />
            <br />
            {/* <button onClick={(e)=>{
                e.preventDefault();
                let username = document.getElementById('username').value
                let password = document.getElementById('password').value
                console.log({username,password})
            }}>SUBMIT</button> */}
            <button onClick={handleClick}>SUBMIT</button>
        </form>
    </div>
  )
}

export default App


// HANDLE EVENTS IN 2 WAYS 
// 1) inline 
  /* <button onClick={(e)=>{
                e.preventDefault();
                let username = document.getElementById('username').value
                let password = document.getElementById('password').value
                console.log({username,password})
            }}>SUBMIT</button> */
// 2) using handler function
/* <button onClick={handleClick}>SUBMIT</button>
let handleClick = (e)=>{
    e.preventDefault();
                let username = document.getElementById('username').value
                let password = document.getElementById('password').value
                console.log({username,password})    
 } *