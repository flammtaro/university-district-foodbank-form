const Admin = require('./Admin');
const Client = require('./Client');
const Order = require('./Order');


Client.hasMany(Order, {
  // foreignKey: 'clientId',
  onDelete: "CASCADE"
});

Order.belongsTo(Client);

module.exports = {
    Admin,
    Client,
    Order,
  };