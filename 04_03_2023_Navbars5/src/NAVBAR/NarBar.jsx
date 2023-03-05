import React from "react";
import STYLE from '../navbarCss/navbar.module.css'
const Navbar = ()=>{
    return(<nav>
            <ul>
                <li>
                <img  
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" 
                alt="logo" />
                <br />
                <i className={STYLE.link}>Explore <span style={{color:'yellow'}}>Plus</span></i>
                </li>
                <li>
                    <input type="text" placeholder="Search for products ,brands and more"/>
                    <button><i class={`bi bi-search ${STYLE.icon}`}></i></button>
                </li>
                <li><button className={STYLE.login}>Login</button></li>
                <li><a href="seller">Become A Seller</a></li>
                <li>More <i class={`bi bi-chevron-compact-down ${STYLE.icon}`}></i></li>
                <li><a href="cart"><i class={`bi bi-cart  ${STYLE.icon}`}></i> Cart</a></li>
            </ul>
    </nav>)
}

export default Navbar