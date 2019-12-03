import Vue from 'vue';
import MtaH5 from 'mta-h5-analysis';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import App from './App.vue';
import { initJsSDK } from './wechat';

// require styles
import 'swiper/dist/css/swiper.css';
import 'animate.css';
import './main.less';


Vue.use(VueAwesomeSwiper /* { default global options } */);

Vue.config.productionTip = false;

if (process.env.NODE_ENV === 'production') {
  // 初始化
  MtaH5.init({
    sid: '500686466', // 必填，统计用的appid
    cid: '500686888', // 如果开启自定义事件，此项目为必填，否则不填
    autoReport: 1, // 是否开启自动上报(1:init完成则上报一次,0:使用pgv方法才上报)
    senseHash: 1, // hash锚点是否进入url统计
    senseQuery: 0, // url参数是否进入url统计
    performanceMonitor: 1, // 是否开启性能监控
    ignoreParams: ['token', 'v', 'from'], // 开启url参数上报时，可忽略部分参数拼接上报
  });
}

initJsSDK();

new Vue({
  render: h => h(App),
}).$mount('#app');
