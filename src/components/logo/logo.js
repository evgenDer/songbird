import React from "react";

import "./logo.css";

import iconBird from "./bird.svg";

const Logo = () => {
  return (
    <div className="logo">
      <img src={iconBird} alt="bird icon" />
      <h1>
        Song<span>bird</span>
      </h1>
    </div>
  );
};

export default Logo;
