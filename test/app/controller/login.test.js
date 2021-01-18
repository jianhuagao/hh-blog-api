'use strict';

// const mock = require('egg-mock');
// const assert = require('assert');
// const { app, mock, assert } = require('egg-mock/bootstrap');
const { app } = require('egg-mock/bootstrap');

describe('test/app/controller/login.test.js', () => {
  // 测试不传参登录
  it('测试不传参登录 should 422', async function() {
    // app.mockCsrf();// 此处不需要token模拟
    app.mockService('login', 'login', 'ok');// 模拟service返回的数据
    await app.httpRequest()
      .post('/api/v1/login')
      .send({
        // userid: 'test',
        // userpwd: '123456', // 不传参
      })
      .expect(422)
      .expect({
        error: 'Validation Failed',
        detail: [
          { message: 'required', field: 'userid', code: 'missing_field' },
          { message: 'required', field: 'userpwd', code: 'missing_field' },
        ],
      });
  });

  // 测试正确登录
  it('测试正确登录 should 201', async function() {
    app.mockService('login', 'login', '1');// 模拟service返回的数据
    await app.httpRequest()
      .post('/api/v1/login')
      .send({
        userid: 'test',
        userpwd: '123456',
      })
      .expect(200);
  });
});
