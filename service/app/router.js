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
  router.get('/api/user/info', controller.user.userInfo);

  // Topic
  router.post('/api/topic/add', controller.topic.addTopic);
  router.get('/api/topic/list', controller.topic.queryAllTopics);
  router.get('/api/topic/detail', controller.topic.topicDetail);
};
