import Board from "./components/Board";
import { useState, useEffect } from "react";

function App() {
  const [boardSettings, setBoardSettings] = useState({
    singlePlayer: true,
    playerOneLetter: "X",
    playerTwoLetter: "O",
    squares: Array(9).fill(""),
    playerOneScore: 0,
    playerTwoScore: 0,
    computerScore: 0,
    computedIndex: null,
  });

  // Filter out indices of non-empty strings & return one at random
  const handleComputerSelection = (squares) => {
    const emptyIndices = [];

    squares.forEach((square, index) => {
      if (square === "") emptyIndices.push(index);
    });

    const randomIndex = Math.floor(Math.random() * emptyIndices.length);

    console.log(emptyIndices);
    console.log(emptyIndices[randomIndex]);

    return emptyIndices[randomIndex];
  };

  // Update letters/squares to be displayed on board
  const updateSquaresArr = (squaresArr, index, letter) => {
    return squaresArr.map((value, i) => (i === index ? letter : value));
  };

  // Update 'X' for clicked or 'O' for randomly selected squares
  const handleSquares = (playerIndex) => {
    let computerIndex = true;
    let letter = boardSettings.playerOneLetter;

    // Update new board squares based on player input
    let updatedSquares = updateSquaresArr(
      boardSettings.squares,
      playerIndex,
      letter
    );

    // Handle two player and single player(against computer) modes
    if (boardSettings.singlePlayer) {
      // Determine computer input
      computerIndex = handleComputerSelection(updatedSquares);
      // Update board with computed input
      updatedSquares = updateSquaresArr(
        updatedSquares,
        computerIndex,
        boardSettings.playerTwoLetter
      );
    } else if (boardSettings.squares.filter(Boolean).length % 2) {
      letter = boardSettings.playerTwoLetter;
    }

    setBoardSettings((prevState) => ({
      ...prevState,
      squares: updatedSquares,
      computedIndex: computerIndex,
    }));

    console.log(updatedSquares[0]);

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
