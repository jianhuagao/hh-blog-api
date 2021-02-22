'use strict';
const jwt = require('jsonwebtoken');

module.exports = options => {
  return async function Auth(ctx, next) {
    console.log('Token验证~');
    // 1.获取token
    const PUBLIC_KEY = options.publicSecret;
    const authorization = ctx.headers.authorization;
    if (!authorization) {
      if (ctx.method === 'GET') {
        if (ctx.url === '/api/v1/user') {
          ctx.status = 401;
        } else {
          console.log('Token验证:GET跳过验证~');
          await next();
        }
      } else if (ctx.url === '/api/v1/register' || ctx.url === '/api/v1/login') {
        console.log('Token验证:POST登录注册跳过验证~');
        await next();
      } else {
        console.log('Token验证不通过:Token不存在~');
        ctx.status = 401;
      }
    } else {
      const token = authorization.replace('Bearer ', '');
      // 2.验证token(id/name/iat/exp)
      try {
        const result = jwt.verify(token, PUBLIC_KEY, {
          algorithms: [ 'RS256' ],
        });
        ctx.user = result;
        console.log('Token验证通过~');
        await next();
      } catch (err) {
        console.log('Token验证不通过:Token不正确~');
        ctx.status = 401;
      }
    }
  };
};
