const updataDataQueries = require('../models/queries/updateDataQueries');

exports.post = (req, res) => {
  const student_id = req.session.passport.user.id;
  const dataToUpdate = req.body;
  dataToUpdate.id=student_id;
  updataDataQueries(dataToUpdate,(error,result) => {
    if (error) {
      console.error(error,'eeeee');

      return res.status(500).send(error);
    }

    if (result[1].rowCount===0) {
      return res.status(503).send();
    }

    return res.status(200).send('Success Update');

  });

};
