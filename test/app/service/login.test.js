'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/service/login.test.js', () => {
  let ctx;

  beforeEach(() => {
    // 创建一个匿名的 context 对象，可以在 ctx 对象上调用 service 的方法
    ctx = app.mockContext();
  });

  describe('login user', () => {

    it('测试密码错误时登录 should login failed ', async () => {
      ctx.request.body = {
        userid: 'gaojianhua',
        userpwd: '123',
      };
      const ret = await ctx.service.login.login();
      assert(ret === '0');
    });

    it('测试密码正确时登录 should login success', async () => {
      await app.factory.createMany('TbUser', 1);
      ctx.request.body = {
        userid: 'gaojianhua',
        userpwd: '123456',
      };
      const id = await ctx.service.login.login();
      assert(id === '1');
    });
  });
});
