const sequelize = require('../config/connection.js');
const {Client} = require('../models');

const admin = {
    email:process.env.ADMIN,
    password:process.env.ADMIN_PASSWORD,
    householdSize: 1,
    role: "admin",
};

const seed = async ()=>{
    await sequelize.sync({force:true});
    await Client.create(admin,{individualHooks:true});
    process.exit(0)}

seed();
