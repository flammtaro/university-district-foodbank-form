const router = require("express").Router();
const { Client, Order } = require("../models/");
const { withAuth } = require("../utils/auth")

router.get("/", (req, res) => {
  if (req.session.loggedIn && req.session.role === "admin") {
    res.redirect("/admin/viewOrder");
    return;
  }
  if (req.session.loggedIn) {
    return res.redirect("/new-order")
  }
  res.render("login", {
    loggedIn: req.session.loggedIn ? true : false,
    isAdmin: req.session.role==="admin"? true : false
  });
});

router.get("/new-order", withAuth, async (req, res) => {
  const UserOrders = await Order.findAll({
    where: {
      ClientId: req.session.userId
    }
  })
  if (UserOrders.length) {
    return res.redirect("/processing")
  }
  const count = await Order.count()
  const hours = Math.floor(count / 4)
  const minutes = (count % 4) * 15
  return res.render("new-order", {
    hours, 
    minutes, 
    count, 
    loggedIn: req.session.loggedIn ? true : false,
    isAdmin: req.session.role==="admin"? true : false
  });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/new-order");
    return;
  }

  res.render("login", {
    loggedIn: req.session.loggedIn ? true : false,
    isAdmin: req.session.role==="admin"? true : false
  });
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn && req.session.role === "admin") {
    res.redirect("/admin/viewOrder");
    return;
  }
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup", {
    loggedIn: req.session.loggedIn ? true : false,
    isAdmin: req.session.role==="admin"? true : false
  });
});

router.get("/processing", async (req, res) => {
  if (req.session.loggedIn && req.session.role === "admin") {
    res.redirect("/admin/viewOrder");
    return;
  }
  const myOrderRaw = await Order.findOne({
    where:{
      ClientId:req.session.userId
    },
    include:[Client]
  })
  const myOrder = myOrderRaw.get({plain:true})
  const resObj = {
    foods:[],
    preferences:[]
  };
  const toKeep = [,"orderId","inProgress","completed","notes",'bag','box',"bag_quantity","box_quantity"];
  for(key in myOrder){
    if(toKeep.includes(key)){
      resObj[key]=myOrder[key]
    }
   else if(myOrder[key]===true){
      resObj.foods.push(key)
    }
   else if(key.includes('preference')){
    const prefObj = {} 
    prefObj.value = myOrder[key]?.length ? myOrder[key] : null
    prefObj.name=key
    resObj.preferences.push(prefObj)
    }
    else if(myOrder[key]){
    resObj[key]=myOrder[key]
    }
  }
  resObj.hasOtherRestrictions = myOrder.Client.otherRestrictions?true:false
  console.log(resObj)
  res.render("processing",{
    ...resObj,
    loggedIn:req.session.loggedIn?true:false,
    isAdmin:req.session.isAdmin?true:false
  });
});

module.exports = router;
