/*
 * @Author: lifan
 * @Date: 2018-12-21 10:13:15
 * @Last Modified by: lifan
 * @Last Modified time: 2018-12-21 22:35:19
 */
import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { State } from '../store/reducers';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';
import ReactLoading from 'react-loading';
import intl from 'react-intl-universal';
import { LOCALES, TYPE_LOCALES } from '../locales';
import * as action from '../store/actions';
import { getUrlParam } from '../utils';
import Screen from '../components/Screen';
import Keyboard from '../components/Keyboard';

import style from './style.module.scss';

interface AppProps {
  locales: TYPE_LOCALES;
  matrix: number[][];
  window_width: number;
  updateLocales: (locales: TYPE_LOCALES) => void;
  updateWindowWidth: (num: number) => void;
  updateMatrix: (matrix: number[][]) => void;
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
      setTimeout(() => {
        this.setState({
          initLocales: true
        });
      }, 2000);
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

  private resizeChangeHander = () => {
    const width = document.body.clientWidth;
    this.props.updateWindowWidth(width);
  }

  public componentDidMount() {
    this.initLocales(this.props.locales);
    window.addEventListener('resize', debounce(this.resizeChangeHander, 50));
    // const ii = new Array(10).fill(Math.round(Math.random()));
    setInterval(() => {
      const newArr = this.props.matrix.map(item => {
        return item.map(() => Math.round(Math.random()));
      });
      this.props.updateMatrix(newArr);
    }, 800);
  }

  public componentDidUpdate(prevProps: AppProps) {
    if (this.state.initLocales && prevProps.locales !== this.props.locales) {
      this.switchLocales(this.props.locales);
    }
  }

  public render() {
    const { initLocales } = this.state;
    const { matrix, window_width } = this.props;

    if (!initLocales) {
      return <ReactLoading type={'spinningBubbles'} className={style.loading} />;
    }

    return (
      <div className={style.app}>
        <Screen matrix={matrix} windowWidth={window_width} />
        <Keyboard />
      </div>
    );
  }
}

const mapState = (state: State) => ({
  locales: state.locales,
  matrix: state.matrix,
  window_width: state.window_width,
});

const mapDispatch = (dispatch: Dispatch) => ({
  updateLocales: (locales: TYPE_LOCALES) => dispatch(action.updateLocales(locales)),
  updateWindowWidth: (num: number) => dispatch(action.windowResize(num)),
  updateMatrix: (matrix: number[][]) => dispatch(action.updateMatrix(matrix)),
});

export default connect(
  mapState,
  mapDispatch
)(App);
