const router = require('express').Router();

const clientRoutes = require('./client-routes');
const orderRoutes = require('./order-routes');


router.use('/client', clientRoutes);
router.use('/order', orderRoutes);

module.exports = router;