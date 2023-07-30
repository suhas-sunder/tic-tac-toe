import Board from "./components/Board";
import { useState, useEffect } from "react";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(""));

  // Update 'X' for clicked or 'O' for randomly selected squares
  const handleSquares = (squareIndex, letter) => {
    const updatedSquaresArr = squares.map((value, index) =>
      index === squareIndex ? letter : value
    );

    // Have it so that squares stores an objet. Within the object is an array which gets updated with both x and o before being reset.

    setSquares(updatedSquaresArr);

    // Add logic to check if some combination (some()) exists within the array.
    // The combination is based on indexes and I need to check if all values in that index is all X or all O.
    // Then display the result.
    // Add play again functionality.
    // Add player scores.
    // Add option to switch from computer player to two player.
    // Add note that this computer is not very smart. It will select O's at random.
    // Allow player 1 to choose X or O, and assign accordingly.
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
