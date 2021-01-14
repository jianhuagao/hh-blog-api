'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/service/login.test.js', () => {
  let ctx;

  beforeEach(() => {
    // 创建一个匿名的 context 对象，可以在 ctx 对象上调用 service 的方法
    ctx = app.mockContext();
  });

  it('should login failed ', async () => {
    app.mockHttpclient(`${ctx.service.login.login}/login`, 'POST', '0');
    const ret = await ctx.service.login.login({
      userid: 'test',
      userpwd: '123',
    });
    assert(ret === '0');
  });
  it('should login success', async function() {
    app.mockHttpclient(`${ctx.service.login.login}/login`, 'POST', '1');
    const id = await ctx.service.login.login({
      userid: 'gaojianhua',
      userpwd: '123456',
    });
    assert(id === '1');
  });
});
