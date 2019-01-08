/*
 * @Author: lifan
 * @Date: 2018-12-12 13:31:05
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-08 13:33:55
 */

/* eslint-disable no-unused-vars */
enum Types {
  ADD_COUNT = 'ADD_COUNT',
  ADD_COUNT_ASYNC = 'ADD_COUNT_ASYNC',
  REDUCE_COUNT = 'REDUCE_COUNT',
  WINDOW_RESIZE = 'WINDOW_RESIZE',
  UPDATE_LOCALES = 'UPDATE_LOCALES',
  GAME_OVER = 'GAME_OVER', // 游戏结束
  PAUSE = 'PAUSE', // 暂停
  START = 'START', // 开始
  RESTART = 'RESTART', // 重新开始
  RORATE = 'RORATE', // 旋转
  SET_SPEED = 'SET_SPEED', // 设置速度
  SET_DEFAULT_LINES = 'SET_DEFAULT_LINES', // 设置初始行数
  UPDATE_MATRIX = 'UPDATE_MATRIX', // 更新矩阵
  KEY_PAUSE = 'KEY_PAUSE', // 暂停
  KEY_SOUND = 'KEY_SOUND', // 音效
  KEY_RESET = 'KEY_RESET', // 重玩
  KEY_DROP = 'KEY_DROP', // 掉落
  KEY_ROTATE = 'KEY_ROTATE', // 旋转
  KEY_LEFT = 'KEY_LEFT', // 左移
  KEY_RIGHT = 'KEY_RIGHT', // 右移
  KEY_DOWN = 'KEY_DOWN', // 下移
}

export default Types;
