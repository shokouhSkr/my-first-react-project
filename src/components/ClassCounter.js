import React, { Component } from "react";

class ClassCounter extends Component {
  state = {
    count: 0,
  };

  addOneHandler = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  addTwoHandler = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 2 };
    });
  };

  addFiveHandler = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 5 };
    });
  };

  render() {
    return (
      <div className="container mt-4 w-1/2 rounded bg-yellow-50 p-4 ring-1 ring-yellow-500">
        <h2>count - {this.state.count}</h2>
        <div className="flex items-center justify-center gap-x-2">
          <button
            className="mt-4 rounded bg-blue-100 p-2 ring-1 ring-blue-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            onClick={this.addOneHandler}
          >
            add One
          </button>
          <button
            className="mt-4 rounded bg-red-100 p-2 ring-1 ring-red-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            onClick={this.addTwoHandler}
          >
            add Two
          </button>
          <button
            className="mt-4 rounded bg-green-100 p-2 ring-1 ring-green-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            onClick={this.addFiveHandler}
          >
            add Five
          </button>
        </div>
      </div>
    );
  }
}

export default ClassCounter;
