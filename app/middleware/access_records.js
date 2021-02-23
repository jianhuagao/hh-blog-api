'use strict';

module.exports = () => {
  return async function accessRecords(ctx, next) {
    await next();
    console.log('访问记录中~');
    const body = {
      ...ctx.request.headers,
      api: ctx.url,
      method: ctx.method,
      resstatus: ctx.status,
      originalurl: ctx.originalUrl,
      remarks:JSON.stringify(ctx.request.headers) 
    };
    await ctx.service.request.create(body);
  };
};
