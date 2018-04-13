const saveDataUser = require('../models/queries/savedata.js');

exports.post = (req, res) => {
  saveDataUser.storedata(req.body, dataBaseConnectionErorr => {
    if (dataBaseConnectionErorr) {
      console.log(dataBaseConnectionErorr,'1');

      res.status(500).send(dataBaseConnectionErorr);
    } else {
      saveDataUser.updateNewUser(req.body, erorr => {
        if (erorr,'2') {
          console.log(erorr);
          res.status(500).send(erorr);
        } else {

          res.redirect(`/profile/${req.body.name}`);
        }
      });
    }
  });
};
