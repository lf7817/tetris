import { delay } from 'redux-saga';
import { call, put, takeEvery, fork } from 'redux-saga/effects';
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

// 模拟数据异步获取
function fn() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello saga');
    }, 2000);
  });
}

function* fetchData() {
  // 等待 2 秒后，打印欢迎语（阻塞）
  const greeting = yield call(fn);
  console.log('greeting: ', greeting);

  // 立即打印 task 对象（非阻塞）
  const task = yield fork(fn);
  console.log('task: ', task);
}

export function* watchIncrementAsync() {
  yield takeEvery(Types.ADD_COUNT_ASYNC, incrementAsync);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield fork(fetchData);
  yield fork(watchIncrementAsync);
}
