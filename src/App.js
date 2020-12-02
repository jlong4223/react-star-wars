import {useState, useEffect} from 'react'
import './App.css';
import {getStarShips} from './services/sw-api'
import {StarShipCard} from './components/starShipCard/starShipCard'
import Header from './components/header/header'



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
      <Header />
      <div className="starShipApp">
      {starShipData.results.map((result, idx)=>(
        <StarShipCard key={idx} result={result}/>
      ))}
      </div>
    </div>
  );
}

export default App;
