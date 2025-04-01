import "./Card.css";

function Card({NBA}){
    return(
        <div className="card">
            <img src={NBA.image} alt="" width={"100%"} height={250}/>
            <h2>{NBA.title}</h2>
            <p style={{fontWeight:"bold"}}>Conference:{NBA.conference}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, tenetur.</p>
        </div>
    );
}
export default Card;