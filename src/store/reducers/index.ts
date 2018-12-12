import { combineReducers } from 'redux';
import count from './count';

export interface State {
  count: number;
}

export default combineReducers<State>({
  count
});
