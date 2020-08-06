import React, { Component } from "react";
import "./round-list.css";

export default class RoundList extends Component {
  render() {
    const { pages, activePage } = this.props;
    console.log(activePage);
    return (
      <ul className="round-list">
        {pages.map((page, ind) => (
          <li key={page.id} className={ind === activePage ? "active" : ""}>
            {page.name}
          </li>
        ))}
      </ul>
    );
  }
}
