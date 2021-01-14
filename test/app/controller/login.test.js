'use strict';

// const mock = require('egg-mock');
// const assert = require('assert');
// const { app, mock, assert } = require('egg-mock/bootstrap');
const { app } = require('egg-mock/bootstrap');

describe('test/app/controller/login.test.js', () => {
  // 测试不传参登录
  it('should POST /api/v1/login 422', async function() {
    app.mockCsrf();// token模拟
    const err = new Error('validation failed');
    err.status = 422;
    app.mockService('login', 'login', err);
    await app.httpRequest()
      .post('/api/v1/login')
      .send({
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
  it('should POST /api/v1/login 201', async function() {
    app.mockCsrf();
    app.mockService('login', 'login', '1');
    await app.httpRequest()
      .post('/api/v1/login')
      .send({
        userid: 'test',
        userpwd: '123456',
      })
      .expect(200)
      .expect('1');
  });
});
