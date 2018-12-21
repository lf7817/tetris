/*
 * @Author: lifan
 * @Date: 2018-12-21 10:13:15
 * @Last Modified by: lifan
 * @Last Modified time: 2018-12-21 10:15:03
 */
import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { State } from '../store/reducers';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import intl from 'react-intl-universal';
import { LOCALES, TYPE_LOCALES } from '../locales';
import * as action from '../store/actions';
import { getUrlParam } from '../utils';
import Screen from '../components/Screen';

import style from './style.module.scss';

interface AppProps {
  locales: TYPE_LOCALES;
  matrix: number[][];
  updateLocales: (locales: TYPE_LOCALES) => void;
}

interface AppState {
  initLocales: boolean;
}

class App extends Component<AppProps, AppState> {
  public state = {
    initLocales: false
  };

  private async loadLocales(str: TYPE_LOCALES) {
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

  private initLocales(locales: TYPE_LOCALES) {
    const lang = getUrlParam('lang') as TYPE_LOCALES;

    if (lang && LOCALES.hasOwnProperty(lang)) {
      this.props.updateLocales(lang);
      this.loadLocales(lang);
    } else {
      this.loadLocales(locales);
    }
  }

  private switchLocales = (locales: TYPE_LOCALES) => {
    this.props.updateLocales(locales);
    setTimeout(() => {
      window.location.href = `${window.location.origin}${window.location.pathname}?lang=${locales}`;
    }, 20);
  }

  public componentDidMount() {
    this.initLocales(this.props.locales);
  }

  public componentDidUpdate(prevProps: AppProps) {
    if (this.state.initLocales && prevProps.locales !== this.props.locales) {
      this.switchLocales(this.props.locales);
    }
  }

  public render() {
    const { initLocales } = this.state;
    const { matrix } = this.props;

    if (!initLocales) {
      return <ReactLoading type={'spinningBubbles'} delay={500} className={style.loading} />;
    }

    return (
      <div className={style.app}>
        <Screen matrix={matrix} />
      </div>
    );
  }
}

const mapState = (state: State) => ({
  locales: state.locales,
  matrix: state.matrix,
});

const mapDispatch = (dispatch: Dispatch) => ({
  updateLocales: (locales: TYPE_LOCALES) => dispatch(action.updateLocales(locales)),
});

export default connect(
  mapState,
  mapDispatch
)(App);
