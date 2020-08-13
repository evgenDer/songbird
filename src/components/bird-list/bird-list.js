import React, { Component } from "react";

import "./bird-list.css";

export default class BirdList extends Component {
  state = {
    listBirds: null,
    isCorrect: false,
  };

  componentDidMount() {
    const { listBirds } = this.props;

    this.setState({ listBirds });
  }

  componentDidUpdate() {}

  renderItems(arr, selectedBird) {
    const { rightAnswerNumber } = this.props;
    console.log(rightAnswerNumber, selectedBird, this.state);
    return arr.map(({ id, name }, index) => {
      return (
        <li
          className="bird-list__item"
          key={id}
          onClick={() => {
            if (!this.state.isCorrect) {
              if (rightAnswerNumber === id) {
                this.setState({ isCorrect: true });
                arr[index].currentClass = "correct";
              } else {
                arr[index].currentClass = "error";
              }
            }
            this.props.onBirdSelected(id);
          }}
        >
          <span className={arr[index].currentClass}></span>
          {name}
        </li>
      );
    });
  }

  render() {
    let items;
    const { listBirds } = this.state;
    const { selectedBird } = this.props;
    if (this.state.listBirds) {
      items = this.renderItems(listBirds, selectedBird);
    }
    return this.state.listBirds ? (
      <ul className="bird-list list-group">{items}</ul>
    ) : (
      <p>Подождите...</p>
    );
  }
}
