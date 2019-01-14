import { combineReducers } from 'redux';
import matrix from './matrix';
import keybord from './keybord';
import status from './status';

export interface State {
  matrix: number[][];
  keybord: GameKeyboard;
  status: GameStatus;
}

export default combineReducers<State>({
  matrix,
  keybord,
  status
});
