'use strict';
const Sequelize = require('sequelize');
module.exports = function({ model: sequelize, Sequelize: DataTypes }) {
  return sequelize.define('tb_website_config', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: '编号',
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: '网站名称',
    },
    title: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: '网站title',
    },
    cdate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    udate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: '是否启用 1启用 0禁用 默认未启用 只允许启用一个',
    },
    del: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '逻辑删除 0未删除 1已删除',
    },
  }, {
    sequelize,
    tableName: 'tb_website_config',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id' },
        ],
      },
    ],
  });
};
