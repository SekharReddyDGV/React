import "./App.css";
import Header from "./Components/Header/Header";
import MapEx from "./Components/Header/map/map";

function App() {
  return (
    <div className="app">
      <h1 style={{
        color:"red",
        textAlign:"center"
      }}>React Application</h1>
      < Header/>
      <MapEx />
    </div>
  );
}
export default App;
