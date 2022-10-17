import React, { Component } from 'react';

class Counter extends Component {
  state = {
    counter: 0,
    fixed: 1
  };
  handleIncrease = () => {
    this.setState(
      {
        counter: this.state.counter + 1
      },
      () => {
        console.log(this.state.counter);
      }
    );
  };

  handleDecrease = () => {
    this.setState(state => ({
      counter: state.counter - 1
    }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <p>고정된 값: {this.state.fixed}</p>
      </div>
    );
  }
}

export default Counter;