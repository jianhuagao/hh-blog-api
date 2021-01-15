'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  constructor(ctx) {
    super(ctx);
    this.loginRule = {
      userid: 'string',
      userpwd: 'string',
    };
  }
  async login() {
    const { ctx, service } = this;
    const { userpwd } = ctx.request.body;

    ctx.validate(this.loginRule, ctx.request.body);
    ctx.request.body.userpwd = ctx.helper.encryptionPassword(userpwd);
    ctx.body = await service.login.login(); // 查找 service/menu.js 下的 selectMenu 方法。
  }
}

module.exports = LoginController;
