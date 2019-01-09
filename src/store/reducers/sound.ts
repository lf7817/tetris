/*
 * @Author: lifan
 * @Date: 2018-12-13 13:56:58
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-09 20:52:08
 */

import Types from '../types';
import { Action } from '../actions';

export default (state: boolean = false, action: Action) => {
  switch (action.type) {
    case Types.SET_SOUND:
      return action.payload;
    default: return state;
  }
};
