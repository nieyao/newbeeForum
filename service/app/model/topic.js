'use strict';
module.exports = app => {
  const { INTEGER, DATE, STRING, NOW } = app.Sequelize;
  const Topic = app.model.define('topic', {
    topicId: { type: INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: STRING(255) },
    topicTitle: { type: STRING(255), allowNull: true },
    topicImg: { type: STRING(1000), allowNull: false },
    address: { type: STRING(255), allowNull: true },
    created_at: { type: DATE, defaultValue: NOW },
    updated_at: { type: DATE, defaultValue: NOW }
  }, {
    freezeTableName: true // 不自动加复数
  })

  Topic.associate = function() {
    Topic.belongsTo(app.model.User, { foreignKey: 'userId', targetKey: 'userId' });
}
  return Topic
}