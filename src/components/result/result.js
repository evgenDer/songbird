import React from "react";
import { MAX_SCORE } from "../../data/defaultSettings";
import winBirdSrc from "../../assets/bird-win.jpg";

import "./result.css";

const Result = ({ currentScore, setNewGame }) => {
  let winBlock;
  if (currentScore === MAX_SCORE) {
    winBlock = (
      <div сlassName="result__win">
        <h4>Вы получаете звание юный орнитолог</h4>
        <img src={winBirdSrc} alt="win bird" />
      </div>
    );
  } else winBlock = null;
  return (
    <div className="result">
      <h2>Поздравляем</h2>
      <h3>
        Викторина завершена<br></br> Вы набрали {currentScore} из {MAX_SCORE}
      </h3>
      {winBlock}
      <button
        className="result__button"
        onClick={() => {
          setNewGame();
        }}
      >
        Попробовать ещё раз
      </button>
    </div>
  );
};

export default Result;
