import React from "react";
import ClassBC from "./ClassBC";
import Color from "./Color";
import Props from "./Props";
import img from './vibrant-pink-and-white-summer-flowering-cosmos-royalty-free-image-1653499726.jpg'
const App =()=>{
    return(
        <>
            <h1>change color :</h1>
            <Color color='red' />
            <Color color='green' />
            <Color color='yellow' />

            {/* <Props data='hello'/> */}
            {/* <Props data={1234}/> */}
            {/* <Props data={null}/> */}
            {/* <Props data={true}/> */}
            {/* <Props data2={{username:"pushpa",email:"pushpa@gmail.com"}}/> */}
            {/* <Props data2={[1,2]} /> */}
            <Props img={img} />
            <ClassBC data="hello" />
        </>
    )
}

export default App;