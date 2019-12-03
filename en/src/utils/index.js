/* eslint-disable */
export function isWechat() {
  const ua = window.navigator.userAgent.toLowerCase();
  if (ua.indexOf('micromessenger') > -1) {
    return true;
  }
  return false;
}
