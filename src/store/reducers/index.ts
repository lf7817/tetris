import { combineReducers } from 'redux';
import { TYPE_LOCALES } from '../../locales';
import locales from './locales';
import matrix from './matrix';
import window_width from './windowWidth';


export interface State {
  locales: TYPE_LOCALES;
  matrix: number[][];
  window_width: number;
}

export default combineReducers<State>({
  locales,
  matrix,
  window_width,
});
