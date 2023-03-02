import React from "react";
import {SearchBar} from "./SearchBar"
import Logo from './Logo'
import Shop from "./Shop";
import WishList from "../class_based_component/WishList";
const Navbar =()=>{
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

export default Navbar