const router = require('express').Router();
const { Client } = require('../../models');

//TODO: Post Route for new Clients
router.post('/', async (req, res) => {
    try {
      const newClient = await Client.create({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        email: req.body.email,
        householdSize: req.body.householdSize,
        vegetarian: req.body.vegetarian,
        vegan: req.body.vegan,
        halal: req.body.halal,
        kosher: req.body.kosher,
        glutenFree: req.body.glutenFree,
        dietaryRestrictionsOther: req.body.dietaryRestrictionsOther,
        cookingAccess: req.body.cookingAccess,
        microwaveOnly: req.body.microwaveOnly,


      });
  
      req.session.save(() => {
        req.session.userId = newClient.id;
        req.session.username = newClient.username;
        req.session.loggedIn = true;
  
        res.json(newClient);
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
//TODO: Post Route for Login
router.post('/login', async (req, res) => {
    try {
      const client = await Client.findOne({
        where: {
          username: req.body.username,
        },
      });
  
      if (!client) {
        res.status(400).json({ message: 'No client account found!' });
        return;
      }
  
      const validPassword = client.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'No client account found!' });
        return;
      }
  
      req.session.save(() => {
        req.session.userId = client.id;
        req.session.username = client.username;
        req.session.loggedIn = true;
  
        res.json({ client, message: 'You are now logged in!' });
      });
    } catch (err) {
      res.status(400).json({ message: 'No client account found!' });
    }
  });
//TODO: Post Route for Logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
module.exports = router;