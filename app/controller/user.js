'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx, service } = this;
    ctx.ret = await service.user.index();
  }
}

module.exports = UserController;
