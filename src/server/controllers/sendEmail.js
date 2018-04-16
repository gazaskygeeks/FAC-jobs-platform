const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 25,
  auth: {
    user: 'aptfac@gmail.com',
    pass: process.env.PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
});

exports.post = (req, res) => {
  console.log(req.body,'djkhbjdjjs');
  const reciever = req.body.recieveremail;
  const msg = req.body.msgContent;
  const HelperOptions = {
    from: '"Joe Tanner" <aptfac@gmail.com>',
    to: reciever,
    subject: 'FAC APT',
    text: msg
  };

  transporter.sendMail(HelperOptions, (err, info) => {
    if (err) {
      return console.log(err);
    } else {
      console.log(info,'infoooo');
      res.status(200).send();
    }
  });
};
