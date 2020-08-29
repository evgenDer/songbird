import React from "react";

import "./error-indicator.css";
import icon from "./bird-sad.png";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon" />
      <h2>Sorry!</h2>
      <p>Something has gone terribly wrong</p>
      <span></span>
    </div>
  );
};

export default ErrorIndicator;
