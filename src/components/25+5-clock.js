import React from "react";
import "../stylesheets/styles.scss";

let timer;

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0,
      seconds: 0,
      break: 5,
      session: 25,
      current: "25:00",
      sessionLabel: "Session",
      timerBool: false,
      timerPaused: false
    };

    this.incrementBreak = this.incrementBreak.bind(this);
    this.decrementBreak = this.decrementBreak.bind(this);
    this.incrementSession = this.incrementSession.bind(this);
    this.decrementSession = this.decrementSession.bind(this);
    this.startStop = this.startStop.bind(this);
    this.reset = this.reset.bind(this);
  }

  incrementBreak = () => {
    if (this.state.break >= 1 && this.state.break < 60 && !this.state.timerBool) {
      this.setState({
        break: this.state.break + 1,
      });
    }
  };

  incrementSession = () => {
    if (this.state.session >= 1 && this.state.session < 60 && !this.state.timerBool) {
      this.setState({
        session: this.state.session + 1,
      });
    }
  };

  decrementBreak = () => {
    if (this.state.break > 1 && this.state.break <= 60 && !this.state.timerBool) {
      this.setState({
        break: this.state.break - 1,
      });
    }
  };

  decrementSession = () => {
    if (this.state.session > 1 && this.state.session <= 60 && !this.state.timerBool) {
      this.setState({
        session: this.state.session - 1,
      });
    }
  };
 
  startStop = () => {
    let time;
    let totalMinutes = this.state.session;
    let actualSeconds = this.state.seconds;
    let secondString = "00";

    if (this.state.timerBool) {
      console.log("stop counting");

      clearInterval(timer);

      this.setState({
        timerBool: false,
        timerPaused: true
      });
    } else {
      console.log("start counting");

      this.setState({
        timerBool: true,
      });

      timer = setInterval(() => {
        if(this.state.timerPaused) {
          totalMinutes = this.state.minutes;
          actualSeconds = this.state.seconds;

          this.setState({
            timerPaused: false
          })
        }
          console.log("tick-tock"); 
          // If session's time runs out:
          if (totalMinutes === 0 && actualSeconds === 0 && this.state.sessionLabel === "Session") {
            this.audioSound.play();
            this.setState({
              sessionLabel: "Break",
            })

            totalMinutes = Number(this.state.break);
          }

          // If break's time runs out
          if (totalMinutes === 0 && actualSeconds === 0 && this.state.sessionLabel === "Break") {
            this.audioSound.play();
            this.setState({
              sessionLabel: "Session",
            })

            totalMinutes = Number(this.state.session);
          }

          // Decrease minutes if seconds reach 0
          if (actualSeconds === 0) {
            totalMinutes--;
            actualSeconds = 60;
          }
    
          actualSeconds--;
    
          if (actualSeconds < 10) {
            secondString = "0" + actualSeconds;
          } else {
            secondString = String(actualSeconds);
          }
    
          time = `${totalMinutes}:${secondString}`;
    
          this.setState({
            current: time,
            minutes: totalMinutes,
            seconds: actualSeconds
          });
      }, 1000);
    }
  };

  reset = () => {
    clearInterval(timer);
    this.audioSound.pause();
    this.audioSound.currentTime = 0;

    this.setState({
      minutes: 0,
      seconds: 0,
      break: 5,
      session: 25,
      current: "25:00",
      sessionLabel: "Session",
      timerBool: false,
      timerPaused: false
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
              <h4 id="break-label">Break length</h4>
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
              <h4 id="session-label">Session length</h4>
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
        <audio
          id="beep"
          preload="auto"
          ref={(audio) => {
            this.audioSound = audio;
          }}
          src="https://cdn.staticcrate.com/stock-hd/audio/soundscrate-magical-hit-with-sheen-1.mp3"
        />
      </div>
    );
  }
}
