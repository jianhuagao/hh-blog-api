"use strict";
const Sequelize = require('sequelize');
module.exports = function ({ model: sequelize, Sequelize: DataTypes }) {
  return sequelize.define('tb_guestbook', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "编号"
    },
    content: {
      type: DataTypes.STRING(4000),
      allowNull: false,
      comment: "公告内容"
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "公告类型 1网站公告 2页面公告 3板块公告 4分类公告 5文章公告 "
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "公告父级id"
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
    sort: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "排序"
    },
    del: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "逻辑删除 0未删除 1已删除"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      comment: "是否启用 1启用 0禁用"
    }
  }, {
    sequelize,
    tableName: 'tb_guestbook',
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
