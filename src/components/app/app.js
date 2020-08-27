// eslint-disable-next-line
import React, { Component } from "react";
import ErrorBoundry from "../error-boundry";
import Header from "../header";
import "./app.css";
import Question from "../question";
import Answers from "../answers";
import { DEFAULT_SETTINGS, MAX_SCORE_ROUND } from "../../data/defaultSettings";
import Next from "../next-button";
import Result from "../result";
import BIRDS_DATA from "../../data/birds";

export default class App extends Component {
  state = { ...DEFAULT_SETTINGS };

  roundList = [
    { id: 0, name: "Воробьинообразные" },
    { id: 1, name: "Журавлеобразные" },
    { id: 2, name: "Курообразные" },
    { id: 3, name: "Аистообразные" },
    { id: 4, name: "Гусеобразные" },
    { id: 5, name: "Ржанкообразные" },
  ];

  componentDidMount() {
    this.setRightAnswer();
  }

  changeRightAnswer = () => {
    this.setState((prevState) => ({
      isRightAnswer: !prevState.isRightAnswer,
    }));
  };

  setRightAnswer = () => {
    const countAnswerVariants = 6;
    const rightAnswerNumber =
      Math.floor(Math.random() * countAnswerVariants) + 1;
    this.setState({ rightAnswerNumber });
    console.log(rightAnswerNumber);
  };

  changeRound = () => {
    const countRounds = 5;
    const { currentRound } = this.state;
    this.setRightAnswer();
    if (currentRound !== countRounds) {
      this.setState((prevState) => ({
        currentRound: prevState.currentRound + 1,
      }));
    } else {
      this.setState({ isEndGame: true });
    }
  };

  setNewGame = () => {
    this.setState({ ...DEFAULT_SETTINGS });
  };

  addScore = (countAttempts = 0) => {
    this.setState((prevState) => ({
      currentScore: prevState.currentScore + MAX_SCORE_ROUND - countAttempts,
    }));
  };

  renderHeader = () => {
    const { currentScore, currentRound } = this.state;
    return (
      <Header
        pages={this.roundList}
        score={currentScore}
        activePage={currentRound}
      />
    );
  };

  render() {
    const {
      isRightAnswer,
      rightAnswerNumber,
      isEndGame,
      currentRound,
      currentScore,
    } = this.state;
    const HEADER = this.renderHeader();
    return !isEndGame ? (
      <ErrorBoundry>
        <div id="songbird" className="wrapper">
          {HEADER}
          <Question
            activePage={currentRound}
            isRightAnswer={isRightAnswer}
            rightAnswerNumber={rightAnswerNumber}
          />
          <Answers
            key={currentRound}
            activePage={currentRound}
            rightAnswerNumber={rightAnswerNumber}
            changeRightAnswer={this.changeRightAnswer}
            addScore={this.addScore}
            isRightAnswer={isRightAnswer}
            listBirds={BIRDS_DATA[currentRound]}
          />
          <Next
            changeRound={this.changeRound}
            isRightAnswer={isRightAnswer}
            changeRightAnswer={this.changeRightAnswer}
          />
        </div>
      </ErrorBoundry>
    ) : (
      <div id="songbird" className="wrapper">
        {HEADER}
        <Result currentScore={currentScore} setNewGame={this.setNewGame} />
      </div>
    );
  }
}
