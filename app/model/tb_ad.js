/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('tb_ad', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    url: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    img_url: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(4000),
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(4000),
      allowNull: true
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    weight: {
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
    tableName: 'tb_ad'
  });

  Model.associate = function() {

  }

  return Model;
};
