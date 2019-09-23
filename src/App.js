import React from 'react';
import logo from './logo1.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
