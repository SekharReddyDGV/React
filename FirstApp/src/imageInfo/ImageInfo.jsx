import "./ImageInfo.css";
import { useState } from "react";

function ImageInfo(){
    const [image,SetImage]=useState("https://swarajya.gumlet.io/swarajya/2022-02/e1caf4d5-210c-40ee-8a3e-bc5e2e9a8fb6/Vande_Bharat_train_image.png?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true");
    function Changeimg1(){
        SetImage("https://swarajya.gumlet.io/swarajya/2022-02/e1caf4d5-210c-40ee-8a3e-bc5e2e9a8fb6/Vande_Bharat_train_image.png?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true");
    }
    const Changeimg2 = () =>{
        SetImage("https://akm-img-a-in.tosshub.com/indiatoday/images/story/202410/indias-first-bullet-train-244326817-16x9.jpeg?VersionId=Y7aR7Pmc9H6G.9xFS2QOfAFGfGQuZeYS");
    }
    return(
        <div id="Image">
            <img src={image} alt="" width="100%" height="250px" /> <br />
            <button onClick={Changeimg1} >Vandhe Bharath</button>
            <button onClick={Changeimg2}>Bullet</button>
        </div>
    );
}
export default ImageInfo;