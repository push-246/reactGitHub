//controlled forms using state and onchange
import React, { useState } from 'react'

const App = () => {
    let [user,setUser] = useState("");
    let [pass,setPass] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log({user,pass})
    }
  return (
    <div>
    <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=>{setUser(e.target.value)}} placeholder="username"/>
        <br />
        <input type="text" onChange={(e)=>{setPass(e.target.value)}} placeholder="password"/>
        <br />
        <button>SUBMIT.</button>
    </form>
    </div>
  )
}

export default App