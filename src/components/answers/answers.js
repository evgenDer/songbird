import React, { Component } from "react";

import BIRDS_DATA from "../../data/birds.js";
import BirdList from "../bird-list";
import BirdDetails from "../bird-details";
import "./answers.css";

export default class Answers extends Component {
  state = {
    selectedBird: null,
  };

  onBirdSelected = (id) => {
    this.setState({ selectedBird: BIRDS_DATA[this.props.activePage][id - 1] });
  };

  render() {
    const {
      activePage,
      rightAnswerNumber,
      changeRightAnswer,
      addScore,
      listBirds,
    } = this.props;
    const { selectedBird } = this.state;
    return (
      <div className="answers-block">
        <div className="answers-block__list col-md-6">
          <BirdList
            rightAnswerNumber={rightAnswerNumber}
            onBirdSelected={this.onBirdSelected}
            selectedBird={selectedBird}
            changeRightAnswer={changeRightAnswer}
            listBirds={listBirds}
            addScore={addScore}
            activePage={activePage}
          />
        </div>
        <div className="answers-block__bird-details col-md-6">
          <BirdDetails bird={selectedBird} activePage={activePage} />
        </div>
      </div>
    );
  }
}
