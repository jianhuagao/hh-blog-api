'use strict';

const Controller = require('egg').Controller;

class WebsiteController extends Controller {
  async getWebsite() {
    const { ctx, service } = this;
    ctx.body  = await service.website.selectWebsite(); // 查找 service/menu.js 下的 selectMenu 方法。
  }
}

module.exports = WebsiteController;