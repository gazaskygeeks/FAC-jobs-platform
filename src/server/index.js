require('env2')('config.env');
const path = require('path');
const express = require('express');
const app = express();
const routes = require('./controllers/routes');
const getUserData = require('./models/queries/getUserData')
const postGithubData = require('./models/queries/postUserData')
const bodyParser = require('body-parser');
// const env = require('env2');
// const queries = require('./database/dbConnection');
const cookieSession = require('cookie-session');
const passport = require('passport');
const Strategy = require('passport-github2').Strategy;
const authRoutes = require('../../routes/authRoutes');

require('./middlewares/appMiddleware')(app, express);

app.use(bodyParser.json());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
  next();
});


app.use(passport.initialize());
app.use(passport.session());
app.use('/', authRoutes);


passport.use(new Strategy({

  clientID: process.env.GITHUB_CLIENTID,
  clientSecret: process.env.GITHUB_SECRET,
  callbackURL: '/auth/github/callback',
  profileFields: ['email','displayName','profileUrl','picture.type(large)']
},(accessToken,refreshToken,profile,done)=>{

  getUserData.github_id(profile._json.id,(err,userObj)=>{
    if(err) {
      console.log('Database error',err);
      return done(err)
    }
    if(!userObj){
  postGithubData.users(profile._json.id, profile._json.name, profile._json.email, profile._json.picture.data.url, 'true' , profile._json.link,(err,userObj)=>{
    if (err){
      console.log(err);
      done(err)
    }else{
      done(null,userObj);
        }
      });
    } else{
      done(null,userObj);
    }
  });
}));

app.use(
  cookieSession({
    maxAge:30 * 24 * 60 * 60* 1000,
    keys: [process.env.COOKIEKEY]
  })
);

passport.serializeUser((user, done)=>{
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
	getUserData.id(id,(err,userObj)=>{
		if (err){throw err;}
		done(null,userObj);
	});
});


app.use(express.static('public'));
app.use('/api/v1/', routes);
app.use('/api/v1/', (req, res) => {
  res.status(404).json({ message: 'page  not found' });
});
app.use('/*', express.static(path.join(__dirname,'..','..','public','index.html')));
app.listen(process.env.PORT || 3000, () => {
  console.log('server runs on 3000');
});
