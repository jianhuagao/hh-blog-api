'use strict';

/** @type Egg.EggPlugin */
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};
exports.validate = {
  enable: true,
  package: 'egg-validate',
};
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
exports.multer = {
  enable: true,
  package: 'koa-multer',
};
