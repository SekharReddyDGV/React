import "./CardContainer.css";
// import Card from "../card/Card";
import { CardData } from "../data/data";

function CardContainer(){
    return(
        <div className="cardContainer">
            {CardData.info.map(function (Team){
                return(<Card NBA={Team} />)
            })}
        </div>
    );
}

export default CardContainer;