import "./ProfileInfo.css";
import { useState } from "react";
 function ProfileInfo(){
    const [Player,SetPlayer]=useState({
        Name: "Cricketer",
        country:"Citizen",
        centuries:"100's",
        Highest:"Runs",

       image: "https://w0.peakpx.com/wallpaper/976/147/HD-wallpaper-cricket-ka-shadow-animation-shot-cricket-ka-shadow-animation.jpg"});
     function Virat(){
        SetPlayer(
            {
                Name: "Virat Kohli",
                country:"India",
                centuries:"81",
                Highest:"254*",
                image:"https://i.pinimg.com/736x/27/59/2a/27592a992de78e5c39c678a78c34cce3.jpg"});
     }
     function Rohit(){
        SetPlayer(
            {
                Name: "Rohit Sharma",
                country:"India",
                centuries:"48",
                Highest:"264",
                image:"https://pbs.twimg.com/media/E1GgiDYUUAswk4R.jpg:large"})
     }
    return(
        <div className="container">
            <div className="imageArea">
                <img src={Player.image} alt="" height="100%" width="100%" />
            </div>
            <div className="Details">
                <dl>
                    <dt><b>Player Name:</b></dt>
                    <dd>{Player.Name}</dd> <br />
                    <dt><b>Country</b></dt>
                    <dd>{Player.country}</dd> <br />
                    <dt><b>Centuries</b></dt>
                    <dd>{Player.centuries}</dd> <br />
                    <dt><b>Highest Runs</b></dt>
                    <dd>{Player.Highest}</dd> <br />
                    <dt><b>Discription </b></dt>
                    <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates harum vel fuga, debitis voluptatibus quis laboriosam at esse dicta nostrum tempore obcaecati asperiores impedit doloremque vero reprehenderit veritatis porro quia blanditiis eaque magnam perspiciatis! Sed numquam ad quo necessitatibus voluptatum provident, fugiat id dolor placeat, corrupti ipsa, animi facere dignissimos.</dd> <br />
                    
                </dl>
                <button className="btn" onClick={Virat} >Virat</button>
                <button className="btn" onClick={Rohit}>Rohit</button>
            </div>
        </div>
        
        
    );
 }
 export default ProfileInfo;