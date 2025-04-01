import './App.css';
import Greeting from './Components/greeting/greeting';
import Count from './Components/count/Count';

function App() {
  return (
    <div>
      <h1 className='pagetop'>Welcome to React World</h1>
      <Greeting name="jhon" />
      <Count/>
      </div>

  )
}

export default App
