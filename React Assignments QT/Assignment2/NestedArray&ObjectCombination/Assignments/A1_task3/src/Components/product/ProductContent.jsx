import React from "react";
import "./Product.css";

function ProductContent(Details){
    return(
        <>
            <h2 id="name">Produt:{Details.name}</h2>
            <h3 id="value">Price:${Details.value.toFixed(2)}</h3>
        </>
    )
}
export default ProductContent;
