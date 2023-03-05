import React from "react";
import STYLE from '../navbarCss/navbar1.module.css'

// https://icons.getbootstrap.com/#usage

const Navbar1 = ()=>{
    return(<>
        <nav>
        <ul>
            <section>
                <li>
                    <a href=""><i class={`bi bi-bootstrap ${STYLE.logo}`}></i></a>
                </li>
                <li><a href="">Docs</a></li>
                <li><a href="">Examples</a></li>
                <li><a href="">Icons</a></li>
                <li><a href="">Themes</a></li>
                <li><a href="">Blog</a></li>
            </section>
            <section>
                <li><i class="bi bi-github"></i></li>
                <li><i class="bi bi-twitter"></i></li>
                <li><i class="bi bi-instagram"></i></li>
                <li class={STYLE.mode}><i class="bi bi-brightness-high"></i> <i class={`bi bi-caret-down-fill ${STYLE.carrot}`}></i></li>
            </section>
        </ul>
        </nav>
    </>)
}

export default Navbar1

// drop down later 