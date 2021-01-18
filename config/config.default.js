/* eslint valid-jsdoc: "off" */
'use strict';
const path = require('path');
const fs = require('fs');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, '../app/keys/private.key'));
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, '../app/keys/public.key'));
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  const userConfig = {
    // myAppName: 'egg',
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1610354339121_7437';

  // 注册全局中间件
  config.middleware = [ 'auth', 'errorHandler', 'login' ];
  config.errorHandler = {
    match: '/api',
  };
  config.sequelize = {
    dialect: 'mysql',
    host: '121.4.115.182',
    port: 3306,
    database: 'blogdb',
    username: 'reroot',
    password: '666gjjhhh',
    define: {
      freezeTableName: true,
      timestamps: true,
      createdAt: 'cdate',
      updatedAt: 'udate',
      deletedAt: 'del',
    },
  };

  // 注册接口不验证csrf
  config.security = {
    csrf: {
      ignore: [ '/api/v1/register', '/api/v1/login' ],
      enable: true,
    },
  };

  config.jwt = {
    publicSecret: PUBLIC_KEY,
    privateSecret: PRIVATE_KEY,
  };

  config.login = {
    match: '/api/v1/login',
    privateSecret: PRIVATE_KEY,
  };

  config.auth = {
    match: [ '/api/v1/user' ],
    publicSecret: PUBLIC_KEY,
  };

  return {
    ...config,
    ...userConfig,
  };
};
