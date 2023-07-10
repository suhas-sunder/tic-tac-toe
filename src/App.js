import Board from "./components/Board";
import { setState } from "react";

function App() {
  const [squares, setSquares] = setState([]);

  const handleSquares = () => {};

  return <Board squares={squares} handleSquares={handleSquares} />;
}

export default App;
