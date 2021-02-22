'use strict';

const Controller = require('egg').Controller;

class RequestController extends Controller {
  async index() {
    const { ctx, service } = this;
    ctx.ret = await service.request.index(); // 查找 service/menu.js 下的 selectMenu 方法。
  }

  async destroy() {
    const { ctx, service } = this;
    const id = ctx.params.id;
    const ret = await service.request.destroy(id);
    if (ret) {
      ctx.status = 204;
    } else {
      ctx.status = 400;
    }
  }
}

module.exports = RequestController;
