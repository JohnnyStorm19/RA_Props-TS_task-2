import './App.css'
import { Listing } from './components/Listing'
import { recievedData } from './data/handleData'

function App() {
  return (
    <Listing recievedData={recievedData} />
  )
}

export default App
