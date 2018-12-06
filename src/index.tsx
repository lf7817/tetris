import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.scss';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

interface     Person {
  name: string;
  age: number;
}

let tom: Person = {
  name: 'Tom',
  age: 25
};

if (tom.age === 25) {
  console.log(tom.name + 'is 25 years old.');
}
