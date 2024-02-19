import React, { Component } from "react";
import Ball from "./Ball";
import "./Lottery.css";

class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    numberOfBalls: 6,
    maxNum: 40,
  };
  constructor(props) {
    super(props);
    this.state = { lotteryBalls: Array(this.props.numberOfBalls).fill(true) };
    this.handleClick = this.handleClick.bind(this);
  }

  //   My mistake
  //   generateLottery() {
  //     const lotArr = Array(this.props.numberOfBalls)
  //       .fill(true)
  //       .map((el) => {
  //         return Math.floor(Math.random() * this.props.maxNum) + 1;
  //       });

  //     this.setState({ LotteryBalls: lotArr });
  //   }

  generateLottery() {
    this.setState((currState) => ({
      lotteryBalls: currState.lotteryBalls.map((el) => {
        return Math.floor(Math.random() * this.props.maxNum) + 1;
      }),
    }));
  }
  handleClick() {
    this.generateLottery();
  }
  render() {
    const { title } = this.props;
    return (
      <div className="Lottery">
        <h1>{title}</h1>
        <div className="Lottery-Balls-Container">
          {console.log("test", this.state.lotteryBalls)}
          {this.state.lotteryBalls.map((ball) => {
            return <Ball luckyNum={ball} />;
          })}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </div>
    );
  }
}

export default Lottery;
