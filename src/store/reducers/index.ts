import { combineReducers } from 'redux';
import locales from './locales';
import matrix from './matrix';
import { TYPE_LOCALES } from '../../locales';

export interface State {
  locales: TYPE_LOCALES;
  matrix: number[][];
}

export default combineReducers<State>({
  locales,
  matrix,
});
