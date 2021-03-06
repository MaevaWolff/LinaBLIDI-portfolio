import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './styles/gobalStyle';

import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from 'styled-components';

const theme = {
  neutralBlack: '#151515',
  primaryColor: '#b8a7ea',
  white: '#ffffff'
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
