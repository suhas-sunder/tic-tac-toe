import Board from "./components/Board";
import { useState } from "react";

function App() {
  const [squares, setSquares] = useState([]);

  const handleSquares = () => {};

  return <Board squares={squares} handleSquares={handleSquares} />;
}

export default App;
