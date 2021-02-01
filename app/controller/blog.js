'use strict';

const Controller = require('egg').Controller;

class BlogController extends Controller {
  async index() {
    const { ctx, service } = this;
    const { type } = ctx.request.query;
    ctx.ret = await service.blog.index(type);
  }
  async show () {
    const { ctx, service } = this;
    const id = ctx.params.id;
    ctx.ret = await service.blog.show(id);
  };
}

module.exports = BlogController;
