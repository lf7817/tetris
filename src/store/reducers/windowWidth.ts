/*
 * @Author: lifan
 * @Date: 2018-12-13 13:56:58
 * @Last Modified by: lifan
 * @Last Modified time: 2018-12-21 12:16:34
 */

import Types from '../types';
import { Action } from '../actions';

export default (state = 0, action: Action) => {
  switch (action.type) {
    case Types.WINDOW_RESIZE:
      return action.payload.width;
    default: return state;
  }
};
