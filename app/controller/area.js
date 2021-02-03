'use strict';

const Controller = require('egg').Controller;

class AreaController extends Controller {
  constructor(ctx) {
    super(ctx);
    this.createRule = {
      title: 'string',
      second_title: 'string',
      img: 'string',
    };
  }
  async index() {
    const { ctx, service } = this;
    ctx.ret = await service.area.index(); // 查找 service/menu.js 下的 selectMenu 方法。
  }
  async create() {
    const { ctx, service } = this;
    ctx.validate(this.createRule, ctx.request.body);
    const ret = await service.area.create(ctx.request.body);
    if (ret) {
      ctx.status = 201;
    } else {
      ctx.status = 400;
    }
  }
  async update() {
    const { ctx, service } = this;
    const id = ctx.params.id;
    // ctx.validate(this.createRule);
    const ret = await service.area.update(id);
    if (ret) {
      ctx.status = 202;
    } else {
      ctx.status = 400;
    }
  }
  async destroy() {
    const { ctx, service } = this;
    const id = ctx.params.id;
    const ret = await service.area.destroy(id);
    if (ret) {
      ctx.status = 204;
    } else {
      ctx.status = 400;
    }
  }
}

module.exports = AreaController;
