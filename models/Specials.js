const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection.js');

class Special extends Model {
      
}

Special.init(
  {
    // define columns
      specialInput: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

module.exports = Special;
