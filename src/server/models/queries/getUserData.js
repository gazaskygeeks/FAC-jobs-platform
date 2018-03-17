const connect = require('../database/dbConnection');

const getUser = {};

getUser.github_id = (github_id, callback) => {
  const sqlQuery = `
    SELECT *
      FROM users_table
      WHERE github_id = '${github_id}'
  `;

  connect.query(sqlQuery, (err, response) => {
    if (err) {
      return callback(new Error('Database error while fetching user'));
    }

    callback(null, response.rows[0]);
  });
};

getUser.id = (id, callback) => {
  const sqlQuery = `
    SELECT *
      FROM users_table
      WHERE id = '${id}'
  `;

  connect.query(sqlQuery, (err, response) => {
    if (err) {
      return callback(new Error('Database error while fetching user'));
    }

    callback(null, response.rows[0]);
  });
};
module.exports = getUser;
