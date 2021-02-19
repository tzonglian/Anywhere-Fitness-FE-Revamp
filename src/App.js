import "./App.css";
import React from "react";
import logo from "./logo.svg";
//import styled, { keyframes } from "styled-components";
import { Route, Link, useHistory } from "react-router-dom";

function App() {
  //const { push } = useHistory();

  // const kf = keyframes`
  // to {
  //   transform:
  // }
  // /* 33% {
  //   transform: scale(.6);
  // }
  // 66% {
  //   transform: scale(1.4);
  // } */
  // `;

  // const StyledHeader = styled.h1`
  //   animation: ${kf} 2s;
  // `;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1 className="txt-white">
          Anywhere<br></br>
          <span className="txt-red">Fitness</span>
        </h1> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/*<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <footer>
        <p>test text</p>
      </footer>
    </div>
  );
}

export default App;
