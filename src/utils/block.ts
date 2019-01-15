/*
 * @Author: lifan
 * @Date: 2019-01-15 10:51:23
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-15 11:00:47
 */
import { BLOCK_SHAPE } from '../constants/block';

/**
 * 随机生成一个方块
 */
export const getRandomBlockShap = (): BlockShap => {
  const list = Object.keys(BLOCK_SHAPE) as BlockShap[];
  return list[Math.floor(Math.random() * list.length)];
};
