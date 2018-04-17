const saveDataUser = require('../models/queries/savedata.js');

exports.post = (req, res) => {
  console.log(req.body,'bjhjgjggbj');
  saveDataUser.storedata(req.body, dataBaseConnectionErorr => {
    if (dataBaseConnectionErorr) {
      console.log(dataBaseConnectionErorr,'dataBaseConnectionErorr');

      res.status(500).send(dataBaseConnectionErorr);
    } else {
      saveDataUser.updateNewUser(req.body, erorr => {
        if (erorr) {
          console.log(erorr,'erorr update');
          res.status(500).send(erorr);
        } else {
          res.status(200).send('Done');
        }
      });
    }
  });
};
