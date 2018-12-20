/*
 * @Author: lifan
 * @Date: 2018-12-12 13:31:05
 * @Last Modified by: lifan
 * @Last Modified time: 2018-12-20 15:36:09
 */

/* eslint-disable no-unused-vars */
enum Types {
  ADD_COUNT = 'ADD_COUNT',
  ADD_COUNT_ASYNC = 'ADD_COUNT_ASYNC',
  REDUCE_COUNT = 'REDUCE_COUNT',
  UPDATE_LOCALES = 'UPDATE_LOCALES',
  GAME_OVER = 'GAME_OVER', // 游戏结束
  PAUSE = 'PAUSE', // 暂停
  START = 'START', // 开始
  RESTART = 'RESTART', // 重新开始
  RORATE = 'RORATE', // 旋转
  SET_SPEED = 'SET_SPEED', // 设置速度
  SET_DEFAULT_LINES = 'SET_DEFAULT_LINES', // 设置初始行数
  UPDATE_MATRIX = 'UPDATE_MATRIX', // 更新矩阵
}

export default Types;
