'use strict';

const Controller = require('egg').Controller;

class RegisterController extends Controller {

  async create() {
    const { ctx, service } = this;
    //明文密码加密
    ctx.request.body.userpwd = ctx.helper.encryptionPassword(ctx.request.body.userpwd);
    ctx.body = await service.register.create(); // 查找 service/menu.js 下的 selectMenu 方法。
  }
}

module.exports = RegisterController;