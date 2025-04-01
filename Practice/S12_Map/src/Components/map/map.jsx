import "./map.css";
function MapEx(){
    var Data=["Lakers","Warriors","Clippers","Dallas","Kings","Spurs","Cavlers","Bucks"]
    return(
        <div className="mapPage">
            <h2 style={{
                color:"darkgreen"
            }}>Using Map function React Js</h2>
            <ol>
                {
                    Data.map((Elements)=>{
                        return <li>{Elements}</li>
                    })
                }
            </ol>
        </div>
    )
}
export default MapEx;
