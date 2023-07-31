import React from "react";
import Button from "./UI/Button";
import Styles from "./MainMenu.module.scss";

function MainMenu({ settings, startGame, resetScore }) {
  const { playerOneScore, playerTwoScore, computerScore } = settings;

  return (
    <div className={Styles.menu}>
      <h1 className={Styles.heading}>Tic Tac Toe</h1>
      <div>
        {/* Make score its own component */}
        <p className={Styles.title}>Player Score</p>
        <ul className={Styles.scores}>
          <li className={Styles.score}>P1: {playerOneScore}</li>
          <li className={Styles.score}>P2: {playerTwoScore}</li>
          <li className={Styles.score}>AI: {computerScore}</li>
        </ul>
      </div>
      <div className={Styles.radio}>
        <input name="gamemode" type="radio" checked />
        <label htmlFor="gamemode">Singleplayer</label>
        <input name="gamemode" type="radio" />
        <label>Multiplayer</label>
      </div>
      <Button onClick={resetScore} text="Reset score" />
      <Button onClick={startGame} text="Start game" />
    </div>
  );
}

export default MainMenu;
