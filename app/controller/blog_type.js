'use strict';

const Controller = require('egg').Controller;

class BlogTypeController extends Controller {
  constructor(ctx) {
    super(ctx);
    this.createRule = {
      name: 'string',
      logo_img: 'string',
      page_url: 'string',
    };
  }
  async index() {
    const { ctx, service } = this;
    ctx.ret = await service.blogType.index(); // 查找 service/menu.js 下的 selectMenu 方法。
  }
  async create() {
    const { ctx, service } = this;
    ctx.validate(this.createRule, ctx.request.body);
    const ret = await service.blogType.create(ctx.request.body);
    if (ret) {
      ctx.status = 201;
    } else {
      ctx.status = 400;
    }
  }
  async update() {
    const { ctx, service } = this;
    const id = ctx.params.id;
    ctx.validate(this.createRule);
    const ret = await service.blogType.update(id);
    if (ret) {
      ctx.status = 202;
    } else {
      ctx.status = 400;
    }
  }
  async destroy() {
    const { ctx, service } = this;
    const id = ctx.params.id;
    const ret = await service.blogType.destroy(id);
    if (ret) {
      ctx.status = 204;
      ctx.body= "deleted";
    } else {
      ctx.status = 400;
    }
  }
}

module.exports = BlogTypeController;
