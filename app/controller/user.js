'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx, service } = this;
    ctx.body = await service.user.index();
  }
}

module.exports = UserController;
