'use strict';

const Controller = require('egg').Controller;

class TopicController extends Controller {
  // 发帖
  async addTopic() {
    const { topicImg, topicTitle } = this.ctx.request.body;
    const userId = this.ctx.user.userId;
    let newTopic = {
      topicImg: JSON.stringify(topicImg),
      topicTitle,
      userId
    }

    await this.ctx.service.topic.insertTopic(newTopic);
    this.ctx.returnBody(200, '发帖成功');
  }

  async topicDetail() {
    const { topicId } = this.ctx.request.query
    let topicDetail = await this.ctx.service.topic.topicDetailHandler(topicId);
    this.ctx.returnBody(200, '成功', topicDetail);
  }
}

module.exports = TopicController;