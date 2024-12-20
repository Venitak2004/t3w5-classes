import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import PokemonFetcher from "./PokemonFetcher";

// React.Component - it creates classes in React
// class App extends React.Component{}
class App extends Component {
  render() {
    // much have the render() function otherwise the class function wont work
    return (
      <div className="App">
        <PokemonFetcher />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
export default App;
