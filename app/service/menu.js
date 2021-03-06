'use strict';

const Service = require('egg').Service;

// 通过定义 Service 类的方式来编写代码，所有的 Service 文件都必须放在 app/service 目录下。
class MenuService extends Service {
  async index() {
    const result = await this.ctx.model.TbMenu.findAndCountAll({ ...this.ctx.paging, where: this.ctx.findall });
    return result;
  }
}

module.exports = MenuService;
