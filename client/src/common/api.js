import instance from './axiosInstance.js'

exports.login = (data) => {
  return instance.post('/api/login', data);
}

exports.register = (data) => {
  return instance.post('/api/login/register', data);
}

exports.getUserInfo = (data) => {
  return instance.get('/api/user/info', data);
}

exports.signOut = () => {
  return instance.get('/api/login/signOut');
}
