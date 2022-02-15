const nodemailer = require("nodemailer");

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
    to: "lugpuh22uqiliwev@ethereal.email", // list of receivers
    subject: "A friendly reminder", // Subject line
    text: "", // plain text body
    html: "", // html body
  };
transporter.sendMail(msg, function (err,info) {
    if(err) {
        console.log("Failed to send");
        return;
    }
    console.log("Sent: " + info.response);
});

 

