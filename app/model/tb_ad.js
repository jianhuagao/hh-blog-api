'use strict';
const Sequelize = require('sequelize');
module.exports = function({ model: sequelize, Sequelize: DataTypes }) {
  return sequelize.define('tb_ad', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: '编号',
    },
    url: {
      type: DataTypes.STRING(225),
      allowNull: true,
      comment: '跳转地址',
    },
    img_url: {
      type: DataTypes.STRING(225),
      allowNull: true,
      comment: '图片地址',
    },
    title: {
      type: DataTypes.STRING(225),
      allowNull: true,
      comment: '标题',
    },
    remark: {
      type: DataTypes.STRING(225),
      allowNull: true,
      comment: '备注',
    },
    type: {
      type: DataTypes.STRING(4000),
      allowNull: true,
      comment: '广告类型',
    },
    location: {
      type: DataTypes.STRING(4000),
      allowNull: true,
      comment: '广告位置',
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '开始日期',
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '结束日期',
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: '权重',
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
      comment: '逻辑删除 0未删除 1删除',
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: '是否启用 1启用  0禁用',
    },
  }, {
    sequelize,
    tableName: 'tb_ad',
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
