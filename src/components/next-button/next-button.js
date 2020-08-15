import React from "react";

import "./next-button.css";

const Next = ({ changeRound, isRightAnswer, changeRightAnswer }) => {
  let className = "btn_next";
  if (isRightAnswer) {
    className += " correct";
  }
  return (
    <button
      className={className}
      onClick={() => {
        if (isRightAnswer) {
          changeRightAnswer();
          changeRound();
        }
      }}
    >
      Дальше
    </button>
  );
};

export default Next;
