"use strict";
const Sequelize = require('sequelize');
module.exports = function ({ model: sequelize, Sequelize: DataTypes }) {
  return sequelize.define('tb_profile', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "编号"
    },
    avatar: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "头像链接"
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "用户名 我的用户名"
    },
    website_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "个人网站链接"
    },
    github: {
      type: DataTypes.STRING(225),
      allowNull: true,
      comment: "github链接"
    },
    cdate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    udate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "是否启用 1启用 0禁用 默认未启用 只允许启用一个"
    },
    del: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "逻辑删除 0未删除 1删除"
    }
  }, {
    sequelize,
    tableName: 'tb_profile',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
