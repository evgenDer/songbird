// eslint-disable-next-line
import React from "react";

import "./score.css";

const Score = ({ score }) => {
  return (
    <div className="score">
      <h2>
        Score: <span>{score}</span>
      </h2>
    </div>
  );
};

export default Score;
