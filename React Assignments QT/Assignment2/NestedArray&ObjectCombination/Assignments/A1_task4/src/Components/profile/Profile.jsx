// 4. Create a React component UserProfile that receives user prop (an object with name, age,location) and displays the user information. If the age is greater than 30, display a special message, "Welcome, Mature User"

import "./Profile.css"
import React from "react";

function Profile({user}){
    
    return(
        <div className="profileDiv">
            <h3>Name:{user.name}</h3>
            <h3>Age:{user.age}</h3>
            <h3>Location:{user.location}</h3>
            {user.age > 30 && <h2>"Welcome, Mature Person"</h2>}

        </div>

    )
}

export default Profile;