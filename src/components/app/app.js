// eslint-disable-next-line
import React, { Component } from "react";
import ErrorBoundry from "../error-boundry";
import Header from "../header";
import "./app.css";
import Question from "../question";
import Answers from "../answers";
import Next from "../next-button";

export default class App extends Component {
  state = {
    currentRound: 0,
    gamePoints: 5,
    isRightAnswer: false,
    rightAnswerNumber: 1,
    userAnswer: null,
    endGame: false,
    currentScore: 0,
  };

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

  render() {
    const {
      gamePoints,
      isRightAnswer,
      rightAnswerNumber,
      userAnswer,
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
          />
          <Answers
            activePage={currentRound}
            rightAnswerNumber={rightAnswerNumber}
            changeRightAnswer={this.changeRightAnswer}
          />
          <Next />
        </div>
      </ErrorBoundry>
    );
  }
}
