- egg.js post 提交会默认有安全防攻击
  CSRF 跨站请求伪造
  为了业务开发先取消  config security: false

- sequelize mysql 的ORM工具

- password 加密
  存用户密码时 存加密过后的
  登录， 使用用户输入的密码 同样方式加密后比对数据库中加密后密码
  crpto 通用的加密和哈希算法     Hmac  sha256

- JSON Web Token JWT 是一个非常轻巧的规范， 允许我们在用户和服务器之间传递安全可靠的信息 cookie

- 状态码 Status Code
  400  这个请求是非法的， 导致服务器不接受该请求
  401  未经授权， 被服务器配置拒绝