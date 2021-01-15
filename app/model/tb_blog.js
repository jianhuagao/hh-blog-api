'use strict';
const Sequelize = require('sequelize');
module.exports = function({ model: sequelize, Sequelize: DataTypes }) {
  return sequelize.define('tb_blog', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: '编号',
    },
    title: {
      type: DataTypes.STRING(225),
      allowNull: true,
      comment: '标题',
    },
    showimg: {
      type: DataTypes.STRING(225),
      allowNull: true,
      comment: '展示图片',
    },
    content: {
      type: DataTypes.STRING(2000),
      allowNull: false,
      comment: '文章内容',
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '文章类别',
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '属于板块',
    },
    read: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '阅读数',
    },
    good: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'good!!',
    },
    author: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: '作者',
    },
    source: {
      type: DataTypes.STRING(225),
      allowNull: true,
      comment: '来源(转载于)',
    },
    remark: {
      type: DataTypes.STRING(4000),
      allowNull: true,
      comment: '备注',
    },
    location: {
      type: DataTypes.STRING(225),
      allowNull: true,
      comment: '定位,地址',
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
      comment: '排序 用于置顶功能',
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: '是否启用 1启用 0未启用',
    },
    del: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '逻辑删除 0未删除 1已删除',
    },
  }, {
    sequelize,
    tableName: 'tb_blog',
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
