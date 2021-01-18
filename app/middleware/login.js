'use strict';
const jwt = require('jsonwebtoken');

module.exports = options => {
  return async function Login(ctx, next) {
    await next();
    if (ctx.user) {
      const { userid, username } = ctx.user;
      const PRIVATE_KEY = options.privateSecret;
      const token = jwt.sign({ userid, username }, PRIVATE_KEY, {
        expiresIn: 60 * 60 * 24,
        algorithm: 'RS256',
      });
      ctx.body = { userid, username, token };
      console.log('Token授权成功~');
    } else {
      ctx.status = 401;
    }
  };
};
