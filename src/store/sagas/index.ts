import { delay } from 'redux-saga';
import { call, put, takeEvery, all } from 'redux-saga/effects';
import Types from '../types';

export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({
    type: Types.ADD_COUNT,
    payload: {
      num: 1,
    }
  });
}

export function* watchIncrementAsync() {
  yield takeEvery(Types.ADD_COUNT_ASYNC, incrementAsync);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchIncrementAsync()
  ]);
}
