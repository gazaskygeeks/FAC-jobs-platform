const saveDataUser = require('../models/queries/savedata.js');
exports.post = (req, res) => {
  saveDataUser.storedata(req.body, dataBaseConnectionErorr => {
    if (dataBaseConnectionErorr) {
      console.log(dataBaseConnectionErorr,'first q');
      res.status(500).send(dataBaseConnectionErorr);
    } else {
      saveDataUser.updateNewUser(req.body, erorr => {
        if (erorr) {
          console.log(erorr,'kjkjkk');
          res.status(500).send(erorr);
        } else {

          res.redirect(`/profile/${req.body.name}`);
        }
      });
    }
  });

};
