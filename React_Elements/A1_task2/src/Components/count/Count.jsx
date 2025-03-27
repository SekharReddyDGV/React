import "./Count.css";
import React from "react";
import { useState } from "react";

function Count(){
 var [state,setState]=useState(0);

 const IncreaseCount = ()=>{
    return(
       setState(state+1)
    )
 }

    return(
        <div className="CounterBlock">
            <h2>Count The Value:{state}</h2>
            <button className="Inc" onClick={IncreaseCount}>Like</button>
        </div>
    )
}

export default Count;