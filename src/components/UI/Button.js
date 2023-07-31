import React from "react";
import Styles from "./Button.module.scss";

function Button({ onClick, text }) {
  return (
    <>
      <button className={Styles.btn} onClick={onClick}>
        {text}
      </button>
    </>
  );
}

export default Button;
