const dbConnection = require('../database/dbConnection');

const storedata = (data, cb) => {

  const sql = {
    text:
        'INSERT INTO users_info (user_id,campus,cohort,interests,skills,cv,status,social_links,portfolio,projects)' +
        'values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)',
    values: [
      `${data.id}`,
      `${data.questionAnswer.compus}`,
      `${data.questionAnswer.cohort}`,
      `${data.questionAnswer.interesting}`,
      `{${data.questionAnswer.skills}}`,
      'cv.pdf',
      `${data.questionAnswer.opportunity}`,
      `{${data.questionAnswer.stackoverflow},${data.questionAnswer.linkedin}}`,
      `${data.questionAnswer.portfolio}`,
      `{${data.questionAnswer.projects}}`

    ]
  };
  dbConnection.query(sql, cb);
};

module.exports = storedata;
