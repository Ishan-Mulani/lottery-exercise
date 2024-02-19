import React, { Component } from "react";
import "./Balls.css";

class Ball extends Component {
  static defaultProps = {
    luckyNum: "",
  };
  render() {
    const { luckyNum } = this.props;
    return <div className="Balls">{luckyNum}</div>;
  }
}

export default Ball;
