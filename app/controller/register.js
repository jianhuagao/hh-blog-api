'use strict';

const Controller = require('egg').Controller;

class RegisterController extends Controller {
  constructor(ctx) {
    super(ctx);
    this.createRule = {
      userid: 'string',
      userpwd: 'string',
      username: 'string',
    };
  }
  async create() {
    const { ctx, service } = this;
    const { userpwd } = ctx.request.body;
    // 明文密码加密
    ctx.validate(this.createRule, ctx.request.body);
    ctx.request.body.userpwd = ctx.helper.encryptionPassword(userpwd);
    const ret = await service.register.create(); // 查找 service/menu.js 下的 selectMenu 方法。
    if (ret) {
      ctx.status = 201;
    } else {
      ctx.status = 400;
    }
  }
}

module.exports = RegisterController;
