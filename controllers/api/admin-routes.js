const router = require('express').Router();
const { Order } = require('../../models');

//TODO: Get Routes to get all orders
router.get('/admin/viewOrder', async (req, res) => {
    try{
    const orderData = await Order.findAll()
    
    const orders = orderData.map((order) => order.get({ plain: true }));
        res.render('all', { orders });
    } catch (err) {
        res.status(500).json(err);
    };     
});

//TODO: Get Route to get an individual order (by ID?)
router.get('/order/:id', async (req, res) => {
    try{ 
        const orderData = await Order.findByPk(req.params.id);
        if(!orderData) {
            res.status(404).json({message: 'No order with this id!'});
            return;
        }
        const order = orderData.get({ plain: true });
        res.render('order', order);
      } catch (err) {
          res.status(500).json(err);
      };     
});
//TODO: PUT and DELETE route for order processing status
router.put('/:id', (req, res) => {
    Order.update(
      {
        inProgress,
      },
      {
        where: {
          orderId,
        },
      }
    )
      .then((updatedOrderStatus) => {
        res.json(updatedOrderStatus);
      })
      .catch((err) => res.json(err));
});
  
  
router.delete('/:id', (req, res) => {
    Order.destroy({
      where: {
        orderId,
      },
    })
      .then((deletedOrder) => {
        res.json(deletedOrder);
      })
      .catch((err) => res.json(err));
});

module.exports = router;