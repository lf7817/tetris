import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { State } from '../store/reducers';
import { connect } from 'react-redux';
import intl from 'react-intl-universal';
import { addCount, reduceCount, updateLocales } from '../store/actions';
import { getUrlParam } from '../utils';
import Test from '../components/Test';

import './style.css';

const LOCALES = {
  'en-US': require('../locales/en-US.json'),
  'zh-CN': require('../locales/zh-CN.json'),
};

interface Props {
  count: number;
  locales: string;
  addCount: (num: number) => void;
  reduceCount: (num: number) => void;
  updateLocales: (locales: string) => void;
}

class App extends Component<Props> {
  public state = {
    initLocales: false
  };

  loadLocales(str: string) {
    intl.init({
      currentLocale: str,
      locales: LOCALES,
    }).then(() => {
      this.setState({
        initLocales: true
      });
    });
  }

  initLocales(locales: string) {
    const lang = getUrlParam('lang');

    if (lang && LOCALES.hasOwnProperty(lang)) {
      this.props.updateLocales(lang);
      this.loadLocales(lang);
    } else {
      this.loadLocales(locales);
    }
  }

  switchLocales = (locales: keyof typeof LOCALES) => {
    window.location.href = window.location.origin + '?lang=' + locales;
  }

  componentDidMount() {
    this.initLocales(this.props.locales);
  }

  render() {
    const { initLocales } = this.state;
    const { count, addCount, reduceCount, locales } = this.props;

    if (!initLocales) {
      return null;
    }

    return (
      <div className="app">
        <p>{intl.get('count')}:{count}</p>
        <button onClick={() => addCount(2)}>add</button>
        <button onClick={() => reduceCount(1)}>reduce</button>
        <br />

        <p>{locales}</p>
        <button onClick={() => this.switchLocales('en-US')}>switch locales(en)</button>
        <button onClick={() => this.switchLocales('zh-CN')}>switch locales(zh-CN)</button>

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
  addCount: (num: number) => dispatch(addCount(num)),
  reduceCount: (num: number) => dispatch(reduceCount(num)),
  updateLocales: (locales: string) => dispatch(updateLocales(locales)),
});

export default connect(
  mapState,
  mapDispatch
)(App);
