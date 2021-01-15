'use strict';
const Sequelize = require('sequelize');
module.exports = function({ model: sequelize, Sequelize: DataTypes }) {
  return sequelize.define('tb_reply', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: '编号',
    },
    blog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '文章id',
    },
    replay_parent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: '回复父级',
    },
    content: {
      type: DataTypes.STRING(4000),
      allowNull: false,
      comment: '回复内容',
    },
    ip: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: '回复人ip',
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: '回复昵称',
    },
    email: {
      type: DataTypes.STRING(80),
      allowNull: true,
      comment: '推送邮箱',
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
      comment: '排序表 用于置顶功能',
    },
    del: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: '逻辑删除 1已删除 0未删除',
    },
    del_reason: {
      type: DataTypes.STRING(4000),
      allowNull: true,
      comment: "删除原因 '自行删除' '管理员删除'",
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: '是否启用 1启用 0禁用',
    },
  }, {
    sequelize,
    tableName: 'tb_reply',
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
