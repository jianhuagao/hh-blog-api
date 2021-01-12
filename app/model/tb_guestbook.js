/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;
  const sequelize = app.Sequelize;
  const Model = app.model.define('tb_guestbook', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    content: {
      type: DataTypes.STRING(4000),
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    parent_id: {
      type: DataTypes.INTEGER,
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
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'tb_guestbook'
  });

  Model.associate = function() {

  }

  return Model;
};
