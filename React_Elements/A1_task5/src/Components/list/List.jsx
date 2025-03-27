// 5. Write a List component that takes an array of items as a prop and renders each item in a li element.
import "./List.css";
import React from "react";
 function List(){
    const Data=["Apple","Banana","Cherry"];
    return (
        <div className="listBox">
            <h2>List Components</h2>
            <ul>
                {
                    Data.map(function(ele,index){
                        return <li>{ele}</li>
                    })
                }
            </ul>
        </div>
    )
 }

 export default List;