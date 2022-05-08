import React, { Component } from "react";

class Counter extends Component {
  // a property
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    // rendering classes dynamiclly:
    let classes = this.getBadgeClasses();

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="rounded-md border bg-gray-500 px-2 text-lg font-medium text-gray-50"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "m-2 rounded-md px-1.5 font-bold text-gray-800 bg-"; //* bg-
    classes +=
      this.state.count === 0
        ? "yellow-400" //* yellow-400
        : "blue-500";
    return classes;
  }

  // a method
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
    // return count === 0 ? <h1>"Zero"</h1> : count; -> we can use jsx directly!
  }
}

export default Counter;
