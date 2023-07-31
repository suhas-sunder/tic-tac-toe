import Styles from "./GameOverModal.module.scss";
import Button from "./UI/Button";

function GameOverModal({ settings, handleReplay }) {
  const { winner, playerOneScore, playerTwoScore, computerScore } = settings;

  const handleClick = () => {
    handleReplay();
  };

  return (
    <div className={Styles.overlay}>
      {winner === "Draw" ? (
        <div className={Styles.winner}>The game is a draw!</div>
      ) : (
        <div className={Styles.winner}>{winner} Wins!</div>
      )}
      <div className={Styles.menu}>
        <p className={Styles.title}>Player Score</p>
        <ul className={Styles.scores}>
          <li className={Styles.score}>P1: {playerOneScore}</li>
          <li className={Styles.score}>P2: {playerTwoScore}</li>
          <li className={Styles.score}>AI: {computerScore}</li>
        </ul>
        <Button onClick={handleClick} text={"Play Again"} />
        <Button onClick={handleClick} text={"Main Menu"} />
      </div>
    </div>
  );
}

export default GameOverModal;
