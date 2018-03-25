const view = require('../models/queries/studentDataQuery.js');
exports.get = (req, res) => {
  const student_id = req.params.student_id;
  console.log('student id', student_id);
  view.studentData(student_id,(dataBaseConnectionErorr, studentData) => {
    console.log('studentData', studentData);
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
