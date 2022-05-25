const sequelize = require('../config/connection.js');
const { Client, Order, Feedback } = require('../models');

const order = {
    ClientId: 1,
    milk: true,
};

const admin = {
    email: process.env.ADMIN,
    password: process.env.ADMIN_PASSWORD,
    clientName: "admin",
    householdSize: 1,
    role: "admin",
};

const feedbacks = [
    {
        feedback: "App is great"
    },
    {
        feedback: "yay for food"
    }
]

const seed = async () => {
    await sequelize.sync({ force: true });
    const cli = await Client.create(admin, { individualHooks: true });
    await Order.create(order, { individualHooks: true });
    await Feedback.bulkCreate(feedbacks)
    console.log(cli)
    process.exit(0)
};


seed();
