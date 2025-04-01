import "./Card.css";

function Card({Name,Bio,profileimage}){
    return(
        <div className="card">
            <img src={profileimage} alt="" width={"98%"}  height={230}/>
            <div className="carddetails">
                <h3>{Name}</h3>
                
                <p>{Bio}</p>
            </div>

        </div>
    )
}
export default Card;