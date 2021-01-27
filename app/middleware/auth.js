'use strict';
const jwt = require('jsonwebtoken');

module.exports = options => {
  return async function Auth(ctx, next) {
    console.log('Token验证~');
    // 1.获取token
    const PUBLIC_KEY = options.publicSecret;
    const authorization = ctx.headers.authorization;
    if (!authorization) {
      ctx.status = 401;
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
        ctx.status = 401;
      }
    }
  };
};
