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
   
    role: {
      type:DataTypes.STRING,
      defaultValue: "user",
    },
    clientName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email:  {
      type: DataTypes.STRING,
      allowNull: false, 
      unique: true,
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
      defaultValue: false,
    },
    soft: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    vegan: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    halal:{
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    kosher: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    glutenFree: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    otherRestrictions: {
      type: DataTypes.STRING,
    },
    //Cooking Access
    cookingAccess:{
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    microwaveOnly:{
      type: DataTypes.BOOLEAN,
      defaultValue: false,
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
