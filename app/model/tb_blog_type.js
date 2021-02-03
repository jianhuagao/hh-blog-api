'use strict';
const Sequelize = require('sequelize');
module.exports = function({ model: sequelize, Sequelize: DataTypes }) {
  return sequelize.define('tb_blog_type', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: '编号',
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: '类型名',
    },
    logo_img: {
      type: DataTypes.STRING(225),
      allowNull: false,
      comment: 'logo图路径',
    },
    page_url: {
      type: DataTypes.STRING(225),
      allowNull: true,
      comment: '跳转路径',
    },
    introduction: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: '简介',
    },
    api_url: {
      type: DataTypes.STRING(225),
      allowNull: true,
      comment: '文档地址',
    },
    website: {
      type: DataTypes.STRING(225),
      allowNull: true,
      comment: '官网',
    },
    inventor: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: '创造者',
    },
    protocol: {
      type: DataTypes.STRING(225),
      allowNull: true,
      comment: '(开源)协议',
    },
    version: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: '版本号',
    },
    download: {
      type: DataTypes.STRING(225),
      allowNull: true,
      comment: '下载地址 or npm',
    },
    system: {
      type: DataTypes.STRING(225),
      allowNull: true,
      comment: '操作系统',
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
    sort: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: '排序',
    },
    del: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '逻辑删除 0未删除  1已删除 ',
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: '是否启用 1启用 0禁用',
    },
  }, {
    sequelize,
    tableName: 'tb_blog_type',
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
