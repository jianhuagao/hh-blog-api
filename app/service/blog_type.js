'use strict';

const Service = require('egg').Service;

// 通过定义 Service 类的方式来编写代码，所有的 Service 文件都必须放在 app/service 目录下。
class BlogTypeService extends Service {
  async index() {
    const result = await this.ctx.model.TbBlogType.findAndCountAll({ ...this.ctx.paging, where: this.ctx.findall });
    return result;
  }
  async create() {
    const { ctx } = this;
    const data = ctx.request.body;
    return await ctx.model.TbBlogType.create(data);
  }
  async update(id) {
    const { ctx } = this;
    const data = ctx.request.body;
    return await ctx.model.TbBlogType.update(data, {
      where: { id },
    });
  }
  // 逻辑删除
  async destroy(id) {
    const { ctx } = this;
    return await ctx.model.TbBlogType.update({ del: 1 }, {
      where: { id },
    });
  }
}

module.exports = BlogTypeService;
