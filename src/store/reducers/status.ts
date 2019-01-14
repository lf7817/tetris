/*
 * @Author: lifan
 * @Date: 2019-01-14 08:55:05
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-14 11:31:00
 */
import Types from '../types';
import { Action } from '../actions';
import produce from 'immer';

const initState: GameStatus = {
  max: 0,
  score: 0,
  sound: true,
  speed: 1,
  clearLines: 0,
  startLines: 0,
  locales: 'en-US',
  pause: false,
  playing: false
};

export default (state = initState, action: Action) =>
  produce(state, draft => {
    switch (action.type) {
      case Types.SET_MAX: draft.max = action.payload; break;
      case Types.SET_SCORE: draft.score = action.payload; break;
      case Types.SET_SPEED: draft.speed = action.payload; break;
      case Types.SET_LOCALES: draft.locales = action.payload; break;
      case Types.SET_SOUND: draft.sound = action.payload; break;
      case Types.SET_START_LINES: draft.startLines = action.payload; break;
      case Types.SET_CLEAR_LINES: draft.clearLines = action.payload; break;
      case Types.SET_PAUSE: draft.pause = action.payload; break;
      case Types.SET_PLAYING: draft.playing = action.payload; break;
      default: return state;
    }
  });
