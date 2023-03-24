//login page with ant design
import React, { useState } from 'react'
import { Col, Row ,Button, Checkbox, Form, Input } from 'antd';
import './global.css'
const App = () => {

  let [email,setEmail] = useState("")
  let [password,setPass] =useState("")
  let [msg,setMsg]=useState("")

  const handleSignUp = (e)=>{
   e.preventDefault();
    console.log({email,password})
    if(email!=='' && password!==''){
      localStorage.setItem('email',email)
      localStorage.setItem('password',password)
      setMsg('Successfully signed up !!! :)')
          setEmail('')
    setPass('')
    }
    else{
      setMsg('Invaild Email Id or Invalid Password .Try Again !!')
    }

  }
  const handleSignIn = (e)=>{
    e.preventDefault();
    if(email!='' && password!=''){
      let emailLS = localStorage.getItem('email')
      let passwordLS = localStorage.getItem('password')
      if(emailLS == email && passwordLS == password){
        setMsg('Sign In successful . :)')
        setEmail('')
        setPass('')
      }
      else{
        setMsg(`Couldn't find account .Try Again or please signup !!!`)
      }
    }
    else{
      setMsg(`Try Again !!!`)
    }

  }
  
  return (
    <>
      <div>{msg}</div>
      <div className='row'>
        <section className='left'>
        <div className='logo'>
          <img src="https://cdn-icons-png.flaticon.com/512/1134/1134431.png" alt="" width='50px'/>
          <h1>Fisj</h1>
        </div>
        
        <h1>
          Welcome
        </h1>
        <h4>
          Sign in <br></br>to continue access
        </h4>
        <h5 className='website'>
          www.fisj.com
        </h5>
        </section>
        <section className='right'>
          <h1>Sign In</h1>
          <form action="">
            <input type="text" placeholder='Email Address' value={email} onChange={e=>setEmail(e.target.value)}/>
            <input type="password" placeholder='Password'  value={password} onChange={e=>setPass(e.target.value)} />
            <button onClick={handleSignIn}>{`CONTINUE >`}</button>
            <p>or</p>
            <button onClick={handleSignUp}>CREATE ACCOUNT</button>
          </form>
        </section>
      </div>
    </>
  )
}

export default App