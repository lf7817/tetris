import { combineReducers } from 'redux';
import locales from './locales';
import matrix from './matrix';
import window_width from './windowWidth';
import keybord from './keybord';


export interface State {
  locales: GameLocales;
  matrix: number[][];
  window_width: number;
  keybord: GameKeyboard;
}

export default combineReducers<State>({
  locales,
  matrix,
  window_width,
  keybord
});
