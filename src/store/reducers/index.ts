import { combineReducers } from 'redux';
import block, { IBlock } from './block';
import keybord from './keybord';
import matrix from './matrix';
import status from './status';

export interface IState {
  matrix: number[][];
  keybord: GameKeyboard;
  status: GameStatus;
  block: IBlock;
}

export default combineReducers<IState>({
  matrix,
  keybord,
  status,
  block,
});
