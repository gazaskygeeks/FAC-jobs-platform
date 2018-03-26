const storedata = require('../models/queries/savedata.js');
exports.post = (req, res) => {
  storedata(req.body, dataBaseConnectionErorr => {
    if (dataBaseConnectionErorr) {
      res.status(500).send(dataBaseConnectionErorr);
    } else {
      res.redirect(`/profile/${req.body.id}`);
    }
  });
};
