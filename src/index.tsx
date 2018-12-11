/*
 * @Author: lifan
 * @Date: 2018-12-09 21:11:01
 * @Last Modified by: lifan
 * @Last Modified time: 2018-12-11 16:41:01
 */
import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers';
import * as serviceWorker from './utils/serviceWorker';
import store from './store';
import 'normalize.css';
import './assets/scss/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register({
  onUpdate: (registration: ServiceWorkerRegistration) => {
    if (confirm('监测到更新，点击更新')) {
      try {
        registration.waiting && registration.waiting.postMessage('skipWaiting');
      } catch (e) {
        window.location.reload();
      }
    }
  },
  onSuccess: () => {
    console.log('success');
  }
});
