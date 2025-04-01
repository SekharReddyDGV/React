import "./RenderJsxElement.css";
import React from "react";



function RenderJsxElement(){
const title = "Understanding JSX";
const content = "JSX allows you to write HTML in React.";
const tags = ["React", "JavaScript", "JSX"];
    return(
        <div className="Blog-Post">
            <h2>title:{title}</h2>
            <p>{content}</p>
            <div>
                 <ol>
                    {tags.map((ele)=>{
                    return <li>{ele}</li>
                    })}
                 </ol>
            </div>
        </div>
    )
}

export default RenderJsxElement;