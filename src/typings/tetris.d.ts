/*
 * @Author: lifan
 * @Date: 2019-01-08 14:13:17
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-08 14:15:00
 */
interface Tetris {
  version: string;
}

// 键盘
interface GameKeyboard {
  pause: boolean;
  sound: boolean;
  reset: boolean;
  drop: boolean;
  rotate: boolean;
  left: boolean;
  right: boolean;
  down: boolean;
  [key: string]: boolean;
}

// 国际化
type GameLocales = 'en-US' | 'zh-CN';

// 事件
type GameMouseEvent = React.MouseEvent<HTMLSpanElement, MouseEvent>;
type GameTouchEvent = React.TouchEvent<HTMLSpanElement>;
type GameEvent = GameMouseEvent | GameTouchEvent;
