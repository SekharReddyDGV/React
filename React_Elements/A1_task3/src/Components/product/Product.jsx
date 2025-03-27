// 3. Write a React component called Product that displays a product's name and price. The price should be formatted to two decimal places.
import "./Product.css";
import React from "react";
import ProductContent from "./ProductContent";

function Product(){
    return(
        <div className="productBox">
            <ProductContent name="Laptop" value={1000}/>
        </div>
    )
}

export default Product;
