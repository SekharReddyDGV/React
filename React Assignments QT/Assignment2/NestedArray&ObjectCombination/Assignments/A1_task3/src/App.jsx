import './App.css'
import Greeting from './Components/greeting/greeting'
import Product from './Components/product/product'
function App() {
  return (
    <div>
      <h1 className='pagetop'>Welcome to React World</h1>
      <Greeting name="Sekhar Reddy" />
      <Product/>
      </div>

  )
}

export default App
