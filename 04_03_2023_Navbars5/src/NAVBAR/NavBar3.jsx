import React from "react";
import STYLE from '../navbarCss/navbar3.module.css'
const Navbar3 = ()=>{
    return <nav>
            <ul className={STYLE.top}>
                <div className="left">
                <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/512px-W3Schools_logo.svg.png?20210601004220" alt="" /></li>
                <li>Tutorials <i class={`bi bi-caret-down-fill ${STYLE.carrot}`}></i></li>
                <li>References <i class={`bi bi-caret-down-fill ${STYLE.carrot}`}></i></li>
                <li>Exercises <i class={`bi bi-caret-down-fill ${STYLE.carrot}`}></i></li>
                <li>SignUp <i class={`bi bi-caret-down-fill ${STYLE.carrot}`}></i></li>
                <li>Bootcamp <i class={`bi bi-caret-down-fill ${STYLE.carrot}`}></i></li>
                </div>
                <div className={STYLE.right}>
                    <button style={{backgroundColor:"rgb(40,42,53)",color:'white'}}>Pro</button>
                    <button style={{backgroundColor:"rgb(255,192,199)",color:"rgb(0,0,0)",width:"150px"}}>Get Certified</button>
                    <button style={{backgroundColor:"rgb(255,244,163)",color:"rgb(0,0,0)",width:"150px"}}>Create Website</button>
                    <button style={{backgroundColor:"rgb(4,170,109)",color:'white',width:"100px"}}>Log in</button>
                </div>
            </ul>

            <section className={STYLE.bottom}>
            <ul>
                <div className="left">
                    <li><i class="bi bi-house-door-fill"></i></li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>SQL</li>
                    <li>PYTHON</li>
                    <li>JAVA</li>
                    <li>PHP</li>
                    <li>HOW TO</li>
                    <li>W3.CSS</li>
                    <li>C</li>
                </div>
                <div className="right">
                    <li style={{padding:"auto 50px"}}><i class="bi bi-sun"></i></li>
                    <li style={{padding:"auto 5px"}}><i class="bi bi-globe"></i></li>
                    <li style={{padding:"auto 5px"}}><i class="bi bi-search"></i></li>
                </div>
            </ul>
            </section>
    </nav>
}

export default Navbar3 ;