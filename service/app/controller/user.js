'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async userInfo() {
    let userId = this.ctx.user.userId || this.ctx.userId;
    // console.log(userId,'我是用户ID');
    let user = await this.service.user.getUserByUserId(userId);
    let userInfo = {
      username: user.username,
      email: user.email,
      avatarUrl: user.avatarUrl,
      abstract: user.abstract,
      account: user.email.replace(/@.*/, ''),
      mobile: user.mobile,
      sex: user.sex,
      userId: user.userId,
    };
    this.ctx.returnBody(200, '获取成功', userInfo);
  }

  // 更新用户信息
  async Profile() {
    let userId = this.ctx.user.userId || this.ctx.userId;
    let { newAvatarUrl } = this.ctx.request.body;
    await this.service.user.updateProfile({ userId, newAvatarUrl });
    let user = await this.service.user.getUserByUserId(userId);
    let userInfo = {
      username: user.username,
      email: user.email,
      avatarUrl: user.avatarUrl,
      abstract: user.abstract,
      account: user.email.replace(/@.*/, ''),
      mobile: user.mobile,
      sex: user.sex,
      userId: user.userId,
    };
    this.ctx.returnBody(200, '更新成功', userInfo)
  }
}

module.exports = UserController;