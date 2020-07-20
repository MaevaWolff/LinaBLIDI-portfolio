import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './scss/styles.scss';

// import pages
import HomePage from './pages/HomePage/Home.page';
import WorksPage from './pages/WorksPage/Works.page';
import Header from './components/Header/Header.component';
import Alert from './components/Alert/Alert.component';

function App() {
  return (
    <Router>
      <div className='App'>
        <Alert AlertText='🚧 WORK IN PROGRESS 🚧 ' AlertType='danger' />
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/works' component={WorksPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
