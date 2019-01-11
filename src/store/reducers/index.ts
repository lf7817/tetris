import { combineReducers } from 'redux';
import locales from './locales';
import matrix from './matrix';
import keybord from './keybord';
import pause from './pause';
import sound from './sound';
import speed from './speed';
import score from './score';
import max from './max';
import startLines from './startLines';
import clearLines from './clearLines';

export interface State {
  locales: GameLocales;
  matrix: number[][];
  keybord: GameKeyboard;
  pause: boolean;
  sound: boolean;
  score: number;
  max: number;
  startLines: number;
  clearLines: number;
  speed: number;
}

export default combineReducers<State>({
  locales,
  matrix,
  keybord,
  sound,
  pause,
  score,
  max,
  startLines,
  clearLines,
  speed
});
