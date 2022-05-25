const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const adminRoutes = require('./admin-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/', adminRoutes);


module.exports = router;