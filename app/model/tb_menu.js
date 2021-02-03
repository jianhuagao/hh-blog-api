'use strict';
const Sequelize = require('sequelize');
module.exports = function({ model: sequelize, Sequelize: DataTypes }) {
  return sequelize.define('tb_menu', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: '编号',
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: '名称',
    },
    url: {
      type: DataTypes.STRING(225),
      allowNull: true,
      comment: '菜单链接',
    },
    icon: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: '图标',
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
      comment: '逻辑删除 1已删除 0未删除',
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: '是否启用 0禁用 1启用',
    },
  }, {
    sequelize,
    tableName: 'tb_menu',
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
      {
        name: 'IDX_tb_menu_status',
        using: 'BTREE',
        fields: [
          { name: 'status' },
        ],
      },
    ],
  });
};
