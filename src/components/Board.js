import Styles from "./Board.module.scss";
import Button from "./UI/Button";

function Board({
  settings,
  handleSquares,
  resetGame,
  handleRestart,
  showMainMenu,
}) {
  const {
    squares,
    computedIndex,
    singlePlayer,
    playerOneLetter,
    playerTwoLetter,
  } = settings;
  const handleClick = (event) => {
    // Determine the index of the clicked square
    const squareIndex = parseInt(event.target.name.split("_").pop());

    handleSquares(squareIndex);
  };

  // For single player mode, manually toggle checkbox for computer selected input
  // Replace this with useRef hook to access element & target index value in name property
  const elements = document.getElementsByTagName("input");

  if (computedIndex !== null) elements[computedIndex].checked = true;

  if (resetGame) {
    for (let element of elements) {
      element.checked = false;
    }
  }

  return (
    <>
      {!singlePlayer && (
        <div className={Styles.players}>
          <p className={Styles.text}>Player One: "{playerOneLetter}"</p>
          <p className={Styles.text}>Player Two: "{playerTwoLetter}"</p>
        </div>
      )}

      {singlePlayer && (
        <div className={Styles.players}>
          <p className={Styles.text}>Player: "{playerOneLetter}"</p>
          <p className={Styles.text}>Computer: "{playerTwoLetter}"</p>
        </div>
      )}
      <div data-testid="board" className={Styles.board}>
        {squares.map((square, index) => {
          return (
            <label key={index} className={Styles.square}>
              <input
                onClick={handleClick}
                name={`square_${index}`}
                type="checkbox"
                className={Styles.checkbox}
              />
              <span data-testid="charx_or_o" className={Styles.square__text}>
                {square}
              </span>
            </label>
          );
        })}
      </div>
      <div className={Styles.btns}>
        <Button onClick={() => handleRestart(singlePlayer)} text={"Restart"} />
        <Button onClick={showMainMenu} text={"Main Menu"} />
      </div>
    </>
  );
}

export default Board;
