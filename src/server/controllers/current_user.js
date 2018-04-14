const view = require('../models/queries/studentDataQuery.js');

exports.get = (req, res) => {
  const name=req.session.passport.user.name;
  view.newUser(name,(error, isNewUser) => {
    if (error) {
      res.status(500).send(error);
    }
    req.session.passport.user.newuser=isNewUser[0].new_user;
    res.send(req.session.passport.user);
  });
};
