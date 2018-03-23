const dbConnection = require('../database/dbConnection');

const storedata = (data, cb) => {
  const sql = {
    text:
        'INSERT INTO users_info (user_id,campus,cohort,interests,skills,cv,login_date,status,social_links,portfolio,projects)' +
        'values($1,$2,$3,$4,$5)',
    values: [
      `${data.user_id}`,
      `${data.compus}`,
      `${data.chort}`,
      `${data.interesting}`,
      `${data.skills}`,
      `${data.cv}`,
      `${data.login_date}`,
      `${data.opportunity}`,
      `${data.social_links}`,
      `${data.portfolio}`,
      `${data.projects}`

    ]
  };
  dbConnection.query(sql, cb);
};

module.exports = storedata;
