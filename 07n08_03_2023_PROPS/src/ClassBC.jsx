import React from "react";
import { Component } from "react";

class ClassBC extends Component{
    
    render(){
        console.log(this)
        return(
            <p>{this.props.data}</p>
        )
    }
}

export default ClassBC 