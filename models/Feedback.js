const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model 
class Feedback extends Model {}

Feedback.init(
  // Define fields/columns on model
  {
    feedback: {
      type: DataTypes.TEXT
    },
    
  },
  {
    // Link to database connection
    sequelize
  }
);

module.exports = Feedback;
