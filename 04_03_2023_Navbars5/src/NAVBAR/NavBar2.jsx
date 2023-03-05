import React from "react";
import STYLE from '../navbarCss/navbar2.module.css'

// https://www.etsy.com/in-en/

const Navbar2 = ()=>{
    return <nav>
        <ul className={STYLE.top}>
            <li className={STYLE.logo}>Esty</li>
            <li className={STYLE.searchbar}>
                <input type="text" placeholder="Search for anything"/>
                <button className="STYLE.search"><i className='bi bi-search'></i></button>
            </li>
            <li>Sign in</li>
            <li><i class="bi bi-heart-fill"></i></li>
            <li><i class="bi bi-bag-fill"></i></li>
        </ul>
        <br />
        <ul className="bottom">
            <li>Sellers' Sales Hub</li>
            <li>Jewellery & Accessories</li>
            <li>Clothing & Shoes</li>
            <li>Home & Living</li>
            <li>Wedding & Party</li>
            <li>Toys & Entertainment</li>
            <li>Art & Collectibles</li>
            <li>Craft Supplies</li>
            <li>Gifts</li>
        </ul>
    </nav>
}

export default Navbar2