'use strict';

const Controller = require('egg').Controller;

class MenuController extends Controller {
  async index() {
    const { ctx, service } = this;
    ctx.ret = await service.menu.index(); // 查找 service/menu.js 下的 selectMenu 方法。
  }
}

module.exports = MenuController;
