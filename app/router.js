'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

// RESTful风格定义
module.exports = app => {
  const { router, controller } = app;
  router.resources('menu', '/api/v1/menu', controller.menu);
  router.resources('website', '/api/v1/website', controller.website);
  router.resources('user', '/api/v1/user', controller.user);
  router.resources('register', '/api/v1/register', controller.register);
  router.post('login', '/api/v1/login', controller.login.login);

};
