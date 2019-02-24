import instance from './axiosInstance.js'

// 用户登录
exports.login = (data) => {
  return instance.post('/api/login', data);
}

// 用户注册
exports.register = (data) => {
  return instance.post('/api/login/register', data);
}

// 获取用户信息
exports.getUserInfo = (data) => {
  return instance.get('/api/user/info', data);
}

// 退出登录
exports.signOut = () => {
  return instance.get('/api/login/signOut');
}

// 查询所有帖子
exports.queryAllTopics = () => {
  return instance.get('/api/topic/list');
}