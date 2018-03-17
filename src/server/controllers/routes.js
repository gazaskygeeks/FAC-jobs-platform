const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/auth/github',
      passport.authenticate('github',
      {scope: ['email']})
);

router.get('/auth/gitgub/callback',
      passport.authenticate('github'),
      (req,res)=>{
        res.redirect('/')
      }
    );

router.get('/api/current_user',(req,res)=>{
        res.send(req.user);
      });


router.get('/api/logout',(req,res)=>{
        req.logout();
        res.redirect('/');
        });


module.exports = router;
