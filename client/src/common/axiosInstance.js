import axios from 'axios';
import baseDomain from './config.js';
import { notification } from 'antd';

const instance = axios.create({
  xsrfCookieName: 'xsrf-name',
  baseURL: baseDomain
});

instance.interceptors.response.use(function(response) {
  if (response.data.success) {
    return Promise.resolve(response.data)
  } else {
    notification['error']({
      message: response.data.message
    });
    return Promise.reject({
      message: response.data.message
    })
  }
}, function(error) {
  try {
    notification['error']({
      message: error.response.data.message || '系统异常'
    })
    console.log(error.response.status)
    if (error.response.status === 401) {
      setTimeout(() => {
        window.location.href = '/login';
      }, 2000);
    }
  } catch(e) {
    notification['error']({
      message: '系统异常, 请稍后再试！'
    })
  }
  return Promise.reject({
    messageCode: 'sysError'
  })
})

export default instance;