import React, { useState, useEffect } from "react";
import './App.css'
import BarLoader from "react-spinners/BarLoader";


function App() {

  const [loading, setLoading] = useState(true)
  const [color, setColor] = useState('#0032E3')
  const speed = .5
  useEffect(() => {
    const loader = setTimeout(() => setLoading(false), 5000)
    
    return() => {
      clearTimeout(loader)
    }

  },[])

  return (
    <div className="App">
      {
        loading ?
          <BarLoader 
            color={color} 
            loading={loading} 
            size={15} 
            speedMultiplier = {speed}
          />
        :
        <div className="App-main">
          <header>
            <h1>Halium <span>Ai</span></h1>
            <small>Under development...</small>
          </header>
        </div>
      }
      
    </div>
  );
}

export default App;
