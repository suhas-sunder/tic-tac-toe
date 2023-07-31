import React from "react";
import Styles from "./Score.module.scss";

function Score({ settings }) {
  const { playerOneScore, playerTwoScore, computerScore } = settings;
  return (
    <>
      <p className={Styles.title}>Player Score</p>
      <ul className={Styles.scores}>
        <li>P1: {playerOneScore}</li>
        <li>P2: {playerTwoScore}</li>
        <li>AI: {computerScore}</li>
      </ul>
    </>
  );
}

export default Score;
