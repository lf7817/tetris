/*
 * @Author: lifan
 * @Date: 2018-12-21 10:13:15
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-15 11:11:37
 */
import React, { PureComponent } from 'react';
import { Dispatch } from 'redux';
import { State } from '../store/reducers';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import intl from 'react-intl-universal';
import { LOCALES } from '../locales';
import * as action from '../store/actions';
import { getUrlParam } from '../utils';
import Screen from '../components/Screen';
import Keyboard from '../components/Keyboard';
import styles from './style.module.scss';

interface AppProps {
  locales: GameLocales;
  matrix: number[][];
  keyboard: GameKeyboard;
  dispatch: Dispatch;
  sound: boolean;
  score: number;
  max: number;
  speed: number;
  startLines: number;
  clearLines: number;
  pause: boolean;
  playing: boolean;
  next: BlockShap;
  updateLocales: (locales: GameLocales) => void;
  updateMatrix: (matrix: number[][]) => void;
}

interface AppState {
  initLocales: boolean;
}

class App extends PureComponent<AppProps, AppState> {
  public state = {
    initLocales: false
  };

  private async loadLocales(str: GameLocales) {
    try {
      await intl.init({
        currentLocale: str,
        locales: LOCALES,
      });
    } finally {
      if (process.env.NODE_ENV === 'development') {
        this.setState({
          initLocales: true
        });
      } else {
        setTimeout(() => {
          this.setState({
            initLocales: true
          });
        }, 2000);
      }
    }
  }

  private initLocales(locales: GameLocales) {
    const lang = getUrlParam('lang') as GameLocales;

    if (lang && LOCALES.hasOwnProperty(lang)) {
      this.props.updateLocales(lang);
      this.loadLocales(lang);
    } else {
      this.loadLocales(locales);
    }
  }

  // private switchLocales = (locales: GameLocales) => {
  //   this.props.updateLocales(locales);
  //   setTimeout(() => {
  //     window.location.href = `${window.location.origin}${window.location.pathname}?lang=${locales}`;
  //   }, 20);
  // }

  keyboardHandler = (key: keyof GameKeyboard, value: boolean) => {
    let a = null;

    switch (key) {
      case 'down': a = action.keyDown; break;
      case 'left': a = action.keyLeft; break;
      case 'right': a = action.keyRight; break;
      case 'rotate': a = action.keyRotate; break;
      case 'drop': a = action.keyDrop; break;
      case 'reset': a = action.keyReset; break;
      case 'sound': a = action.keySound; break;
      case 'pause': a = action.keyPause; break;
    }

    a && this.props.dispatch(a(value));
  }

  componentDidMount() {
    this.initLocales(this.props.locales);
    // setInterval(() => {
    //   const newArr = this.props.matrix.map(item => {
    //     return item.map(() => Math.round(Math.random()));
    //   });
    //   this.props.updateMatrix(newArr);
    // }, 800);

    // setInterval(() => {
    //   this.props.dispatch(action.setNext());
    // }, 1000);
  }

  render() {
    const { initLocales } = this.state;
    const { matrix, keyboard, score, max, speed, startLines, clearLines, pause, playing, sound, next } = this.props;

    console.log('root render');

    if (!initLocales) {
      return <ReactLoading type={'spinningBubbles'} className={styles.loading} />;
    }

    return (
      <div className={styles.app}>
        <Screen
          matrix={matrix}
          max={max}
          score={score}
          speed={speed}
          startLines={startLines}
          clearLines={clearLines}
          pause={pause}
          playing={playing}
          sound={sound}
          next={next}
        />
        <Keyboard
          keyboard={keyboard}
          keyboardHandler={this.keyboardHandler}
        />
      </div>
    );
  }
}

const mapState = (state: State) => ({
  locales: state.status.locales,
  matrix: state.matrix,
  keyboard: state.keybord,
  sound: state.status.sound,
  score: state.status.score,
  max: state.status.max,
  speed: state.status.speed,
  startLines: state.status.startLines,
  clearLines: state.status.clearLines,
  pause: state.status.pause,
  playing: state.status.playing,
  next: state.block.next
});

const mapDispatch = (dispatch: Dispatch) => ({
  updateLocales: (locales: GameLocales) => dispatch(action.updateLocales(locales)),
  updateMatrix: (matrix: number[][]) => dispatch(action.updateMatrix(matrix)),
  dispatch
});

export default connect(
  mapState,
  mapDispatch
)(App);
