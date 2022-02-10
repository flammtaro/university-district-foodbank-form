const { Model, DataTypes, BOOLEAN } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection.js');

class Client extends Model {
    // set up method to run on instance data (per user) to check password
    checkPassword(loginPw) {
      return bcrypt.compareSync(loginPw, this.password);
    }
}

Client.init(
  {
    // define columns
    //Account Info
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement:true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isEmail: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8]
      }
    },
    householdSize: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    //Dietary Restrictions
    vegetarian: {
      type: DataTypes.BOOLEAN,
    },
    vegan: {
      type: DataTypes.BOOLEAN,
    },
    halal:{
      type: DataTypes.BOOLEAN,
    },
    kosher: {
      type: DataTypes.BOOLEAN,
    },
    glutenFree: {
      type: DataTypes.BOOLEAN,
    },
    dietaryRestrictionsOther: {
      type: DataTypes.STRING,
    },
    //Cooking Access
    cookingAccess:{
      type: DataTypes.BOOLEAN,
    },
    microwaveOnly:{
      type: DataTypes.BOOLEAN,
    },

  },
  {
    hooks: {
      // set up beforeCreate lifecycle "hook" functionality
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      }
    },
    sequelize,
  }
);

module.exports = Client;
