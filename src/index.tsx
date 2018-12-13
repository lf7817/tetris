/*
 * @Author: lifan
 * @Date: 2018-12-09 21:11:01
 * @Last Modified by: lifan
 * @Last Modified time: 2018-12-13 13:35:41
 */
import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './containers';
import * as serviceWorker from './utils/serviceWorker';
import configureStore from './store';
import { isMobile } from './utils';
import 'normalize.css';
import './assets/scss/index.scss';

const configStore = configureStore();
console.log(isMobile());
ReactDOM.render(
  <Provider store={configStore.store}>
    <PersistGate persistor={configStore.persistor}>
      <App />
    </PersistGate>,
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
