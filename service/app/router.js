'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/api/login/register', controller.login.register);
  router.post('/api/login', controller.login.loginIn);
  router.get('/api/user/info', controller.user.userInfo);
};
