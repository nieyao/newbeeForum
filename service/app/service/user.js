'use strict';
const Service = require('egg').Service;
const uuid = require('uuid');

class UserService extends Service {
  async register(user) {
    user.userId = uuid.v4().replace(/-/g, '');
    console.log(user.userId);
    const queryResult = await this.hasRegister(user.email);
    // console.log(queryResult, user)
    if (queryResult) {
      this.ctx.status = 200;
      this.ctx.body = {
        msg: '邮箱已被使用',
        flag: false
      }
      return;
    }

    const userInfo = await this.ctx.model.User.create(user);
    this.ctx.status = 200;
    this.ctx.body = {
      msg: '注册成功',
      userId: user.userId,
      flag: true
    }
    return userInfo.dataVules;
  }

  async hasRegister(email) {
    const user = await this.ctx.model.User.findOne({
      where: { email: email }
    });
    if (user) {
      return true;
    }
    return false;
  }
}

module.exports = UserService;