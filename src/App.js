import Board from "./components/Board";
import { useState, useEffect } from "react";

function App() {
  const [boardSettings, setBoardSettings] = useState({
    playerOneLetter: "",
    playerTwoLetter: "",
    squares: Array(9).fill(""),
    playerOneScore: 0,
    playerTwoScore: 0,
    computerScore: 0,
    computedIndex: null,
  });

  // Update 'X' for clicked or 'O' for randomly selected squares
  const handleSquares = (playerSelectIndex, letter) => {
    const randomIndex = 5;

    // Determine new board squares with X or O based on player/computer input
    const updatedSquaresArr = boardSettings.squares.map((value, index) => {
      if (index === playerSelectIndex) {
        return letter;
      } else if (index === randomIndex) {
        return letter === "X" ? "O" : "X";
      } else {
        return value;
      }
    });

    setBoardSettings((prevState) => ({
      ...prevState,
      squares: updatedSquaresArr,
      computedIndex: randomIndex,
    }));

    // Have it so that squares stores an objet. Within the object is an array which gets updated with both x and o before being reset.

    //

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
      squares={boardSettings.squares}
      handleSquares={handleSquares}
      computedIndex={boardSettings.computedIndex}
    />
  );
}

export default App;
