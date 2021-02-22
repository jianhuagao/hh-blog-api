"use strict";
const Sequelize = require('sequelize');
module.exports = function ({ model: sequelize, Sequelize: DataTypes }) {
  return sequelize.define('tb_user', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "编号"
    },
    username: {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "昵称"
    },
    userid: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "用户账户"
    },
    userpwd: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "用户密码"
    },
    usertel: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "用户手机"
    },
    role: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "角色编号"
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
    del: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "逻辑删除"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      comment: "是否启用"
    },
    avatar: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "用户头像"
    },
    introduction: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "简介"
    },
    gender: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "性别"
    }
  }, {
    sequelize,
    tableName: 'tb_user',
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
