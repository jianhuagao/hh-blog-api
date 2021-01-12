'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/menu', controller.menu.getMenu);
  router.post('/api/menu',controller.menu.addMenu);
  
  router.get('/api/website', controller.website.getWebsite);
};  
