/*
 * @Author: lifan
 * @Date: 2018-12-12 14:50:48
 * @Last Modified by: lifan
 * @Last Modified time: 2018-12-13 13:56:50
 */
import Types from '../types';

/* eslint-disable no-use-before-define */
export type AddCount = ReturnType<typeof addCount>;
export const addCount = (num: number) => ({
  type: <Types.ADD_COUNT>Types.ADD_COUNT,
  payload: {
    num
  }
});

export type ReduceCount = ReturnType<typeof reduceCount>;
export const reduceCount = (num: number) => ({
  type: <Types.REDUCE_COUNT>Types.REDUCE_COUNT,
  payload: {
    num
  }
});

export type UpdateLocales = ReturnType<typeof updateLocales>;
export const updateLocales = (locales: string) => ({
  type: <Types.UPDATE_LOCALES>Types.UPDATE_LOCALES,
  payload: {
    locales
  }
});

export type Action =
  | AddCount
  | ReduceCount
  | UpdateLocales;
