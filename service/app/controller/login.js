'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async register() {
    const { ctx } = this;
    console.log(ctx.request.body,'我是请求体')
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
        maxAge: 10000*60*60*24*7,
        // httpOnly: false,
        // domain: '127.0.0.1'
      };
      this.ctx.cookies.set(this.config.auth_cookie_name, token, opts);
      this.ctx.returnBody(200, '登录成功');
    } else {
      this.ctx.throw(400, '用户名或密码错误');
    }
  }

  async signOut() {
    this.ctx.cookies.set(this.config.auth_cookie_name, "");
    this.ctx.returnBody(200, '成功退出登录');
  }
}

module.exports = LoginController;
