import React from 'react';
import ReactDOM from 'react-dom';
import 'shared/styles/_reset.scss';
import 'shared/styles/main.scss';
import App from './components/app/App';

const startApp = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root'),
  );
};

if (window.cordova) {
  document.addEventListener('deviceready', startApp.bind(window));
} else {
  startApp();
}
