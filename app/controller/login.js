'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async login() {
    const { ctx, service } = this;
    const { userid, userpwd } = ctx.request.body;
    if (!userid || !userpwd) {
      //抛出异常
    }
    ctx.request.body.userpwd=ctx.helper.encryptionPassword(ctx.request.body.userpwd);
    ctx.body = await service.login.login(); // 查找 service/menu.js 下的 selectMenu 方法。
  }
}

module.exports = LoginController;