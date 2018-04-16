const view = require('../models/queries/studentDataQuery.js');
exports.get = (req, res) => {
  const student_name = req.params.student_name;
  view.studentData(student_name,(dataBaseConnectionErorr, studentData) => {
    if (dataBaseConnectionErorr) res.status(500).send(dataBaseConnectionErorr);
    else {
      if (studentData.length === 0) {
        res.send('No Student Data');
      } else {
        res.send(studentData);
      }
    }
  });
};
