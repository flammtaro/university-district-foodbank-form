const Special = require('./Specials');
const Client = require('./Client');
const Order = require('./Order');


Client.hasMany(Order, {
  // foreignKey: 'clientId',
  onDelete: "CASCADE"
});

Order.belongsTo(Client);

module.exports = {
    Special,
    Client,
    Order,
  };