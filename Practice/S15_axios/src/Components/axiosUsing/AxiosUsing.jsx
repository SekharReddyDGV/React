import "./AxiosUsing.css";
import axios from "axios";
import Card from "../card/Card";
import { useState } from "react";

function AxiosUsing(){
const [state,setState]=useState([])

    const getTheData=(datainfo)=>{
        var RequiedInfo=axios.get("https://randomuser.me/api/?results=50");
        RequiedInfo.
        then((solve)=>{
            setState(solve.data.results);
        }).catch((error)=>{
            alert("There is No Data");
        })
    }
    return(
        <div className="container">
            <h2>Using Axios To Geth The Data From Server</h2>
            <button onClick={getTheData} className="getData">Get The Data</button>
            <div>
                {state.length > 0 ?(
                    <div className="dipslayCards">
                        {state.map((user)=>{
                            return <Card users={user} />;
                    
                        })}
                    </div>
                ):(<h1>No Data</h1>)

                }
            </div>
        </div>
    )
}

export default AxiosUsing;