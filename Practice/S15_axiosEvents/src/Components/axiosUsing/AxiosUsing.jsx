import "./AxiosUsing.css";
import Card from "../card/Card";
import { useState } from "react";
import axios from "axios";

function AxiosUsing(){
 var [state,setState]=useState([]);

        function getTheData(){
            var StoreData=axios.get("https://randomuser.me/api/?results=50");
            StoreData.then((Suc)=>{
                setState(Suc.data.results);
            }
            ).catch((error)=>{
                alert("Something Went Wrong")
            }
            );
        }


        var filterdByGender=(event)=>{
           axios.get(`https://randomuser.me/api/?gender=${event.target.value}&&results=50`)
              .then((res)=>{
                    setState(res.data.results);
                })
                .catch((error)=>{
                    alert("Error Will Getting The Data");
                });
        }
    return(
        <div className="container">
            <h2>Using Event to Filter the Data</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deleniti porro autem officiis? Accusamus repudiandae eius impedit corrupti ad voluptatem!Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deleniti porro autem officiis? Accusamus repudiandae eius impedit corrupti ad voluptatem!Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deleniti porro autem officiis? Accusamus repudiandae eius impedit corrupti ad voluptatem!</p>
            <button className="getData" onClick={getTheData}>Get The Data</button>
            
            <div>
            {
                state.length > 0 && (
            <select onChange={filterdByGender} >
                <option>all</option>
                <option>male</option>
                <option>female</option>
            </select>
            )}
                {
                    state.length > 0 ? (<div className="displayCards">
                        {
                        state.map((Clients)=>{
                            return <Card users={Clients} />
                        })
                        }
                    </div>):( <h2>No Data Available</h2> )
                }
            </div>

        </div>
    )
}

export default AxiosUsing;