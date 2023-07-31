import Board from "./components/Board";
import { useState, useEffect } from "react";
import GameOverModal from "./components/GameOverModal";

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
    winner: "",
    mainMenu: false,
    gameOverModal: false,
    resetBoard: false,
  });

  // Filter out indices that match character values within array
  const filterResultsByIndex = (results, char) => {
    const filteredIndices = [];

    results.forEach((result, index) => {
      if (result === char) filteredIndices.push(index);
    });

    return filteredIndices;
  };

  // Filter out indices of non-empty strings & return one at random
  const handleComputerSelection = (squares) => {
    const emptyIndices = filterResultsByIndex(squares, "");

    const randomIndex = Math.floor(Math.random() * emptyIndices.length);

    return emptyIndices[randomIndex];
  };

  // Update letters/squares to be displayed on board
  const updateSquaresArr = (squaresArr, index, letter) => {
    return squaresArr.map((value, i) => (i === index ? letter : value));
  };

  // Check if game is over
  const isGameOver = (playerInputs) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    // Determine if atleast some winning combination exists in player inputs
    return winningCombinations.some((subArr) => {
      return subArr.every((index) => playerInputs.includes(index));
    });
  };

  // Determine if a player has won
  const handleResults = (results) => {
    let winningPlayer = "";

    const playerOneInputs = filterResultsByIndex(
      results,
      boardSettings.playerOneLetter
    );

    if (isGameOver(playerOneInputs)) winningPlayer = "Player one";

    const playerTwoInputs = filterResultsByIndex(
      results,
      boardSettings.playerTwoLetter
    );

    if (isGameOver(playerTwoInputs))
      boardSettings.singlePlayer === true
        ? (winningPlayer = "Computer")
        : (winningPlayer = "Player two");

    if (!winningPlayer && results.join("").trim().length === 9)
      winningPlayer = "Draw";

    // Update board settings
    winningPlayer &&
      setBoardSettings((prevState) => ({
        ...prevState,
        winner: winningPlayer,
        gameOverModal: true,
        playerOneScore: winningPlayer.includes("one")
          ? prevState.playerOneScore + 1
          : prevState.playerOneScore,
        playerTwoScore: winningPlayer.includes("two")
          ? prevState.playerTwoScore + 1
          : prevState.playerTwoScore,
        computerScore: winningPlayer.includes("Computer")
          ? prevState.computerScore + 1
          : prevState.computerScore,
      }));
  };

  // Update 'X' for clicked or 'O' for randomly selected squares
  const handleSquares = (playerIndex) => {
    let computerIndex = true;
    let letter = boardSettings.playerOneLetter;

    // Update board with player input
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

    // Update board settings
    setBoardSettings((prevState) => ({
      ...prevState,
      squares: updatedSquares,
      computedIndex: computerIndex,
      resetBoard: false,
    }));

    // Check if game is over & determine winner
    handleResults(updatedSquares);

    // Add logic to check if some combination (some()) exists within the array to handle game over.
    // The combination is based on indexes and I need to check if all values in that index is all X or all O.
    // Then display the result.
    // Add play again functionality.
    // Add player scores.
    // Add a main menu and add player options: single/two player
    // Display text indicating player choice of "X" and "O"
    // Add styling to differentiate which player is active based on colour
    // Add colour preset options for custom styling
  };

  const handleReplay = () => {
    // Close modal & restart game
    setBoardSettings((prevState) => ({
      ...prevState,
      gameOverModal: false,
      squares: Array(9).fill(""),
      resetBoard: true,
    }));
  };

  return (
    <>
      {boardSettings.gameOverModal && (
        <GameOverModal settings={boardSettings} handleReplay={handleReplay} />
      )}
      <Board
        squares={boardSettings.squares}
        handleSquares={handleSquares}
        computedIndex={boardSettings.computedIndex}
        resetGame={boardSettings.resetBoard}
        displayTurns={!boardSettings.singlePlayer}
        handleRestart={handleReplay}
      />
    </>
  );
}

export default App;
