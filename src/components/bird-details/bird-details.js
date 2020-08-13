import React, { Component } from "react";

import "./bird-details.css";
import AudioPlayer from "react-h5-audio-player";

export default class BirdDetails extends Component {
  state = {
    bird: null,
  };

  componentDidMount() {
    this.updateBird();
  }

  componentDidUpdate(prevProps) {
    if (this.props.birdId !== prevProps.birdId) {
      this.updateBird();
    }
  }

  updateBird() {
    const { bird } = this.props;
    if (!bird) {
      return;
    }

    this.setState({ bird });
  }

  render() {
    const { bird } = this.props;

    if (!bird) {
      return <span>Послушайте плеер. Выберите птицу из списка</span>;
    }

    const { name, audio, species, description, image } = bird;

    return (
      <div className="bird-details">
        <div className="bird-details__body">
          <img src={image} alt={name} />
          <div className="bird-info">
            <h3>{name}</h3>
            <hr></hr>
            <h4>{species}</h4>
            <hr></hr>
            <AudioPlayer
              className="question-block__audio_player"
              src={audio}
              autoPlayAfterSrcChange={false}
              ref={(current) => (this.player = current)}
            />
          </div>
        </div>
        <div className="bird-details__description">
          <p>{description}</p>
        </div>
      </div>
    );
  }
}
