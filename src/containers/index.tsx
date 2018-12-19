import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { State } from '../store/reducers';
import { connect } from 'react-redux';
import intl from 'react-intl-universal';
import { LOCALES, TYPE_LOCALES } from '../locales';
import * as action from '../store/actions';
import { getUrlParam } from '../utils';
import Screen from '../components/Screen';

import style from './style.module.scss';

interface Props {
  locales: TYPE_LOCALES;
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

    if (!initLocales) {
      return null;
    }

    return (
      <div className={style.app}>
        <Screen />
      </div>
    );
  }
}

const mapState = (state: State) => ({
  locales: state.locales,
});

const mapDispatch = (dispatch: Dispatch) => ({
  updateLocales: (locales: TYPE_LOCALES) => dispatch(action.updateLocales(locales)),
});

export default connect(
  mapState,
  mapDispatch
)(App);
