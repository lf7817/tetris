import { combineReducers } from "redux";
import block, { IBlock } from "./block";
import keybord, { IGameKeyboard } from "./keyboard";
import matrix from "./matrix";
import status, { IGameStatus } from "./status";

export interface IState {
  matrix: number[][];
  keybord: IGameKeyboard;
  status: IGameStatus;
  block: IBlock;
}

export default combineReducers<IState>({
  matrix,
  keybord,
  status,
  block,
});
