const viewAllStudents = require('../models/queries/studentsViewQuery.js');
exports.get = (req, res) => {
  viewAllStudents((dataBaseConnectionErorr, data) => {
    if (dataBaseConnectionErorr) res.status(500).send(dataBaseConnectionErorr);
    else {
      res.send(data);
    }
  });
};
