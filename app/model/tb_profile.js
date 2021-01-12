/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;
  const sequelize = app.Sequelize;
  const Model = app.model.define('tb_profile', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    avatar: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    website_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    github: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    cdate: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    udate: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    del: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'tb_profile'
  });

  Model.associate = function() {

  }

  return Model;
};
