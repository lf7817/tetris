/*
 * @Author: lifan
 * @Date: 2019-01-11 20:57:21
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-11 21:42:11
 */
import Types from '../types';
import { Action } from '../actions';

export default (state: number = 0, action: Action) => {
  switch (action.type) {
    case Types.SET_START_LINES:
      return action.payload;
    default: return state;
  }
};
