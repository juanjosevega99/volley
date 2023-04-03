import { useState } from "react";
import "./App.css";

function Counter({ counter, onClick, className }) {
  return (
    <div className={className} onClick={onClick}>
      <div>{counter}</div>
    </div>
  );
}

function App() {
  const [counterTeamA, setCounterTeamA] = useState(0);
  const [counterTeamB, setCounterTeamB] = useState(0);

  function counterPointsTeamA() {
    const newPoints = counterTeamA + 1;
    setCounterTeamA(newPoints);
  }

  function counterPointsTeamB() {
    const newPoints = counterTeamB + 1;
    setCounterTeamB(newPoints);
  }

  return (
    <div className="container">
      <Counter
        counter={counterTeamA}
        onClick={counterPointsTeamA}
        className="up"
      />
      <Counter
        counter={counterTeamB}
        onClick={counterPointsTeamB}
        className="down"
      />
    </div>
  );
}

export default App;
