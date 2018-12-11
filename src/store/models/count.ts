/*
 * @Author: lifan
 * @Date: 2018-12-11 10:37:15
 * @Last Modified by: lifan
 * @Last Modified time: 2018-12-11 10:38:58
 */
import { createModel } from '@rematch/core';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default createModel({
  name: 'count',
  state: 0,
  reducers: {
    increment(state: number, payload: number): number {
      return state + payload;
    },
  },
  effects: dispatch => ({
    async incrementAsync(payload: number) {
      await delay(2000);
      dispatch.count.increment(payload || 1);
    },
  }),
});
