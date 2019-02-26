'use strict';

const Controller = require('egg').Controller;

class HandlerController extends Controller {
  async getQiniuToken() {
    let token = await this.ctx.service.qiniu.getQiniuToken();
    this.ctx.returnBody(200, '获取token成功', {
      token,
      baseUrl: 'http://pnb7xhu8b.bkt.clouddn.com'
    })
  }
}

module.exports = HandlerController;