'use strict';

const Service = require('egg').Service;

// 通过定义 Service 类的方式来编写代码，所有的 Service 文件都必须放在 app/service 目录下。
class RegisterService extends Service {
  async create() {
    const { ctx } = this;
    const { userid, userpwd, username } = ctx.request.body;
    const checking = await ctx.model.TbUser.findAll({
      where: {
        userid,
      },
    });
    if (checking[0]) {
      console.log('已注册');
      return '';
    }
    const user = await ctx.model.TbUser.create({ userid, userpwd, username });
    return user;

  }
}

module.exports = RegisterService;
