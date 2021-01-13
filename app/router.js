'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

// module.exports = app => {
//   const { router, controller } = app;
//   router.get('/api/menu', controller.menu.getMenu);
//   router.post('/api/menu',controller.menu.addMenu);
//   router.get('/api/website', controller.website.getWebsite);
// };  

//RESTful风格定义
module.exports = app => {
  const { router, controller } = app;
  router.resources('menu', '/api/v1/menu', controller.menu);
  router.resources('website', '/api/v1/website', controller.website);
  router.resources('user', '/api/v1/user', controller.user);
  router.resources('register', '/api/v1/register', controller.register);
  router.post('login', '/api/v1/login', controller.login.login);
  
};