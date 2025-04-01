import "./App.css";
import Header from "./header/Header";
import ImageInfo from "./imageInfo/ImageInfo";
import ProfileInfo from "./profileInfo/ProfileInfo";
import Counter from "./counter/Counter";
import CardContainer from "./displayCard/cardcontainer/CardContainer"

function App() {
  return (
    <div className="app">
      <Header/>
      <ImageInfo />
      <ProfileInfo />
      <Counter />
      <CardContainer/>
      
    </div>
  );
}
export default App;
