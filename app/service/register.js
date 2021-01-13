'use strict';

const Service = require('egg').Service;

// 通过定义 Service 类的方式来编写代码，所有的 Service 文件都必须放在 app/service 目录下。
class RegisterService extends Service {
  constructor(ctx) {
    super(ctx); // 调用父对象上的函数。
  }
  /**
   * 注册信息
   * 
   */
  async create() {
    const { ctx } = this
    const { userid, userpwd, username } = ctx.request.body
    let user
    try {
      user = await ctx.model.TbUser.create({ userid, userpwd, username });
    } catch (error) {
      ctx.status = 400;
    }
    ctx.status = 201;
    return user;
  }
}

module.exports = RegisterService;