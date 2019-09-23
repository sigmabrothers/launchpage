import React from 'react';
import logo from './logo1.png';
import styled, {keyframes} from 'styled-components'
import './App.css';
import {pulse} from 'react-animations';

const Pulse = styled.div`animation: 2s ${keyframes`${pulse}`} infinite`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Pulse>
        <img src={logo} className="App-logo" alt="logo" />
        </Pulse>
        <p>
          Coming Soon!
        </p>
        <a
          className="App-link"
          href="mailto:manny@sigmagroup.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get in Touch
        </a>
      </header>
    </div>
  );
}

export default App;
