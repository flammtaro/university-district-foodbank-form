const router = require('express').Router();
const { Order } = require('../../models');

router.post('/', async (req,res) => {
    try {
        const orderData = await Order.create(req.body);
        res.status(200).json(orderData)
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;