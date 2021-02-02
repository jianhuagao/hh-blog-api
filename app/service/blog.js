'use strict';

const Service = require('egg').Service;

// 通过定义 Service 类的方式来编写代码，所有的 Service 文件都必须放在 app/service 目录下。
class BlogService extends Service {
  async index(type) {
    const typeWhere = type && {
      "type": Number(type)
    }
    const attributes = type && {attributes: ['id','title', 'showimg', 'type', 'area', 'read', 'good', 'author', 'udate', 'sort', 'resume']}
    const result = await this.ctx.model.TbBlog.findAndCountAll({
      ...this.ctx.paging,
      where: {
        ...typeWhere,
        ...this.ctx.findall
      },
      ...attributes
    });
    return result;
  }

  async show(id) {
    const result = await this.ctx.model.TbBlog.findByPk(id);
    return result;
  }
}

module.exports = BlogService;
