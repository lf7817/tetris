/*
 * @Author: lifan
 * @Date: 2018-12-21 22:32:13
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-16 14:06:31
 */
import React, { Component } from 'react';
import intl from 'react-intl-universal';
import { IGameKeyboard } from '../../store/reducers/keyboard';
import { isMobile } from '../../utils';
import MyButton from '../MyButton/index';
import styles from './style.module.scss';

const keyCode = {
  drop: 32,
  left: 37,
  rotate: 38,
  right: 39,
  down: 40,
  pause: 80,
  reset: 82,
  sound: 83,
  f12: 123,
};

// 事件
type GameMouseEvent = React.MouseEvent<HTMLSpanElement, MouseEvent>;
type GameTouchEvent = React.TouchEvent<HTMLSpanElement>;
type GameEvent = GameMouseEvent | GameTouchEvent | MouseEvent;

interface IKeyboardProps {
  keyboard: IGameKeyboard;
  keyboardHandler: (key: keyof IGameKeyboard, value: boolean) => void;
}
interface IKeyboardState {
  isMobile: boolean;
}

class Keyboard extends Component<IKeyboardProps> {
  public state = {
    isMobile: isMobile(),
  };
  public lastKey: string[] = [];
  private readonly $refKeyboard: React.RefObject<HTMLDivElement> = React.createRef();

  public calcWrapperPosition = () => {
    const dom = this.$refKeyboard.current;

    if (dom) {
      const top = dom.getBoundingClientRect().top;
      const winHeight = document.documentElement && document.documentElement.clientHeight;
      dom.style.minHeight = winHeight ? `${winHeight - top}px` : '10px';
    }

    this.setState({
      isMobile: isMobile(),
    });
  }

  public keyboardHandler(key: keyof IGameKeyboard, value: boolean) {
    this.props.keyboardHandler(key, value);
  }

  public registerPressEventHandler() {
    this.lastKey = [];

    window.addEventListener('keydown', (event) => {
      if (event.keyCode !== keyCode.f12) {
        event.preventDefault();
      }

      let opera: keyof IGameKeyboard;

      switch (event.keyCode) {
        case keyCode.down: opera = 'down'; break;
        case keyCode.left: opera = 'left'; break;
        case keyCode.right: opera = 'right'; break;
        case keyCode.rotate: opera = 'rotate'; break;
        case keyCode.drop: opera = 'drop'; break;
        case keyCode.sound: opera = 'sound'; break;
        case keyCode.reset: opera = 'reset'; break;
        case keyCode.pause: opera = 'pause'; break;
        default: opera = '';
      }

      if (this.lastKey.indexOf(opera) === -1) {
        this.keyboardHandler(opera, true);
        this.lastKey.push(opera);
      }
    }, true);

    window.addEventListener('keyup', (event) => {
      event.preventDefault();
      for (const k of this.lastKey) {
        this.keyboardHandler(k, false);
      }

      this.lastKey = [];
    }, true);
  }

  public touchStartHandler = (event: GameEvent, key: keyof IGameKeyboard) => {
    if (this.lastKey.indexOf(key as string) === -1) {
      this.lastKey.push(key as string);
      this.keyboardHandler(key, true);
    }
  }

  public touchEndtHandler = (event: GameEvent, key: keyof IGameKeyboard) => {
    for (const k of this.lastKey) {
      this.keyboardHandler(k, false);
    }
    this.lastKey = [];
  }

  public componentDidMount() {
    setTimeout(() => {
      this.calcWrapperPosition();
      this.registerPressEventHandler();
    }, 20);

    window.addEventListener('resize', this.calcWrapperPosition);
    window.addEventListener('mouseup', (event) => {
      this.touchEndtHandler(event, '');
    });
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.calcWrapperPosition);
  }

  public shouldComponentUpdate(nextProps: IKeyboardProps, nextState: IKeyboardState) {
    const keyboard = this.props.keyboard;
    const nKeyboard = nextProps.keyboard;

    if (keyboard.down !== nKeyboard.down || keyboard.drop !== nKeyboard.drop ||
        keyboard.left !== nKeyboard.left || keyboard.pause !== nKeyboard.pause ||
        keyboard.reset !== nKeyboard.reset || keyboard.right !== nKeyboard.right ||
        keyboard.rotate !== nKeyboard.rotate || keyboard.sound !== nKeyboard.sound ||
        nextState.isMobile !== this.state.isMobile) {
      return true;
    }

    return false;
  }

  public render() {
    const { keyboard } = this.props;

    return (
      <div className={styles.keyboard} ref={this.$refKeyboard}>
        <div className={styles.content}>
          {
            Object.keys(keyboard).map((key) => (
              <MyButton
                key={key}
                title={intl.get(`key.${key}`)}
                classNames={styles[`key${key.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase())}`]}
                active={keyboard[key]}
                textDirection={key === 'rotate' ? 'row' : 'column'}
                touchEndtHandler={(event) => this.touchEndtHandler(event, key)}
                touchStartHandler={(event) => this.touchStartHandler(event, key)}
                isMobile={this.state.isMobile}
              />
            ))
          }
          <div className={styles.keyDecorate}>
            <span className={styles.keyDecorateItem} />
            <div className={styles.keyDecorateCenter}>
              <span className={styles.keyDecorateItem} style={{ transform: 'rotate(270deg)' }} />
              <span className={styles.keyDecorateItem} style={{ transform: 'rotate(90deg)' }} />
            </div>
            <span className={styles.keyDecorateItem} style={{ transform: 'rotate(180deg)' }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Keyboard;
