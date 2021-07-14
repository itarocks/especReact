import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./HelloWolrd";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld />

        <img src={logo} className="App-logo" alt="logo" />
        <p>OLá mundo</p>
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

export default App;
