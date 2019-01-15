/*
 * @Author: lifan
 * @Date: 2018-12-12 14:50:48
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-15 17:09:43
 */
import Types from '../types';

/* eslint-disable no-use-before-define */
export type UpdateLocales = ReturnType<typeof updateLocales>;
export const updateLocales = (locales: GameLocales) => ({
  type: <Types.SET_LOCALES>Types.SET_LOCALES,
  payload: locales
});

export type UpdateMatrix = ReturnType<typeof updateMatrix>;
export const updateMatrix = (matrix: number[][]) => ({
  type: <Types.SET_MATRIX>Types.SET_MATRIX,
  payload: matrix
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

export type SetMax = ReturnType<typeof setMax>;
export const setMax = (value: number) => ({
  type: <Types.SET_MAX>Types.SET_MAX,
  payload: value
});

export type SetScore = ReturnType<typeof setScore>;
export const setScore = (value: number) => ({
  type: <Types.SET_SCORE>Types.SET_SCORE,
  payload: value
});

export type SetSpeed = ReturnType<typeof setSpeed>;
export const setSpeed = (value: number) => ({
  type: <Types.SET_SPEED>Types.SET_SPEED,
  payload: value
});

export type SetStartLines = ReturnType<typeof setStartLines>;
export const setStartLines = (value: number) => ({
  type: <Types.SET_START_LINES>Types.SET_START_LINES,
  payload: value
});

export type SetClearLines = ReturnType<typeof setClearLines>;
export const setClearLines = (value: number) => ({
  type: <Types.SET_CLEAR_LINES>Types.SET_CLEAR_LINES,
  payload: value
});

export type SetPlaying = ReturnType<typeof setPlaying>;
export const setPlaying = (value: boolean) => ({
  type: <Types.SET_PLAYING>Types.SET_PLAYING,
  payload: value
});

export type SetNext = ReturnType<typeof setNext>;
export const setNext = () => ({
  type: <Types.SET_NEXT>Types.SET_NEXT
});

export type SetFocus = ReturnType<typeof setFocus>;
export const setFocus = (value: boolean) => ({
  type: <Types.SET_FOCUS>Types.SET_FOCUS,
  payload: value
});

export type Action =
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
  | SetPause
  | SetPlaying
  | SetMax
  | SetScore
  | SetSpeed
  | SetStartLines
  | SetClearLines
  | SetNext
  | SetFocus;
