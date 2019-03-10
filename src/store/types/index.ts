/*
 * @Author: lifan
 * @Date: 2018-12-12 13:31:05
 * @Last Modified by: lifan
 * @Last Modified time: 2019-03-10 16:01:34
 */
enum Types {
  ADD_COUNT = 'ADD_COUNT',
  ADD_COUNT_ASYNC = 'ADD_COUNT_ASYNC',
  REDUCE_COUNT = 'REDUCE_COUNT',
  WINDOW_RESIZE = 'WINDOW_RESIZE',
  SET_LOCALES = 'SET_LOCALES',
  GAME_OVER = 'GAME_OVER', // 游戏结束
  SET_PAUSE = 'SET_PAUSE', // 暂停
  SET_SOUND = 'SET_SOUND', // 音效
  START = 'START', // 开始
  RESTART = 'RESTART', // 重新开始
  RORATE = 'RORATE', // 旋转
  SET_SPEED = 'SET_SPEED', // 设置速度
  SET_START_LINES = 'SET_START_LINES', // 设置初始行数
  SET_CLEAR_LINES = 'SET_CLEAR_LINES', // 清除行数
  SET_SCORE = 'SET_SCORE', // 设置分数
  SET_MAX = 'SET_MAX', // 设置最大分数
  SET_MATRIX = 'SET_MATRIX', // 更新矩阵
  SET_NEXT = 'SET_NEXT', // 下一个方块
  SET_PLAYING = 'SET_PLAYING',
  SET_FOCUS = 'SET_FOCUS',
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
