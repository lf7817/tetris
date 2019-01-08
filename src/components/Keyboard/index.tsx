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
console.log(styles);
class Keyboard extends PureComponent {
  private readonly $ref_keyboard: React.RefObject<HTMLDivElement> = React.createRef();

  calcWrapperPosition = debounce(() => {
    const dom = this.$ref_keyboard.current;

    if (dom) {
      const top = dom.getBoundingClientRect().top;
      const winHeight = document.documentElement && document.documentElement.clientHeight;
      dom.style.minHeight = winHeight ? `${winHeight - top}px` : '';
    }
  }, 100)

  componentDidMount() {
    this.calcWrapperPosition();
    window.addEventListener('resize', this.calcWrapperPosition);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calcWrapperPosition);
  }

  render() {
    return (
      <div className={styles.keyboard} ref={this.$ref_keyboard}>
        <div className={styles.content}>
          <MyButton title={intl.get('key.pause')} classNames={styles.keyPause} />
          <MyButton title={intl.get('key.sound')} classNames={styles.keySound} />
          <MyButton title={intl.get('key.reset')} classNames={styles.keyReset} />
          <MyButton title={intl.get('key.drop')} classNames={styles.keyDrop} />
          <MyButton title={intl.get('key.rotate')} classNames={styles.keyRotate} textDirection="row" />
          <MyButton title={intl.get('key.down')} classNames={styles.keyDown} />
          <MyButton title={intl.get('key.left')} classNames={styles.keyLeft} />
          <MyButton title={intl.get('key.right')} classNames={styles.keyRight} />
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
