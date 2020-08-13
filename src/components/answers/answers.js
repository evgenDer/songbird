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
    console.log(BIRDS_DATA[this.props.activePage][id - 1]);
    this.setState({ selectedBird: BIRDS_DATA[this.props.activePage][id - 1] });
    console.log(this.state);
    debugger;
  };

  render() {
    const { activePage, rightAnswerNumber } = this.props;
    const { selectedBird } = this.state;
    // console.log(selectedBird);
    return (
      <div className="answers-block">
        <div className="answers-block__list col-md-6">
          <BirdList
            rightAnswerNumber={rightAnswerNumber}
            onBirdSelected={this.onBirdSelected}
            listBirds={BIRDS_DATA[activePage]}
            selectedBird={selectedBird}
          />
        </div>
        <div className="answers-block__bird-details col-md-6">
          <BirdDetails bird={this.state.selectedBird} />
        </div>
      </div>
    );
  }
}
