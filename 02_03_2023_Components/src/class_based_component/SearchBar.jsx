import React from "react";
import { Component } from "react";
class SearchBar extends Component{
    render(){
        return (
        <section>
            <input placeholder="Search For Anything" style={{border:"2px solid black",
                                padding:"10px 6px 10px 20px" ,
                                width:"500px",
                                fontSize:"20px",
                                borderRight:"none",
                                borderRadius:"50px 0 0 50px"}}></input>
            <button style={{padding:"10px 20px 10px 6px",
            fontSize:"20px",background:"white",border:"2px solid black",borderLeft:"none",borderRadius:"0 50px 50px 0"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                 <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </button>
        </section>
    )
    }
    
}
export default SearchBar