require('env2')('config.env');
const path = require('path');
const express = require('express');
const app = express();
const routes = require('./controllers/routes');
const getUserData = require('./models/queries/getUserData')
const postGithubData = require('./models/queries/postUserData')
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const Strategy = require('passport-github2').Strategy;
const authRoutes = require('../server/controllers/routes');

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
},(accessToken,refreshToken,profile,done)=>{
  console.log('profile', profile);

  getUserData.github_id(profile._json.id,(err,userObj)=>{
    if(err) {
      console.log('user EXISTS');
      return done(err)
    }
    else if(Object.keys(userObj).length === 0){
  postGithubData.users(profile._json.id, profile._json.name, profile._json.email,
    profile._json.avatar_url, 'true' , profile._json.html_url,'false',(err,userObj)=>{

    if (err){
      done(err)
      console.log('user EXISTS');
    }else{
      done(null,userObj);
        }
      });
    }
    ///if user exist will return this line
    else{
      done(null,userObj);
    }
  });
}));


app.use(
  cookieSession({
    maxAge:30 * 24 * 60 * 60* 1000,
    keys: [process.env.COOKIEKEY]
  }),
);
passport.serializeUser((user, done)=>{
  done(null, user.id);
})

passport.deserializeUser((id, done) => {
	getUserData.id(id,(err,userObj)=>{
		if (err){throw err;}
		done(null,userObj);
	});
});

app.use(express.static('public'));
app.use('/', authRoutes);
app.use('/api/v1/', routes);
app.use('/api/v1/', (req, res) => {
  res.status(404).json({ message: 'page  not found' });
});
app.use('/*', express.static(path.join(__dirname,'..','..','public','index.html')));
app.listen(process.env.PORT || 3000, () => {
  console.log('server runs on 3000');
});
app.use((err, req, res, next) => {
  res.status(500).send('Something broke!');
  next();
});
