import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './scss/styles.scss';

// import pages
import HomePage from './pages/HomePage/Home.page';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
