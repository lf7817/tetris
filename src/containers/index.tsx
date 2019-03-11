/*
 * @Author: lifan
 * @Date: 2018-12-21 10:13:15
 * @Last Modified by: lifan
 * @Last Modified time: 2019-03-06 22:16:26
 */
import React, { PureComponent } from 'react';
import intl from 'react-intl-universal';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Keyboard from '../components/Keyboard';
import Screen from '../components/Screen';
import { BlockShap } from '../constants/block';
import { GameLocales, LOCALES } from '../locales';
import * as action from '../store/actions';
import { IState } from '../store/reducers';
import { IGameKeyboard } from '../store/reducers/keyboard';
import { getUrlParam, isFocus, visibilityChangeEvent } from '../utils';
import styles from './style.module.scss';

interface IAppProps {
  locales: GameLocales;
  matrix: number[][];
  keyboard: IGameKeyboard;
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
}

interface IAppState {
  initLocales: boolean;
}

class App extends PureComponent<IAppProps, IAppState> {
  public state = {
    initLocales: false,
  };

  // private switchLocales = (locales: GameLocales) => {
  //   setTimeout(() => {
  //     window.location.href = `${window.location.origin}${window.location.pathname}?lang=${locales}`;
  //   }, 20);
  // }

  public keyboardHandler = (key: keyof IGameKeyboard, value: boolean) => {
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

    if (a) {
      this.props.dispatch(a(value));
    }
  }

  public visibilityChangeHandler = () => {
    if (visibilityChangeEvent) {
      window.addEventListener(visibilityChangeEvent, () => {
        this.props.dispatch(action.setFocus(isFocus()));
      });
    }
  }

  public componentDidMount() {
    this.initLocales(this.props.locales);
    this.visibilityChangeHandler();
    // setInterval(() => {
    //   const newArr = this.props.matrix.map((item) => {
    //     return item.map(() => Math.round(Math.random()));
    //   });
    //   this.props.dispatch(action.updateMatrix(newArr));
    // }, 1000);

    // setInterval(() => {
    //   this.props.dispatch(action.setNext());
    // }, 1000);
  }

  public render() {
    const { initLocales } = this.state;
    const { matrix, keyboard, score, max, speed, startLines, clearLines, pause, playing, sound, next } = this.props;

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

  private async loadLocales(str: GameLocales) {
    try {
      await intl.init({
        currentLocale: str,
        locales: LOCALES,
      });
    } finally {
      if (process.env.NODE_ENV === 'development') {
        this.setState({
          initLocales: true,
        });
      } else {
        setTimeout(() => {
          this.setState({
            initLocales: true,
          });
        }, 2000);
      }
    }
  }

  private initLocales(locales: GameLocales) {
    const lang = getUrlParam('lang') as GameLocales;

    if (lang && LOCALES.hasOwnProperty(lang)) {
      this.props.dispatch(action.updateLocales(lang));
      this.loadLocales(lang);
    } else {
      this.loadLocales(locales);
    }
  }
}

const mapState = (state: IState) => ({
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
  next: state.block.next,
  focus: state.status.focus,
});

const mapDispatch = (dispatch: Dispatch) => ({
  dispatch,
});

export default connect(
  mapState,
  mapDispatch,
)(App);
