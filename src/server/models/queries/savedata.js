const dbConnection = require('../database/dbConnection');

const storedata = (data, cb) => {
  const projects = data.questionAnswer.projects;
  const arr = Object.keys(projects).map(key => projects[key]);
  const newArrIntersts = arr.map(obj => {
    return Object.keys(obj).map(key => {
      return obj[key];
    });
  });
  console.log(newArrIntersts,'newArrIntersts');
  const sql = {
    text:
        'INSERT INTO users_info (user_id,campus,cohort,interests,skills,cv,status,social_links,portfolio,projects)' +
        'values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)',
    values: [
      `${data.id}`,
      `${data.questionAnswer.compus}`,
      `${data.questionAnswer.cohort}`,
      `{${data.questionAnswer.interesting}}`,
      `{${data.questionAnswer.skills}}`,
      `${data.questionAnswer.cv}`,
      `${data.questionAnswer.opportunity}`,
      `{${data.questionAnswer.stackoverflow},${data.questionAnswer.linkedin}}`,
      `${data.questionAnswer.portfolio}`,
      `{${newArrIntersts}}`

    ]
  };
  dbConnection.query(sql, cb);
};

const updateNewUser = (data, cb) => {

  const sql = {
    text:
        'UPDATE users_table set new_user=False where id=$1',
    values: [
      `${data.id}`

    ]
  };
  dbConnection.query(sql, cb);
};

module.exports = { storedata,updateNewUser };
