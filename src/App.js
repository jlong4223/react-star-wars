import {useState, useEffect} from 'react'
import './App.css';
import {getStarShips} from './services/sw-api'
import {StarShipCard} from './components/starShipCard'



function App() {

  const [starShipData, setStarShipData]= useState({
    count: 0,
    next: null,
    previous: null,
    results:[]
  })

  async function getAppData(){
    const data = await getStarShips()
    setStarShipData(data)
  }

  useEffect(()=>{
    getAppData()
    console.log('effect')
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Star Wars</h1>
      </header>
      <div className="starShipCard">
        <StarShipCard />
        <StarShipCard />
        <StarShipCard />
      </div>
      <div className="starShipCard">
        <StarShipCard />
        <StarShipCard />
        <StarShipCard />
      </div>  
      <div className="starShipCard">
        <StarShipCard />
        <StarShipCard />
        <StarShipCard />
      </div>
    </div>
  );
}

export default App;
