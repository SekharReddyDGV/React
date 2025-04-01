import "./Gallery.css";
import React from "react";
import { images } from "./images";

 function Gallery(){
    return (
        <div className="Grid_Container">
             {
                images.map((image)=>{
                    return (<div className="Grid_item">
                        <img src={image} alt="" width={'100%'} height={'100%'} />
                    </div>)
                })
             }
            

        </div>
    )
 }
 export default Gallery;