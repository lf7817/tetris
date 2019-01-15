/*
 * @Author: lifan
 * @Date: 2019-01-15 10:49:51
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-15 11:04:35
 */
import { Action } from '../actions';
import produce from 'immer';
import types from '../types';
import { getRandomBlockShap } from '../../utils/block';

export interface Block {
  next: BlockShap;
}

const initState = {
  next: getRandomBlockShap()
};

export default (state: Block = initState, action: Action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.SET_NEXT: draft.next = getRandomBlockShap(); break;
      default: break;
    }
  });
