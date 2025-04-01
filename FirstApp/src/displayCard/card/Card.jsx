import "./Card.css";

function Card({userinfo}){
    return(
        <div id="card">
            <img src={userinfo.picture.medium} alt="" width={"100%"} height={"250px"} />
            <h3>{userinfo.name.title} {userinfo.name.first} {userinfo.name.last} </h3>
            <p>{userinfo.gender}</p>
            <p>{userinfo.id.value} {userinfo.id.name}</p>
            <div>
                <button>Profile Details</button>
            </div>
        </div>
    )
}

export default Card;