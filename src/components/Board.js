import Styles from "./Board.module.scss";

function Board({ squares, handelSquares, setSquares }) {
  const handleClick = (event) => {
    // Determine the index of the clicked square
    console.log(event.target.name.split("_").pop());
    const squareIndex = parseInt(event.target.name.split("_").pop());

    setSquares(squares.map((value, index) => index === squareIndex ? "X" : value))
  };

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
