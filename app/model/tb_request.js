"use strict";
const Sequelize = require('sequelize');
module.exports = function ({ model: sequelize, Sequelize: DataTypes }) {
  return sequelize.define('tb_request', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "编号"
    },
    host: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "服务器的域名或 IP 地址"
    },
    connection: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "是否keep-alive"
    },
    accept: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "处理的内容"
    },
    origin: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "请求来自于哪个站点"
    },
    'user-agent': {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "应用类型"
    },
    referer: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "页面的来源页面的地址"
    },
    'accept-language': {
      type: DataTypes.STRING(300),
      allowNull: true,
      comment: "自然语言"
    },
    api: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "访问的api"
    },
    method: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "访问的method"
    },
    resstatus: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "返回的状态"
    },
    originalurl: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "baseurl"
    },
    'x-real-ip': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "真实ip"
    },
    'x-forwarded-for': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "代理ip"
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
    }
  }, {
    sequelize,
    tableName: 'tb_request',
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
