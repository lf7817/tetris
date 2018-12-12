/*
 * @Author: lifan
 * @Date: 2018-12-12 14:50:48
 * @Last Modified by:   lifan
 * @Last Modified time: 2018-12-12 14:50:48
 */
import Types from '../types';

/* eslint-disable no-use-before-define */
export type AddCount = ReturnType<typeof addCount>;
export const addCount = (num: number) => ({
  type: Types.ADD_COUNT,
  payload: {
    num
  }
});

export type Action =
  | AddCount;
