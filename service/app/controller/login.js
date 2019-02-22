'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async register() {
    const { ctx } = this;
    const { password, username, email } = ctx.request.body;
    // ctx.body = `${password},${username},${email}`
    await ctx.service.user.register({ password, username, email })
  }

  async loginIn() {
    const { password, email } = this.ctx.request.body;

    const token = await this.ctx.service.user.login({ password, email });
    if (token) {
      const opts = {
        path: '/',
        maxAge: 1000*60*60*24*7,
        httpOnly: false,
        domain: '127.0.0.1'
      };
      this.ctx.cookies.set(this.config.auth_cookie_name, token, opts);
      this.ctx.status = 200;
      this.ctx.body = {
        msg: '登录成功'
      }
    } else {
      this.ctx.throw(400, '用户名或密码错误');
    }
  }
}

module.exports = LoginController;
