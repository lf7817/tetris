import { combineReducers } from 'redux';
import matrix from './matrix';
import keybord from './keybord';
import status from './status';
import block, { Block } from './block';

export interface State {
  matrix: number[][];
  keybord: GameKeyboard;
  status: GameStatus;
  block: Block;
}

export default combineReducers<State>({
  matrix,
  keybord,
  status,
  block
});
