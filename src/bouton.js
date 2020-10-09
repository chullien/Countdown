import React, { Component } from "react";

class button extends Component {
  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
  }

  render() {
    return (
      <div style={{ textAlign: "center" }} className="container">
        <button className="button" onClick={this.playAudio}>
          Hohoho !
        </button>
        <audio className="audio-element">
          <source src="audio/son.mp3" type="audio/mpeg" />
        </audio>
        <a href="pdf/Lettre.pdf" download="lettre au père Noël">
          <button className="button">Lettre au père Noël</button>
        </a>
      </div>
    );
  }
}

export default button;
