import "./App.css";
import React from "react";
import logo from "./assets/logo.svg";
import picWorkout from "./assets/workout.png";
import styled, { keyframes } from "styled-components";
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

  //animation: ${kf} 2s;

  const moveHeader = keyframes`
    from {
      min-height: 100vh;
    }
    to {
      min-height: 15vh;
    }`;

  const StyledHeader = styled.header`
    animation-delay: 1s;
    animation: ${moveHeader} 1.5s;
  `;

  // const StyledHeader = styled.header`
  //   transition-property: min-height 100vh 15vh;
  // `;

  const AppImg = styled.img`
    width: 100%;
    height: auto;
  `;

  return (
    <div className="App">
      <StyledHeader className="App-header">
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
      </StyledHeader>
      <div className="App-mid">
        <Route exact path="/">
          <AppImg
            src={picWorkout}
            width="100vh"
            height="20vh"
            alt="Join a class to lift weights!"
          />
          {/* <Link to="/acct-type">
          </Link> */}
        </Route>
      </div>
      <div>
        <Route path="/acct-type"></Route>
        <Route path="/stu-register"></Route>
        <Route path="/stu-login"></Route>
        <Route path="/ins-register"></Route>
        <Route path="/ins-login"></Route>
      </div>
      <footer>
        <p>React Demo App created by TL Tsay</p>
      </footer>
    </div>
  );
}

export default App;
