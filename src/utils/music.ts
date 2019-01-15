/*
 * @Author: lifan
 * @Date: 2019-01-15 16:52:49
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-15 17:13:37
 */
/**
 * 是否支持WebAudioAPI
 */
export const isSupportWebAudioAPI = (): boolean => {
  return !!(
    (<any>window).AudioContext ||
    (<any>window).webkitAudioContext ||
    (<any>window).mozAudioContext ||
    (<any>window).oAudioContext ||
    (<any>window).msAudioContext
  ) && location.protocol.indexOf('http') !== -1;
};
