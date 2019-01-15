/*
 * @Author: lifan
 * @Date: 2018-12-20 15:36:36
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-11 21:38:20
 */
import Types from '../types';
import { Action } from '../actions';

const initState = new Array(20).fill(0).map(() => new Array(10).fill(0));

export default (state: number[][] = initState, action: Action) => {
  switch (action.type) {
    case Types.SET_MATRIX:
      return action.payload;
    default: return state;
  }
};
