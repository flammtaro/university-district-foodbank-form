const express = require('express');
const allRoutes = require('./controllers');
const sequelize = require('./config/connection');
const session = require('express-session')
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const exphbs = require("express-handlebars")
const nodemailer = require("nodemailer");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"))

const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static("images"));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        maxAge:2*60*60*1000
     },
     store: new SequelizeStore({
        db: sequelize,
      }),
  }))

app.use('/',allRoutes);


app.get("/images", (req, res) => {
  res.render("images");
});

// nodemailer==========================================================
// let transporter = nodemailer.createTransport(transport[ defaults])
// transporter.sendMail(data[ callback])
app.post("/", async (req, res) => {
    const {email} = req.body;
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'gaston.shanahan66@ethereal.email', //testAccount.user, // generated ethereal user
          pass: 'YtnW7qgxNvjsPsXTpj' //testAccount.pass, // generated ethereal password
        },
      });
    
      // send mail with defined transport object
    const msg = {
        from: 'gaston.shanahan66@ethereal.email', //'need a tester email', // sender address
        to: `${email}`, // list of receivers
        subject: "Reset password", // Subject line
        text: "Please select the link to reset the password", // plain text body
        html: "", // html body
    }
    const info = await transporter.sendMail(msg);
      
    
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      res.send('Email Sent!')
});
// ========================================================================

sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    });
});


