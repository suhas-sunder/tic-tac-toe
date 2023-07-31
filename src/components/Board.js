import Styles from "./Board.module.scss";
import Button from "./UI/Button";

function Board({
  squares,
  handleSquares,
  computedIndex,
  resetGame,
  displayTurns,
  handleRestart,
}) {
  const handleClick = (event) => {
    // Determine the index of the clicked square
    const squareIndex = parseInt(event.target.name.split("_").pop());

    handleSquares(squareIndex);
  };

  // For single player mode, manually toggle checkbox for computer selected input
  // Replace this with useRef hook to access element & target index value in name property
  const elements = document.getElementsByTagName("input");

  (computedIndex || computedIndex === 0) &&
    (elements[computedIndex].checked = true);

  if (resetGame) {
    for (let element of elements) {
      element.checked = false;
    }
  }

  return (
    <>
      {displayTurns && <p className={Styles.text}>Turn: Player One</p>}
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
        <Button onClick={handleRestart} text={"Restart"} />
        <Button onClick={handleRestart} text={"Main Menu"} />
      </div>
    </>
  );
}

export default Board;
