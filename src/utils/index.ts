/*
 * @Author: lifan
 * @Date: 2018-12-13 13:36:59
 * @Last Modified by: lifan
 * @Last Modified time: 2018-12-13 16:06:01
 */

/**
 * 判断是否为移动端
 */
export const isMobile = (): boolean =>
  /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent);

/**
 * 获取url参数
 * @param {string} name
 */
export const getUrlParam = (name: string) => {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  const r = window.location.search.substr(1).match(reg);

  if (r != null) {
    return decodeURIComponent(r[2]);
  }

  return;
};
