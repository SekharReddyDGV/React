import "./App.css";
import CardContainer from "./Components/cardContainer/CardContainer";


function App() {
  return (
    <div className="app">
      <h1 style={{
        color:"red",
        textAlign:"center"
      }}>React Application</h1>
      <CardContainer/>
    </div>
  );
}
export default App;
