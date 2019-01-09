/*
 * @Author: lifan
 * @Date: 2018-12-12 14:50:48
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-09 20:54:39
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
export const updateLocales = (locales: GameLocales) => ({
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

export type KeyPause = ReturnType<typeof keyPause>;
export const keyPause = (value: boolean) => ({
  type: <Types.KEY_PAUSE>Types.KEY_PAUSE,
  payload: value
});

export type KeySound = ReturnType<typeof keySound>;
export const keySound = (value: boolean) => ({
  type: <Types.KEY_SOUND>Types.KEY_SOUND,
  payload: value
});

export type KeyReset = ReturnType<typeof keyReset>;
export const keyReset = (value: boolean) => ({
  type: <Types.KEY_RESET>Types.KEY_RESET,
  payload: value
});

export type KeyDrop = ReturnType<typeof keyDrop>;
export const keyDrop = (value: boolean) => ({
  type: <Types.KEY_DROP>Types.KEY_DROP,
  payload: value
});

export type KeyRotate = ReturnType<typeof keyRotate>;
export const keyRotate = (value: boolean) => ({
  type: <Types.KEY_ROTATE>Types.KEY_ROTATE,
  payload: value
});

export type KeyLeft = ReturnType<typeof keyLeft>;
export const keyLeft = (value: boolean) => ({
  type: <Types.KEY_LEFT>Types.KEY_LEFT,
  payload: value
});

export type KeyRight = ReturnType<typeof keyRight>;
export const keyRight = (value: boolean) => ({
  type: <Types.KEY_RIGHT>Types.KEY_RIGHT,
  payload: value
});

export type KeyDown = ReturnType<typeof keyDown>;
export const keyDown = (value: boolean) => ({
  type: <Types.KEY_DOWN>Types.KEY_DOWN,
  payload: value
});

export type SetSound = ReturnType<typeof setSound>;
export const setSound = (value: boolean) => ({
  type: <Types.SET_SOUND>Types.SET_SOUND,
  payload: value
});

export type SetPause = ReturnType<typeof setPause>;
export const setPause = (value: boolean) => ({
  type: <Types.SET_PAUSE>Types.SET_PAUSE,
  payload: value
});

export type Action =
  | AddCount
  | AddCountAsync
  | ReduceCount
  | UpdateLocales
  | UpdateMatrix
  | KeyPause
  | KeyDown
  | KeyRight
  | KeyLeft
  | KeyRotate
  | KeyDrop
  | KeyReset
  | KeySound
  | SetSound
  | SetPause;
