// const storedata = require('../models/queries/savedata.js');
exports.post = (req, res) => {
  console.log('hiiiiiiiiiiii');
  console.log(req.body);
  // storedata(req.body, dataBaseConnectionErorr => {
  //   if (dataBaseConnectionErorr) res.status(500).send(dataBaseConnectionErorr);
  //   else {
  //     res.send('Successfully');
  //   }
  // });
};
