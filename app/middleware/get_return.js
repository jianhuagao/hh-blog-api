'use strict';

module.exports = () => {
  return async function getReturn(ctx, next) {
    await next();
    console.log('get返回值中间件~');
    const ret = ctx.ret;
    if (ret) {
      ctx.body = {
        data: ret,
      };
    }
  };
};
