const sequelize = require('../config/connection.js');
const {Client, Order} = require('../models');

const order = {
    ClientId:1,
    milk: true,
};

const admin = {
    email:process.env.ADMIN,
    password:process.env.ADMIN_PASSWORD,
    clientName: "admin",
    householdSize: 1,
    role: "admin",
};

const seed = async ()=>{
    await sequelize.sync({force:true});
    await Client.create(admin,{individualHooks:true});
    await Order.create(order,{individualHooks:true});
    process.exit(0)};


seed();
