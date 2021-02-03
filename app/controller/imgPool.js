'use strict';

const Controller = require('egg').Controller;

class ImgPoolController extends Controller {
  async index() {
    const { ctx, service } = this;
    ctx.ret = await service.imgPool.index(); // 查找 service/menu.js 下的 selectMenu 方法。
  }
  async destroy() {
    const { ctx, service } = this;
    const id = ctx.params.id;
    const ret = await service.imgPool.destroy(id);
    if (ret) {
      ctx.status = 204;
    } else {
      ctx.status = 400;
    }
  }
}

module.exports = ImgPoolController;
