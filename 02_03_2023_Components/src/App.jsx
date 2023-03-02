import React from "react"
import './index.css'
// import Navbar from "./function_based_component/NavBar"
// import Footer from "./function_based_component/Footer"
// import HomePage from "./function_based_component/HomePage"

import Navbar from "./class_based_component/Navbar"
import HomePage from "./class_based_component/HomePage"

import Footer from "./class_based_component/Footer"

export const App = ()=>{
    return(
        <>
            {/* <Navbar />
            <HomePage />
            <Footer /> */}
            <Navbar />
            <HomePage />
            <Footer />
        </>
    )
}
