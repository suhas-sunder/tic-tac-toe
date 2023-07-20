import React from "react";
import Button from "./Button";
import Styles from "./Board.module.scss";

function Board({ squares, handelSquares }) {
  return (
    <div className={Styles.board}>
      <div className={Styles.cell}></div>
      <div className={Styles.cell}></div>
      <div className={Styles.cell}></div>
      <div className={Styles.cell}></div>
      <div className={Styles.cell}></div>
      <div className={Styles.cell}></div>
      <div className={Styles.cell}></div>
      <div className={Styles.cell}></div>
      <div className={Styles.cell}></div>
    </div>
  );
}

export default Board;
