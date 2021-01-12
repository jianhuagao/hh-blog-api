/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;
  const sequelize = app.Sequelize;
  const Model = app.model.define('tb_banner', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    content: {
      type: DataTypes.STRING(4000),
      allowNull: false
    },
    img: {
      type: DataTypes.STRING(255),
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
    tableName: 'tb_banner'
  });

  Model.associate = function() {

  }

  return Model;
};
