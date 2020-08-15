// eslint-disable-next-line
import React, { Component } from "react";
import ErrorBoundry from "../error-boundry";
import Header from "../header";
import "./app.css";
import Question from "../question";
import Answers from "../answers";
import { DEFAULT_SETTINGS, MAX_SCORE_ROUND } from "./defaultSettings";
import Next from "../next-button";
import BIRDS_DATA from "../../data/birds";

export default class App extends Component {
  state = { ...DEFAULT_SETTINGS };

  roundList = [
    { id: 0, name: "Воробьинообразные" },
    { id: 1, name: "Журавлеобразные" },
    { id: 2, name: "Курообразные" },
    { id: 3, name: "Аистообразные" },
    { id: 4, name: "Ракшеобразные" },
    { id: 5, name: "Ржанкообразные" },
  ];

  changeRightAnswer = () => {
    this.setState((prevState) => ({
      isRightAnswer: !prevState.isRightAnswer,
    }));
  };

  setRightAnswer = (rightAnswerNumber) => {
    this.setState({ rightAnswerNumber });
  };

  changeRound = () => {
    const countRounds = 5;
    const { currentRound } = this.state;
    const countAnswerVariants = 6;
    const rightAnswerNumber =
      Math.floor(Math.random() * countAnswerVariants) + 1;
    this.setState({ rightAnswerNumber });
    if (currentRound !== countRounds) {
      this.setState((prevState) => ({
        currentRound: prevState.currentRound + 1,
      }));
    } else {
      this.setState({ ...DEFAULT_SETTINGS });
    }
  };

  addScore = (countAttempts = 0) => {
    this.setState((prevState) => ({
      currentScore: prevState.currentScore + MAX_SCORE_ROUND - countAttempts,
    }));
  };

  render() {
    const {
      isRightAnswer,
      rightAnswerNumber,
      endGame,
      currentRound,
      currentScore,
    } = this.state;
    return (
      <ErrorBoundry>
        <div id="songbird" className="wrapper">
          <Header
            pages={this.roundList}
            score={currentScore}
            activePage={currentRound}
          />
          <Question
            activePage={currentRound}
            isRightAnswer={isRightAnswer}
            rightAnswerNumber={rightAnswerNumber}
            setRightAnswer={this.setRightAnswer}
          />
          <Answers
            key={currentRound}
            activePage={currentRound}
            rightAnswerNumber={rightAnswerNumber}
            changeRightAnswer={this.changeRightAnswer}
            addScore={this.addScore}
            listBirds={BIRDS_DATA[currentRound]}
          />
          <Next
            changeRound={this.changeRound}
            isRightAnswer={isRightAnswer}
            changeRightAnswer={this.changeRightAnswer}
            setRightAnswer={this.setRightAnswer}
          />
        </div>
      </ErrorBoundry>
    );
  }
}
