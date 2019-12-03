/* eslint-disable */
import axios from 'axios';
import { API_BASE_URL } from '../config';

// 创建axios实例
const fetch = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10 * 1000, // 请求超时时间
  headers: {
    // crossDomain: true, // 跨域
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

window.fetch = fetch;

// request拦截器
fetch.interceptors.request.use(
  config => config,
  (error) => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  },
);

// respone拦截器
fetch.interceptors.response.use(
  (response) => {
    const {
      data: { err, msg, data },
    } = response;
    if (err >= 0 || !err) {
      return data;
    }
    throw new Error(msg);
  },
  (error) => {
    console.log(error);
    const {
      response: { data, status },
    } = error;
    console.log(error, data, status);

    return Promise.reject(error.response);
  },
);

export default fetch;
