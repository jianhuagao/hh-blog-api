/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;
  const sequelize = app.Sequelize;
  const Model = app.model.define('tb_menu', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    icon: {
      type: DataTypes.STRING(30),
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
    sort: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    del: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'tb_menu'
  });

  Model.associate = function() {

  }

  return Model;
};
