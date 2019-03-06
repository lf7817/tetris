/*
 * @Author: lifan
 * @Date: 2018-12-13 13:36:59
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-15 17:35:55
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

/**
 * 比较matrix是否相等
 * @param {number[][]} prevMatrix 先前的matrix
 * @param {number[][]} matrix 当前的matrix
 */
export const compareMatrix = (prevMatrix: number[][], matrix: number[][]) => {
  for (let i = 0; i < prevMatrix.length; i++) {
    for (let j = 0; j < prevMatrix[i].length; j++) {
      if (prevMatrix[i][j] !== matrix[i][j]) {
        return false;
      }
    }
  }

  return true;
};

const hiddenProperty = [
  'hidden', 'webkitHidden', 'mozHidden', 'msHidden',
].filter((e) => e in document);

/**
 * 是否聚焦，不支持的话默认聚焦
 */
export const isFocus = () => {
  if (hiddenProperty.length === 0) {
    return true;
  }

  return !(document as any)[hiddenProperty[0]];
};

/**
 * 聚焦事件
 */
export const visibilityChangeEvent: string = (() => {
  if (hiddenProperty.length === 0) {
    return '';
  }
  return hiddenProperty[0].replace(/hidden/i, 'visibilitychange'); // 如果属性有前缀, 相应的事件也有前缀
})();
