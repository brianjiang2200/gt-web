import React from 'react';

import Course from './components/Course';
import './App.css';

import homepageLogo from './assets/homepage-logo.png';

const App = () => {
  return (
    <div className="App">
      <header>
        <div className='logo-container'>
          GT
        </div>
        <div className='menu-container'>
          <a href="/">
            <img className='homepageLogo' src={homepageLogo} alt="" width="30"/>
          </a>
        </div>
      </header>
      <Course />
    </div>
  );
}

export default App;
