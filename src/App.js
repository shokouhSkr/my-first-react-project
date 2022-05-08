import React, { Component } from "react";
import Movies from "./components/movies";
class App extends Component {
  state = {};
  render() {
    return (
      //* always set a h-screen for main container
      <main className="container mt-14">
        <Movies />
      </main>
    );
  }
}

export default App;
