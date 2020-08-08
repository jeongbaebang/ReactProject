import React, { Component } from "react";
import "./analogDisplay.css";

class AnalogDisplay extends Component {
  constructor(props) {
    super(props);
    this.lunchClocks();
    this.state = {
      date: new Date(),
      hours: 0,
      minutes: 0,
      seconds: 0,
      hour: 0,
      minute: 0,
      second: 0,
    };
  }

  /*상태갱신 */
  lunchClocks() {
    setInterval(() => {
      const { date, hours, minutes, seconds } = this.state;

      this.setState({
        date: new Date(),
        hours: ((date.getHours() + 11) % 12) + 1,
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        hour: hours * 30,
        minute: minutes * 6,
        second: seconds * 6,
      });
    }, 500);
  }

  render() {
    return (
      <div className="background">
        <div className="clock">
          <div className="wrap">
            <span
              className="hour"
              style={{ transform: `rotate(${this.state.hour}deg)` }}
            />
            <span
              className="minute"
              style={{ transform: `rotate(${this.state.minute}deg)` }}
            />
            <span
              className="second"
              style={{ transform: `rotate(${this.state.second}deg)` }}
            />
            <span className="dot" />
          </div>
        </div>
      </div>
    );
  }
}

export default AnalogDisplay;
