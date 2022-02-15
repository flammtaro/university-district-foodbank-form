const router = require('express').Router();

const clientRoutes = require('./client-routes');
const orderRoutes = require('./order-routes');
const specialsRoute =require('./specials-route');


router.use('/client', clientRoutes);
router.use('/order', orderRoutes);
router.use('/specials', specialsRoute);

module.exports = router;