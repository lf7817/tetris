import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { State } from '../store/reducers';
import { connect } from 'react-redux';
import intl from 'react-intl-universal';
import { LOCALES, TYPE_LOCALES } from '../locales';
import * as action from '../store/actions';
import { getUrlParam } from '../utils';
import Test from '../components/Test';

import './style.css';

interface Props {
  count: number;
  locales: TYPE_LOCALES;
  addCount: (num: number) => void;
  addCountAsync: () => void;
  reduceCount: (num: number) => void;
  updateLocales: (locales: TYPE_LOCALES) => void;
}

class App extends Component<Props> {
  state = {
    initLocales: false
  };

  async loadLocales(str: TYPE_LOCALES) {
    try {
      await intl.init({
        currentLocale: str,
        locales: LOCALES,
      });
    } finally {
      this.setState({
        initLocales: true
      });
    }
  }

  initLocales(locales: TYPE_LOCALES) {
    const lang = getUrlParam('lang') as TYPE_LOCALES;

    if (lang && LOCALES.hasOwnProperty(lang)) {
      this.props.updateLocales(lang);
      this.loadLocales(lang);
    } else {
      this.loadLocales(locales);
    }
  }

  switchLocales = (locales: TYPE_LOCALES) => {
    window.location.href = `${window.location.origin}${window.location.pathname}?lang=${locales}`;
  }

  componentDidMount() {
    this.initLocales(this.props.locales);
    console.log(this.props);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.locales !== this.props.locales) {
      this.switchLocales(this.props.locales);
    }
  }

  render() {
    const { initLocales } = this.state;
    const { count, addCount, reduceCount, locales, updateLocales, addCountAsync } = this.props;

    if (!initLocales) {
      return null;
    }

    return (
      <div className="app">
        <p>{intl.get('count')}:{count}</p>
        <button onClick={() => addCount(1)}>add</button>
        <button onClick={() => addCountAsync()}>add async</button>
        <button onClick={() => reduceCount(1)}>reduce</button>
        <br />

        <p>{locales}</p>
        <button onClick={() => updateLocales('en-US')}>switch locales(en)</button>
        <button onClick={() => updateLocales('zh-CN')}>switch locales(zh-CN)</button>

        <Test />
      </div>
    );
  }
}

const mapState = (state: State) => ({
  count: state.count,
  locales: state.locales,
});

const mapDispatch = (dispatch: Dispatch) => ({
  addCount: (num: number) => dispatch(action.addCount(num)),
  addCountAsync: () => dispatch(action.addCountAsync()),
  reduceCount: (num: number) => dispatch(action.reduceCount(num)),
  updateLocales: (locales: TYPE_LOCALES) => dispatch(action.updateLocales(locales)),
});

export default connect(
  mapState,
  mapDispatch
)(App);
