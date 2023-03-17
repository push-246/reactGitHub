import React from 'react'
import { useState } from 'react';
import './global.css'
import Navbar from './Navbar';
const App = () => {
  let [count,setCount]=useState(0);
  
  let handleIncrement = ()=>{
    setCount(count+1)
  }
  let handleDecrement = ()=>{
    setCount(count-1)
  }

  let handleReset = ()=>{
    setCount(0)
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <section className="display">
          <h1>{count}</h1>
        </section>

        <section className="buttons">
          <button onClick={handleDecrement} className="dec">- <br></br>DECREMENT</button>
          <button onClick={handleReset} className={`${count===0?"reset":"red"}`}>RESET</button>
          <button  onClick={handleIncrement} className="inc">+ <br></br> INCREMENT</button>
        </section>
      </div>
    </>
  )
}

export default App