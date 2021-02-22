'use strict';

module.exports = () => {
  return async function findall(ctx, next) {
    const user = ctx.user;
    // 未登录不显示已禁用的数据
    ctx.findall = user ? { del: 0 } : { del: 0, status: 1 };
    console.log('findall中间件~');
    await next();
  };
};
