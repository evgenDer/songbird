import React, { Component } from "react";
import correctAudio from "../../assets/audio/correct.mp3";
import errorAudio from "../../assets/audio/error.mp3";

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
    const { rightAnswerNumber, changeRightAnswer } = this.props;
    return arr.map(({ id, name }, index) => {
      return (
        <li
          className="bird-list__item"
          key={id}
          onClick={() => {
            if (!this.state.isCorrect) {
              const audio = new Audio();
              if (rightAnswerNumber === id) {
                changeRightAnswer();
                audio.src = correctAudio;
                audio.play();
                this.setState({ isCorrect: true });
                arr[index].currentClass = "correct";
              } else {
                audio.src = errorAudio;
                audio.play();
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
