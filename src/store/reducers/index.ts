import { combineReducers } from 'redux';
import locales from './locales';
import { TYPE_LOCALES } from '../../locales';

export interface State {
  locales: TYPE_LOCALES;
}

export default combineReducers<State>({
  locales,
});
