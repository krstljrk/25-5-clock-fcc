import React from 'react'
import '../stylesheets/styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';


export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

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
                            {/*Break time length indicator here*/}5
                        </div>
                        <div className="row btns-panel">
                            <div className="col-xs-6">
                                <button id="break-decrement" className="btn btn-outline-secondary">🔽</button>
                            </div>
                            <div className="col-xs-6">
                                <button id="break-increment" className="btn btn-outline-secondary">🔼</button>
                            </div>
                        </div>
                        
                    </div>
                    <div className="control-panel center-panel col-xs-4">
                        <button id="start_stop" className="btn btn-outline-secondary">⏯</button>
                        <button id="reset" className="btn btn-outline-secondary">🔄</button>
                    </div>
                    <div className="control-panel col-xs-4">
                        <h4 id="session-label">Session</h4>
                        <div id="session-length" className="time-indicator">
                            {/*Session time length indicator here*/}25
                        </div>
                        <div className="row btns-panel">
                            <div className="col-xs-6">
                                <button id="session-decrement" className="btn btn-outline-secondary">🔽</button>
                            </div>
                            <div className="col-xs-6">
                                <button id="session-increment" className="btn btn-outline-secondary">🔼</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="timer">
                    <h5 id="timer-label">Session</h5>
                    <h3 id="time-left">25:00</h3>
                </div>
            </div>
            </div>
            
        )
    }
}