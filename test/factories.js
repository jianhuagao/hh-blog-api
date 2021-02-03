'use strict';

const { factory } = require('factory-girl');

module.exports = app => {
  // 可以通过 app.factory 访问 factory 实例
  app.factory = factory;

  // 定义 user 和默认数据
  factory.define('TbUser', app.model.TbUser, {
    id: '1',
    username: '高建华',
    userid: 'gaojianhua',
    userpwd: '123456',

  });
};
