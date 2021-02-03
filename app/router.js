'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

// RESTful风格定义
module.exports = app => {
  const { router, controller } = app;
  router.resources('menu', '/api/v1/menu', controller.menu);
  router.resources('website', '/api/v1/website', controller.website);
  router.resources('banner', '/api/v1/banner', controller.banner);
  router.resources('area', '/api/v1/area', controller.area);
  router.resources('blogType', '/api/v1/blogType', controller.blogType);
  router.resources('blog', '/api/v1/blog', controller.blog);
  router.resources('user', '/api/v1/user', controller.user);
  router.resources('register', '/api/v1/register', controller.register);
  router.post('login', '/api/v1/login', controller.login.login);
  router.post('uploadImg', '/api/v1/uploadImg', controller.upload.uploadImg);
  router.get('img', '/api/v1/img/:id/:type/:end', controller.upload.getImg);
  router.resources('imgPool', '/api/v1/imgPool', controller.imgPool);
};
