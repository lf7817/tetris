/*
 * @Author: lifan
 * @Date: 2019-01-08 13:11:38
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-08 14:11:42
 */
import { Action } from '../actions';
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

export default (state: GameKeyboard = initState, action: Action) => {
  switch (action.type) {
    case types.KEY_DOWN:
      return {
        ...state,
        down: action.payload
      };
    case types.KEY_LEFT:
      return {
        ...state,
        left: action.payload
      };
    case types.KEY_RIGHT:
      return {
        ...state,
        right: action.payload
      };
    case types.KEY_ROTATE:
      return {
        ...state,
        rotate: action.payload
      };
    case types.KEY_DROP:
      return {
        ...state,
        drop: action.payload
      };
    case types.KEY_RESET:
      return {
        ...state,
        reset: action.payload
      };
    case types.KEY_SOUND:
      return {
        ...state,
        sound: action.payload
      };
    case types.KEY_PAUSE:
      return {
        ...state,
        pause: action.payload
      };

    default: return state;
  }
};
