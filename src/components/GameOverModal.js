import Styles from "./GameOverModal.module.scss";

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
        <button
          aria-label="play again"
          className={Styles.btn}
          onClick={handleClick}
        >
          Play Again
        </button>
        <button
          aria-label="play again"
          className={Styles.btn}
          onClick={handleClick}
        >
          Main Menu
        </button>
      </div>
    </div>
  );
}

export default GameOverModal;
