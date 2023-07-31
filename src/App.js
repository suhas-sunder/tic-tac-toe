import Board from "./components/Board";
import { useState, useEffect } from "react";
import GameOverModal from "./components/GameOverModal";
import MainMenu from "./components/MainMenu";

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
    mainMenu: true,
    gameOverModal: false,
    resetBoard: false,
    resetScore: false,
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

    if (!winningPlayer && isGameOver(playerTwoInputs))
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
        computedIndex: null,
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
    let computerIndex = null;
    let letter = boardSettings.playerOneLetter;

    // If game is in muliplayer mode and it's the second players turn, switch letters
    if ((boardSettings.squares.filter(Boolean).length + 1) % 2 === 0 && !boardSettings.singlePlayer) {
      letter = boardSettings.playerTwoLetter;
    }

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
  };

  const handleReplay = (singleplayerMode) => {
    console.log(singleplayerMode);
    // Close modal & restart game
    setBoardSettings((prevState) => ({
      ...prevState,
      gameOverModal: false,
      squares: Array(9).fill(""),
      resetBoard: true,
      mainMenu: false,
      computedIndex: null,
      singlePlayer: singleplayerMode ? true : false,
    }));
  };

  const handleScoreReset = () => {};

  const handleMainMenu = () => {
    setBoardSettings((prevState) => ({
      ...prevState,
      mainMenu: true,
      gameOverModal: false,
    }));
  };

  return (
    <>
      {/* If boardSettings.resetScore display modal asking for confirmation to reset score with option to reset or cancel. */}
      {boardSettings.mainMenu && (
        <MainMenu
          startGame={handleReplay}
          settings={boardSettings}
          resetScore={handleScoreReset}
        />
      )}
      {boardSettings.gameOverModal && (
        <GameOverModal
          settings={boardSettings}
          handleReplay={handleReplay}
          showMainMenu={handleMainMenu}
        />
      )}
      {!boardSettings.mainMenu && (
        <Board
        settings = {boardSettings}
          squares={boardSettings.squares}
          computedIndex={boardSettings.computedIndex}
          resetGame={boardSettings.resetBoard}
          singlePlayerMode={boardSettings.singlePlayer}
          handleSquares={handleSquares}
          handleRestart={handleReplay}
          showMainMenu={handleMainMenu}
        />
      )}
    </>
  );
}

export default App;
