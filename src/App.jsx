import { useState } from 'react'
import './App.css'

function App() {
  const [counterTeamA, setCounterTeamA] = useState(0)
  const [counterTeamB, setCounterTeamB] = useState(0)

  function counterPointsTeamA() {
    const newPoints = counterTeamA +  1
    setCounterTeamA(newPoints)
  }
  
  function counterPointsTeamB() {
    const newPoints = counterTeamB +  1
    setCounterTeamB(newPoints)
  }

  return (
    <div className='container'>
      <div className='up' onClick={counterPointsTeamA}>{counterTeamA}</div>
      <div className='down' onClick={counterPointsTeamB}>{counterTeamB}</div>
    </div>
  )
}

export default App
