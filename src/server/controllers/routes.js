const express = require('express');
const router = express.Router();
const passport = require('passport');
const storeanswer = require('./formdata');
const studentProfile = require('./studentProfile');
const students = require('./students.js');

router.get('/auth/github',
  passport.authenticate('github',
    { scope: ['email'] })
);

router.get('/auth/github/callback',
  passport.authenticate('github'),
  (req,res) => {
    if (req.authInfo==='user ADDED') {
      res.redirect('/form');
    } else if (req.authInfo==='user EXIST') {
      res.user=req.user;
      res.redirect(`/profile/${req.session.passport.user.id}`);

    } else {
      res.redirect('/');

    }
  }
);

router.get('/current_user',(req,res) => {
  res.send(req.session.passport.user);
});

router.get('/api/logout',(req,res) => {
  req.logout();
  res.redirect('/');
});

router.post('/storeanswer', storeanswer.post);

router.get('/getstudent/:student_id', studentProfile.get);

router.get('/students', students.get);

module.exports = router;
