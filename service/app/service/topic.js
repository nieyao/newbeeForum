'use strict';
const Service = require('egg').Service;

class TopicService extends Service {
  // 创建帖子
  async insertTopic(topic) {
    return await this.ctx.model.Topic.create(topic);
  }

  // 查询帖子详情
  async queryTopicDetail(query) {
    return await this.ctx.model.Topic.findOne({
      where: query
    })
  }

  // async topicDetailHandler(topicId) {
  //   let topic = await this.ctx.service.topic.queryTopicDetail({
  //     topicId: +topicId
  //   })
  // }

  async queryTopicCounts(query) {
    return await this.ctx.model.Topic.findAndCountAll({
      where: query,
      order: [['created_at', 'DESC']]
    })
  }
}

module.exports = TopicService;