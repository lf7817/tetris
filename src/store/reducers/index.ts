import { combineReducers } from 'redux';
import locales from './locales';
import matrix from './matrix';
import keybord from './keybord';
import pause from './pause';
import sound from './sound';


export interface State {
  locales: GameLocales;
  matrix: number[][];
  keybord: GameKeyboard;
  pause: boolean;
  sound: boolean;
}

export default combineReducers<State>({
  locales,
  matrix,
  keybord,
  sound,
  pause
});
