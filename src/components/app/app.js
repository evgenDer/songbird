// eslint-disable-next-line
import React, { Component } from "react";
import ErrorBoundry from "../error-boundry";
import Header from "../header";
import "./app.css";

export default class App extends Component {
  state = {
    currentRound: 0,
    gamePoints: 5,
    rightAnswer: false,
    rightAnswerNumber: 1,
    userAnswer: null,
    endGame: false,
    currentScore: 0,
  };

  roundList = [
    { id: 1, name: "Воробьинообразные" },
    { id: 2, name: "Журавлеобразные" },
    { id: 3, name: "Курообразные" },
    { id: 4, name: "Аистообразные" },
    { id: 5, name: "Ракшеобразные" },
    { id: 6, name: "Ржанкообразные" },
  ];

  render() {
    const {
      gamePoints,
      rightAnswer,
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
        </div>
      </ErrorBoundry>
    );
  }
}
