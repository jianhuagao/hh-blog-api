'use strict';

const Service = require('egg').Service;
// 通过定义 Service 类的方式来编写代码，所有的 Service 文件都必须放在 app/service 目录下。
// 定义创建接口的请求参数规则
class LoginService extends Service {
  async login() {
    const { ctx } = this;
    const { userid, userpwd } = ctx.request.body;
    const query = {
      where: {
        userid,
        userpwd,
      },
    };
    const userCount = await ctx.model.TbUser.findAll(query);
    const result = userCount[0];
    return result;
  }
}

module.exports = LoginService;
