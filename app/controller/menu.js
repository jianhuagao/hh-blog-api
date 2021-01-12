'use strict';

const Controller = require('egg').Controller;

class MenuController extends Controller {
  async getMenu() {
    const { ctx, service } = this;
    ctx.body  = await service.menu.selectMenu(); // 查找 service/menu.js 下的 selectMenu 方法。
  }
  
  async addMenu(){
    const { ctx, service } = this;
    console.log(ctx.request.body);
    ctx.body  = "OK"; 
  }
}

module.exports = MenuController;