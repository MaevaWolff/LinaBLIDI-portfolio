import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './scss/styles.scss';
import cover from './assets/cover.png'

import HomePage from './pages/HomePage/Home.page';
import WorksPage from './pages/WorksPage/Works.page';
import Header from './components/Header/Header.component';
import Alert from './components/Alert/Alert.component';
import Footer from './components/Footer/Footer.component';

function App() {
  return (
    <Router>
      <div className='App'>
        <Helmet>
          <meta name="description" content="Hey, I'm Lina Blidi a UI UX Designer, student and freelance from Paris :relaxed:" />

          <meta property="og:type" content="website"></meta>
          <meta property="og:url" content="https://linablidi.netlify.app/" />
          <meta property="og:title" content="Lina Blidi Portfolio"></meta>
          <meta property="og:description" content="Hey, I'm Lina Blidi a UI UX Designer, student and freelance from Paris :relaxed:"></meta>
          <meta property="og:image" content={cover} />

          <meta property="twitter:card" content="summary_large_image"></meta>
          <meta property="twitter:url" content="https://linablidi.netlify.app/" />
          <meta property="twitter:title" content="Lina Blidi Portfolio"></meta>
          <meta property="twitter:description" content="Hey, I'm Lina Blidi a UI UX Designer, student and freelance from Paris :relaxed:"></meta>
          <meta property="twitter:image" content={cover} />
        </Helmet>
        <Alert AlertText='🚧 WORK IN PROGRESS 🚧 ' AlertType='danger' />
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/works' component={WorksPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
