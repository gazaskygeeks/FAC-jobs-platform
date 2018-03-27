require('env2')('config.env');
const path = require('path');
const express = require('express');
const app = express();
const routes = require('./controllers/routes');
const getUserData = require('./models/queries/getUserData');
const postGithubData = require('./models/queries/postUserData');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const Strategy = require('passport-github2').Strategy;
const authRoutes = require('../server/controllers/routes');
const axios = require('axios');

require('./middlewares/appMiddleware')(app, express);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new Strategy({

  clientID: process.env.GITHUB_CLIENTID,
  clientSecret: process.env.GITHUB_SECRET,
  callbackURL: 'http://localhost:3000/auth/github/callback',
  profileFields: ['email','displayName','profileUrl','picture.type(large)']
},(accessToken,refreshToken,profile,done) => {
  axios.get(`https://api.github.com/user/orgs?access_token=${accessToken}`)
    .then(response => {
      if (response.data.length === 0) {
        done('You aren\'t a member from FAC ',null,null);
      } else if (response.data[0].login==='foundersandcoders') {
        getUserData.github_id(profile._json.id,(err,userObj) => {
          if (err) {
            return done(err);
          } else if (Object.keys(userObj).length === 0) {
            if (profile._json.html_url==='https://github.com/freelancedad') {
              postGithubData.users(profile._json.id, profile.username, profile._json.email,
                profile._json.avatar_url, true , profile._json.html_url,true,profile._json.bio,(err2,userObj2) => {
                  if (err) {
                    done(err2);
                  } else {
                    done(null,userObj2,'admin ADDED');
                  }
                });
            } else {
              postGithubData.users(profile._json.id, profile.username, profile._json.email,
                profile._json.avatar_url, true , profile._json.html_url,false,profile._json.bio,(err2,userObj2) => {

                  if (err) {
                    done(err2);
                  } else {
                    done(null,userObj2,'user ADDED');
                  }
                });

            }
          } else {
            done(null,userObj,'user EXIST');

          }
        });
      } else {
        done(null,null,'You aren\'t a member from FAC ');
      }
    })
    .catch(error => {
      console.log(error);
    });

}));

app.use(
  cookieSession({
    name: 'walaa',
    maxAge: 30 * 24 * 60 * 60* 1000,
    keys: [process.env.COOKIEKEY]
  }),
);
passport.serializeUser((user, done) => {
  done(null, { id: user.id,name: user.username });
});

passport.deserializeUser((id, done) => {
  getUserData.id(id,(err,userObj) => {
    if (err) {
      throw err;
    }
    done(null,userObj);
  });
});

app.use(express.static('public'));
app.use('/api/v1/', routes);
app.use('/', authRoutes);
app.use('/api/v1/', (req, res) => {
  res.status(404).json({ message: 'page  not found' });
});
app.use('/*', express.static(path.join(__dirname,'..','..','public','index.html')));
app.listen(process.env.PORT || 3000, () => {
  console.log('server runs on 3000');
});
app.use((err, req, res, next) => {
  throw err;
  res.status(401).send(err);
  next();
});
app.use((err, req, res, next) => {
  throw err;
  res.status(500).send('Something broke!');
  next();
});
