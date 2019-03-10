/*
 * @Author: lifan
 * @Date: 2018-12-21 22:32:13
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-16 14:06:31
 */
import React, { FunctionComponent, memo, useEffect, useRef, useState } from 'react';
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

interface IKeyboardProps {
  keyboard: IGameKeyboard;
  keyboardHandler: (key: keyof IGameKeyboard, value: boolean) => void;
}

// 上次按下键
let lastKey: string[] = [];

const Keyboard: FunctionComponent<IKeyboardProps> = memo(({ keyboard, keyboardHandler }) => {
  const $refKeyboard: React.RefObject<HTMLDivElement> = useRef(null);
  const [mobile, setMobile] = useState<boolean>(isMobile());

  function touchStartHandler(key: keyof IGameKeyboard) {
    if (lastKey.indexOf(key as string) === -1) {
      lastKey.push(key as string);
      keyboardHandler(key, true);
    }
  }

  function touchEndtHandler() {
    for (const k of lastKey) {
      keyboardHandler(k, false);
    }
    lastKey = [];
  }

  function registerPressEventHandler() {
    lastKey = [];

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

      if (lastKey.indexOf(opera) === -1) {
        keyboardHandler(opera, true);
        lastKey.push(opera);
      }
    }, true);

    window.addEventListener('keyup', (event) => {
      event.preventDefault();
      for (const k of lastKey) {
        keyboardHandler(k, false);
      }

      lastKey = [];
    }, true);
  }

  function resizeHandler() {
    const dom = $refKeyboard.current;

    setTimeout(() => {
      if (dom) {
        const top = dom.getBoundingClientRect().top;
        const winHeight = document.documentElement && document.documentElement.clientHeight;
        dom.style.minHeight = winHeight ? `${winHeight - top}px` : '10px';
      }
    }, 50);

    setMobile(isMobile());
  }

  useEffect(() => {
    resizeHandler();
    registerPressEventHandler();
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('mouseup', touchEndtHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
      window.removeEventListener('mouseup', touchEndtHandler);
    };
  }, []);

  return (
    <div className={styles.keyboard} ref={$refKeyboard}>
      <div className={styles.content}>
        {
          Object.keys(keyboard).map((key) => (
            <MyButton
              key={key}
              title={intl.get(`key.${key}`)}
              classNames={styles[`key${key.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase())}`]}
              active={keyboard[key]}
              textDirection={key === 'rotate' ? 'row' : 'column'}
              touchEndtHandler={() => touchEndtHandler()}
              touchStartHandler={() => touchStartHandler(key)}
              isMobile={mobile}
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
});

export default Keyboard;
