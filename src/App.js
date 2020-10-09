import React, { Component, Fragment } from "react";
import Countdown from "./countdown";
import Button from "./bouton";

class App extends Component {
  render() {
    const currentDate = new Date();
    const year =
      currentDate.getMonth() === 11 && currentDate.getDate() > 23
        ? currentDate.getFullYear() + 1
        : currentDate.getFullYear();
    return (
      <Fragment>
        <header className="header">
          <h1>Le Père Noël arrive dans :</h1>
        </header>
        <main>
          <div className="countdown">
            <Countdown date={`${year}-12-25T00:00:00`} />
            <p className="TextePereNoel">
              En attendant soit sage, écoute et fais tes devoirs ! <br />
              Le père Noël
            </p>
          </div>

          <div className="command">
            <Button />
          </div>
        </main>
      </Fragment>
    );
  }
}

export default App;
