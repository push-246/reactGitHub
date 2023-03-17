import React from "react";
import {faker} from '@faker-js/faker'
function Faker(){
    return <>
        <img src={faker.image.cats()} alt="" width="100px" height="100px" style={{border:"2px solid orange",borderRadius:"50%"}}/>
    </>
}

export default Faker;