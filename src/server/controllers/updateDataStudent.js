// const updataDataQueries = require('../models/queries/updataDataQueries.js');
exports.post = (req, res) => {
  console.log(req.session.passport.user);
  console.log(req.body);
  //
  // const student_id = req.session.passport.user.id;
  //
  // const dataToUpdate = req.body.data;
  //
  // // Assume data reached as
  // student_id = 33;
  // dataToUpdate = {username : 'MahmoudMM',cumpus : 'London', cohort :"FAC-12", intests:"CFing"}
  //
  // updataDataQueries((student_id,dataToUpdate),(dataBaseConnectionErorr) => {
  //   if (dataBaseConnectionErorr) res.status(500).send(dataBaseConnectionErorr);
  //   console.error(dataBaseConnectionErorr);
  //   else {
  //     res.status(200).send();
  //   }
  // });
  res.end();
};
