/* eslint-disable */
import fetch from './utils/fetch';

// 获取公众号jssdk签名
export function getJSSDKSign() {
  return fetch({
    url: '/jssign',
    method: 'get',
    params: {
      url: window.location.href.split('#')[0],
    },
  });
}
