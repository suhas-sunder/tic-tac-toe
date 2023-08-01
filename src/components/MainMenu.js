import React from "react";
import Button from "./UI/Button";
import Score from "./UI/Score";
import Styles from "./MainMenu.module.scss";

function MainMenu({ settings, scores, startGame, resetScore }) {
  const handleGameMode = () => {
    const labelElements = document.getElementsByTagName("input");

    for (let element of labelElements) {
      if (element.id.includes("multiplayer") && element.checked) {
        // Start game in multiplayer mode
        return startGame(false);
      }
    }

    // Set default to single player
    startGame(true);
  };

  return (
    <div className={Styles.menu}>
      <h1 className={Styles.heading}>Tic Tac Toe</h1>
      <Score scores={scores} />
      <div className={Styles.radio}>
        <input id="singleplayer" name="gamemode" type="radio" defaultChecked />
        <label htmlFor="singleplayer">Singleplayer</label>
        <input id="multiplayer" name="gamemode" type="radio" />
        <label htmlFor="multiplayer">Multiplayer</label>
      </div>
      <Button onClick={handleGameMode} text="Start game" />
      <Button onClick={() => resetScore(false)} text="Reset score" />
    </div>
  );
}

export default MainMenu;
