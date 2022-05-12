const router = require('express').Router();
const { Order, Client,Feedback } = require('../models');
const { withAuth, authAdmin} = require('../utils/auth')

//TODO: Get Routes to get all orders
router.get('/admin/viewOrder', withAuth, authAdmin, async (req, res) => {
  
    try{
    const orderData = await Order.findAll({include:[Client]})
    
    const orders = orderData.map((order) => order.get({ plain: true }));
    console.log(orders)
    const simpleOrders = orders.map(obj=>{
      const resObj = {
        foods:[],
        preferences:[]
      };
      const toKeep = ["Client","orderId","inProgress","completed","notes",'bag','box',"bag_quantity","box_quantity"];
      for(key in obj){
        if(toKeep.includes(key)){
          resObj[key]=obj[key]
        }
       else if(obj[key]===true){
          resObj.foods.push(key)
        }
       else if(key.includes('preference')){
        const prefObj = {} 
        prefObj.value = obj[key]?.length ? obj[key] : null
        prefObj.name=key
        resObj.preferences.push(prefObj)
        }
        else if(obj[key]){
        resObj[key]=obj[key]
        }
      }
      resObj.hasOtherRestrictions = obj.Client.otherRestrictions?true:false
      return resObj
    })
    console.log(simpleOrders);
        res.render('admin-dashboard', { orders:simpleOrders });
    } catch (err) {
      console.log(err);
        res.status(500).json(err);
    };     
});

router.get("/admin/feedback",withAuth,authAdmin,async (req,res)=>{
  try {
    const feedbacks = await Feedback.findAll()
    const hbsFeed = feedbacks.map(fb=>fb.get({plain:true})).reverse()
    res.render("feedback",{feedbacks:hbsFeed})
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
  
})

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
        console.log(err)
          res.status(500).json(err);
      };     
});
//TODO: PUT and DELETE route for order processing status
router.put('/:id',withAuth,authAdmin, (req, res) => {
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
  
  
router.delete('/:id',withAuth,authAdmin, (req, res) => {
    Order.destroy({
      where: {
        id:req.params.id,
      },
    })
      .then((deletedOrder) => {
        res.json(deletedOrder);
      })
      .catch((err) => res.json(err));
});

module.exports = router;