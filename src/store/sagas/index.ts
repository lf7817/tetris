/*
 * @Author: lifan
 * @Date: 2019-01-16 14:04:19
 * @Last Modified by: lifan
 * @Last Modified time: 2019-03-10 16:01:40
 */
import { call, delay, fork, put, select, take, takeEvery } from "redux-saga/effects";
import { Action } from "../actions";
import Types from "../types";

export function* incrementAsync() {
  yield delay(1000);
  yield put({
    type: Types.ADD_COUNT,
    payload: {
      num: 1,
    },
  });
}

// 模拟数据异步获取
function fn() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello saga");
    }, 2000);
  });
}

function* fetchData() {
  // 等待 2 秒后，打印欢迎语（阻塞）
  const greeting = yield call(fn);
  // console.log('greeting: ', greeting);

  // 立即打印 task 对象（非阻塞）
  const task = yield fork(fn);
  // console.log("task: ", task);
}

// function* watcher() {
//   while (true) {
//     yield delay(1000);
//     console.log(1000);
//     yield fork(fetchData);
//   }
// }

export function* watchIncrementAsync() {
  yield takeEvery(Types.ADD_COUNT_ASYNC, incrementAsync);
}

export function* demo1(action: Action) {
  yield delay(1000);
  // console.log(action);
}

export function* demo() {
  yield takeEvery(Types.KEY_DOWN, demo1);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  // yield fork(fetchData);
  // yield fork(watchIncrementAsync);
  // yield fork(demo);

  while (true) {
    const action = yield take("*");
    const state = yield select();

    // console.log("action", action);
    // console.log("state after", state);
  }
}
