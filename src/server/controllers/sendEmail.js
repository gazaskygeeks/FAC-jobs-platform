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
  const reciever = req.body.recieveremail;
  const msg = req.body.msgContent;
  const HelperOptions = {
    from: '"Freelance Dad" <aptfac@gmail.com>',
    to: reciever,
    subject: 'FAC APT',
    text: msg
  };

  transporter.sendMail(HelperOptions, err => {
    if (err) {
      return console.error(err);
    } else {
      return res.status(200).send();
    }
  });
};
