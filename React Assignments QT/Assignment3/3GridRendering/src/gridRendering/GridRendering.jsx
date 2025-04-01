import "./GridRendering.css";

function GridRendering(){
    const products = ["Laptop", "Smartphone", "Tablet", "Smartwatch","Camera"];
    return(
        <div className="grid-container">
            {products.map((gridData)=>{
                return( <div className="grid-item">{gridData}</div>)
            })}
        </div>
    )
}

export default GridRendering;