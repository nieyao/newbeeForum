'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/api/login/register', controller.login.register);
  router.post('/api/login', controller.login.loginIn);
  router.get('/api/login/signOut', controller.login.signOut);

  // Topic
  router.post('/api/topic/add', controller.topic.addTopic);
  router.get('/api/topic/list', controller.topic.queryAllTopics);
  router.get('/api/topic/detail', controller.topic.topicDetail);
  router.get('/api/handle/upload/get-token', controller.handle.getQiniuToken);

  // userInfo
  router.get('/api/user/info', controller.user.userInfo);
  router.post('/api/user/profile', controller.user.Profile);
};
