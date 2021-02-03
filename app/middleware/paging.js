'use strict';

module.exports = () => {
  return async function paging(ctx, next) {
    const { offset, limit } = ctx.request.query;
    ctx.paging = (offset && limit) && { offset: (offset - 1) * limit, limit: Number(limit) };
    console.log('paging中间件~');
    await next();
  };
};
