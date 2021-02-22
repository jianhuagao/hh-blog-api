"use strict";
const Sequelize = require('sequelize');
module.exports = function ({ model: sequelize, Sequelize: DataTypes }) {
  return sequelize.define('tb_area', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "编号"
    },
    title: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "标题"
    },
    second_title: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "二级标题"
    },
    img: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "图片"
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
      allowNull: false,
      comment: "排序"
    },
    del: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "逻辑删除 1已删除 0未删除"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "是否启用 1启用 0禁用"
    }
  }, {
    sequelize,
    tableName: 'tb_area',
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
