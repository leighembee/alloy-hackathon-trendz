import React from 'react';
import alloyLogo from './alloy-logotype.png';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="flex space no-wrap">
        <span className="flex start align-end">
          <img  alt="alloy-logo" src={alloyLogo} />
        </span>
      </header>
    </div>
  );
}

export default App;
