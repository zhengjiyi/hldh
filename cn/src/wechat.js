import wx from 'weixin-js-sdk';
import MtaH5 from 'mta-h5-analysis';
import { getJSSDKSign } from './api';
import { PAGE_BASE_URL, LANG } from './config';
import { data as metaData } from './resource';

const { meta } = metaData[LANG];
export function setShare({
  title = meta.title, // 分享标题
  desc = meta.desc,
  link = `${PAGE_BASE_URL}/index.html`, // 默认是首页
  imgUrl = `${PAGE_BASE_URL}/share.png`, // 默认分享图标
}) {
  wx.onMenuShareAppMessage({
    title,
    link: `${link}?CKTAG=mta_share.wechat_friend`,
    imgUrl,
    desc,
    success: () => {
      MtaH5.clickShare('wechat_friend'); // 这里加上h5分享代码
    },
  });

  wx.onMenuShareTimeline({
    title,
    link: `${link}?CKTAG=mta_share.wechat_moments`,
    imgUrl,
    desc,
    success: () => {
      MtaH5.clickShare('wechat_moments'); // 这里加上h5分享代码
    },
  });
}

export async function initJsSDK() {
  try {
    const data = await getJSSDKSign();
    const {
      appId, timestamp, nonceStr, signature,
    } = data;
    wx.config({
      debug: false, // 开启调试模式
      appId, // 必填，公众号的唯一标识
      timestamp, // 必填，生成签名的时间戳
      nonceStr, // 必填，生成签名的随机串
      signature, // 必填，签名，见附录1
      jsApiList: [
        // 必填，需要使用的JS接口列表，见附录2
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'onMenuShareQZone',
      ],
    });

    wx.ready(() => {
      setShare({});
    });

    wx.error((res) => {
      console.log('wx.error: ', res);
    });
  } catch (e) {
    console.log(e);
  }
}
