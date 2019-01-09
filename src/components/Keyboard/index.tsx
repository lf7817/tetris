/*
 * @Author: lifan
 * @Date: 2018-12-21 22:32:13
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-09 13:41:29
 */
import React, { Component } from 'react';
import MyButton from './Button';
import intl from 'react-intl-universal';
import { isMobile } from '../../utils';
import styles from './style.module.scss';

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
  }

  keyboardHandler(key: keyof GameKeyboard, value: boolean) {
    if (key === 'left' || key === 'right' || key === 'down') {
      this.props.keyboardHandler(key, value);
    } else {
      this.props.keyboardHandler(key, value);
    }
  }

  touchStartHandler = (event: GameEvent, key: keyof GameKeyboard) => {
    this.keyboardHandler(key, true);
  }

  touchEndtHandler = (event: GameEvent, key: keyof GameKeyboard) => {
    this.keyboardHandler(key, false);
  }

  componentDidMount() {
    setTimeout(() => {
      this.calcWrapperPosition();
    }, 20);

    window.addEventListener('resize', this.calcWrapperPosition);
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
