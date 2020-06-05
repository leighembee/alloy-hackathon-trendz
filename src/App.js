import React from 'react';

import alloyLogo from './alloy-logotype.png';
import './App.scss';

import ApprovedDenied from './ApprovedDenied';

function App() {
  return (
    <div className="dashboard-view">
      <div className="container-top">
        <header className="topbar flex space no-wrap">
          <span>
            <img className="brand-img" alt="alloy-logo" src={alloyLogo} />
          </span>
        </header>
        <div>
          <ApprovedDenied />
        </div>
      </div >
    </div>
  );
}

export default App;
