'use strict';

const Service = require('egg').Service;

// 通过定义 Service 类的方式来编写代码，所有的 Service 文件都必须放在 app/service 目录下。
class BlogTypeService extends Service {
  async index() {
    const result = await this.ctx.model.TbBlogType.findAndCountAll(this.ctx.paging);
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
    return await ctx.model.TbBlogType.update(data,{
      where:{id}
    });
  }
  async destroy(id) {
    const { ctx } = this;
    return await ctx.model.TbBlogType.destroy({
      "where":{id}
    });
  }
}

module.exports = BlogTypeService;
