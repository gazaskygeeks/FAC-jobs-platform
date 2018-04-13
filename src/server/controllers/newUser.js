const view = require('../models/queries/studentDataQuery.js');
exports.get = (req, res) => {
  const name=req.session.passport.user.name;
  view.newUser(name,(dataBaseConnectionErorr, isNewUser) => {
    if (dataBaseConnectionErorr) {
      console.error(dataBaseConnectionErorr);
      res.status(500).send(dataBaseConnectionErorr);
    } else {
      console.log('is new user?',isNewUser);
      res.send(isNewUser);
    }
  });
};
