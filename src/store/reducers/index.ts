import { combineReducers } from 'redux';
import count from './count';
import locales from './locales';
import { TYPE_LOCALES } from '../../locales';

export interface State {
  count: number;
  locales: TYPE_LOCALES;
}

export default combineReducers<State>({
  count,
  locales,
});
