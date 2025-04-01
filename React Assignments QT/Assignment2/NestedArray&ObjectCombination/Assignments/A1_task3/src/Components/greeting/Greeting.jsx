import "./Greeting.css";
import React from "react";

function Greeting({name}){
    return(
        <div>
            <h2 className="gt">Hello,{name}</h2>
        </div>
    )

}

export default Greeting;