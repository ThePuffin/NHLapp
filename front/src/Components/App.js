import React, { Component } from "react";
import logo from "../images/logo.png";
import "./App.css";
import Register from "./register/Register";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to my NHL's stats.</p>
        </header>
        <Register />
      </div>
    );
  }
}

export default App;
