import React from "react";
import Button from "./UI/Button";
import Score from "./UI/Score";
import Styles from "./MainMenu.module.scss";

function MainMenu({ settings, startGame, resetScore }) {
  
  return (
    <div className={Styles.menu}>
      <h1 className={Styles.heading}>Tic Tac Toe</h1>
      <Score settings={settings}/>
      <div className={Styles.radio}>
        <input name="gamemode" type="radio" checked />
        <label htmlFor="gamemode">Singleplayer</label>
        <input name="gamemode" type="radio" />
        <label>Multiplayer</label>
      </div>
      <Button onClick={startGame} text="Start game" />
      <Button onClick={resetScore} text="Reset score" />
    </div>
  );
}

export default MainMenu;
