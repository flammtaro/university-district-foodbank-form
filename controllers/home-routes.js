const router = require("express").Router();
const { Client, Order } = require("../models/");
const {withAuth} = require("../utils/auth")

router.get("/", (req, res) => {
  if (req.session.loggedIn && req.session.role==="admin") {
    res.redirect("/admin/viewOrder");
    return;
  }
  if(req.session.loggedIn){
    return res.redirect("/new-order")
  }
  res.render("login");
});

router.get("/new-order", withAuth, async (req, res) => {
  const UserOrders = await Order.findAll({
    where:{
      ClientId:req.session.userId
    }
  })
  if(UserOrders.length){
    res.redirect("/processing")
  }
  const count = await Order.count()
  const hours = Math.floor(count/4)
  const minutes = (count%4)*15
  res.render("new-order",{hours,minutes,count});
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/new-order");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn && req.session.role==="admin") {
    res.redirect("/admin/viewOrder");
    return;
  }
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

router.get("/processing", (req, res) => {
  if (req.session.loggedIn && req.session.role==="admin") {
    res.redirect("/admin/viewOrder");
    return;
  }
  res.render("processing");
});

module.exports = router;
