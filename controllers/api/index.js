const router = require('express').Router();

const adminRoutes = require('./admin-routes.js');
const clientRoutes = require('./client-routes');
const orderRoutes = require('./order-routes');

router.use('/user', adminRoutes);
router.use('/client', clientRoutes);
router.use('/order', orderRoutes);

module.exports = router;