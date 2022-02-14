const router = require('express').Router();
const { Order } = require('../../models');

router.post('/', async (req,res) => {
    try {
        const orderData = await Order.create(req.body);

        const order = orderData.get({ plain: true });
        // res.render('new-order', order);
        
        res.status(200).json(order)
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;