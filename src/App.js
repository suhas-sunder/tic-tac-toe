import Board from "./components/Board";
import { useState, useEffect } from "react";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(""));

  // Update 'X' for clicked or 'O' for randomly selected squares
  const handleSquares = (squareIndex) => {
    setSquares(
      squares.map((value, index) => (index === squareIndex ? "X" : value))
    );
  };
  

  return (
    <Board
      squares={squares}
      handleSquares={handleSquares}
      setSquares={setSquares}
    />
  );
}

export default App;
