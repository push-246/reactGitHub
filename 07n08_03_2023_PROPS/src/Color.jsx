import React from "react";

const Color = (props)=>{
    console.log(props)
    return<>
        <h4 style={{color:`${props.color}`}}>Hello is in {props.color}</h4>
    </>
}

export default Color ;