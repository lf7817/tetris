/*
 * @Author: lifan
 * @Date: 2018-12-13 13:56:58
 * @Last Modified by: lifan
 * @Last Modified time: 2018-12-13 14:04:38
 */

import Types from '../types';
import { Action } from '../actions';

export default (state = 'zh-CN', action: Action) => {
  switch (action.type) {
    case Types.UPDATE_LOCALES:
      return action.payload.locales;
    default: return state;
  }
};
