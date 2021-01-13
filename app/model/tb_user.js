/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('tb_user', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true, autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    userid: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    userpwd: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    usertel: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    role: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdate: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')
    },
    udate: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')
    },
    del: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'tb_user'
  });

  Model.associate = function() {

  }

  return Model;
};
