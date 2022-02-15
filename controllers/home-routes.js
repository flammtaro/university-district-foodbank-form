const router = require("express").Router();
const { Admin, Client, Order } = require("../models/");

router.get("/", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/new-order");
    return;
  }

  res.render("login");
});

router.get("/new-order", (req, res) => {
  res.render("new-order");
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/new-order");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

router.get("/processing", (req, res) => {
  res.render("processing");
});

module.exports = router;
