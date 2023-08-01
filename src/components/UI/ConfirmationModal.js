import React from "react";

function ConfirmationModal({ resetScore }) {

  
  return <div onClick={() => resetScore(true)}>ConfirmationModal</div>;
}

export default ConfirmationModal;
