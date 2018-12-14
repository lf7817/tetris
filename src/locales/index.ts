/*
 * @Author: lifan
 * @Date: 2018-12-14 10:16:11
 * @Last Modified by:   lifan
 * @Last Modified time: 2018-12-14 10:16:11
 */
export const LOCALES = {
  'en-US': require('./en-US.json'),
  'zh-CN': require('./zh-CN.json'),
};

export type TYPE_LOCALES = keyof typeof LOCALES;
