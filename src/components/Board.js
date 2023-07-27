import { useState, useEffect } from "react";
import Button from "./Button";
import Styles from "./Board.module.scss";

function Board({ squares, handelSquares, setSquares }) {

  return (
    <div className={Styles.board}>
      {squares.map((square, index) => {
        return (
          <label key={index} className={Styles.square}>
            <input type="checkbox" className={Styles.checkbox} />
            <span className={Styles.square__text}>{square}</span>
          </label>
        );
      })}
    </div>
  );
}

export default Board;
