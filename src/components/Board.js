import Styles from "./Board.module.scss";

function Board({ squares, handleSquares, computedIndex }) {
  const handleClick = (event) => {
    // Determine the index of the clicked square
    const squareIndex = parseInt(event.target.name.split("_").pop());

    handleSquares(squareIndex, "X");
  };

  const elements = document.getElementsByTagName("input");

  computedIndex && (elements[computedIndex].checked = true);

  // Check if squares.length is odd and not 9 then update O on re-render.
  // Filter out all of the indexes within this array that are falsy. Then randomly pick one to be assigned O.
  // Pass on index to handlesquares to update array with O

  return (
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
  );
}

export default Board;
