/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {
    security: { csrf: { enable: false } },
    sequelize: {
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      password: '123456',
      database: 'newbeeforum',
    },
    password_secret: 'nieyaoniubee666',
    auth_cookie_name: 'token',
    jwtSecret: 'nieyao',
    authWhiteList: [ '/api', '/api/login', '/api/login/register' ],
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1550804129545_4518';

  // add your middleware config here
  config.middleware = [ 'authorization' ];

  // add your user config here
  const userConfig = {
  };

  return {
    ...config,
    ...userConfig,
  };
};
