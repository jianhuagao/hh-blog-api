'use strict';

const Service = require('egg').Service;

// 通过定义 Service 类的方式来编写代码，所有的 Service 文件都必须放在 app/service 目录下。
class accessRecordsService extends Service {
  async index() {
    const result = await this.ctx.model.TbRequest.findAndCountAll({ ...this.ctx.paging, where: this.ctx.findall });
    return result;
  }

  async create(data) {
    const { ctx } = this;
    try {
      return await ctx.model.TbRequest.create(data);
    } catch (error) {
      this.logger.error(error);
      return {};
    }

  }
  // 逻辑删除
  async destroy(id) {
    const { ctx } = this;
    return await ctx.model.TbRequest.update({ del: 1 }, {
      where: { id },
    });
  }
}

module.exports = accessRecordsService;
