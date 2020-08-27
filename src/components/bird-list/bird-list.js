import React, { Component } from "react";
import correctAudio from "../../assets/audio/correct.mp3";
import errorAudio from "../../assets/audio/error.mp3";

import "./bird-list.css";

export default class BirdList extends Component {
  state = {
    listBirds: null,
    countAttempts: 0,
  };

  componentWillMount() {
    const { listBirds } = this.props;
    listBirds.map((item) => {
      if (item.hasOwnProperty("currentClass")) {
        delete item.currentClass;
      }
      return item;
    });
    this.setState({ listBirds });
  }

  renderItems(arr, selectedBird) {
    const {
      isRightAnswer,
      rightAnswerNumber,
      changeRightAnswer,
      addScore,
    } = this.props;
    return arr.map(({ id, name }, index) => {
      return (
        <li
          className="bird-list__item"
          key={id}
          onClick={() => {
            if (!isRightAnswer) {
              const audio = new Audio();
              if (rightAnswerNumber === id) {
                changeRightAnswer();
                audio.src = correctAudio;
                audio.play();
                arr[index].currentClass = "correct";
                addScore(this.state.countAttempts);
                this.setState({ countAttempts: 0 });
              } else {
                if (!arr[index].hasOwnProperty("currentClass")) {
                  this.setState((prevState) => ({
                    countAttempts: prevState.countAttempts + 1,
                  }));
                  audio.src = errorAudio;
                  audio.play();
                  arr[index].currentClass = "error";
                }
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
    if (listBirds) {
      items = this.renderItems(listBirds, selectedBird);
    }
    return this.state.listBirds ? (
      <ul className="bird-list list-group">{items}</ul>
    ) : (
      <p>Подождите...</p>
    );
  }
}
