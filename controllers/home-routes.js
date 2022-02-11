const router = require('express').Router();
const { Admin, Client, Order } = require('../models/');

router.get('/', (req,res)=>{
  res.render('test-order');

});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });


module.exports = router;