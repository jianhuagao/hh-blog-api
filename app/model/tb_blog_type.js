/* indent size: 2 */
'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('tb_blog_type', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    logo_img: {
      type: DataTypes.STRING(225),
      allowNull: false,
    },
    page_url: {
      type: DataTypes.STRING(225),
      allowNull: true,
    },
    introduction: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    api_url: {
      type: DataTypes.STRING(225),
      allowNull: true,
    },
    website: {
      type: DataTypes.STRING(225),
      allowNull: true,
    },
    inventor: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    protocol: {
      type: DataTypes.STRING(225),
      allowNull: true,
    },
    version: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    download: {
      type: DataTypes.STRING(225),
      allowNull: true,
    },
    system: {
      type: DataTypes.STRING(225),
      allowNull: true,
    },
    cdate: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
    },
    udate: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    del: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0',
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1',
    },
  }, {
    tableName: 'tb_blog_type',
  });

  Model.associate = function() {

  };

  return Model;
};
