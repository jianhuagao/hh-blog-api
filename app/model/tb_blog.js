/* indent size: 2 */
'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('tb_blog', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(225),
      allowNull: true,
    },
    showimg: {
      type: DataTypes.STRING(225),
      allowNull: true,
    },
    content: {
      type: DataTypes.STRING(2000),
      allowNull: false,
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    read: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    good: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    source: {
      type: DataTypes.STRING(225),
      allowNull: true,
    },
    remark: {
      type: DataTypes.STRING(4000),
      allowNull: true,
    },
    location: {
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
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1',
    },
    del: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0',
    },
  }, {
    tableName: 'tb_blog',
  });

  Model.associate = function() {

  };

  return Model;
};
