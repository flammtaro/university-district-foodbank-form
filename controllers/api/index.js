const router = require('express').Router();

const clientRoutes = require('./client-routes');
const orderRoutes = require('./order-routes');
const specialsRoute =require('./specials-route');
const feedbackRoutes =require('./feedback-routes');


router.use('/client', clientRoutes);
router.use('/order', orderRoutes);
router.use('/specials', specialsRoute);
router.use('/feedbacks', feedbackRoutes);

module.exports = router;