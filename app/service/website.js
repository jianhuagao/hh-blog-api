'use strict';

const Service = require('egg').Service;

// 通过定义 Service 类的方式来编写代码，所有的 Service 文件都必须放在 app/service 目录下。
class WebsiteService extends Service {
  async index() {
    const result = await this.ctx.model.TbWebsiteConfig.findAll(this.ctx.paging);
    return result;
  }
}

module.exports = WebsiteService;
