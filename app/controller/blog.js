'use strict';

const Controller = require('egg').Controller;

class BlogController extends Controller {
  async index() {
    const { ctx, service } = this;
    ctx.ret = await service.blog.index(); // 查找 service/menu.js 下的 selectMenu 方法。
  }
}

module.exports = BlogController;