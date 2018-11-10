import React, { Component } from "react";
import logo from "../images/logo.png";
import "./App.css";
import Register from "./register/Register";
import SearchAppBar from "./appBar/AppBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchAppBar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to my NHL's stats.</h1>
        </header>
        <Register />
      </div>
    );
  }
}

export default App;
