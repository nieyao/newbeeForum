'use strict';

module.exports = app => {
  const { INTEGER, DATE, STRING, NOW } = app.Sequelize;

  const User = app.model.define('users', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: STRING(255), allowNull: false },
    username: { type: STRING(255), allowNull: false },
    email: { type: STRING(255), allowNull: false },
    password: { type: STRING(255), allowNull: false },
    avatarUrl: { type: STRING(256), defaultValue: 'http://pnb7xhu8b.bkt.clouddn.com/avatar.png'},
    mobile: STRING(32),
    abstract: { type: STRING(255), allowNull: true },
    sex: { type: INTEGER, defaultValue: 0 },
    created_at: { type: DATE, defaultValue: NOW },
    updated_at: { type: DATE, defaultValue: NOW },
  }, {
    freezeTableName: true
  })
  return User;
}