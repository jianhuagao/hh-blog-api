'use strict';

const Controller = require('egg').Controller;

class BlogController extends Controller {
  constructor(ctx) {
    super(ctx);
    this.createRule = {
      title: 'string',
      resume: 'string',
      content: 'string',
      type: 'number',
      area: 'number',
      read: 'number',
      good: 'number',
      author: 'string',

    };
    this.webHttp = this.app.config.projectNet.webHttp;// api base接口
  }
  async index() {
    const { ctx, service } = this;
    const { type } = ctx.request.query;
    ctx.ret = await service.blog.index(type);
  }
  async show() {
    const { ctx, service } = this;
    const id = ctx.params.id;
    ctx.ret = await service.blog.show(id);
  }
  async create() {
    const { ctx, service } = this;
    ctx.validate(this.createRule, ctx.request.body);
    const ret = await service.blog.create(ctx.request.body);
    if (ret) {
      // 发布成功显示链接
      ctx.body = this.webHttp + '#/Blog/' + ret.dataValues.id;
      ctx.status = 201;
    } else {
      ctx.status = 400;
    }
  }
  async update() {
    const { ctx, service } = this;
    const id = ctx.params.id;
    // ctx.validate(this.createRule);
    const ret = await service.blog.update(id);
    if (ret) {
      // 发布成功显示链接
      ctx.body = this.webHttp + '#/Blog/' + id;
      ctx.status = 201;
    } else {
      ctx.status = 400;
    }
  }
  async destroy() {
    const { ctx, service } = this;
    const id = ctx.params.id;
    const ret = await service.blog.destroy(id);
    if (ret) {
      ctx.status = 204;
    } else {
      ctx.status = 400;
    }
  }
}

module.exports = BlogController;
