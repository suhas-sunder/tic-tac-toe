import React from "react";

function MainMenu() {
  return (
    <>
      <div>
        {/* Make score its own component */}
        <p>Player Score</p>
        <ul>
          <li>P1: {1}</li>
          <li>P2: {2}</li>
          <li>AI: {3}</li>
        </ul>
        <button>Reset Score</button>
      </div>
      <div>
        <label>Singleplayer</label>
        <input name="gamemode" type="radio" />
        <label>Multiplayer</label>
        <input name="gamemode" type="radio" />
        {/* Make button its own component */}
        <button>Start Game</button>
      </div>
    </>
  );
}

export default MainMenu;
