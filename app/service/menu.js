'use strict';

const Service = require('egg').Service;

// 通过定义 Service 类的方式来编写代码，所有的 Service 文件都必须放在 app/service 目录下。
class MenuService extends Service {
  constructor(ctx) {
    super(ctx); // 调用父对象上的函数。
  }

  /**
   * 根据Id获取表信息。
   * @param {*} id 
   */
  async selectMenu() {
    const result = await this.ctx.model.TbMenu.findAll();
    return result;
  }
}

module.exports = MenuService;