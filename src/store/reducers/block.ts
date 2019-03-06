/*
 * @Author: lifan
 * @Date: 2019-01-15 10:49:51
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-15 11:04:35
 */
import produce from 'immer';
import { getRandomBlockShap } from '../../utils/block';
import { Action } from '../actions';
import types from '../types';

export interface IBlock {
  next: BlockShap;
}

const initState = {
  next: getRandomBlockShap(),
};

export default (state: IBlock = initState, action: Action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.SET_NEXT: draft.next = getRandomBlockShap(); break;
      default: break;
    }
  });
