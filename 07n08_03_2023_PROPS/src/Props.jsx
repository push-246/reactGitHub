import React from "react";

const Props = (props)=>{
    console.log(props)
    return<>
        {/* <p>{props.data}</p> */}
        {/* <p>{props.data2.username}</p> */}
        {/* <p>{props.data2.email}</p> */}
        {/* <p>{props.data2[0]}+{props.data2[1]}</p> */}
        <img src={props.img} alt="" width="600px"/>
        <p>{props.img}</p>
    </>
}

export default Props ;