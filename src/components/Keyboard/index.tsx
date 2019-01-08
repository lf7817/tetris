/*
 * @Author: lifan
 * @Date: 2018-12-21 22:32:13
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-03 14:50:44
 */
import React, { PureComponent } from 'react';
import debounce from 'lodash.debounce';
import MyButton from './Button';
import intl from 'react-intl-universal';
import styles from './style.module.scss';

interface KeyboardProps {
  keyboard: GameKeyboard;
  keyboardHandler: (key: keyof GameKeyboard, value: boolean) => void;
}

class Keyboard extends PureComponent<KeyboardProps> {
  private readonly $ref_keyboard: React.RefObject<HTMLDivElement> = React.createRef();

  calcWrapperPosition = debounce(() => {
    const dom = this.$ref_keyboard.current;

    if (dom) {
      const top = dom.getBoundingClientRect().top;
      const winHeight = document.documentElement && document.documentElement.clientHeight;
      dom.style.minHeight = winHeight ? `${winHeight - top}px` : '';
    }
  }, 100)

  keyboardHandler(key: keyof GameKeyboard, value: boolean) {
    if (key === 'left' || key === 'right' || key === 'down') {
      this.props.keyboardHandler(key, value);
    } else {
      this.props.keyboardHandler(key, value);
    }
  }

  mouseDownHandler = (event: GameEvent, key: keyof GameKeyboard) => {
    this.keyboardHandler(key, true);
  }

  mouseUpHandler = (event: GameEvent, key: keyof GameKeyboard) => {
    this.keyboardHandler(key, false);
  }

  componentDidMount() {
    this.calcWrapperPosition();
    window.addEventListener('resize', this.calcWrapperPosition);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calcWrapperPosition);
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
                mouseUpHandler={(event) => this.mouseUpHandler(event, key)}
                mouseDownHandler={(event) => this.mouseDownHandler(event, key)}
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
