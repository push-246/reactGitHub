import React from "react";
import { Component } from "react";

import SearchBar from "./SearchBar"
import Logo from './Logo'
import Shop from "./Shop";
import WishList from "./WishList";

class Navbar extends Component{
    render(){
        return(<>
        <ul style={{display: "flex",
                    gap:"30px",
                    listStyle: "none",
                    alignItems:"center",
                    justifyContent:"center",
                    padding:"20px 0 20px 0"}}>
            <li><Logo /></li>
            <li><SearchBar /></li>
            <li style={{fontSize:"20px"}}>Contact Us</li>
            <WishList />
            <Shop />
        </ul>
    </>)
    }
    
}
export default Navbar 
