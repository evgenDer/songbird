import React from "react";

import Logo from "../logo";
import Score from "../score";
import RoundList from "../round-list/round-list";

import "./header.css";

const Header = ({ pages, score, activePage }) => {
  return (
    <div className="header">
      <div className="header__info">
        <Logo />
        <Score score={score} />
      </div>
      <div className="header__nav">
        <RoundList pages={pages} activePage={activePage} />
      </div>
    </div>
  );
};

export default Header;
