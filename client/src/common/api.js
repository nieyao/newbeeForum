import instance from './axiosInstance.js'

exports.login = (data) => {
  return instance.post('/api/login', data);
}

exports.getUserInfo = (data) => {
  return instance.get('/api/user/info', data);
}

exports.test = (data) => {
  return instance.get('/', data);
}
