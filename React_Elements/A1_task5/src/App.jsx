
import './App.css'
import Greeting from './Components/greeting/greeting'
import List from './Components/list/List'
function App() {
  return (
    <div>
      <h1 className='pagetop'>Welcome to React World</h1>
      <Greeting name="Mr/Mrs:" />
      <List/>
      </div>

  )
}

export default App
