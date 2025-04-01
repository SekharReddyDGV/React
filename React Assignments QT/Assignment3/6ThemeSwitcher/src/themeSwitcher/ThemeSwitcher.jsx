import "./ThemeSwitcher.css";
import React from "react";

function ThemeSwitcher({theme}){
   
    return(
        <div className="Contanier">
            <button onClick={ChangetoDark}>change</button>

        </div>
    )

}

export default ThemeSwitcher;