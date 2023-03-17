import React from 'react'
import Faker from './Faker'

const Navbar = () => {
  return (
    <nav style={{margin:"10px 30px",listStyleType:"none",display:"flex",alignItems:"center",justifyContent:'space-between'}}>
        <li style={{fontSize:"80px",fontWeight:"10",color:"orange"}}>lOGO</li>
        <li><Faker /></li>
    </nav>
  )
}

export default Navbar