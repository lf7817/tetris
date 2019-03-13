/*
 * @Author: lifan
 * @Date: 2018-12-19 09:55:19
 * @Last Modified by: lifan
 * @Last Modified time: 2018-12-21 16:29:35
 */
// 方块类型
export type BlockShap = "I" | "L" | "J" | "Z" | "S" | "O" | "T";
export const BLOCK_SHAPE = {
  I: [[1, 1, 1, 1]],
  L: [[1, 0, 0], [1, 1, 1]],
  J: [[0, 0, 1], [1, 1, 1]],
  Z: [[1, 1, 0], [0, 1, 1]],
  S: [[0, 1, 1], [1, 1, 0]],
  O: [[1, 1], [1, 1]],
  T: [[0, 1, 0], [1, 1, 1]],
};

// 速度
export const SPEEDS = [800, 650, 500, 370, 250, 160];

// 装饰方块
export const BLOCK_DECORATE = [
  [0, 1],
  [1, 1],
  [1, 0],
  [0, 0],
  [1, 0],
  [1, 1],
  [1, 0],
  [0, 0],
  [1, 1],
  [1, 1],
  [0, 0],
  [0, 1],
  [1, 1],
  [0, 1],
  [0, 0],
  [1, 1],
  [0, 1],
  [0, 1],
  [0, 0],
  [1, 0],
  [1, 0],
  [1, 0],
  [1, 0],
];

export const BLOCK_DECORATE_REVERSE = BLOCK_DECORATE.reduce((arr: number[][], item) => {
  const [f, s] = item;
  arr.push([s, f]);
  return arr;
}, []);
