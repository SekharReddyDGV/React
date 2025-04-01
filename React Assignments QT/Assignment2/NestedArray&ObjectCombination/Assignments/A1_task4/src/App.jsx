
import './App.css'
import Greeting from './Components/greeting/Greeting';
import UserProfile from './Components/profile/UserProfile';
function App() {
  return (
    <div>
      <h1 className='pagetop'>Welcome to React World</h1>
      <Greeting name="jhon" />
      <UserProfile/>
      </div>

  )
}

export default App
