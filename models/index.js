const Special = require('./Specials');
const Order = require('./Order');
const Client = require('./Client');



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