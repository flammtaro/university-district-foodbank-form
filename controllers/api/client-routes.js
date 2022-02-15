const router = require('express').Router();
const { Client } = require('../../models');

//TODO: Post Route for new Clients
router.post('/', async (req, res) => {
    try {
      const newClient = await Client.create(
       req.body);
  
      req.session.save(() => {
        req.session.userId = newClient.id;
        req.session.username = newClient.username;
        req.session.loggedIn = true;
        req.session.name = newClient.clientName
        res.json(newClient);
      });
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  });
//TODO: Post Route for Login
router.post('/login', async (req, res) => {
    try {
      const client = await Client.findOne({
        where: {
          email: req.body.email,
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
        req.session.email = client.email;
        req.session.role = client.role;
        req.session.loggedIn = true;
        req.session.name = client.clientName
  
        res.json({ client, message: 'You are now logged in!' });
      });
    } catch (err) {
      console.log(err)
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
      console.log(err)
      res.status(404).end();
    }
  });
module.exports = router;