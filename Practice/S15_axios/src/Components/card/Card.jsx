import "./Card.css";

function Card({users}){
    return(
        <div className="card">
            <img src={users.picture.medium} alt="" width={"100%"} height={250}/>
            <h2>{users.name.first}</h2>
            <p style={{fontWeight:"bold"}}>Conference</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, tenetur.</p>
        </div>
    );
}
export default Card;