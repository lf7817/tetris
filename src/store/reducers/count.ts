/*
 * @Author: lifan
 * @Date: 2018-12-12 14:50:44
 * @Last Modified by: lifan
 * @Last Modified time: 2018-12-12 14:51:22
 */
import Types from '../types';
import { Action } from '../actions';

export default (state = 0, action: Action) => {
  switch (action.type) {
    case Types.ADD_COUNT:
      return state + action.payload.num;
    case Types.REDUCE_COUNT:
      return state - action.payload.num;
    default: return state;
  }
};
