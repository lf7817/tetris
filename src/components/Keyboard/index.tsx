/*
 * @Author: lifan
 * @Date: 2018-12-21 22:32:13
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-12 22:11:27
 */
import React, { Component } from 'react';
import MyButton from '../MyButton/index';
import intl from 'react-intl-universal';
import { isMobile } from '../../utils';
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
  f12: 123
};

interface KeyboardProps {
  keyboard: GameKeyboard;
  keyboardHandler: (key: keyof GameKeyboard, value: boolean) => void;
}
interface KeyboardState {
  isMobile: boolean;
}

class Keyboard extends Component<KeyboardProps> {
  private readonly $ref_keyboard: React.RefObject<HTMLDivElement> = React.createRef();
  state = {
    isMobile: isMobile()
  }
  lastKey: string[] = [];

  calcWrapperPosition = () => {
    const dom = this.$ref_keyboard.current;

    if (dom) {
      const top = dom.getBoundingClientRect().top;
      const winHeight = document.documentElement && document.documentElement.clientHeight;
      dom.style.minHeight = winHeight ? `${winHeight - top}px` : '10px';
    }

    this.setState({
      isMobile: isMobile()
    });

    console.log(isMobile());
  }

  keyboardHandler(key: keyof GameKeyboard, value: boolean) {
    this.props.keyboardHandler(key, value);
  }

  registerPressEventHandler() {
    this.lastKey = [];

    window.addEventListener('keydown', (event) => {
      if (event.keyCode !== keyCode.f12) {
        event.preventDefault();
      }

      let opera: keyof GameKeyboard;

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
      for (let i = 0; i < this.lastKey.length; i++) {
        this.keyboardHandler(this.lastKey[i], false);
      }

      this.lastKey = [];
    }, true);
  }

  touchStartHandler = (event: GameEvent, key: keyof GameKeyboard) => {
    if (this.lastKey.indexOf(key as string) === -1) {
      this.lastKey.push(key as string);
      this.keyboardHandler(key, true);
    }
  }

  touchEndtHandler = (event: GameEvent, key: keyof GameKeyboard) => {
    for (let i = 0; i < this.lastKey.length; i++) {
      this.keyboardHandler(this.lastKey[i], false);
    }
    this.lastKey = [];
  }

  componentDidMount() {
    setTimeout(() => {
      this.calcWrapperPosition();
      this.registerPressEventHandler();
    }, 20);

    window.addEventListener('resize', this.calcWrapperPosition);
    window.addEventListener('mouseup', event => {
      this.touchEndtHandler(event, '');
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calcWrapperPosition);
  }

  shouldComponentUpdate(nextProps: KeyboardProps, nextState: KeyboardState) {
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

  render() {
    const { keyboard } = this.props;

    console.log('keyboard render');
    return (
      <div className={styles.keyboard} ref={this.$ref_keyboard}>
        <div className={styles.content}>
          {
            Object.keys(keyboard).map(key => (
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
            <span className={styles.keyDecorateItem}></span>
            <div className={styles.keyDecorateCenter}>
              <span className={styles.keyDecorateItem} style={{ transform: 'rotate(270deg)' }}></span>
              <span className={styles.keyDecorateItem} style={{ transform: 'rotate(90deg)' }}></span>
            </div>
            <span className={styles.keyDecorateItem} style={{ transform: 'rotate(180deg)' }}></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Keyboard;
