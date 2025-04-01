import "./App.css";
import Electronics from "./Components/electronics/Electronics";

function App() {
  return (
    <div className="app">
      <h1 style={{
        color:"red",
        textAlign:"center"
      }}>React Application</h1>
    <Electronics/>
    </div>
  );
}
export default App;
