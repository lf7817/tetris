/*
 * @Author: lifan
 * @Date: 2019-01-08 14:13:17
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-11 12:46:04
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
type GameEvent = GameMouseEvent | GameTouchEvent | MouseEvent;

// 字符
type CharacterValue = '' | '1' | '2' | '3' | '4' | '5' | '6'
  | '7' | '8' | '9' | '0' | 'colon' | 'sound_off'
  | 'sound_on' | 'pause_on' | 'pause_off';
