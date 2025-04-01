import "./DynamicTableRendering.css";

function  DynamicTableRendering(){
    const data = [
        { name: "Alice", age: 25, location: "New York" },
        { name: "Bob", age: 30, location: "San Francisco" },
        { name: "Charlie", age: 35, location: "Los Angeles" }
        ];
        
    return(
    <div className="DynamicTable">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
               {data.map((element)=>{
                    return( <tr>
                        <td>{element.name}</td>
                        <td>{element.age}</td>
                        <td>{element.location}</td>
                    </tr> )
               })}
            </tbody>
        </table>
        
    </div>)
}

export default DynamicTableRendering;