import React from "react";
import "../card/Card.css";
import Card from "../card/Card/";
import { usersdata } from "../../data/datacard";


 function CardContainer(){
    return (
        <div className="CardContainer">
            {usersdata.results.map(function(user){
                 return <Card userinfo={user} />
            })}
            
        </div>
    )
 }
 export default CardContainer;