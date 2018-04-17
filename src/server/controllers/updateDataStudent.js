const updataDataQueries = require('../models/queries/updateDataQueries');

exports.post = (req, res) => {
  const student_id = req.session.passport.user.id;
  const dataToUpdate = req.body;
  dataToUpdate.id=student_id;
  updataDataQueries(dataToUpdate,error => {
    if (error) {
      res.status(500).send(error);
      console.error(error,'error');
    } else {
      res.status(200).send();
    }
  });

};
