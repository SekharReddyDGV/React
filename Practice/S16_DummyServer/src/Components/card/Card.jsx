import "./Card.css";

function Card({ElcData}){
    const {image, title, price, rating}= ElcData;
    return <div className="card">
        <img src={image} width={"100%"} height={200} alt="" />
        <h4>{title}</h4>
        <p>Price: ${price}</p>
        <p>Rating:{rating.rate}</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <div className="cardButtons">
            <button>Product Details</button>
            <button>Add to Cart</button>
        </div>
    </div>
}

export default Card;