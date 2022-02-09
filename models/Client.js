const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Client extends Model {}

Client.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement:true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'client',
  }
);

module.exports = Client;
