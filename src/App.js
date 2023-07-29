import Board from "./components/Board";
import { useState, useEffect } from "react";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(""));

  const handleSquares = () => {};

  return (
    <Board
      squares={squares}
      handleSquares={handleSquares}
      setSquares={setSquares}
    />
  );
}

export default App;
