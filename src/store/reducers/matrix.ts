/*
 * @Author: lifan
 * @Date: 2018-12-20 15:36:36
 * @Last Modified by: lifan
 * @Last Modified time: 2018-12-20 15:49:50
 */
import Types from '../types';
import { Action } from '../actions';

const initState = new Array(20).fill(0).map(() => new Array(10).fill(0));

export default (state: number[][] = initState, action: Action) => {
  switch (action.type) {
    case Types.UPDATE_MATRIX:
      return action.payload.matrix;
    default: return state;
  }
};
