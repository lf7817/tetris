import { combineReducers } from 'redux';
import count from './count';
import locales from './locales';

export interface State {
  count: number;
  locales: string;
}

export default combineReducers<State>({
  count,
  locales,
});
