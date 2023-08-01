import React from "react";
import Button from "./Button";
import Styles from "./ConfirmationModal.module.scss";

function ConfirmationModal({ confirmAction }) {
  // return <div onClick={}>ConfirmationModal</div>;
  return (
    <>
      <div
        onClick={() => confirmAction(false)}
        className={Styles.background}
      ></div>
      <div className={Styles.modal}>
        <h2 className={Styles.heading}>Reset Score</h2>
        <p className={Styles.text}>Are you sure?</p>
        <Button onClick={() => confirmAction(false)} text="No" />
        <Button onClick={() => confirmAction(true)} text="Yes" />
      </div>
    </>
  );
}

export default ConfirmationModal;
