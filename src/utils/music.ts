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
    (window as any).AudioContext ||
    (window as any).webkitAudioContext ||
    (window as any).mozAudioContext ||
    (window as any).oAudioContext ||
    (window as any).msAudioContext
  ) && location.protocol.indexOf('http') !== -1;
};
