import React from 'react';

import Course from './components/Course';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header>
        <div className='logo-container'>
          gt
        </div>
        <div className='menu-container'>
          <a href="/">Home</a>
        </div>
      </header>
      <Course />
    </div>
  );
}

export default App;
