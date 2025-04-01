import "./Electronics.css";
import Card from "../card/Card";
import { getElectronicsData } from "./services/ElectronicServices";
import { useState,useEffect } from "react";


function Electronics(){
    const [electronics,setElectronics]=useState([]);
    useEffect(()=>{
        getElectronicsData(setElectronics);
    },[]);
     return(
        <div className="electronics">
            <div className="electronicsBanner">
            </div>
            <div className="electronicsCardContainer">
           {
            electronics.map((displayElectronics)=>{
                return <Card ElcData={displayElectronics} />
            })
           }
            </div>
        </div>
     );
}

export default Electronics;