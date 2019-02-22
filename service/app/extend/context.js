'use strict';
const jwt = require('jsonwebtoken');

module.exports = {
  get jwt() {
    return jwt;
  },

  get user() {
    const token = this.cookies.get('token');
    const user = jwt.verify(token, this.app.config.jwtSecret);
    return user;
  },
  returnBody (status, message, data = {}) {
    this.status = status;
    this.body = {
      data,
      message,
      success: true
    }
  }
}