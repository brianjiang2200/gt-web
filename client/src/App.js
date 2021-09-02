import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

import Home from './components/Home';
import Course from './components/Course';
import './App.css';

import homepageLogo from './assets/homepage-logo.png';

const App = () => {
  return (
    <Router>
    <div className="App">
      <header>
        <div className='logo-container'>
          GT
        </div>
        <div className='menu-container'>
          <Link to="/" title="Home">
            <img className='homepageLogo' src={homepageLogo} alt="" width="30" />
          </Link>
        </div>
      </header>
      <Switch>
        <Route path="/courses/:id">
          <Course />
        </Route>
        <Route>
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
