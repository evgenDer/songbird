import React, { Component, createRef } from "react";
import bird from "../../assets/bird-unknown.jpg";
import AudioPlayer from "react-h5-audio-player";
import BIRDS_DATA from "../../data/birds";
import "react-h5-audio-player/lib/styles.css";
import "./question.css";

export default class Question extends Component {
  componentDidMount() {
    const countRounds = 6;
    let { rightAnswerNumber } = this.props;
    rightAnswerNumber = Math.floor(Math.random() * countRounds) + 1;
  }

  componentDidUpdate() {
    const { isRightAnswer } = this.props;
    console.log(isRightAnswer);
    if (isRightAnswer) {
      this.player.current.audio.current.pause();
    }
  }

  player = createRef();

  render() {
    const { isRightAnswer, rightAnswerNumber, activePage } = this.props;
    console.log(isRightAnswer);
    const dataRound = BIRDS_DATA[activePage];
    return (
      <div className="question-block">
        <div className="question-block__img">
          <img
            src={isRightAnswer ? dataRound[rightAnswerNumber - 1].image : bird}
            alt="bird"
          />
        </div>
        <div className="question-block__source">
          <p>
            {isRightAnswer
              ? `${dataRound[rightAnswerNumber - 1].name}`
              : "******"}
          </p>
          <hr></hr>
          <AudioPlayer
            className="question-block__audio_player"
            layout="horizontal"
            src={dataRound[rightAnswerNumber - 1].audio}
            autoPlayAfterSrcChange={false}
            ref={this.player}
          />
        </div>
      </div>
    );
  }
}
