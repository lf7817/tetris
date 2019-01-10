/*
 * @Author: lifan
 * @Date: 2019-01-08 13:11:38
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-10 13:26:27
 */
import { Action } from '../actions';
import produce from 'immer';
import types from '../types';

const initState = {
  pause: false,
  sound: false,
  reset: false,
  drop: false,
  rotate: false,
  left: false,
  right: false,
  down: false
};

export default (state: GameKeyboard = initState, action: Action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.KEY_DOWN: draft.down = action.payload; break;
      case types.KEY_LEFT: draft.left = action.payload; break;
      case types.KEY_RIGHT: draft.right = action.payload; break;
      case types.KEY_ROTATE: draft.rotate = action.payload; break;
      case types.KEY_DROP: draft.drop = action.payload; break;
      case types.KEY_RESET: draft.reset = action.payload; break;
      case types.KEY_SOUND: draft.sound = action.payload; break;
      case types.KEY_PAUSE: draft.pause = action.payload; break;
      default: break;
    }
  });
