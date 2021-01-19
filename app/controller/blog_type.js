'use strict';

const Controller = require('egg').Controller;

class BlogTypeController extends Controller {
  async index() {
    const { ctx, service } = this;
    ctx.ret = await service.blogType.index(); // 查找 service/menu.js 下的 selectMenu 方法。
  }
}

module.exports = BlogTypeController;
