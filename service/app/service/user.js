'use strict';
const Service = require('egg').Service;
const uuid = require('uuid');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

class UserService extends Service {
  async register(user) {
    user.userId = uuid.v4().replace(/-/g, '');
    console.log(user.userId);
    const queryResult = await this.hasRegister(user.email);
    // console.log(queryResult, user)
    if (queryResult) {
      this.ctx.returnBody(200, '邮箱已被注册');
      return;
    }
    // 加密保存用户密码
    user.password = crypto.createHmac('sha256', this.app.config.password_secret)
      .update(user.password)
      .digest('hex');

    const userInfo = await this.ctx.model.User.create(user);
    this.ctx.returnBody(200, '注册成功');
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

  async login(user) {
    const existUser = await this.getUserByMail(user.email);
    if (!existUser) {
      return null;
    }
    const passhash = existUser.password;
    const equal = passhash === crypto.createHmac('sha256', this.app.config.password_secret).update(user.password).digest('hex');
    if (!equal) {
      return false;
    }

    const token = jwt.sign({ userId: existUser.userId }, this.app.config.jwtSecret, { expiresIn: '7d' });
    console.log(token);
    return token;
  }

  async getUserByMail(email) {
    return this.ctx.model.User.findOne({
      where: {
        email
      }
    })
  }

  async getUserByUserId(userId) {
    return this.ctx.model.User.findOne({
      where:{
        userId
      }
    })
  }
}

module.exports = UserService;