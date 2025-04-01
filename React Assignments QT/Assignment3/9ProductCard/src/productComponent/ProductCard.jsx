import "./ProductCard.css";

function ProductCard({productName, productprice,productImage})
{
    return(
        <div className="cardContainer">
            <img src={productImage} alt="" width={"98%"}  height={230}/>
            <div className="carddetails">
                <h3>{productName}</h3>
                <h4>${productprice}</h4>
                <div>
                    <button>Add to Cart</button>
                </div>
            </div>

        </div>
    )
}
export default ProductCard;