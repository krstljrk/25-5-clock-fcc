import React from "react";
import "../stylesheets/styles.scss";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 5,
      session: 25,
      seconds: "00",
      current: `${this.state.session}:${this.state.seconds}`,
      sessionLabel: "Session",
      paused: true,
    };

    this.incrementBreak = this.incrementBreak.bind(this);
    this.decrementBreak = this.decrementBreak.bind(this);
    this.incrementSession = this.incrementSession.bind(this);
    this.decrementSession = this.decrementSession.bind(this);
    this.startStop = this.startStop.bind(this);
    this.reset = this.reset.bind(this);
  }

  incrementBreak = () => {
    if (this.state.break >= 0 && this.state.break < 60) {
      this.setState({
        break: this.state.break + 1,
      });
    }
  };

  incrementSession = () => {
    if (this.state.session >= 0 && this.state.session < 60) {
        this.setState({
        session: this.state.session + 1,
        });
    }
  };

  decrementBreak = () => {
    if (this.state.break > 0 && this.state.break <= 60) {
        this.setState({
            break: this.state.break - 1,
        });
    }
  };

  decrementSession = () => {
    if (this.state.session > 0 && this.state.session <= 60) {
        this.setState({
        session: this.state.session - 1,
        });
    }
  };

  startStop = () => {
      if (!this.state.paused) {
          let minutes;
          let seconds;
          setInterval(() => {

          }, 1000)
      }
  };

  reset = () => {
    this.setState({
      break: "5",
      session: "25",
      current: "25:00",
      paused: true,
    });
  };

  render() {
    return (
      <div>
        <div className="header">
          <h1>25+5 Clock</h1>
        </div>
        <div className="clock-container">
          <div className="row panel">
            <div className="control-panel col-xs-4">
              <h4 id="break-label">Break</h4>
              <div id="break-length" className="time-indicator">
                {this.state.break}
              </div>
              <div className="row btns-panel">
                <div className="col-xs-6">
                  <button
                    id="break-decrement"
                    className="btn btn-outline-secondary"
                    onClick={this.decrementBreak}
                  >
                    🔽
                  </button>
                </div>
                <div className="col-xs-6">
                  <button
                    id="break-increment"
                    className="btn btn-outline-secondary"
                    onClick={this.incrementBreak}
                  >
                    🔼
                  </button>
                </div>
              </div>
            </div>
            <div className="control-panel center-panel col-xs-4">
              <button
                id="start_stop"
                className="btn btn-outline-secondary"
                onClick={this.startStop}
              >
                ⏯
              </button>
              <button
                id="reset"
                className="btn btn-outline-secondary"
                onClick={this.reset}
              >
                🔄
              </button>
            </div>
            <div className="control-panel col-xs-4">
              <h4 id="session-label">Session</h4>
              <div id="session-length" className="time-indicator">
                {this.state.session}
              </div>
              <div className="row btns-panel">
                <div className="col-xs-6">
                  <button
                    id="session-decrement"
                    className="btn btn-outline-secondary"
                    onClick={this.decrementSession}
                  >
                    🔽
                  </button>
                </div>
                <div className="col-xs-6">
                  <button
                    id="session-increment"
                    className="btn btn-outline-secondary"
                    onClick={this.incrementSession}
                  >
                    🔼
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="timer">
            <h5 id="timer-label">{this.state.sessionLabel}</h5>
            <h3 id="time-left">{this.state.current}</h3>
          </div>
        </div>
        <div className="footer">
          <h6>freeCodeCamp project - by Kristel Juurik</h6>
        </div>
      </div>
    );
  }
}
