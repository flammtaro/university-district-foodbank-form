const router = require('express').Router();
const nodemailer = require("nodemailer");
const { Special } = require('../../models');

//TODO: Post Route for Specials
router.post('/', async (req, res) => {
    try {
      const special = await Special.create(
       req.body);
       let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "lugpuh22uqiliwev@ethereal.email", //testAccount.user, // generated ethereal user
          pass: "EBFXXkcwGcuz999PnY", //testAccount.pass, // generated ethereal password
        },
      });
       // send mail with defined transport object
    const msg = {
      from: "	lugpuh22uqiliwev@ethereal.email", //'need a tester email', // sender address
      to: "lugpuh22uqiliwev@ethereal.email", // list of receivers //create an array for the clients emails
      subject: "A friendly reminder", // Subject line
      text: "Today we also have " + special.specialInput, // plain text body
      
    };
    transporter.sendMail(msg, function (err, info) {
      if (err) {
        console.log("Failed to send");
        return;
      }
      console.log("Sent: " + info.response);
    });
  
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  });
 //TODO: delete Route for Specials 
  router.delete('/:id', (req, res) => {
    Order.destroy({
      where: {
        id:req.params.id,
      },
    })
      .then((deletedSpecial) => {
        res.json(deletedSpecial);
      })
      .catch((err) => res.json(err));
});
module.exports = router;