/*
 * @Author: lifan
 * @Date: 2018-12-12 14:50:48
 * @Last Modified by: lifan
 * @Last Modified time: 2018-12-20 15:46:16
 */
import Types from '../types';
import { TYPE_LOCALES } from '../../locales';

/* eslint-disable no-use-before-define */
export type AddCount = ReturnType<typeof addCount>;
export const addCount = (num: number) => ({
  type: <Types.ADD_COUNT>Types.ADD_COUNT,
  payload: {
    num
  }
});

export type AddCountAsync = ReturnType<typeof addCountAsync>;
export const addCountAsync = () => ({
  type: <Types.ADD_COUNT_ASYNC>Types.ADD_COUNT_ASYNC,
});

export type ReduceCount = ReturnType<typeof reduceCount>;
export const reduceCount = (num: number) => ({
  type: <Types.REDUCE_COUNT>Types.REDUCE_COUNT,
  payload: {
    num
  }
});

export type UpdateLocales = ReturnType<typeof updateLocales>;
export const updateLocales = (locales: TYPE_LOCALES) => ({
  type: <Types.UPDATE_LOCALES>Types.UPDATE_LOCALES,
  payload: {
    locales
  }
});

export type UpdateMatrix = ReturnType<typeof updateMatrix>;
export const updateMatrix = (matrix: number[][]) => ({
  type: <Types.UPDATE_MATRIX>Types.UPDATE_MATRIX,
  payload: {
    matrix
  }
});

export type Action =
  | AddCount
  | AddCountAsync
  | ReduceCount
  | UpdateLocales
  | UpdateMatrix;
