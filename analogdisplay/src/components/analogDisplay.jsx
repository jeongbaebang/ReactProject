import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "AnalogDisplay.css";

class AanalogDisplay extends Component {
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
      this.setState({
        date: new Date(),
        hours: ((this.state.date.getHours() + 11) % 12) + 1,
        minutes: this.state.date.getMinutes(),
        seconds: this.state.date.getSeconds(),
        hour: this.state.hours * 30,
        minute: this.state.minutes * 6,
        second: this.state.seconds * 6,
      });
    }, 100);
  }

  render() {
    const hour = { transform: `rotate(${this.state.hour}deg)` };
    const minute = { transform: `rotate(${this.state.minute}deg)` };
    const second = { transform: `rotate(${this.state.second}deg)` };
    return (
      <Container className="background">
        <div className="clock">
          <div className="wrap">
            <span className="hour" style={hour} />
            <span className="minute" style={minute} />
            <span className="second" style={second} />
            <span className="dot" />
          </div>
        </div>
      </Container>
    );
  }
}

export default AanalogDisplay;
