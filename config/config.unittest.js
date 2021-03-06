/* eslint valid-jsdoc: "off" */
'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
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
  config.sequelize = {
    dialect: 'mysql',
    host: '121.4.115.182',
    port: 3306,
    database: 'blogdbtest',
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

  return {
    ...config,
    ...userConfig,
  };
};
