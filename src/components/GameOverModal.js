import Styles from "./GameOverModal.module.scss";
import Button from "./UI/Button";
import Score from "./UI/Score";

function GameOverModal({ settings, scores, handleReplay, showMainMenu }) {
  const handleClick = () => {
    handleReplay(settings.singlePlayer);
  };

  return (
    <div className={Styles.overlay}>
      {settings.winner === "Draw" ? (
        <div className={Styles.winner}>The game is a draw!</div>
      ) : (
        <div className={Styles.winner}>{settings.winner} Wins!</div>
      )}
      <div className={Styles.menu}>
        <Score scores={scores} />
        <Button onClick={handleClick} text={"Play Again"} />
        <Button onClick={showMainMenu} text={"Main Menu"} />
      </div>
    </div>
  );
}

export default GameOverModal;
