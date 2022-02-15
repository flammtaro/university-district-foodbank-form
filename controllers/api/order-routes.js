const router = require('express').Router();
const { Order } = require('../../models');

router.post('/', async (req,res) => {
    try {
        console.log('=======================================')
        console.log(req.session)
        const orderData = await Order.create({...req.body, ClientId:req.session.clientId, client_id:req.session.clientId});

        const order = orderData.get({ plain: true });
        // res.render('new-order', order);
        
        res.status(200).json(order)
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
});

module.exports = router;